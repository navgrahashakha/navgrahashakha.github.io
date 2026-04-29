// Shared navigation and footer for all pages
function getNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'services.html', label: 'Services' },
    { href: 'blog.html', label: 'Blog' },
    { href: 'contact.html', label: 'Connect' },
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${p.label === activePage ? 'active' : ''}">${p.label}</a></li>`
  ).join('');
  return `
<nav>
  <a href="index.html" class="nav-logo">Navgraha Shakha <small>Astrology · Tarot · Cosmic Guidance</small></a>
  <ul class="nav-links">${links}</ul>
  <a href="contact.html" class="nav-cta">Book a Session</a>
  <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  ${pages.map(p => `<a href="${p.href}">${p.label}</a>`).join('')}
  <a href="contact.html" style="color:var(--gold)">Book a Session →</a>
</div>`;
}

function getFooter() {
  return `
<footer>
  <div class="footer-inner">
    <div class="footer-logo-wrap">
      <a href="index.html" class="footer-logo">Navgraha Shakha</a>
      <div class="footer-tagline">Where the stars meet the soul</div>
    </div>
    <ul class="footer-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="contact.html">Connect</a></li>
    </ul>
    <div class="footer-right">
      <div class="footer-copy">© 2025 Navgraha Shakha · All Rights Reserved</div>
      <div class="footer-social">
        <a href="#">Instagram</a>
        <a href="#">YouTube</a>
        <a href="#">WhatsApp</a>
      </div>
    </div>
  </div>
</footer>`;
}

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Fade in on scroll
function initFade() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', initFade);
