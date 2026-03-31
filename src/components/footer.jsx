"use client";

import { useState } from "react";
import "../styles/footer.css";
import { motion } from "framer-motion";


// animation 
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      delay: delay
    },
  },
});
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
      <motion.div className="ft-newsletter"  variants={fadeUp(.2)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
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
          <motion.h3 className="ft-newsletter-title"  variants={fadeUp(.3)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>Stay In The Loop</motion.h3>
          <motion.p className="ft-newsletter-sub"  variants={fadeUp(.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
            Get updates on new treatments, promotions, and clinic news.
          </motion.p>

          <motion.form
            className="ft-newsletter-form"
            onSubmit={handleNewsletterSubmit}
            variants={fadeUp(.8)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
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
          </motion.form>
        </div>
      </motion.div>

      {/* ══════════════════════════════════
          MAIN FOOTER
      ══════════════════════════════════ */}
      <footer className="ft-footer" >
        <div className="container">
          <div className="ft-footer-grid"  >
            {/* ── Col 1: Logo + Social ── */}
            <motion.div className="ft-col-brand" variants={fadeUp(.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
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
            </motion.div>

            {/* ── Col 2: Contact Info ── */}
            <motion.div className="ft-col-contact" variants={fadeUp(.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
              <div className="ft-col-title">Contact Info</div>
              <div className="ft-contact-list">
                {contactItems.map((item, i) => (
                  <div key={i} className="ft-contact-item">
                    <span className="ft-contact-icon"><img src={item.icon} alt="" /></span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Col 3: Links ── */}
            <motion.div className="ft-col-links" variants={fadeUp(.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
              <div className="ft-col-title">Links</div>
              <div className="ft-links-list">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="ft-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* ── Col 4: Legal ── */}
            <motion.div className="ft-col-legal" 
            variants={fadeUp(.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
              <div className="ft-col-title">Legal</div>
              <div className="ft-legal-list">
                {legalLinks.map((link) => (
                  <a key={link.label} href={link.href} className="ft-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
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
