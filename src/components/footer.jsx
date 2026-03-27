'use client';

import { useState } from 'react';
import '../styles/footer.css';

/* ─────────────────────────────────────
   DATA
───────────────────────────────────── */
const contactItems = [
  {
    icon: '📍',
    text: '509 1/2 E. Broadway, Glendale, CA 91205',
  },
  {
    icon: '📞',
    text: '(818) 855-8405',
  },
  {
    icon: '✉',
    text: 'hello@elevateaesthetics.la',
  },
];

const navLinks = [
  { label: 'How LHR Works', href: '#' },
  { label: 'Packages',      href: '#' },
  { label: 'Results',       href: '#' },
  { label: 'FAQ',           href: '#' },
  { label: 'Contact',       href: '#' },
];

const legalLinks = [
  { label: 'Privacy Policy',      href: '#' },
  { label: 'Terms & Conditions',  href: '#' },
  { label: 'Accessibility',       href: '#' },
];

/* ─────────────────────────────────────
   SOCIAL ICONS (SVG inline)
───────────────────────────────────── */
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691
       4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069
       4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07
       -3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058
       -1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227
       1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741
       0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741
       0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333
       23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782
       -2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667
       -.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0
       12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12
       16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44
       1.44 0 000-2.881z"/>
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1
       4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792
       -4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491
       0-1.956.93-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612
       23.094 24 18.1 24 12.073z"/>
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714
       -6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63
       5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

/* ─────────────────────────────────────
   MAIN COMPONENT — Footer
───────────────────────────────────── */
export default function Footer({
  letterImg
}) {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="ft-wrapper">

      {/* ══════════════════════════════════
          NEWSLETTER — STAY IN THE LOOP
      ══════════════════════════════════ */}
      <div className="ft-newsletter">

        {/* Background image */}
        <img
          className="ft-newsletter-bg"
          src={letterImg}
          alt="Newsletter background"
        />

        {/* Dark overlay */}
        <div className="ft-newsletter-overlay" />

        {/* Frosted glass card */}
        <div className="ft-newsletter-card">
          <h3 className="ft-newsletter-title">Stay In The Loop</h3>
          <p className="ft-newsletter-sub">
            Get updates on new treatments, promotions, and clinic news.
          </p>

          <form className="ft-newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              className="ft-newsletter-input"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="ft-newsletter-btn">
              Send
              <span className="ft-send-arrow">➤</span>
            </button>
          </form>
        </div>

      </div>

      {/* ══════════════════════════════════
          MAIN FOOTER
      ══════════════════════════════════ */}
      <footer className="ft-footer">
        <div className="container">
          <div className="ft-footer-grid">

            {/* ── Col 1: Logo + Social ── */}
            <div className="ft-col-brand">
              <img src="/images/footer-logo.png" alt="" />

              <div className="ft-follow-label mt-5">Follow Us</div>
              <div className="ft-social-row">
                <a
                  href="#"
                  className="ft-social-icon"
                  aria-label="Instagram"
                >
                  <IconInstagram />
                </a>
                <a
                  href="#"
                  className="ft-social-icon"
                  aria-label="Facebook"
                >
                  <IconFacebook />
                </a>
                <a
                  href="#"
                  className="ft-social-icon"
                  aria-label="X (Twitter)"
                >
                  <IconX />
                </a>
              </div>
            </div>

            {/* ── Col 2: Contact Info ── */}
            <div className="ft-col-contact">
              <div className="ft-col-title">Contact Info</div>
              <div className="ft-contact-list">
                {contactItems.map((item, i) => (
                  <div key={i} className="ft-contact-item">
                    <span className="ft-contact-icon">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Col 3: Links ── */}
            <div className="ft-col-links">
              <div className="ft-col-title">Links</div>
              <div className="ft-links-list">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="ft-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Col 4: Legal ── */}
            <div className="ft-col-legal">
              <div className="ft-col-title">Legal</div>
              <div className="ft-legal-list">
                {legalLinks.map((link) => (
                  <a key={link.label} href={link.href} className="ft-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Copyright bar */}
        <div className="ft-copyright">
          <div className="container">
            <p>© 2025 Elevate Aesthetics. All rights reserved.</p>
          </div>
        </div>

      </footer>

    </div>
  );
}