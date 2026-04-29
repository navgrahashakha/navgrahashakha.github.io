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
  <a href="index.html" class="nav-logo">Navgraha Shakha <small>Astrology · Tarot · Spiritual Coaching</small></a>
  <ul class="nav-links">${links}</ul>
  <a href="contact.html" class="nav-cta">Book a Session</a>
  <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  ${pages.map(p => `<a href="${p.href}">${p.label}</a>`).join('')}
  <a href="contact.html" style="color:var(--lavender);font-weight:500;">Book a Session →</a>
</div>`;
}

function getFooter() {
  return `
<footer>
  <div class="footer-inner">
    <div>
      <a href="index.html" class="footer-logo">Navgraha Shakha</a>
      <div class="footer-tagline">Astrology · Tarot · Spiritual Coaching</div>
      <div class="footer-contact">
        <a href="mailto:navgrahashakha@gmail.com">navgrahashakha@gmail.com</a>
        <a href="mailto:info@navgrahashakha.com">info@navgrahashakha.com</a>
        <a href="https://wa.me/91XXXXXXXXXX">WhatsApp: +91 XXXXX XXXXX</a>
        <span style="font-size:0.75rem;color:var(--ink-faint);">Goa, India · Sessions via Zoom &amp; Google Meet</span>
      </div>
    </div>
    <ul class="footer-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="contact.html">Connect</a></li>
      <li><a href="#privacy">Privacy Policy</a></li>
    </ul>
    <div class="footer-right">
      <div class="footer-copy">© 2025 Navgraha Shakha · All Rights Reserved</div>
      <div class="footer-social">
        <a href="https://instagram.com/navgrahashakha" target="_blank">Instagram</a>
        <a href="https://youtube.com/@navgrahashakha" target="_blank">YouTube</a>
        <a href="https://wa.me/91XXXXXXXXXX" target="_blank">WhatsApp</a>
      </div>
    </div>
  </div>
  <div class="footer-privacy" id="privacy">
    <strong style="color:var(--ink-dim);display:block;margin-bottom:0.5rem;font-size:0.75rem;letter-spacing:0.1em;">Privacy Policy</strong>
    Navgraha Shakha collects personal information (name, email, phone, birth details) for the purpose of providing astrology, tarot, and spiritual coaching services, and to keep you informed about new offerings, updates, blog posts, and promotions from Navgraha Shakha. All session information and personal details are kept strictly confidential and are never sold or shared with third parties. By submitting a form on this website, you consent to Rushali / Navgraha Shakha storing and using your information to respond to your enquiry, deliver booked services, and send you relevant updates and marketing communications. You may opt out of marketing communications or request deletion of your data at any time by writing to <a href="mailto:navgrahashakha@gmail.com">navgrahashakha@gmail.com</a>.
  </div>
</footer>`;
}

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

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
