'use client';

import { jsPDF } from 'jspdf';
import { PortfolioData } from '@/lib/content/types';

/**
 * Builds a vector-sharp, professional, ATS-optimized PDF resume
 * directly from the current live Google Sheet / PortfolioData.
 */
export function buildResumePdfDocument(data: PortfolioData): jsPDF {
  const doc = new jsPDF({ format: 'a4', unit: 'pt' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 36;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  function checkPageBreak(neededHeight: number): boolean {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
      return true;
    }
    return false;
  }

  function addSectionHeader(title: string) {
    checkPageBreak(30);
    y += 8;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(30, 41, 59); // Slate 800
    doc.text(title.toUpperCase(), margin, y);
    y += 3;
    doc.setDrawColor(203, 213, 225); // Slate 300
    doc.setLineWidth(0.75);
    doc.line(margin, y, margin + contentWidth, y);
    y += 10;
  }

  // --- 1. HEADER (NAME & CONTACT) ---
  const profile = data.profile || {};
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  const rawName = (profile.name || 'ABHISHEK').trim();
  const displayName = rawName.toUpperCase();
  doc.text(displayName, margin, y + 15);
  y += 20;

  // Title / Headline
  if (profile.headline) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(67, 56, 202); // Indigo 700
    doc.text(profile.headline, margin, y + 10);
    y += 15;
  }

  // Contact Info Line
  const contactParts: string[] = [];
  if (profile.email) contactParts.push(profile.email);
  if (profile.phone) contactParts.push(profile.phone);
  if (profile.location) contactParts.push(profile.location);
  if (profile.linkedin_url) contactParts.push(profile.linkedin_url.replace(/^https?:\/\/(www\.)?/, ''));
  if (profile.github_url) contactParts.push(profile.github_url.replace(/^https?:\/\/(www\.)?/, ''));

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105); // Slate 600
  const contactLine = contactParts.join('   •   ');
  doc.text(contactLine, margin, y + 8);
  y += 16;

  // Divider under header
  doc.setDrawColor(199, 210, 254); // Indigo 200
  doc.setLineWidth(1.2);
  doc.line(margin, y, margin + contentWidth, y);
  y += 6;

  // --- 2. PROFESSIONAL SUMMARY ---
  if (profile.summary) {
    addSectionHeader('Professional Summary');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);
    const summaryLines = doc.splitTextToSize(profile.summary, contentWidth);
    for (const line of summaryLines) {
      checkPageBreak(12);
      doc.text(line, margin, y);
      y += 11.5;
    }
  }

  // --- 3. TECHNICAL SKILLS ---
  const skillsByGroup = data.skillsByGroup || {};
  const skillGroupKeys = Object.keys(skillsByGroup);
  if (skillGroupKeys.length > 0) {
    addSectionHeader('Technical Skills');
    for (const groupName of skillGroupKeys) {
      const skills = (skillsByGroup[groupName] || [])
        .filter((s) => s.status !== 'hidden' && !s.name.includes('All AI-assisted code'))
        .map((s) => s.name);
      if (skills.length === 0) continue;

      checkPageBreak(13);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);
      const prefix = `${groupName}: `;
      doc.text(prefix, margin, y);
      const prefixWidth = doc.getTextWidth(prefix);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 65, 85);
      const skillsText = skills.join(', ');
      const wrappedSkills = doc.splitTextToSize(skillsText, contentWidth - prefixWidth);

      if (wrappedSkills.length > 0) {
        doc.text(wrappedSkills[0], margin + prefixWidth, y);
        y += 11.5;
        for (let i = 1; i < wrappedSkills.length; i++) {
          checkPageBreak(11.5);
          doc.text(wrappedSkills[i], margin + 15, y);
          y += 11.5;
        }
      } else {
        y += 11.5;
      }
    }
  }

  // --- 4. PROFESSIONAL EXPERIENCE ---
  const experience = data.experience || [];
  if (experience.length > 0) {
    addSectionHeader('Professional Experience');

    // Group experience by role + company + start_date
    interface GroupedExp {
      role: string;
      company: string;
      location: string;
      start_date: string;
      end_date: string;
      bullets: string[];
    }

    const roleGroups: GroupedExp[] = [];
    for (const item of experience) {
      if (item.status === 'hidden') continue;
      let group = roleGroups.find(
        (g) => g.role === item.role && g.company === item.company && g.start_date === item.start_date
      );
      if (!group) {
        group = {
          role: item.role,
          company: item.company,
          location: item.location,
          start_date: item.start_date,
          end_date: item.end_date,
          bullets: [],
        };
        roleGroups.push(group);
      }
      if (item.description) {
        group.bullets.push(item.description);
      }
    }

    for (const rg of roleGroups) {
      checkPageBreak(38);
      // Role & Dates
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text(rg.role, margin, y);

      const dateStr = `${rg.start_date} – ${rg.end_date}`;
      const dateWidth = doc.getTextWidth(dateStr);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(71, 85, 105);
      doc.text(dateStr, margin + contentWidth - dateWidth, y);
      y += 12;

      // Company & Location
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(67, 56, 202); // Indigo 700
      doc.text(rg.company, margin, y);
      const compWidth = doc.getTextWidth(rg.company);

      if (rg.location) {
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 116, 139);
        doc.text(`  •  ${rg.location}`, margin + compWidth, y);
      }
      y += 11;

      // Bullets
      for (const bullet of rg.bullets) {
        checkPageBreak(16);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(30, 41, 59);

        doc.text('•', margin + 4, y);
        const wrappedBullet = doc.splitTextToSize(bullet, contentWidth - 16);
        for (let i = 0; i < wrappedBullet.length; i++) {
          checkPageBreak(11);
          doc.text(wrappedBullet[i], margin + 14, y);
          y += 11;
        }
        y += 1;
      }
      y += 4;
    }
  }

  // --- 5. FEATURED PROJECTS ---
  const projects = (data.projects || []).filter((p) => p.status !== 'hidden');
  if (projects.length > 0) {
    addSectionHeader('Featured Projects');
    for (const proj of projects) {
      checkPageBreak(32);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text(proj.title, margin, y);
      const titleW = doc.getTextWidth(proj.title);

      if (proj.technologies && proj.technologies.length > 0) {
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8.5);
        doc.setTextColor(79, 70, 229);
        const techStr = `  |  ${proj.technologies.join(', ')}`;
        doc.text(techStr, margin + titleW, y);
      }
      y += 11;

      if (proj.description) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(30, 41, 59);
        const descLines = doc.splitTextToSize(proj.description, contentWidth - 10);
        for (const dl of descLines) {
          checkPageBreak(11);
          doc.text(dl, margin + 8, y);
          y += 11;
        }
      }
      y += 3;
    }
  }

  // --- 6. EDUCATION ---
  const education = (data.education || []).filter((e) => e.status !== 'hidden');
  if (education.length > 0) {
    addSectionHeader('Education');
    for (const edu of education) {
      checkPageBreak(25);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text(edu.degree, margin, y);

      if (edu.year) {
        const yrStr = edu.year;
        const yrW = doc.getTextWidth(yrStr);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(71, 85, 105);
        doc.text(yrStr, margin + contentWidth - yrW, y);
      }
      y += 12;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(79, 70, 229);
      doc.text(edu.institution, margin, y);
      y += 14;
    }
  }

  // Footer on each page: Name • Resume • Page X of Y
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184); // Slate 400
    const footerText = `${displayName}  •  Resume  •  Page ${i} of ${totalPages}`;
    const fw = doc.getTextWidth(footerText);
    doc.text(footerText, (pageWidth - fw) / 2, pageHeight - 16);
  }

  return doc;
}

/**
 * Returns a binary Blob of the generated resume PDF
 */
export function generateResumeBlob(data: PortfolioData): Blob {
  const doc = buildResumePdfDocument(data);
  return doc.output('blob');
}
