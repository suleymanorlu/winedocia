// ===== Smooth Scroll Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Parallax Effect =====
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax-break');
    if (parallax) {
        const scrollPosition = window.pageYOffset;
        parallax.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// ===== Fade-in Animation on Scroll =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .vision-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Console Welcome Message =====
console.log('%cWinedocia', 'font-size: 24px; color: #cda274; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);');
console.log('%cProfesyonel Şarap ve Gastronomi Danışmanlığı', 'font-size: 14px; color: #d3d3d3;');
console.log('%c© 2026 Süleyman Örlü | F&B Manager & Sommelier', 'font-size: 12px; color: #888;');
