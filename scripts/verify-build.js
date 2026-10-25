/**
 * Verification & Build Test Script
 * Validates integrity, accessibility compliance, and verified links for Ojas Jha Portfolio.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
let errorCount = 0;
let checkCount = 0;

function assert(condition, message) {
  checkCount++;
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    errorCount++;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

console.log('======================================================');
console.log('🔍 Running Build & Asset Verification Suite');
console.log('======================================================\n');

// 1. File existence checks
const requiredFiles = [
  'index.html',
  'css/style.css',
  'js/projects.js',
  'js/main.js',
  'server.js',
  'package.json',
  'vercel.json',
  '.gitignore'
];

requiredFiles.forEach(file => {
  const filePath = path.join(ROOT_DIR, file);
  assert(fs.existsSync(filePath), `Required file exists: ${file}`);
});

// 2. index.html Content & Semantic Structure
const indexPath = path.join(ROOT_DIR, 'index.html');
if (fs.existsSync(indexPath)) {
  const htmlContent = fs.readFileSync(indexPath, 'utf-8');

  assert(htmlContent.includes('<!DOCTYPE html>'), 'Valid HTML5 doctype declaration');
  assert(htmlContent.includes('<meta name="viewport"'), 'Mobile responsive viewport meta tag present');
  assert(htmlContent.includes('Ojas Jha'), 'Candidate name "Ojas Jha" present in HTML');
  assert(htmlContent.includes('BTech Computer Science Engineering'), 'Education accurately reflected');
  assert(htmlContent.includes('Cybersecurity'), 'Cybersecurity specialization accurately stated');
  assert(
    htmlContent.includes("I'm a computer science student exploring technology through hands-on projects, continuous learning, and experimentation."),
    'Exact required personal introduction quote present'
  );
  assert(htmlContent.includes('https://github.com/Ojas-jha'), 'Verified GitHub profile link present');
  assert(htmlContent.includes('role="banner"') && htmlContent.includes('role="contentinfo"'), 'Semantic ARIA landmarks present');
  assert(!htmlContent.toLowerCase().includes('lorem ipsum'), 'Zero dummy/lorem ipsum placeholder text');
}

// 3. projects.js Data Verification
const projectsPath = path.join(ROOT_DIR, 'js/projects.js');
if (fs.existsSync(projectsPath)) {
  const { projectsData } = require(projectsPath);

  assert(Array.isArray(projectsData), 'projectsData is an array');
  assert(projectsData.length === 4, `All 4 required projects present (Found: ${projectsData.length})`);

  const expectedProjects = [
    {
      id: 'cyberpunk-ai-resume-roaster',
      expectedRepo: 'https://github.com/Ojas-jha/Cyberpunk-ai-resume-roaster'
    },
    {
      id: 'habit-tracker-backend-v1',
      expectedRepo: 'https://github.com/pppaaarrrttthhhppp/habit-tracker-backend-v1'
    },
    {
      id: 'greenlens',
      expectedRepo: 'https://github.com/kiranbillur7760-dot/GreenLens'
    },
    {
      id: 'tcs',
      expectedRepo: 'https://github.com/shivansh0shuklo/tcs'
    }
  ];

  expectedProjects.forEach(expected => {
    const proj = projectsData.find(p => p.id === expected.id);
    assert(!!proj, `Project exists in data: ${expected.id}`);
    if (proj) {
      assert(proj.sourceCodeUrl === expected.expectedRepo, `Verified repo URL correct for ${expected.id}: ${proj.sourceCodeUrl}`);
      assert(typeof proj.title === 'string' && proj.title.length > 0, `Valid title for ${expected.id}`);
      assert(typeof proj.description === 'string' && proj.description.length > 10, `Valid description for ${expected.id}`);
      assert(Array.isArray(proj.tags) && proj.tags.length > 0, `Valid technology tags for ${expected.id}`);
    }
  });
}

// Summary
console.log('\n======================================================');
console.log(`Verification Complete: ${checkCount} checks performed.`);
if (errorCount > 0) {
  console.error(`🚨 ${errorCount} check(s) failed. Build cannot proceed.`);
  process.exit(1);
} else {
  console.log(`🎉 ALL CHECKS PASSED! Portfolio build is 100% verified and ready for Vercel deployment.`);
  console.log('======================================================\n');
  process.exit(0);
}
