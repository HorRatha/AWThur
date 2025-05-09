

    // Initialize AOS Animation
    document.addEventListener('DOMContentLoaded', function() {
      AOS.init();
      
      // Animated counting for stats
      const countElements = document.querySelectorAll('.count-number');
      countElements.forEach(element => {
        const target = parseInt(element.getAttribute('data-count'));
        let count = 0;
        const increment = target / 50;
        const updateCount = () => {
          if(count < target) {
            count += increment;
            element.textContent = Math.ceil(count);
            setTimeout(updateCount, 30);
          } else {
            element.textContent = target;
          }
        };
        updateCount();
      });
      
      // Product Gallery Thumbnail Click
      const thumbItems = document.querySelectorAll('.thumb-item');
      const mainImg = document.querySelector('.main-img');
      
      thumbItems.forEach(item => {
        item.addEventListener('click', function() {
          thumbItems.forEach(i => i.classList.remove('active'));
          this.classList.add('active');
          const imgSrc = this.querySelector('img').src;
          mainImg.src = imgSrc.replace('80/80', '500/500');
        });
      });
      
      // Quantity Buttons
      const minusBtn = document.querySelector('.minus');
      const plusBtn = document.querySelector('.plus');
      const qtyInput = document.querySelector('.quantity-input');
      
      if(minusBtn && plusBtn && qtyInput) {
        minusBtn.addEventListener('click', function() {
          let qty = parseInt(qtyInput.value);
          if(qty > 1) {
            qtyInput.value = qty - 1;
          }
        });
        
        plusBtn.addEventListener('click', function() {
          let qty = parseInt(qtyInput.value);
          qtyInput.value = qty + 1;
        });
      }
      
      // Create more sprinkle elements dynamically
      const sprinkleContainer = document.querySelector('.sprinkle-container');
      for(let i = 0; i < 100; i++) {
        const sprinkle = document.createElement('div');
        sprinkle.className = 'sprinkle';
        sprinkle.style.left = `${Math.random() * 100}%`;
        sprinkle.style.animationDelay = `${Math.random() * 5}s`;
        sprinkle.style.width = `${Math.random() * 10 + 5}px`;
        sprinkle.style.height = `${Math.random() * 5 + 3}px`;
        sprinkle.style.transform = `rotate(${Math.random() * 360}deg)`;
        sprinkleContainer.appendChild(sprinkle);
      }
      
      // Scroll Animations for Hero Items
      window.addEventListener('scroll', function() {
        const heroImage = document.querySelector('.hero-image img');
        const scrollPosition = window.scrollY;
        
        if(heroImage) {
          heroImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
        }
      });
      
      // Show Product Detail (Demo)
      const cakeCards = document.querySelectorAll('.cake-card');
      const productDetail = document.getElementById('productDetail');
      
      cakeCards.forEach(card => {
        card.addEventListener('click', function() {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          setTimeout(() => {
            productDetail.style.display = 'block';
          }, 500);
        });
      });
      
      // Initialize Floating Effect
      const floatingElements = document.querySelectorAll('.floating');
      setInterval(() => {
        floatingElements.forEach(element => {
          element.style.transform = `translateY(${Math.sin(Date.now() / 1000) * 10}px)`;
        });
      }, 50);
      
      // Add hover effect for category cards
      const categoryCards = document.querySelectorAll('.category-card');
      categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
          this.querySelector('img').style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
          this.querySelector('img').style.transform = 'scale(1)';
        });
      });
      
    });

    

    // about and contact
 
  // Initialize AOS animation
  document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
      once: true,
      duration: 1000
    });
    
    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    // Simple form validation and submission
    const orderForm = document.getElementById('cakeOrderForm');
    if (orderForm) {
      orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your cake order request! We will contact you soon to confirm the details.');
        orderForm.reset();
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Get references to the button and icon
    const darkModeBtn = document.getElementById('darkModeBtn');
    const darkModeIcon = darkModeBtn.querySelector('i');
    const darkModeText = darkModeBtn.querySelector('span');
    
    // Check for saved theme preference or use device preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    // If the user previously selected dark mode
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      updateButtonAppearance(true);
    } else if (currentTheme === 'light') {
      document.body.classList.remove('dark-mode');
      updateButtonAppearance(false);
    } else if (prefersDarkScheme.matches) {
      // If the user hasn't set a preference but their device prefers dark mode
      document.body.classList.add('dark-mode');
      updateButtonAppearance(true);
    }
    
    // Toggle dark mode on button click
    darkModeBtn.addEventListener('click', function() {
      // If dark mode is currently on, turn it off
      if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        updateButtonAppearance(false);
      } else {
        // If dark mode is currently off, turn it on
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        updateButtonAppearance(true);
      }
    });
    
    // Function to update button appearance
    function updateButtonAppearance(isDarkMode) {
      if (isDarkMode) {
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
        darkModeText.textContent = 'Light Mode'; // Changed to display the mode you'll switch TO
        darkModeBtn.classList.add('btn-outline-light');
        darkModeBtn.classList.remove('btn-outline-dark');
      } else {
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
        darkModeText.textContent = 'Dark Mode'; // Changed to display the mode you'll switch TO
        darkModeBtn.classList.remove('btn-outline-light');
        darkModeBtn.classList.add('btn-outline-dark');
      }
    }
  });

  

