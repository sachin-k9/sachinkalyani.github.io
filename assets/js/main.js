// ===== SCROLL PROGRESS BAR =====
function updateProgressBar() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
}

window.addEventListener('scroll', updateProgressBar);
window.addEventListener('resize', updateProgressBar);
window.addEventListener('load', updateProgressBar);

// ===== TAB SWITCHING =====
function switchTab(button) {
    // Get all tab buttons and panels in this tabs container
    const tabsContainer = button.closest('.tabs-card');
    if (!tabsContainer) return;
    
    const allButtons = tabsContainer.querySelectorAll('.tab-btn');
    const allPanels = tabsContainer.querySelectorAll('.tab-panel');
    
    // Remove active from all
    allButtons.forEach(btn => btn.classList.remove('active'));
    allPanels.forEach(panel => panel.classList.remove('active'));
    
    // Add active to clicked button
    button.classList.add('active');
    
    // Show corresponding panel
    const targetTab = button.getAttribute('data-tab');
    const targetPanel = tabsContainer.querySelector('#tab-' + targetTab);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }
    
    // Save active tab to localStorage
    localStorage.setItem('activeTab', targetTab);
}

// Restore active tab on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
        const tabsContainer = document.querySelector('.tabs-card');
        if (tabsContainer) {
            const targetButton = tabsContainer.querySelector('[data-tab="' + savedTab + '"]');
            if (targetButton) {
                switchTab(targetButton);
            }
        }
    }
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== NAVBAR ACTIVE STATE ON SCROLL =====
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ===== LAZY LOAD IMAGES =====
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// ===== CARD ENTRANCE ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease ' + (index * 0.05) + 's, transform 0.5s ease ' + (index * 0.05) + 's';
        cardObserver.observe(card);
    });
});