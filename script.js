document.addEventListener('DOMContentLoaded', () => {

    // --- Loading Screen ---
    const loader = document.getElementById('loader');
    // Ensure loader shows for at least a brief moment for effect, then fade out
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 800);

    // --- Navigation / Mobile Menu ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    // Toggle menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Hamburger animation to X
        const spans = hamburger.querySelectorAll('span');
        if(navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu on link click
    links.forEach(link => {
        link.addEventListener('click', () => {
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(5, 5, 5, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.9)';
        }
    });

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // --- Lightbox for Instagram Grid ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-image');
    const galleryTriggers = document.querySelectorAll('.gallery-trigger');
    const closeLightboxBtn = document.querySelector('.close-lightbox');

    galleryTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const highResSrc = trigger.getAttribute('data-src');
            lightboxImg.src = highResSrc;
            lightbox.style.display = 'flex';
        });
    });

    const closeLightbox = () => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    }

    closeLightboxBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // --- Form Submission Handling ---
    const form = document.getElementById('bookingForm');
    
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const name = document.getElementById('name').value;
            const service = document.getElementById('service').options[document.getElementById('service').selectedIndex].text;
            
            alert(`Thanks, ${name}! Your enquiry for ${service} has been received. Coach will be in touch shortly to confirm times and availability.`);
            
            form.reset();
        });
    }
});
