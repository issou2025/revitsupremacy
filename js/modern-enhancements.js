// Améliorations modernes pour tous les éléments
class ModernEnhancements {
    constructor() {
        this.init();
    }

    init() {
        this.enhanceCards();
        this.enhanceButtons();
        this.enhanceIcons();
        this.addScrollAnimations();
        this.addParallaxEffects();
        this.addInteractiveElements();
    }

    enhanceCards() {
        // Ajouter des effets aux cartes existantes
        const cards = document.querySelectorAll('.card, .feature-item, .training-card, .testimonial-card');
        cards.forEach(card => {
            if (!card.classList.contains('shine-effect') && !card.classList.contains('wave-effect')) {
                card.classList.add('shine-effect');
            }
        });
    }

    enhanceButtons() {
        // Améliorer tous les boutons
        const buttons = document.querySelectorAll('.cta-button, button');
        buttons.forEach(button => {
            if (!button.classList.contains('shine-effect')) {
                button.classList.add('shine-effect');
            }
        });
    }

    enhanceIcons() {
        // Ajouter des animations aux icônes
        const icons = document.querySelectorAll('.fas, .fab');
        icons.forEach(icon => {
            // Ajouter des classes d'animation selon le contexte
            if (icon.closest('.feature-item, .training-card')) {
                icon.classList.add('icon-animated', 'icon-gradient', 'icon-shadow');
            } else if (icon.closest('h1, h2, h3')) {
                icon.classList.add('icon-pulse', 'icon-gradient');
            } else {
                icon.classList.add('icon-animated');
            }
        });
    }

    addScrollAnimations() {
        // Ajouter des animations de défilement
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observer tous les éléments importants
        const elementsToAnimate = document.querySelectorAll('section, .card, .feature-item, .training-card');
        elementsToAnimate.forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    }

    addParallaxEffects() {
        // Effet parallaxe léger sur les sections
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero, .features-grid');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    addInteractiveElements() {
        // Ajouter des effets de survol interactifs
        const interactiveElements = document.querySelectorAll('a, button, .card');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                e.target.style.transform = 'translateY(-2px)';
            });
            
            element.addEventListener('mouseleave', (e) => {
                e.target.style.transform = 'translateY(0)';
            });
        });
    }
}

// Styles CSS additionnels pour les animations
const additionalStyles = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }

    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .animate-on-scroll:nth-child(1) { transition-delay: 0.1s; }
    .animate-on-scroll:nth-child(2) { transition-delay: 0.2s; }
    .animate-on-scroll:nth-child(3) { transition-delay: 0.3s; }
    .animate-on-scroll:nth-child(4) { transition-delay: 0.4s; }
    .animate-on-scroll:nth-child(5) { transition-delay: 0.5s; }
`;

// Ajouter les styles au document
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialiser les améliorations au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    new ModernEnhancements();
});

// Ajouter un curseur personnalisé moderne
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Créer un curseur personnalisé
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease;
    opacity: 0;
`;

document.body.appendChild(cursor);

// Afficher le curseur personnalisé sur les éléments interactifs
document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '0.7';
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
}); 