/* ============================================
   NADEWAS — main.js
   Branding & Web Design for Brooklyn, NYC
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------
     HAMBURGER MENU
  ------------------------------------------ */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const mobileLinks = mobileMenu.querySelectorAll('a');

  function openMenu() {
    hamburger.classList.add('is-open');
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // prevent bg scroll
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    hamburger.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close when a nav link is tapped
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });


  /* ------------------------------------------
     CUSTOM CURSOR (desktop only)
  ------------------------------------------ */
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('follower');

  if (cursor && follower) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX - 7}px, ${mouseY - 7}px)`;
    });

    function animateFollower() {
      followerX += (mouseX - followerX - 20) * 0.12;
      followerY += (mouseY - followerY - 20) * 0.12;
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Scale cursor on hover
    document.querySelectorAll('a, button, .service-card, .pain-item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform += ' scale(2)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = cursor.style.transform.replace(' scale(2)', '');
      });
    });
  }


  /* ------------------------------------------
     SCROLL REVEAL
  ------------------------------------------ */
  const reveals  = document.querySelectorAll('.reveal');
  const revealOb = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => revealOb.observe(el));


  /* ------------------------------------------
     NAV BORDER ON SCROLL
  ------------------------------------------ */
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 80
      ? 'rgba(255,107,0,0.15)'
      : 'rgba(255,255,255,0.06)';
  }, { passive: true });

});
