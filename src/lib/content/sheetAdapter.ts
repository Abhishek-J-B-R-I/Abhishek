import { fallbackPortfolioData } from './fallbackData';
import { sanitizeText, sanitizeUrl } from './sanitize';
import {
  EducationItem,
  ExperienceItem,
  PortfolioData,
  ProfileData,
  ProjectItem,
  SectionConfig,
  SkillItem,
} from './types';
import { sheetConfig } from '@/config/sheets';

interface GvizCell {
  v?: string | number | boolean | null;
  f?: string | null;
}

interface GvizRow {
  c: (GvizCell | null)[];
}

interface GvizTable {
  cols: { id: string; label: string; type: string }[];
  rows: GvizRow[];
}

interface GvizResponse {
  status: string;
  table: GvizTable;
}

/**
 * Check if a cell value represents visible / show
 */
function isVisible(val: unknown): boolean {
  if (!val) return false;
  const str = String(val).trim().toLowerCase();
  return str === 'show' || str === 'visible' || str === 'true' || str === 'yes';
}

/**
 * Fetch Google Sheet tab via direct fetch (with cache: 'no-store') or JSONP fallback
 * Supports direct GID (grid ID) or sheet tab name for 100% reliability!
 */
async function fetchGvizTab(
  spreadsheetId: string,
  sheetName: string,
  gid?: string
): Promise<GvizResponse | null> {
  const queryParam = gid ? `gid=${gid}` : `sheet=${encodeURIComponent(sheetName)}`;
  const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?${queryParam}&t=${Date.now()}`;

  // 1. Try standard fast fetch (works in Node and modern browsers with CORS)
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (res.ok) {
      const text = await res.text();
      const match = text.match(/setResponse\(([\s\S]*)\);/);
      if (match && match[1]) {
        try {
          return JSON.parse(match[1]);
        } catch {
          // If parse fails, fall through to JSONP
        }
      }
    }
  } catch {
    // If fetch threw (e.g. CORS restriction), fall through to JSONP
  }

  // 2. If running in browser and direct fetch failed, use JSONP
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    return new Promise((resolve) => {
      const callbackName = `gviz_cb_${(gid || sheetName).replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
      const script = document.createElement('script');
      let isResolved = false;

      const cleanup = () => {
        // @ts-expect-error dynamic window callback
        delete window[callbackName];
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };

      const timer = setTimeout(() => {
        if (!isResolved) {
          isResolved = true;
          cleanup();
          resolve(null);
        }
      }, 7000);

      // @ts-expect-error dynamic window callback
      window[callbackName] = (res: GvizResponse) => {
        if (!isResolved) {
          isResolved = true;
          clearTimeout(timer);
          cleanup();
          resolve(res);
        }
      };

      script.src = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=responseHandler:${callbackName}&${queryParam}&t=${Date.now()}`;
      script.onerror = () => {
        if (!isResolved) {
          isResolved = true;
          clearTimeout(timer);
          cleanup();
          resolve(null);
        }
      };

      document.head.appendChild(script);
    });
  }

  return null;
}

/**
 * Fetch rows for a Google Sheet tab directly via GViz API (supports permanent numeric GID)
 */
async function fetchTabRows(
  spreadsheetId: string,
  sheetName: string,
  gid?: string
): Promise<string[][]> {
  const gviz = await fetchGvizTab(spreadsheetId, sheetName, gid);
  return extractRows(gviz);
}

/**
 * Extract clean string array for each row from Gviz response
 */
function extractRows(data: GvizResponse | null): string[][] {
  if (!data || !data.table || !data.table.rows) return [];
  return data.table.rows.map((r) =>
    (r.c || []).map((cell) => {
      if (!cell || cell.v === null || cell.v === undefined) return '';
      return String(cell.v).trim();
    })
  );
}

/**
 * Parse Profile tab
 */
function parseProfile(rows: string[][]): ProfileData {
  const profile: ProfileData = { ...fallbackPortfolioData.profile };

  for (const row of rows) {
    if (row.length < 3) continue;
    const label = row[0].trim().toLowerCase();
    const val = sanitizeText(row[1]);
    const vis = isVisible(row[2]);

    if (!label) continue;

    if (label === 'name') {
      if (vis && val) profile.name = val;
    } else if (label.includes('headline')) {
      if (vis && val) profile.headline = val;
    } else if (label.includes('location')) {
      if (vis && val) profile.location = val;
    } else if (label.includes('email')) {
      if (vis && val) profile.email = val;
    } else if (label.includes('phone')) {
      profile.phone = vis && val ? val : undefined;
    } else if (label.includes('summary')) {
      if (vis && val) profile.summary = val;
    } else if (label.includes('github')) {
      profile.github_url = vis && val ? sanitizeUrl(val) || undefined : undefined;
    } else if (label.includes('linkedin')) {
      profile.linkedin_url = vis && val ? sanitizeUrl(val) || undefined : undefined;
    } else if (label.includes('resume')) {
      const sanitized = vis && val ? sanitizeUrl(val) : null;
      profile.resume_url = sanitized || fallbackPortfolioData.profile.resume_url || '/Abhishek_Resume.pdf';
    } else if (label.includes('availability')) {
      profile.availability_text = vis && val ? val : undefined;
    }
  }

  return profile;
}

/**
 * Parse Sections tab
 */
function parseSections(rows: string[][]): SectionConfig[] {
  const sections: SectionConfig[] = [];
  let sortIndex = 1;

  for (const row of rows) {
    if (row.length < 3) continue;
    const name = row[0].trim();
    const desc = row.length > 1 ? row[1].trim() : '';
    const vis = isVisible(row[2]);
    const sortVal = row.length > 3 && row[3] ? parseInt(row[3], 10) : sortIndex;

    // Skip table header / description rows
    if (name.toLowerCase().includes('section name') || name.toLowerCase().includes('tab to show')) {
      continue;
    }

    if (name) {
      let secId = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      if (secId.includes('hero') || secId.includes('intro')) secId = 'hero';
      else if (secId.includes('about')) secId = 'about';
      else if (secId.includes('skill')) secId = 'skills';
      else if (secId.includes('experience')) secId = 'experience';
      else if (secId.includes('project')) secId = 'projects';
      else if (secId.includes('education')) secId = 'education';
      else if (secId.includes('contact')) secId = 'contact';

      sections.push({
        section_id: secId,
        title: name,
        status: vis ? 'visible' : 'hidden',
        sort_order: Number.isNaN(sortVal) ? sortIndex : sortVal,
        notes: desc,
      });
      sortIndex++;
    }
  }

  return sections.length > 0 ? sections : fallbackPortfolioData.sections;
}

/**
 * Parse Skills tab
 */
function parseSkills(rows: string[][]): SkillItem[] {
  const skills: SkillItem[] = [];
  let idx = 1;

  for (const row of rows) {
    if (row.length < 4) continue;
    const label = row[0].trim();
    const val = sanitizeText(row[1]);
    const vis = isVisible(row[2]);
    const group = sanitizeText(row[3]) || 'Other';
    const order = row.length > 4 && row[4] ? parseFloat(row[4]) : idx;

    // Skip description header rows and skill notes
    const lowerLabel = label.toLowerCase();
    const lowerVal = val.toLowerCase();
    if (
      lowerLabel.includes('technical skills') ||
      lowerLabel.includes('one skill per row') ||
      lowerLabel.includes('note') ||
      lowerVal.includes('reviewed manually')
    ) {
      continue;
    }

    if (vis && val) {
      skills.push({
        skill_id: `skill-${idx}`,
        group,
        name: val,
        status: 'visible',
        sort_order: Number.isNaN(order) ? idx : Math.round(order),
      });
      idx++;
    }
  }

  return skills.length > 0 ? skills.sort((a, b) => a.sort_order - b.sort_order) : fallbackPortfolioData.skills;
}

/**
 * Parse Experience tab
 * Supports the grouped structure (Job Title, Company, Location, Start Date, End Date, Responsibility)
 */
function parseExperience(rows: string[][]): ExperienceItem[] {
  const groups: Record<
    string,
    {
      role: string;
      company: string;
      location: string;
      start_date: string;
      end_date: string;
      bullets: string[];
      sort_order: number;
    }
  > = {};

  let currentGroup = 'default';
  let roleCount = 1;

  for (const row of rows) {
    if (row.length < 3) continue;
    const label = row[0].trim();
    const val = sanitizeText(row[1]);
    const vis = isVisible(row[2]);
    const group = row.length > 3 && row[3].trim() ? row[3].trim() : currentGroup;
    const order = row.length > 4 && row[4] ? parseInt(row[4], 10) : roleCount;

    // Skip intro banner row
    if (label.toLowerCase().includes('professional experience') || label.toLowerCase().includes('each row is')) {
      continue;
    }

    if (!vis) continue;

    currentGroup = group;
    if (!groups[group]) {
      groups[group] = {
        role: '',
        company: '',
        location: '',
        start_date: '',
        end_date: 'Present',
        bullets: [],
        sort_order: Number.isNaN(order) ? roleCount : order,
      };
      roleCount++;
    }

    const g = groups[group];
    const lblLower = label.toLowerCase();

    if (lblLower.includes('job title') || lblLower === 'role') {
      g.role = val;
    } else if (lblLower.includes('company')) {
      g.company = val;
    } else if (lblLower.includes('location')) {
      g.location = val;
    } else if (lblLower.includes('start date')) {
      g.start_date = val;
    } else if (lblLower.includes('end date')) {
      g.end_date = val;
    } else if (lblLower.includes('responsibility') || lblLower.includes('description') || lblLower.includes('bullet')) {
      if (val) g.bullets.push(val);
    }
  }

  // Convert groups into ExperienceItem array
  const experienceItems: ExperienceItem[] = [];
  let itemIdx = 1;

  for (const [groupId, g] of Object.entries(groups)) {
    if (!g.role) continue;
    for (let b = 0; b < g.bullets.length; b++) {
      experienceItems.push({
        experience_id: `${groupId}-${b}`,
        role: g.role,
        company: g.company,
        location: g.location,
        start_date: g.start_date,
        end_date: g.end_date,
        status: 'visible',
        sort_order: itemIdx,
        description: g.bullets[b],
      });
      itemIdx++;
    }
  }

  return experienceItems.length > 0 ? experienceItems : fallbackPortfolioData.experience;
}

/**
 * Parse Projects tab
 */
function parseProjects(rows: string[][]): ProjectItem[] {
  const groups: Record<
    string,
    {
      title: string;
      technologies: string[];
      description: string;
      live_url?: string;
      repo_url?: string;
      image_url?: string;
      sort_order: number;
    }
  > = {};

  let currentGroup = 'default';
  let projectCount = 1;

  for (const row of rows) {
    if (row.length < 3) continue;
    const label = row[0].trim();
    const val = sanitizeText(row[1]);
    const vis = isVisible(row[2]);
    const group = row.length > 3 && row[3].trim() ? row[3].trim() : currentGroup;
    const order = row.length > 4 && row[4] ? parseInt(row[4], 10) : projectCount;

    // Skip intro banner
    if (label.toLowerCase().includes('projects each') || label.toLowerCase().includes('labelled fields')) {
      continue;
    }

    if (!vis && !label.toLowerCase().includes('url')) {
      continue;
    }

    currentGroup = group;
    if (!groups[group]) {
      groups[group] = {
        title: '',
        technologies: [],
        description: '',
        sort_order: Number.isNaN(order) ? projectCount : order,
      };
      projectCount++;
    }

    const p = groups[group];
    const lblLower = label.toLowerCase();

    if (lblLower.includes('project name') || lblLower === 'title') {
      p.title = val;
    } else if (lblLower.includes('technologies') || lblLower.includes('tech stack')) {
      p.technologies = val.split(/[,•|]/).map((t) => t.trim()).filter(Boolean);
    } else if (lblLower.includes('description')) {
      p.description = val;
    } else if (lblLower.includes('live demo') || lblLower.includes('live url')) {
      if (vis && val) p.live_url = sanitizeUrl(val) || undefined;
    } else if (lblLower.includes('repository') || lblLower.includes('repo url') || lblLower.includes('github')) {
      if (vis && val) p.repo_url = sanitizeUrl(val) || undefined;
    } else if (lblLower.includes('image url')) {
      if (vis && val) p.image_url = sanitizeUrl(val) || undefined;
    }
  }

  const items: ProjectItem[] = [];
  let pIdx = 1;

  for (const [groupId, p] of Object.entries(groups)) {
    if (!p.title) continue;
    items.push({
      project_id: groupId.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      title: p.title,
      subtitle: p.technologies.slice(0, 3).join(' • '),
      description: p.description,
      technologies: p.technologies,
      live_url: p.live_url,
      repo_url: p.repo_url,
      image_url: p.image_url,
      status: 'visible',
      sort_order: p.sort_order || pIdx,
    });
    pIdx++;
  }

  return items.length > 0 ? items.sort((a, b) => a.sort_order - b.sort_order) : fallbackPortfolioData.projects;
}

/**
 * Parse Education tab
 */
function parseEducation(rows: string[][]): EducationItem[] {
  const items: EducationItem[] = [];
  let degree = '';
  let institution = '';
  let year = '';

  for (const row of rows) {
    if (row.length < 3) continue;
    const label = row[0].trim().toLowerCase();
    const val = sanitizeText(row[1]);
    const vis = isVisible(row[2]);

    if (!vis) continue;

    if (label.includes('degree') || label.includes('qualification')) {
      degree = val;
    } else if (label.includes('institution') || label.includes('university') || label.includes('college')) {
      institution = val;
    } else if (label.includes('year')) {
      year = val;
    }
  }

  if (degree) {
    items.push({
      education_id: 'edu-1',
      degree,
      institution: institution || 'Gurugram University',
      year: year || '2025',
      status: 'visible',
      sort_order: 1,
    });
  }

  return items.length > 0 ? items : fallbackPortfolioData.education;
}

/**
 * Group skills by category name
 */
function groupSkills(skills: SkillItem[]): Record<string, SkillItem[]> {
  const grouped: Record<string, SkillItem[]> = {};
  for (const s of skills) {
    if (!grouped[s.group]) {
      grouped[s.group] = [];
    }
    grouped[s.group].push(s);
  }
  return grouped;
}

/**
 * Load complete portfolio dataset directly from Abhishek's Google Sheet
 */
export async function loadPortfolioData(): Promise<PortfolioData> {
  const { enabled, spreadsheetId, tabs, gids } = sheetConfig;

  if (!enabled || !spreadsheetId) {
    return {
      ...fallbackPortfolioData,
      source: 'bundled_static',
      lastFetchedAt: new Date().toISOString(),
    };
  }

  try {
    const [
      profileRows,
      sectionsRows,
      skillsRows,
      experienceRows,
      projectsRows,
      educationRows,
    ] = await Promise.all([
      fetchTabRows(spreadsheetId, tabs.profile, gids?.profile),
      fetchTabRows(spreadsheetId, tabs.sections, gids?.sections),
      fetchTabRows(spreadsheetId, tabs.skills, gids?.skills),
      fetchTabRows(spreadsheetId, tabs.experience, gids?.experience),
      fetchTabRows(spreadsheetId, tabs.projects, gids?.projects),
      fetchTabRows(spreadsheetId, tabs.education, gids?.education),
    ]);

    const profile = profileRows.length > 0 ? parseProfile(profileRows) : fallbackPortfolioData.profile;
    const sections = sectionsRows.length > 0 ? parseSections(sectionsRows) : fallbackPortfolioData.sections;
    const skills = skillsRows.length > 0 ? parseSkills(skillsRows) : fallbackPortfolioData.skills;
    const experience = experienceRows.length > 0 ? parseExperience(experienceRows) : fallbackPortfolioData.experience;
    const projects = projectsRows.length > 0 ? parseProjects(projectsRows) : fallbackPortfolioData.projects;
    const education = educationRows.length > 0 ? parseEducation(educationRows) : fallbackPortfolioData.education;

    const hasAnyLiveContent =
      profileRows.length > 0 ||
      skillsRows.length > 0 ||
      experienceRows.length > 0 ||
      projectsRows.length > 0;

    return {
      profile,
      sections,
      skills,
      skillsByGroup: groupSkills(skills),
      experience,
      projects,
      education,
      customSections: [],
      source: hasAnyLiveContent ? 'google_sheets' : 'bundled_static',
      lastFetchedAt: new Date().toISOString(),
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown sheet fetch error';
    console.warn('[SheetAdapter] Error fetching live Google Sheet data, using fallback data:', errorMsg);

    return {
      ...fallbackPortfolioData,
      source: 'bundled_static',
      lastFetchedAt: new Date().toISOString(),
      fetchError: errorMsg,
    };
  }
}
