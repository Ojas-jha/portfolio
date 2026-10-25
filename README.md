# Ojas Jha — Personal Portfolio Website
**FlyRank AI Fluency • Week 4 Assignment: “Empty but Live”**

A modern, minimal, cyberpunk-inspired personal portfolio website built with clean semantics, dark charcoal aesthetics, subtle neon cyan/purple accents, and zero external build bloat. Engineered for instant deployment on Vercel's free tier.

---

## ⚡ Quick Start (Local Run)

You can run the portfolio locally right out of the box using Node.js:

```bash
# Start the local development server (port 3000)
npm run dev

# Or directly with node:
node server.js
```

Open your browser to:
👉 **[http://localhost:3000](http://localhost:3000)**

To run the automated verification suite:
```bash
npm test
```

---

## 📂 Project Architecture

```
task-api-v2-main/
├── index.html              # Main HTML5 entry point (semantic, accessible, SEO meta)
├── css/
│   └── style.css           # Pure modern CSS, cyberpunk palette, responsive media queries
├── js/
│   ├── projects.js         # Verified projects configuration & easy-edit data store
│   └── main.js             # Mobile nav, active link tracking, interactive copy actions
├── scripts/
│   └── verify-build.js     # Build verification and automated integrity testing suite
├── server.js               # Zero-dependency local development server (Node.js built-in http)
├── vercel.json             # Vercel deployment & security caching configuration
├── package.json            # Scripts: dev, start, build, test
├── .gitignore              # Ignores environment files and unrelated directories
└── README.md               # Complete documentation and deployment guide
```

---

## 🚀 How to Publish on GitHub & Vercel (Step-by-Step)

### Step 1: Initialize Git and Commit Your Portfolio
In your terminal (in this directory):

```powershell
# 1. Initialize a git repository
git init

# 2. Stage all portfolio files
git add .

# 3. Create your initial commit
git commit -m "feat: initial commit of Ojas Jha personal portfolio for FlyRank Week 4"
```

### Step 2: Push to GitHub
1. Go to [GitHub.com](https://github.com) and sign into your account (`Ojas-jha`).
2. Click **New Repository** (top right `+` icon).
3. Name it: `portfolio` or `ojas-portfolio`.
4. Keep it **Public**. Do **not** initialize with a README (you already have this one).
5. Link your local project to GitHub and push:

```powershell
# Set default branch to main
git branch -M main

# Link remote (replace with your repo URL if different)
git remote add origin https://github.com/Ojas-jha/portfolio.git

# Push code to GitHub
git push -u origin main
```

### Step 3: Deploy to Vercel (100% Free)
1. Go to [Vercel.com](https://vercel.com) and log in with your GitHub account.
2. On your Vercel Dashboard, click **“Add New…”** → **“Project”**.
3. Under **Import Git Repository**, locate your `portfolio` repository and click **Import**.
4. In the Project Configuration:
   - **Framework Preset**: Select `Other` (or leave default, as it's static HTML/CSS/JS).
   - **Root Directory**: `./` (default).
   - **Build Command**: Leave blank (or `npm run build`).
   - **Output Directory**: Leave blank (it deploys `index.html` directly).
5. Click **Deploy**.
6. Within 15–30 seconds, Vercel will assign you a live URL, for example:
   `https://ojas-portfolio.vercel.app` or `https://portfolio-ojas-jha.vercel.app`.

---

## 📱 Mobile Testing & Verification Checklist

Once your Vercel URL is live:

- [ ] **Desktop Browser Check**: Open the Vercel URL on your PC. Verify all 4 project cards and GitHub links open properly.
- [ ] **Mobile Phone Test**:
  1. Open Chrome or Safari on your phone.
  2. Visit your live Vercel URL.
  3. Verify the mobile navigation hamburger toggles smoothly.
  4. Test tapping "Copy GitHub Link" to ensure toast feedback appears.
  5. Check that cards stack cleanly and typography is sharp.
- [ ] **Assignment Screenshot**:
  - Take a clear screenshot of the deployed live portfolio showing your browser address bar with the `.vercel.app` domain.
  - Optionally take a mobile screenshot of the site on your phone.

---

## 🧠 Claude Project Preparation (For Next Week)

FlyRank Week 4 requirement: Prepare your Claude Project with your foundation materials for Week 5 build activities.

Upload the following three files/documents into your Claude Project knowledge base:
1. **Identity Kit**:
   - Full name, education (BTech CSE, Cybersecurity specialization).
   - Personal philosophy and exact introduction quote.
   - Core interests: Software Development, DSA, Cybersecurity, AI Tools.
2. **Case Studies & Project Profiles**:
   - Cyberpunk AI Resume Roaster (context, features, architecture, UI philosophy).
   - Habit Tracker Backend V1 (endpoints, data models, persistence).
   - GreenLens (environmental telemetry, data pipelines, visual intelligence).
   - TCS (algorithms, computational logic, code structure).
3. **Content Map**:
   - Sitemap (`#hero`, `#projects`, `#about`, `#contact`).
   - Verified social links (`https://github.com/Ojas-jha`).
   - Planned roadmap for Week 5 (interactive case study modals, blog/notes section, live demo URLs).

---

## 🛠️ Customizing Projects

To add live demo links or update project descriptions:
Open `js/projects.js` and edit the project objects:
```javascript
{
  id: "cyberpunk-ai-resume-roaster",
  liveDemoUrl: "https://your-resume-roaster.vercel.app", // paste your live URL here
  ...
}
```
The website will automatically display the **Live Demo** button as soon as a valid URL is added!
