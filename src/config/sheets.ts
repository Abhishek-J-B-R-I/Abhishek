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
  /** Direct Tab Grid IDs (GID) */
  gids: {
    startHere: string;
    profile: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    sections: string;
    additional: string;
  };
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
  gids: {
    startHere: '1262122655',
    profile: '2041220937',
    skills: '1798534667',
    experience: '872720117',
    projects: '1276569180',
    education: '934021729',
    sections: '2141872530',
    additional: '1087288302',
  },
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

