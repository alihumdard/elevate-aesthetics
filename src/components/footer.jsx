"use client";

import { useState } from "react";
import "../styles/footer.css";

/* ─────────────────────────────────────
   DATA
───────────────────────────────────── */
const contactItems = [
  {
    icon: "/images/location.png",
    text: "509 1/2 E. Broadway, Glendale, CA 91205",
  },
  {
    icon: "/images/phone.png",
    text: "(818) 855-8403",
  },
  {
    icon: "/images/at.png",
    text: "hello@elevateaesthetics.la",
  },
];

const navLinks = [
  { label: "How LHR Works", href: "#" },
  { label: "Packages", href: "#" },
  { label: "Results", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Accessibility", href: "#" },
];

/* ─────────────────────────────────────
   SOCIAL ICONS (SVG inline)
───────────────────────────────────── */
function IconInstagram() {
  return (
    <img src="/images/insta.png" alt="" />
  );
}

function IconFacebook() {
  return (
   <img src="/images/facebook.png" alt="" />
  );
}

function IconX() {
  return (
   <img src="/images/yelp.png" alt="" />
  );
}

/* ─────────────────────────────────────
   MAIN COMPONENT — Footer
───────────────────────────────────── */
export default function Footer({ letterImg }) {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
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

          <form
            className="ft-newsletter-form"
            onSubmit={handleNewsletterSubmit}
          >
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
                <a href="#" className="ft-social-icon" aria-label="Instagram">
                  <IconInstagram />
                </a>
                <a href="#" className="ft-social-icon" aria-label="Facebook">
                  <IconFacebook />
                </a>
                <a href="#" className="ft-social-icon" aria-label="X (Twitter)">
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
                    <span className="ft-contact-icon"><img src={item.icon} alt="" /></span>
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
