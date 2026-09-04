// ===== Gallery Slider =====
let currentSlide = 0;
const slides = document.querySelectorAll('.gallery-slide');
const totalSlides = slides.length;

function updateGallery() {
    const track = document.getElementById('galleryTrack');
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateGallery();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateGallery();
}

// ===== Initialize Gallery =====
document.addEventListener('DOMContentLoaded', function() {
    // Create dots
    const dotsContainer = document.getElementById('galleryDots');
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            currentSlide = i;
            updateGallery();
        });
        dotsContainer.appendChild(dot);
    }

    // Gallery buttons
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);

    // Auto-play gallery (change every 5 seconds)
    setInterval(nextSlide, 5000);

    // Form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit();
        });
    }

    // Add smooth scroll for navigation links
    addSmoothScroll();

    // Add animation on scroll
    observeElements();

    // Set active nav link
    setActiveNavLink();
});

// ===== Form Submission Handler =====
function handleFormSubmit() {
    const form = document.getElementById('contactForm');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !message) {
        showAlert('Lütfen zorunlu alanları doldurunuz.', 'error');
        return;
    }

    // Email validation
    if (!isValidEmail(email)) {
        showAlert('Lütfen geçerli bir e-mail adresi girin.', 'error');
        return;
    }

    // Show success message
    showAlert('Mesajınız başarıyla gönderilmiştir! En kısa sürede sizinle iletişime geçeceğiz.', 'success');
    
    // Reset form
    form.reset();

    // Log the form data (for development)
    console.log({
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    });
}

// ===== Email Validation =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== Alert Function =====
function showAlert(message, type) {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    // Add styles dynamically
    const styles = {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '5px',
        zIndex: '2000',
        animation: 'slideIn 0.3s ease',
        fontWeight: '500'
    };

    if (type === 'success') {
        alertDiv.style.backgroundColor = '#4CAF50';
        alertDiv.style.color = 'white';
    } else if (type === 'error') {
        alertDiv.style.backgroundColor = '#f44336';
        alertDiv.style.color = 'white';
    }

    Object.assign(alertDiv.style, styles);

    // Add to body
    document.body.appendChild(alertDiv);

    // Remove after 4 seconds
    setTimeout(() => {
        alertDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => alertDiv.remove(), 300);
    }, 4000);
}

// ===== Smooth Scroll for Navigation Links =====
function addSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== Observe Elements for Animation =====
function observeElements() {
    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, options);

        // Observe service cards and other elements
        document.querySelectorAll('.service-card, .about-content, .contact-content').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// ===== Add Animation Keyframes to Head =====
function addAnimationKeyframes() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Call animation setup
addAnimationKeyframes();

// ===== Active Navigation Link =====
function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = 'var(--secondary-color)';
            } else {
                link.style.color = 'white';
            }
        });
    });
}

// ===== Keyboard Navigation =====
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});

// ===== Console Message =====
console.log('%cWinedocia - Wine Consultancy Services', 'font-size: 16px; color: #722f37; font-weight: bold;');
console.log('%cKapadokya\'da şarap danışmanlığı, tadımları ve eğitim hizmetleri', 'font-size: 12px; color: #666;');