export interface ProfileData {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone?: string;
  summary: string;
  availability_text?: string;
  resume_url?: string;
  github_url?: string;
  linkedin_url?: string;
}

export interface SectionConfig {
  section_id: string;
  title: string;
  status: 'visible' | 'hidden';
  sort_order: number;
  layout?: string;
  notes?: string;
}

export interface SkillItem {
  skill_id: string;
  group: string;
  name: string;
  status: 'visible' | 'hidden';
  sort_order: number;
}

export interface ExperienceItem {
  experience_id: string;
  role: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string;
  status: 'visible' | 'hidden';
  sort_order: number;
  description: string;
}

export interface ProjectItem {
  project_id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image_url?: string;
  live_url?: string;
  repo_url?: string;
  status: 'visible' | 'hidden';
  sort_order: number;
}

export interface EducationItem {
  education_id: string;
  degree: string;
  institution: string;
  year: string;
  details?: string;
  status: 'visible' | 'hidden';
  sort_order: number;
}

export interface CustomSectionItem {
  item_id: string;
  section_id: string;
  title: string;
  content: string;
  status: 'visible' | 'hidden';
  sort_order: number;
}

export interface PortfolioData {
  profile: ProfileData;
  sections: SectionConfig[];
  skills: SkillItem[];
  skillsByGroup: Record<string, SkillItem[]>;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  customSections: CustomSectionItem[];
  source: 'bundled_static' | 'google_sheets';
  lastFetchedAt?: string;
  fetchError?: string;
}

export interface SheetSourceConfig {
  enabled: boolean;
  spreadsheetId?: string;
  csvUrls?: {
    profile?: string;
    sections?: string;
    skills?: string;
    experience?: string;
    projects?: string;
    education?: string;
    customSections?: string;
  };
}
