// Car Dealership Landing Page - Interactivity & UX
// - Smooth scrolling and active section highlighting
// - Sticky navbar behavior
// - Testimonials carousel (auto + manual)
// - IntersectionObserver scroll reveals
// - Contact form validation
// - Back-to-top button
// - Mobile menu toggle
// - Theme toggle with localStorage
// - 360° Interactive Car Viewer with drag/touch support

(function () {
  const root = document.documentElement;
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const backToTop = document.getElementById('backToTop');

  // ========== 360° CAR VIEWER DATA ==========
  // Each car has 36 angles (10° increments for smooth 360° rotation) + additional gallery images
  const carViewerData = {
    'RoadStar GT': {
      name: 'RoadStar GT',
      meta: '2023 • Automatic • Petrol',
      price: '$48,990',
      angles: [
        'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      gallery: [
        { url: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Interior View' },
        { url: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Dashboard' },
        { url: 'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Engine Bay' },
        { url: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Premium Wheels' },
        { url: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Rear View' },
        { url: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Side Profile' }
      ]
    },
    'Urban LX': {
      name: 'Urban LX',
      meta: '2022 • Automatic • Hybrid',
      price: '$32,450',
      angles: Array(36).fill(null).map((_, i) => {
        const imgs = [
          'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1200'
        ];
        return imgs[i % imgs.length];
      }),
      gallery: [
        { url: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Interior' },
        { url: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Dashboard' },
        { url: 'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Hybrid Engine' },
        { url: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Trunk Space' }
      ]
    },
    'Explorer X': {
      name: 'Explorer X',
      meta: '2024 • AWD • Diesel',
      price: '$41,990',
      angles: Array(36).fill(null).map((_, i) => {
        const imgs = [
          'https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1200'
        ];
        return imgs[i % imgs.length];
      }),
      gallery: [
        { url: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Spacious Interior' },
        { url: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'AWD Dashboard' },
        { url: 'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Powerful Engine' },
        { url: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Cargo Area' }
      ]
    },
    'Elite S': {
      name: 'Elite S',
      meta: '2021 • Automatic • Petrol',
      price: '$55,500',
      angles: Array(36).fill(null).map((_, i) => {
        const imgs = [
          'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1200'
        ];
        return imgs[i % imgs.length];
      }),
      gallery: [
        { url: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Luxury Interior' },
        { url: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Premium Dashboard' },
        { url: 'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Performance Engine' },
        { url: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Leather Seats' }
      ]
    },
    'Convertible R': {
      name: 'Convertible R',
      meta: '2020 • Manual • Petrol',
      price: '$38,250',
      angles: Array(36).fill(null).map((_, i) => {
        const imgs = [
          'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1200'
        ];
        return imgs[i % imgs.length];
      }),
      gallery: [
        { url: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Convertible Interior' },
        { url: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Sport Dashboard' },
        { url: 'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Engine' },
        { url: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Roof Mechanism' }
      ]
    },
    'CrossWave': {
      name: 'CrossWave',
      meta: '2021 • FWD • Petrol',
      price: '$28,900',
      angles: Array(36).fill(null).map((_, i) => {
        const imgs = [
          'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1200'
        ];
        return imgs[i % imgs.length];
      }),
      gallery: [
        { url: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Comfortable Interior' },
        { url: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Modern Dashboard' },
        { url: 'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Efficient Engine' },
        { url: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Cargo Space' }
      ]
    }
  };

  // Theme initialization
  const savedTheme = localStorage.getItem('theme') || 'light';
  root.setAttribute('data-theme', savedTheme);
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle && savedTheme === 'dark') themeToggle.classList.add('active');

  // Theme toggle handler
  themeToggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.classList.toggle('active', next === 'dark');
  });

  // Mobile menu toggle
  mobileToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('show');
  });
  // Close mobile menu when clicking a link
  navLinks.forEach((link) => link.addEventListener('click', () => navMenu?.classList.remove('show')));

  // Smooth scrolling
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const yOffset = -70; // offset for fixed navbar
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  // Sticky navbar styling on scroll
  const onScroll = () => {
    if (!navbar) return;
    const hasShadow = window.scrollY > 8;
    navbar.style.boxShadow = hasShadow ? '0 10px 30px rgba(0,0,0,0.08)' : 'var(--shadow)';
    backToTop?.classList.toggle('show', window.scrollY > 600);
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Active section highlighting
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const sectionById = new Map(sections.map((s) => [s.id, s]));
  const highlight = () => {
    const scrollPos = window.scrollY + 90;
    let activeId = null;
    for (const s of sections) {
      if (scrollPos >= s.offsetTop && scrollPos < s.offsetTop + s.offsetHeight) {
        activeId = s.id; break;
      }
    }
    navLinks.forEach((a) => {
      const href = a.getAttribute('href') || '';
      const id = href.startsWith('#') ? href.slice(1) : '';
      a.classList.toggle('active', id === activeId);
    });
  };
  window.addEventListener('scroll', highlight);
  window.addEventListener('resize', highlight);
  highlight();

  // IntersectionObserver - scroll reveal
  const revealEls = document.querySelectorAll('.scroll-reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => io.observe(el));

  // ========== MODERN ANIMATIONS ==========
  
  // Parallax scrolling for hero
  const hero = document.querySelector('.hero');
  const heroBg = document.querySelector('.hero-bg');
  if (hero && heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const heroHeight = hero.offsetHeight;
      if (scrolled < heroHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    });
  }

  // Animate price counters
  const animateCounter = (el, target) => {
    const duration = 1500;
    const start = 0;
    const startTime = performance.now();
    
    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * easeOut);
      el.textContent = `$${current.toLocaleString()}`;
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = `$${target.toLocaleString()}`;
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  // Trigger price counters on scroll
  const priceCounters = document.querySelectorAll('.price-counter');
  const priceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        const target = parseInt(entry.target.dataset.price);
        animateCounter(entry.target, target);
        entry.target.classList.add('counted');
        priceObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  priceCounters.forEach((counter) => priceObserver.observe(counter));

  // Smooth magnetic cursor effect for buttons (desktop only)
  if (window.innerWidth > 768) {
    const magneticBtns = document.querySelectorAll('.btn-primary, .btn-secondary');
    magneticBtns.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
      });
    });
  }

  // Add ripple effect to buttons
  const rippleButtons = document.querySelectorAll('.btn');
  rippleButtons.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: ripple 0.6s ease-out;
      `;
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Add ripple animation to CSS dynamically
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `
      @keyframes ripple {
        from { transform: scale(0); opacity: 1; }
        to { transform: scale(4); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  // Testimonials carousel
  const track = document.getElementById('testimonialsTrack');
  const slides = track ? Array.from(track.querySelectorAll('.testimonial-slide')) : [];
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  const dotsCtn = document.getElementById('testimonialDots');
  let current = 0;
  let timer;

  const updateSlides = (index) => {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    if (dotsCtn) Array.from(dotsCtn.children).forEach((d, i) => d.classList.toggle('active', i === index));
  };
  const goto = (index) => {
    if (!slides.length) return;
    current = (index + slides.length) % slides.length;
    updateSlides(current);
  };
  const auto = () => {
    clearInterval(timer);
    timer = setInterval(() => goto(current + 1), 5000);
  };

  if (slides.length) {
    // Build dots
    if (dotsCtn) {
      dotsCtn.innerHTML = '';
      slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => { goto(i); auto(); });
        dotsCtn.appendChild(dot);
      });
    }
    updateSlides(0);
    auto();
  }
  prevBtn?.addEventListener('click', () => { goto(current - 1); auto(); });
  nextBtn?.addEventListener('click', () => { goto(current + 1); auto(); });

  // Back to top
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Contact form validation
  const form = document.getElementById('contactForm');
  if (form) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    const showError = (id, msg) => {
      const el = document.getElementById(id + 'Error');
      if (el) { el.textContent = msg; el.style.display = msg ? 'block' : 'none'; }
    };

    const isEmail = (val) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(val);
    const isPhone = (val) => /^[0-9+()\-\s]{7,}$/.test(val);

    const validate = () => {
      let ok = true;
      if (!name.value.trim()) { showError('name', 'Please enter your full name'); ok = false; } else showError('name', '');
      if (!email.value.trim() || !isEmail(email.value)) { showError('email', 'Please provide a valid email'); ok = false; } else showError('email', '');
      if (phone.value && !isPhone(phone.value)) { showError('phone', 'Enter a valid phone number'); ok = false; } else showError('phone', '');
      if (!subject.value.trim()) { showError('subject', 'Please enter a subject'); ok = false; } else showError('subject', '');
      if (!message.value.trim() || message.value.length < 10) { showError('message', 'Message should be at least 10 characters'); ok = false; } else showError('message', '');
      return ok;
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validate()) return;
      // Simulate successful submission
      alert('Thanks! We will get back to you shortly.');
      form.reset();
    });

    // Live validation
    [name, email, phone, subject, message].forEach((input) => input?.addEventListener('input', validate));
  }

  // ========== 360° CAR VIEWER ==========
  const modal = document.getElementById('carViewerModal');
  const modalClose = document.querySelector('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay');
  const viewer360Image = document.getElementById('viewer360Image');
  const viewerCarName = document.getElementById('viewerCarName');
  const viewerCarMeta = document.getElementById('viewerCarMeta');
  const viewerCarPrice = document.getElementById('viewerCarPrice');
  const currentAngleEl = document.getElementById('currentAngle');
  const progressBar = document.getElementById('progressBar');
  const thumbnailsTrack = document.getElementById('thumbnailsTrack');
  const viewerCanvas = document.querySelector('.viewer-canvas');
  const prevThumbBtn = document.querySelector('.prev-thumb');
  const nextThumbBtn = document.querySelector('.next-thumb');
  const zoomInBtn = document.getElementById('zoomIn');
  const zoomOutBtn = document.getElementById('zoomOut');
  const fullscreenBtn = document.getElementById('fullscreenToggle');
  const modalContainer = document.querySelector('.modal-container');
  const autoRotateBtn = document.getElementById('autoRotate');
  const gallerySection = document.getElementById('gallerySection');
  const modeButtons = document.querySelectorAll('.mode-btn');

  let currentCar = null;
  let currentAngleIndex = 0;
  let rotation = 0; // 0-360 degrees
  let isZoomed = false;
  let isDragging = false;
  let startX = 0;
  let currentMode = '360'; // '360' or 'gallery'
  let autoRotateInterval = null;
  let imageCache = new Map();

  // Preload images for smoother experience
  const preloadImages = (urls) => {
    urls.forEach(url => {
      if (!imageCache.has(url)) {
        const img = new Image();
        img.src = url;
        imageCache.set(url, img);
      }
    });
  };

  // Convert rotation (0-360) to frame index (0-35)
  const rotationToFrame = (deg) => {
    const normalized = ((deg % 360) + 360) % 360; // Ensure 0-360
    return Math.floor((normalized / 360) * currentCar.angles.length);
  };

  // Update the displayed frame based on rotation
  const updateFrame = () => {
    if (!currentCar) return;
    currentAngleIndex = rotationToFrame(rotation);
    
    viewer360Image.src = currentCar.angles[currentAngleIndex];
    currentAngleEl.textContent = Math.round(rotation);
    progressBar.style.width = `${(rotation / 360) * 100}%`;
  };

  // Open viewer modal
  const openViewer = (carName) => {
    const data = carViewerData[carName];
    if (!data) return;

    currentCar = data;
    rotation = 0;
    currentAngleIndex = 0;
    isZoomed = false;
    currentMode = '360';

    // Set car info
    viewerCarName.textContent = data.name;
    viewerCarMeta.textContent = data.meta;
    viewerCarPrice.textContent = data.price;

    // Load first frame
    updateFrame();

    // Build gallery thumbnails
    thumbnailsTrack.innerHTML = '';
    data.gallery.forEach((item) => {
      const thumb = document.createElement('div');
      thumb.className = 'thumbnail-item';
      thumb.innerHTML = `
        <img src="${item.url}" alt="${item.label}" loading="lazy" />
        <span style="font-size: 0.75rem; text-align: center; display: block; margin-top: 4px;">${item.label}</span>
      `;
      thumb.addEventListener('click', () => {
        viewer360Image.src = item.url;
      });
      thumbnailsTrack.appendChild(thumb);
    });

    // Preload all images
    preloadImages([...data.angles, ...data.gallery.map(g => g.url)]);

    // Show modal and 360 mode
    switchMode('360');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Close viewer modal
  const closeViewer = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    viewer360Image.classList.remove('zoomed');
    isZoomed = false;
    modalContainer.classList.remove('fullscreen');
    stopAutoRotate();
  };

  // Switch between 360° and gallery modes
  const switchMode = (mode) => {
    currentMode = mode;
    modeButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === mode);
    });
    
    if (mode === '360') {
      gallerySection.classList.remove('hidden');
      updateFrame(); // Show current 360 frame
    } else {
      gallerySection.classList.remove('hidden');
      // Stay in gallery view
    }
  };

  // Auto-rotate functionality
  const startAutoRotate = () => {
    if (autoRotateInterval) return;
    autoRotateBtn.classList.add('active');
    autoRotateInterval = setInterval(() => {
      rotation = (rotation + 2) % 360; // Rotate 2 degrees per tick
      updateFrame();
    }, 50); // 20 FPS
  };

  const stopAutoRotate = () => {
    if (autoRotateInterval) {
      clearInterval(autoRotateInterval);
      autoRotateInterval = null;
      autoRotateBtn.classList.remove('active');
    }
  };

  const toggleAutoRotate = () => {
    if (autoRotateInterval) {
      stopAutoRotate();
    } else {
      startAutoRotate();
    }
  };

  // Smooth drag rotation (continuous)
  const onDragStart = (e) => {
    if (currentMode !== '360') return;
    isDragging = true;
    startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    viewerCanvas.classList.add('dragging');
    stopAutoRotate(); // Stop auto-rotate when user interacts
  };

  const onDragMove = (e) => {
    if (!isDragging || !currentCar || currentMode !== '360') return;
    e.preventDefault();
    
    const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const deltaX = currentX - startX;
    
    // Update rotation based on drag distance
    // Sensitivity: 1px = 1 degree
    rotation = (rotation + deltaX * 0.5) % 360;
    if (rotation < 0) rotation += 360;
    
    updateFrame();
    startX = currentX;
  };

  const onDragEnd = () => {
    isDragging = false;
    viewerCanvas.classList.remove('dragging');
  };

  // Thumbnail navigation
  prevThumbBtn?.addEventListener('click', () => {
    thumbnailsTrack.scrollBy({ left: -200, behavior: 'smooth' });
  });
  nextThumbBtn?.addEventListener('click', () => {
    thumbnailsTrack.scrollBy({ left: 200, behavior: 'smooth' });
  });

  // Zoom controls
  zoomInBtn?.addEventListener('click', () => {
    isZoomed = true;
    viewer360Image.classList.add('zoomed');
  });
  zoomOutBtn?.addEventListener('click', () => {
    isZoomed = false;
    viewer360Image.classList.remove('zoomed');
  });

  // Fullscreen toggle
  fullscreenBtn?.addEventListener('click', () => {
    modalContainer.classList.toggle('fullscreen');
  });

  // Auto-rotate button
  autoRotateBtn?.addEventListener('click', toggleAutoRotate);

  // Mode toggle
  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => switchMode(btn.dataset.mode));
  });

  // Drag events
  viewerCanvas?.addEventListener('mousedown', onDragStart);
  viewerCanvas?.addEventListener('mousemove', onDragMove);
  viewerCanvas?.addEventListener('mouseup', onDragEnd);
  viewerCanvas?.addEventListener('mouseleave', onDragEnd);

  // Touch events for mobile
  viewerCanvas?.addEventListener('touchstart', onDragStart, { passive: false });
  viewerCanvas?.addEventListener('touchmove', onDragMove, { passive: false });
  viewerCanvas?.addEventListener('touchend', onDragEnd);

  // Close modal handlers
  modalClose?.addEventListener('click', closeViewer);
  modalOverlay?.addEventListener('click', closeViewer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) closeViewer();
    if (!modal?.classList.contains('active') || currentMode !== '360') return;
    if (e.key === 'ArrowLeft') {
      rotation = (rotation - 10 + 360) % 360;
      updateFrame();
    }
    if (e.key === 'ArrowRight') {
      rotation = (rotation + 10) % 360;
      updateFrame();
    }
  });

  // Attach click handlers to all "View Details" buttons
  document.querySelectorAll('.car-card .btn-outline').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.car-card');
      const carName = card.querySelector('h3')?.textContent.trim();
      if (carName) openViewer(carName);
    });
  });
})();
