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

function getWhatsApp() {
  return `
<a href="https://wa.me/91XXXXXXXXXX" class="whatsapp-btn" target="_blank" aria-label="Chat on WhatsApp">
  <span class="whatsapp-tooltip">Chat with Rushali</span>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>`;
}

function getNewsletterBar() {
  return `
<div class="newsletter-bar">
  <div class="newsletter-bar-text">
    <h3>✦ Cosmic Letters</h3>
    <p>Monthly astrology &amp; tarot musings — arriving around the new moon.</p>
  </div>
  <form class="newsletter-bar-form" onsubmit="handleNLBar(event)">
    <input type="email" placeholder="your@email.com" required>
    <button type="submit">Subscribe</button>
  </form>
  <p class="newsletter-success" id="nlBarSuccess">You're in ✦ See you at the new moon.</p>
</div>`;
}

function handleNLBar(e) {
  e.preventDefault();
  document.getElementById('nlBarSuccess').style.display = 'block';
  e.target.querySelector('input').value = '';
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
      <li><a href="privacy.html">Privacy Policy</a></li>
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
