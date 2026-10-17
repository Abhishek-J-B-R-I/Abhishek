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

## 📊 Live Google Sheet CMS Connection

Your portfolio is **pre-connected directly** to your live Google Sheet:
`https://docs.google.com/spreadsheets/d/1ABhdnsxFKHu87b8VozXfzVEte9pMs2Qk/edit`

### How It Works
- **CORS-Proof Real-Time Updates**: When visitors open your website (or refresh the page), the browser asynchronously reads your Google Sheet via the Google Visualization API. Any edits you make in Google Sheets reflect automatically on the live site!
- **Show / Hide Control**:
  - Set the **Visibility** column to **`Show`** (or `visible`) to display an item on your site.
  - Set it to **`Hide`** (or leave it blank) to hide it.
- **Offline / Build-Time Safety**: The site builds with your current sheet data pre-rendered into static HTML (`out/index.html`). If Google's servers are ever slow or offline, your portfolio still renders instantly with zero layout shifts.

### Pre-Configured Tabs
- **Profile**: Name, Professional Headline, Location, Email Address, Phone Number, Professional Summary, GitHub URL, LinkedIn URL, and Resume URL.
- **Sections**: Show or hide entire sections (`Hero`, `About`, `Skills`, `Experience`, `Projects`, `Education`, `Contact`).
- **Skills**: Individual skill rows categorized by *Languages*, *Core Computer Science*, *Backend & Networking*, *Databases*, *Application Development*, *Tools & Practices*, and *AI-assisted Development*.
- **Experience**: Structured roles (*VCQRU — Associate Software Engineer*, *VCQRU — Flutter Intern*) with individual responsibility bullets.
- **Projects**: Project cards (*Loyalty Rewards App*, *Real-Time Chat App*, *Weather Forecast App*) with live/repo URL controls.
- **Education**: Degree, Institution, and Graduation Year.

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
