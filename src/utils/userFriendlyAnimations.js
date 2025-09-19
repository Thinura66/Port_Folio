// Enhanced User-Friendly Interactions and Animations

document.addEventListener('DOMContentLoaded', function() {
    
    // Scroll progress indicator
    function updateScrollProgress() {
        const scrollProgress = document.querySelector('.scroll-progress');
        if (!scrollProgress) {
            const progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            document.body.appendChild(progressBar);
        }
        
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        const progressBar = document.querySelector('.scroll-progress');
        progressBar.style.width = scrollPercent + '%';
    }
    
    // Reveal on scroll animation
    function setupRevealOnScroll() {
        const reveals = document.querySelectorAll('.reveal-on-scroll');
        
        function revealOnScroll() {
            reveals.forEach(reveal => {
                const windowHeight = window.innerHeight;
                const revealTop = reveal.getBoundingClientRect().top;
                const revealPoint = 150;
                
                if (revealTop < windowHeight - revealPoint) {
                    reveal.classList.add('revealed');
                }
            });
        }
        
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Initial check
    }
    
    // Enhanced form validation
    function enhanceFormValidation() {
        const inputs = document.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                // Clear error state on input
                this.classList.remove('error');
                hideFieldError(this);
            });
        });
        
        function validateField(field) {
            const value = field.value.trim();
            const type = field.type;
            let isValid = true;
            let errorMessage = '';
            
            if (field.required && !value) {
                isValid = false;
                errorMessage = 'This field is required';
            } else if (type === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
            }
            
            if (isValid) {
                field.classList.remove('error');
                field.classList.add('success');
                hideFieldError(field);
            } else {
                field.classList.remove('success');
                field.classList.add('error');
                showFieldError(field, errorMessage);
            }
        }
        
        function showFieldError(field, message) {
            hideFieldError(field); // Remove existing error
            const errorDiv = document.createElement('div');
            errorDiv.className = 'field-error';
            errorDiv.textContent = message;
            errorDiv.style.cssText = `
                color: #ef4444;
                font-size: 0.8rem;
                margin-top: 4px;
                opacity: 0;
                transform: translateY(-10px);
                transition: all 0.3s ease;
            `;
            field.parentNode.appendChild(errorDiv);
            
            // Animate in
            setTimeout(() => {
                errorDiv.style.opacity = '1';
                errorDiv.style.transform = 'translateY(0)';
            }, 10);
        }
        
        function hideFieldError(field) {
            const errorDiv = field.parentNode.querySelector('.field-error');
            if (errorDiv) {
                errorDiv.style.opacity = '0';
                errorDiv.style.transform = 'translateY(-10px)';
                setTimeout(() => errorDiv.remove(), 300);
            }
        }
    }
    
    // Add particle hover effect to cards
    function addParticleHoverEffects() {
        const cards = document.querySelectorAll('.project-card, .skill-item');
        cards.forEach(card => {
            if (!card.classList.contains('particle-hover')) {
                card.classList.add('particle-hover');
            }
        });
    }
    
    // Show success/error messages
    function showMessage(text, type = 'success', duration = 3000) {
        const message = document.createElement('div');
        message.className = `message ${type}`;
        message.textContent = text;
        
        // Position at top of viewport
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1001;
            max-width: 300px;
        `;
        
        document.body.appendChild(message);
        
        // Animate in
        setTimeout(() => message.classList.add('show'), 10);
        
        // Remove after duration
        setTimeout(() => {
            message.classList.remove('show');
            setTimeout(() => message.remove(), 300);
        }, duration);
    }
    
    // Enhanced typing effect
    function enhanceTypingEffect() {
        const typingElements = document.querySelectorAll('.typing-effect');
        typingElements.forEach(element => {
            element.classList.add('enhanced-typing');
        });
    }
    
    // Add smooth hover effects to icons
    function enhanceIcons() {
        const icons = document.querySelectorAll('i, .icon, svg');
        icons.forEach(icon => {
            if (!icon.classList.contains('animated-icon')) {
                icon.classList.add('animated-icon');
            }
        });
    }
    
    // Keyboard navigation enhancement
    function enhanceKeyboardNavigation() {
        document.addEventListener('keydown', function(e) {
            // Escape key closes any open modals or resets states
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal, .dropdown').forEach(el => {
                    el.classList.remove('active', 'open', 'visible');
                });
            }
            
            // Tab navigation enhancement
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        // Remove keyboard navigation class on mouse use
        document.addEventListener('mousedown', function() {
            document.body.classList.remove('keyboard-navigation');
        });
    }
    
    // Initialize all enhancements
    function init() {
        updateScrollProgress();
        setupRevealOnScroll();
        enhanceFormValidation();
        addParticleHoverEffects();
        enhanceTypingEffect();
        enhanceIcons();
        enhanceKeyboardNavigation();
        
        // Add scroll listener for progress bar
        window.addEventListener('scroll', updateScrollProgress);
        
        console.log('🎉 Enhanced user-friendly animations loaded!');
    }
    
    // Run initialization
    init();
    
    // Expose utility functions globally
    window.portfolioUtils = {
        showMessage,
        updateScrollProgress
    };
});