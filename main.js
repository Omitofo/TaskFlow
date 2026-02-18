// main.js – TaskFlow app logic

(function () {
  'use strict';

  /* ── Render Features ── */
  function initFeatures() {
    const grid = document.getElementById('features-grid');
    if (!grid) return;
    grid.innerHTML = FEATURES_DATA.map(f => `
      <article class="feature-card" role="listitem">
        <div class="feature-card__icon" style="background:${f.bg}; color:${f.color};">${f.emoji}</div>
        <h3 class="feature-card__title">${f.title}</h3>
        <p class="feature-card__desc">${f.desc}</p>
      </article>`).join('');
  }

  /* ── Render Pricing ── */
  function initPricing() {
    const grid = document.getElementById('pricing-grid');
    if (!grid) return;
    grid.innerHTML = PRICING_DATA.map(p => `
      <article class="pricing-card${p.featured ? ' featured' : ''}" role="listitem">
        ${p.badge ? `<div class="pricing-card__badge">${p.badge}</div>` : ''}
        <div class="pricing-card__plan">${p.plan}</div>
        <div class="pricing-card__price">${p.price}<span>${p.period}</span></div>
        <p class="pricing-card__desc">${p.desc}</p>
        <div class="pricing-card__features">
          ${p.features.map(f => `<div class="pricing-feature">${f}</div>`).join('')}
        </div>
        <a href="#" class="btn btn--primary" style="width:100%;justify-content:center;">${p.cta}</a>
      </article>`).join('');
  }

  /* ── Render Testimonials ── */
  function initTestimonials() {
    const grid = document.getElementById('testimonials-grid');
    if (!grid) return;
    grid.innerHTML = TESTIMONIALS_DATA.map(t => `
      <article class="testimonial-card" role="listitem">
        <p class="testimonial-card__quote">"${t.quote}"</p>
        <div class="testimonial-card__author">
          <div class="testimonial-avatar" aria-hidden="true">${t.emoji}</div>
          <div>
            <div class="testimonial-card__name">${t.name}</div>
            <div class="testimonial-card__role">${t.role}</div>
          </div>
        </div>
      </article>`).join('');
  }

  /* ── Active Nav ── */
  function initNavHighlight() {
    const links = document.querySelectorAll('.nav__link');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.nav__link[href="#${id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
  }

  /* ── Mobile Menu ── */
  function initMobileMenu() {
    const burger = document.querySelector('.nav__burger');
    const navLinks = document.querySelector('.nav__links');
    if (!burger || !navLinks) return;
    burger.addEventListener('click', () => {
      const open = navLinks.style.display === 'flex';
      navLinks.style.display = open ? '' : 'flex';
      navLinks.style.flexDirection = open ? '' : 'column';
      navLinks.style.position = open ? '' : 'absolute';
      navLinks.style.top = open ? '' : '100%';
      navLinks.style.left = open ? '' : '0';
      navLinks.style.right = open ? '' : '0';
      navLinks.style.background = open ? '' : 'var(--c-bg)';
      navLinks.style.padding = open ? '' : '1rem';
      navLinks.style.borderBottom = open ? '' : '1px solid var(--c-border)';
      burger.setAttribute('aria-expanded', String(!open));
    });
  }

  /* ── Animate progress bar on scroll ── */
  function initProgressBar() {
    const fill = document.querySelector('.progress-fill');
    if (!fill) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fill.style.width = fill.style.width || '40%';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    const bar = document.querySelector('.progress-bar');
    if (bar) observer.observe(bar);
  }

  /* ── Scroll Reveal ── */
  function initScrollReveal() {
    const items = document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    items.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(24px)';
      item.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
      observer.observe(item);
    });
  }

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', () => {
    initFeatures();
    initPricing();
    initTestimonials();
    initNavHighlight();
    initMobileMenu();
    initProgressBar();
    setTimeout(initScrollReveal, 100);
  });

})();
