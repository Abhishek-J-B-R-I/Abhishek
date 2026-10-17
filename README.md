# Abhishek — Developer Portfolio

A responsive, high-performance developer portfolio built with **Next.js (Static Export)**, **TypeScript**, and **Tailwind CSS**, designed according to the personal portfolio System Design specification.

Features:
- **Light Mode as Default** with a persistent **Dark Mode** toggle (persisted in `localStorage`).
- **Zero-CLS, Static-First**: Core identity, headline, experience, projects, skills, and SEO tags are pre-rendered into static HTML (`out/index.html`) at build time.
- **Fail-Closed Google Sheets CMS Adapter**: Synchronizes seamlessly with a public, read-only published Google Sheet (CSV format). If the sheet is inaccessible, CORS-blocked, or offline, it gracefully uses the bundled static dataset without any error or layout flash.
- **Accessible & Responsive**: WCAG AA color contrast, keyboard-accessible navigation, focus rings, responsive mobile menu drawer, and `prefers-reduced-motion` compliance.
- **Zero Paid Dependencies**: 100% free hosting on GitHub Pages with GitHub Actions CI/CD.

---

## 🚀 Quick Start (Local Setup)

### Prerequisites
- Node.js 18+ (tested with Node 20 & 26)
- npm 9+

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Type Checking & Production Build
```bash
# Verify TypeScript types
npm run typecheck

# Build static export (generates the /out folder)
npm run build
```

---

## 🎨 Design System Tokens

The application follows the UI/UX design tokens specified in the System Design brief:

| Token | Light Mode (Default) | Dark Mode |
| :--- | :--- | :--- |
| **Page Background** | Warm off-white (`#F8F9FC`) | Deep ink (`#0D111B`) |
| **Surface / Cards** | White (`#FFFFFF`) | Raised charcoal (`#151C2B`) |
| **Primary Text** | Ink (`#172033`) | Near-white (`#F3F5FA`) |
| **Muted Text** | Slate (`#596579`) | Soft slate (`#A8B2C4`) |
| **Accent Color** | Blue (`#315FEA`) w/ subtle Teal (`#0EA5E9`) | Bright blue (`#7895FF`) w/ subtle Teal (`#38BDF8`) |
| **Borders** | Cool light gray (`#DCE2EC`) | Subtle dark border (`#2B3446`) |

---

## 📊 Google Sheets CMS Publishing Workflow

You can update your portfolio content anytime without editing code:

### Step 1: Import the Template into Google Sheets
1. Open Google Sheets ([sheets.google.com](https://sheets.google.com)).
2. Create a new spreadsheet and import `abhishek_portfolio_google_sheets_template.xlsx`.
3. The workbook contains the tabs: `Profile`, `Sections`, `Skills`, `Experience`, `Projects`, `Education`, and `CustomSections`.

### Step 2: Publish to Web
1. In your Google Sheet, click **File** > **Share** > **Publish to web**.
2. Under "Link", select **Entire Document** or each tab individually, and select format: **Comma-separated values (.csv)**.
3. Click **Publish**.

### Step 3: Configure the Portfolio
Open `src/config/sheets.ts` (or set environment variables in your deployment / `.env.local`):

```ts
export const sheetConfig: SheetConfig = {
  enabled: true, // Set to true to enable live revalidation
  tabUrls: {
    profile: "https://docs.google.com/spreadsheets/d/e/<SPREADSHEET_ID>/pub?gid=0&single=true&output=csv",
    skills: "https://docs.google.com/spreadsheets/d/e/<SPREADSHEET_ID>/pub?gid=<GID>&single=true&output=csv",
    experience: "https://docs.google.com/spreadsheets/d/e/<SPREADSHEET_ID>/pub?gid=<GID>&single=true&output=csv",
    projects: "https://docs.google.com/spreadsheets/d/e/<SPREADSHEET_ID>/pub?gid=<GID>&single=true&output=csv",
    education: "https://docs.google.com/spreadsheets/d/e/<SPREADSHEET_ID>/pub?gid=<GID>&single=true&output=csv",
  },
};
```

### Visibility & Data Integrity Rules
- **Fail-Closed Rule**: A row is rendered **only** when its `status` (or `visible`) cell is set to `visible` or `VISIBLE`. Rows set to `hidden`, left blank, or containing any other string are excluded.
- **Ordering**: The `sort_order` (or `order`) integer defines display sequence (lowest integer appears first).
- **Security**: Never place sensitive passwords, API keys, or private phone numbers in the public sheet. All external links are validated to allow only safe `http://`, `https://`, and `mailto:` protocols.

---

## 🌐 GitHub Pages Deployment

The repository includes a ready-to-run GitHub Actions CI/CD workflow at `.github/workflows/deploy.yml`.

### Deployment Steps
1. Create a new GitHub repository (e.g. `portfolio` or `<your-username>.github.io`).
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of Abhishek portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. Every time you push changes to `main`, GitHub Actions will:
   - Checkout code and setup Node.js
   - Run type checks (`npm run typecheck`)
   - Run static export build (`npm run build`)
   - Deploy the generated `out/` bundle to GitHub Pages!

---

## 🔍 Troubleshooting & FAQ

#### Q: What happens if Google Sheets is unreachable or offline?
The application is static-first. It comes bundled with `fallbackPortfolioData` containing Abhishek's complete verified profile, experience, projects, skills, and education. If the Google Sheet fetch fails for any reason (CORS, network drop, invalid URL), the app displays the static data without layout shifting or blank pages.

#### Q: How do I test the site locally?
Run `npm run build` followed by a local web server to inspect the static output:
```bash
npx serve out
```

#### Q: How do I update my resume or projects directly in code?
Edit `src/lib/content/fallbackData.ts` to update the bundled dataset, or edit your published Google Sheet to update dynamically without redeploying.
