/**
 * Projects Data Configuration
 * 
 * Strict Guideline Compliance:
 * - Only verified links, tags, and descriptions are used.
 * - No unverified claims of independent creation.
 * - Live demo links are included only when a real verified deployment is provided.
 * - Clean structure allows instant editing and additions.
 */

const projectsData = [
  {
    id: "cyberpunk-ai-resume-roaster",
    title: "Cyberpunk AI Resume Roaster",
    tagline: "AI-Powered Critique Engine",
    description: "An AI-powered resume feedback project with a cyberpunk-inspired interface, delivering contextual critiques, readability scores, and targeted improvement suggestions.",
    attribution: "Personal Project • Ojas Jha",
    tags: ["AI & LLM Tools", "Cyberpunk UI", "Vercel Deployed", "Web App"],
    sourceCodeUrl: "https://github.com/Ojas-jha/Cyberpunk-ai-resume-roaster",
    // Update liveDemoUrl once your custom Vercel deployment URL is verified
    liveDemoUrl: null,
    highlight: true,
    category: "AI & Cybersecurity"
  },
  {
    id: "habit-tracker-backend-v1",
    title: "Habit Tracker Backend V1",
    tagline: "RESTful Habits Management Service",
    description: "A structured backend service for routine consistency and habit tracking, implementing core API endpoints, data models, and persistence for habit logs.",
    attribution: "Repository: pppaaarrrttthhhppp/habit-tracker-backend-v1",
    tags: ["Backend Architecture", "REST API", "Data Modeling"],
    sourceCodeUrl: "https://github.com/pppaaarrrttthhhppp/habit-tracker-backend-v1",
    liveDemoUrl: null,
    highlight: false,
    category: "Software Development"
  },
  {
    id: "greenlens",
    title: "GreenLens",
    tagline: "Environmental Data & Visual Intelligence",
    description: "An environmental intelligence and monitoring project exploring sustainable technology, visual analytics, and eco-aware data processing.",
    attribution: "Repository: kiranbillur7760-dot/GreenLens",
    tags: ["Environmental Tech", "Data Analytics", "Open Source"],
    sourceCodeUrl: "https://github.com/kiranbillur7760-dot/GreenLens",
    liveDemoUrl: null,
    highlight: false,
    category: "Software Development"
  },
  {
    id: "tcs",
    title: "TCS",
    tagline: "Computational Algorithms & Application Modules",
    description: "A core software engineering repository containing modular application components, algorithmic solutions, and structured computer science implementations.",
    attribution: "Repository: shivansh0shuklo/tcs",
    tags: ["Software Engineering", "Algorithms", "Core Computing"],
    sourceCodeUrl: "https://github.com/shivansh0shuklo/tcs",
    liveDemoUrl: null,
    highlight: false,
    category: "Data Structures & Algorithms"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { projectsData };
}
