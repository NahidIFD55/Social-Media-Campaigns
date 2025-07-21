// Document ready function
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Animation triggers
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.box, #main-col, #sidebar');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.style.animation = 'fadeIn 0.6s ease forwards';
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load

  // Form validation for contact page
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple validation
      const email = document.getElementById('Email').value;
      if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return;
      }
      
      // Form submission would go here
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }
});







// Enhanced scripts.js
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling with offset for fixed header
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });

  // Enhanced animation triggers
  const animateElements = () => {
    const elements = document.querySelectorAll('.box, #main-col, #sidebar, .form-warp, .card-hover');
    
    elements.forEach((element, index) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (elementPosition < screenPosition) {
        element.style.animation = `fadeIn 0.6s ease forwards ${index * 0.1}s`;
      }
    });
  };

  // Intersection Observer for more performant animations
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
  });

  // Add floating animation to showcase elements
  const showcase = document.querySelector('#showcase');
  if (showcase) {
    showcase.querySelector('h1').classList.add('float-animate');
    showcase.querySelector('p').style.animation = 'float 6s ease-in-out infinite 0.5s';
  }

  // Add pulse animation to important buttons
  const importantButtons = document.querySelectorAll('.button_1, .submit-btn');
  importantButtons.forEach(button => {
    button.classList.add('pulse');
  });

  // Enhanced form validation with animations
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      
      // Validate each required field
      const requiredFields = this.querySelectorAll('[required]');
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = 'var(--danger)';
          field.style.animation = 'shake 0.5s';
          isValid = false;
          
          field.addEventListener('animationend', () => {
            field.style.animation = '';
          });
        } else {
          field.style.borderColor = '';
        }
      });
      
      if (isValid) {
        // Show success animation
        const submitBtn = this.querySelector('[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.value = 'Sending...';
        
        // Simulate form submission
        setTimeout(() => {
          submitBtn.style.background = 'var(--success)';
          submitBtn.value = 'Message Sent!';
          
          // Reset form after delay
          setTimeout(() => {
            this.reset();
            submitBtn.style.background = '';
            submitBtn.value = 'Send Message';
            submitBtn.disabled = false;
          }, 2000);
        }, 1500);
      }
    });
  }

  // Initialize animations
  animateElements();
  window.addEventListener('scroll', animateElements);
});

// Add shake animation for form validation
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-5px); }
    40%, 80% { transform: translateX(5px); }
  }
`;
document.head.appendChild(style);