/**
 * Google Sheets Public Publishing Configuration
 *
 * Connected directly to Abhishek's live Google Sheet:
 * https://docs.google.com/spreadsheets/d/1ABhdnsxFKHu87b8VozXfzVEte9pMs2Qk/edit
 */

export interface SheetConfig {
  /** Enables live revalidation against Abhishek's Google Sheet */
  enabled: boolean;
  /** Google Sheet ID */
  spreadsheetId: string;
  /** Tab Names */
  tabs: {
    profile: string;
    sections: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    customSections: string;
  };
}

export const sheetConfig: SheetConfig = {
  enabled: true,
  spreadsheetId:
    process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID || '1ABhdnsxFKHu87b8VozXfzVEte9pMs2Qk',
  tabs: {
    profile: 'Profile',
    sections: 'Sections',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
    customSections: 'CustomSections',
  },
};
