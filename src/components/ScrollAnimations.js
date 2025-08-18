// Advanced Scroll-triggered animations utility
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        
        // Add staggered animation for children
        const children = entry.target.querySelectorAll('.stagger-child');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.style.transitionDelay = `${index * 0.1}s`;
            child.classList.add('animate');
          }, index * 50);
        });
        
        // Handle image reveal animations
        if (entry.target.classList.contains('image-reveal')) {
          entry.target.classList.add('animate');
        }
        
        // Handle text reveal animations
        if (entry.target.classList.contains('text-reveal')) {
          const lines = entry.target.querySelectorAll('.text-reveal-line');
          lines.forEach((line, index) => {
            setTimeout(() => {
              line.style.transitionDelay = `${index * 0.1}s`;
            }, index * 100);
          });
          entry.target.classList.add('animate');
        }
        
        // Handle section transitions
        if (entry.target.classList.contains('section-transition')) {
          entry.target.classList.add('visible');
        }
        
        // Stop observing once animated
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(
    '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale, .animate-on-scroll-fade, .image-reveal, .text-reveal, .section-transition'
  );
  
  animatedElements.forEach(el => {
    observer.observe(el);
  });

  return observer;
};

// Enhanced Stagger animation utility
export const addStaggerAnimation = (container, delay = 100) => {
  const children = container.children;
  Array.from(children).forEach((child, index) => {
    child.style.animationDelay = `${index * delay}ms`;
    child.style.transitionDelay = `${index * delay}ms`;
  });
};

// Page transition animations
export const initPageTransitions = () => {
  // Add page enter animation to main content
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.classList.add('page-enter');
  }
  
  // Animate elements that should appear immediately
  const immediateElements = document.querySelectorAll('.fade-in, .slide-in-up, .scale-in');
  immediateElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
  });
};

// Advanced parallax effect
export const initParallaxEffect = () => {
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  const handleParallax = () => {
    const scrollTop = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrollTop * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  };
  
  window.addEventListener('scroll', handleParallax, { passive: true });
  
  return () => window.removeEventListener('scroll', handleParallax);
};

// Interactive hover animations
export const initInteractiveAnimations = () => {
  const interactiveElements = document.querySelectorAll('.interactive-element');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'translateY(-4px) scale(1.02)';
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'translateY(0) scale(1)';
    });
  });
};

// Loading animation for images
export const initImageLoadingAnimations = () => {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    if (!img.complete) {
      img.classList.add('loading-shimmer');
      
      img.addEventListener('load', () => {
        img.classList.remove('loading-shimmer');
        img.classList.add('fade-in');
      });
    }
  });
};

// Initialize all animations
export const initAllAnimations = () => {
  initPageTransitions();
  const scrollObserver = initScrollAnimations();
  const parallaxCleanup = initParallaxEffect();
  initInteractiveAnimations();
  initImageLoadingAnimations();
  
  // Cleanup function
  return () => {
    scrollObserver.disconnect();
    parallaxCleanup();
  };
};

// Utility to add page container class
export const wrapPageContent = () => {
  const pageContent = document.querySelector('.App > main');
  if (pageContent && !pageContent.classList.contains('page-container')) {
    pageContent.classList.add('page-container');
  }
};