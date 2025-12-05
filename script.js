// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links with navbar offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        const navbar = document.querySelector('.navbar');
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
        const offset = Math.max(0, targetTop - navHeight - 10);
        window.scrollTo({ top: offset, behavior: 'smooth' });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Add slide animations to about content
    const aboutText = document.querySelector('.about-text');
    const aboutImage = document.querySelector('.about-image');
    if (aboutText) {
        aboutText.classList.add('slide-in-left');
        observer.observe(aboutText);
    }
    if (aboutImage) {
        aboutImage.classList.add('slide-in-right');
        observer.observe(aboutImage);
    }
    
    // Add fade-in animation to skillset section
    const skillsetSection = document.querySelector('.skillset');
    if (skillsetSection) {
        skillsetSection.classList.add('fade-in');
        observer.observe(skillsetSection);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});


// Navbar stays visible at all times

// Portfolio fullscreen scroll functionality
const portfolioImages = document.querySelectorAll('.portfolio-img-full');

// Intersection Observer for portfolio images
const portfolioObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
});

// Observe all portfolio images
portfolioImages.forEach(img => {
    portfolioObserver.observe(img);
});

// Add smooth transitions
const style = document.createElement('style');
style.textContent = `
    
    .navbar {
        transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
    }
    
    .portfolio-img {
        transition: transform 0.3s ease;
    }
    
    .nav-link {
        transition: font-weight 0.35s ease;
    }
    
    .hamburger .bar {
        transition: 0.3s;
    }
`;
document.head.appendChild(style);