// Portfolio Renderer - Dynamically builds the portfolio from config.js

// Initialize portfolio on page load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderPortfolio();
    setupSmoothScrolling();
    setupScrollAnimations();
    setupThemeToggle();
});

// Initialize theme from localStorage or default to dark mode
function initTheme() {
    const savedTheme = localStorage.getItem('portfolioTheme') || 'dark';
    setTheme(savedTheme);
}

// Set theme
function setTheme(theme) {
    const html = document.documentElement;
    if (theme === 'light') {
        html.classList.add('theme-light');
        localStorage.setItem('portfolioTheme', 'light');
        document.getElementById('themeToggle').querySelector('.theme-icon').textContent = '☀️';
    } else {
        html.classList.remove('theme-light');
        localStorage.setItem('portfolioTheme', 'dark');
        document.getElementById('themeToggle').querySelector('.theme-icon').textContent = '🌙';
    }
    currentTheme = theme;
}

let currentTheme = 'dark';

// Setup theme toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

// Main function to render all portfolio sections
function renderPortfolio() {
    renderHero();
    renderSkills();
    renderExperience();
    renderProjects();
    renderContact();
    renderFooter();
}

// Render hero section
function renderHero() {
    document.getElementById('heroName').textContent = portfolioConfig.name;
    document.getElementById('heroProfession').textContent = portfolioConfig.profession;
}

// Render skills section
function renderSkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    skillsContainer.innerHTML = '';
    
    portfolioConfig.skills.forEach(skillGroup => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        
        const title = document.createElement('h3');
        title.textContent = skillGroup.category;
        skillCard.appendChild(title);
        
        const list = document.createElement('ul');
        skillGroup.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
        
        skillCard.appendChild(list);
        skillsContainer.appendChild(skillCard);
    });
}

// Render experience section
function renderExperience() {
    const experienceContainer = document.getElementById('experienceContainer');
    experienceContainer.innerHTML = '';
    
    portfolioConfig.experience.forEach(item => {
        const experienceCard = document.createElement('div');
        experienceCard.className = 'experience-card';
        
        const header = document.createElement('div');
        header.className = 'experience-header';
        
        const title = document.createElement('h3');
        title.textContent = item.role;
        header.appendChild(title);
        
        const meta = document.createElement('span');
        meta.className = 'experience-meta';
        meta.textContent = `${item.company} · ${item.period}`;
        header.appendChild(meta);
        
        experienceCard.appendChild(header);
        
        const list = document.createElement('ul');
        item.description.forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            list.appendChild(li);
        });
        experienceCard.appendChild(list);
        experienceContainer.appendChild(experienceCard);
    });
}

// Render projects section
function renderProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = '';
    
    portfolioConfig.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        // Project Header
        const header = document.createElement('div');
        header.className = 'project-header';
        
        const title = document.createElement('h3');
        title.textContent = project.title;
        header.appendChild(title);
        
        // Tech Tags
        const tags = document.createElement('span');
        tags.className = 'tech-tags';
        project.technologies.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = tech;
            tags.appendChild(tag);
        });
        header.appendChild(tags);
        projectCard.appendChild(header);
        
        // Description
        const description = document.createElement('p');
        description.textContent = project.description;
        projectCard.appendChild(description);
        
        // Link
        const link = document.createElement('a');
        link.href = project.link;
        link.className = 'project-link';
        link.textContent = 'View Project →';
        projectCard.appendChild(link);
        
        projectsContainer.appendChild(projectCard);
    });
}

// Render contact section
function renderContact() {
    const contactLinksContainer = document.getElementById('contactLinksContainer');
    contactLinksContainer.innerHTML = '';
    
    // Email button (primary)
    const emailLink = document.createElement('a');
    emailLink.href = `mailto:${portfolioConfig.contact.email}`;
    emailLink.className = 'contact-btn';
    emailLink.textContent = 'Email Me';
    contactLinksContainer.appendChild(emailLink);
    
    // GitHub button
    if (portfolioConfig.contact.github) {
        const githubLink = document.createElement('a');
        githubLink.href = portfolioConfig.contact.github;
        githubLink.className = 'contact-btn secondary';
        githubLink.target = '_blank';
        githubLink.textContent = 'GitHub';
        contactLinksContainer.appendChild(githubLink);
    }
    
    // LinkedIn button
    if (portfolioConfig.contact.linkedin) {
        const linkedinLink = document.createElement('a');
        linkedinLink.href = portfolioConfig.contact.linkedin;
        linkedinLink.className = 'contact-btn secondary';
        linkedinLink.target = '_blank';
        linkedinLink.textContent = 'LinkedIn';
        contactLinksContainer.appendChild(linkedinLink);
    }
    
    // Twitter button (optional)
    if (portfolioConfig.contact.twitter) {
        const twitterLink = document.createElement('a');
        twitterLink.href = portfolioConfig.contact.twitter;
        twitterLink.className = 'contact-btn secondary';
        twitterLink.target = '_blank';
        twitterLink.textContent = 'Twitter';
        contactLinksContainer.appendChild(twitterLink);
    }
}

// Render footer
function renderFooter() {
    const footerText = document.getElementById('footerText');
    footerText.textContent = `© ${portfolioConfig.year} ${portfolioConfig.name}. All rights reserved.`;
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add scroll animation for cards
function setupScrollAnimations() {
    // Scroll animations disabled for minimalist portfolio design
}