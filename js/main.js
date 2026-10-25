/**
 * Main Application Logic
 * Ojas Jha Portfolio — FlyRank Week 4
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderProjects();
  initContactActions();
});

/**
 * Mobile Navigation & Active Section Tracking
 */
function initNavigation() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Active section indicator via Intersection Observer
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px'
    });

    sections.forEach(section => observer.observe(section));
  }
}

/**
 * Render Project Cards
 */
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  // projectsData is loaded from projects.js
  if (typeof projectsData === 'undefined' || !Array.isArray(projectsData)) {
    console.warn('projectsData not found or invalid');
    return;
  }

  const githubIconSvg = `
    <svg class="link-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>`;

  const externalLinkSvg = `
    <svg class="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>`;

  const cardsHtml = projectsData.map(project => {
    const highlightClass = project.highlight ? ' highlight-card' : '';
    const badgeHtml = project.highlight 
      ? `<span class="project-highlight-badge">Featured</span>` 
      : '';

    const tagsHtml = project.tags.map(tag => 
      `<span class="tech-tag">${escapeHtml(tag)}</span>`
    ).join('');

    // Only render live demo button if verified URL exists
    const liveDemoBtn = project.liveDemoUrl 
      ? `<a href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="link-btn primary-link" aria-label="Open live demo for ${escapeHtml(project.title)}">
          ${externalLinkSvg}
          <span>Live Demo</span>
         </a>`
      : '';

    return `
      <article class="project-card${highlightClass}" data-project-id="${project.id}">
        <div class="project-card-header">
          <div class="project-meta-top">
            <span class="project-category">${escapeHtml(project.category)}</span>
            ${badgeHtml}
          </div>
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <p class="project-tagline">${escapeHtml(project.tagline)}</p>
          <p class="project-description">${escapeHtml(project.description)}</p>
          <div class="project-attribution">
            <span>${escapeHtml(project.attribution)}</span>
          </div>
        </div>

        <div class="project-card-footer">
          <div class="project-tags" aria-label="Technologies used">
            ${tagsHtml}
          </div>

          <div class="project-links">
            <a href="${project.sourceCodeUrl}" target="_blank" rel="noopener noreferrer" class="link-btn" aria-label="View source code for ${escapeHtml(project.title)} on GitHub">
              ${githubIconSvg}
              <span>View Source Code</span>
            </a>
            ${liveDemoBtn}
          </div>
        </div>
      </article>
    `;
  }).join('');

  container.innerHTML = cardsHtml;
}

/**
 * Toast Notification helper
 */
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/**
 * Verified Contact Interactivity
 */
function initContactActions() {
  const copyBtn = document.getElementById('copy-handle-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = copyBtn.getAttribute('data-copy') || 'https://github.com/Ojas-jha';
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('✓ GitHub Profile URL copied to clipboard');
      }).catch(() => {
        showToast('Profile: github.com/Ojas-jha');
      });
    });
  }
}

/**
 * Utility: HTML escape
 */
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
