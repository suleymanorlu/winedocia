// ===== Form Handling =====
document.addEventListener('DOMContentLoaded', function() {
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

    // Here you would typically send the data to a server
    // For now, we'll just show a success message
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

setActiveNavLink();

// ===== Console Message =====
console.log('%c🍷 Winedocia - Wine Consultancy Services', 'font-size: 16px; color: #722f37; font-weight: bold;');
console.log('%cKapadokya\'da şarap danışmanlığı, tadımları ve eğitim hizmetleri', 'font-size: 12px; color: #666;');