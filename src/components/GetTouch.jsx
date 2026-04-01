'use client';

import { useState } from 'react';
import '../styles/GetTouch.css';
import { motion } from "framer-motion";



/* ─────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────── */

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

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      delay: delay
    },
  },
});

const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      delay: delay
    },
  },
});
/* ─────────────────────────────────────
   OPENING HOURS DATA
───────────────────────────────────── */
const openingHours = [
  { day: 'Monday – Thursday', hours: '10:00 AM – 5:00 PM' },
  { day: 'Friday',            hours: '10:00 AM – 4:00 PM' },
  { day: 'Saturday',          hours: '9:00 AM – 2:00 PM'  },
  { day: 'Sunday',            hours: 'Closed', closed: true },
];

/* ─────────────────────────────────────
   GOOGLE MAPS EMBED URL
   Address: 509 1/2 E. Broadway, Glendale, CA 91205
───────────────────────────────────── */
const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.3!2d-118.2551!3d34.1477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0f2b2b2b2b2%3A0x1234567890abcdef!2s509%201%2F2%20E%20Broadway%2C%20Glendale%2C%20CA%2091205!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus';

/* ─────────────────────────────────────
   MAIN COMPONENT — GetTouch
───────────────────────────────────── */
export default function GetTouch({
  intouch
}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="gt-wrapper">

      {/* ══════════════════════════════════
          SECTION 1 — GET IN TOUCH (FORM)
      ══════════════════════════════════ */}
      <section className="gt-contact-section" id="get-touch">
        <div className="container">
          <div className="gt-contact-layout">

            {/* ── LEFT: Title + Form ── */}
            <div className="gt-form-col" >
              <motion.h2 className="gt-title"  variants={fadeUp(.2)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>Get In Touch</motion.h2>
              <motion.p className="gt-subtitle"  variants={fadeUp(.4)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
                Book your consultation or send us a message.
              </motion.p>

              <motion.form className="gt-form" onSubmit={handleSubmit}  variants={fadeLeft(.8)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>

                {/* Row 1: First Name + Last Name */}
                <div className="gt-row">
                  <div className="gt-field-group">
                    <label className="gt-label">
                      First Name<sup>*</sup>
                    </label>
                    <input
                      className="gt-input"
                      type="text"
                      name="firstName"
                      placeholder="Your First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="gt-field-group">
                    <label className="gt-label">
                      Last Name<sup>*</sup>
                    </label>
                    <input
                      className="gt-input"
                      type="text"
                      name="lastName"
                      placeholder="Your Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Email */}
                <div className="gt-row">
                  <div className="gt-field-group">
                    <label className="gt-label">
                      Phone<sup>*</sup>
                    </label>
                    <input
                      className="gt-input"
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="gt-field-group">
                    <label className="gt-label">
                      Email<sup>*</sup>
                    </label>
                    <input
                      className="gt-input"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Row 3: Textarea */}
                <div className="gt-field-group">
                  <label className="gt-label">How We Can Help?</label>
                  <textarea
                    className="gt-textarea"
                    name="message"
                    placeholder="Type Here"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit button */}
                <button type="submit" className="gt-send-btn">
                  Send A Message
                  <span className="gt-send-arrow">➤</span>
                </button>

              </motion.form>
            </div>

            {/* ── RIGHT: Image + Inquiry Card ── */}
            <motion.div className="gt-right-col"  variants={fadeRight(.10)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>

              {/* Rounded photo */}
              <img
                className="gt-hero-img"
                src={intouch}
                alt="Elevate Aesthetics clients"
              />

              {/* General Inquiries card */}
              <div className="gt-inquiry-card">
                <div className="gt-inquiry-title">General Inquiries</div>
                <div className="gt-inquiry-item">
                  <span className="gt-inquiry-icon">📞</span>
                  <span>(818) 855-8405</span>
                </div>
                <div className="gt-inquiry-item">
                  <span className="gt-inquiry-icon">✉</span>
                  <span>hello@elevateaesthetics.la</span>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 2 — MAP WITH OVERLAY
      ══════════════════════════════════ */}
      <motion.section className="gt-map-section"  variants={fadeUp(.3)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
        <div className="container h-100 position-relative">
        {/* Google Maps iframe */}
        <iframe
          className="gt-map-iframe"
          src={MAP_EMBED_URL}
          title="Elevate Aesthetics Location"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Transparent overlay card */}
        <div className="gt-map-overlay">

          {/* Clinic info */}
          <div className="gt-overlay-clinic">Visit Elevate Aesthetics</div>
          <div className="gt-overlay-address">
            509 1/2 E. Broadway, Glendale, CA 91205
          </div>

          <div className="gt-overlay-divider" />

          {/* Opening Hours */}
          <div className="gt-overlay-hours-label">Opening Hours</div>

          <table className="gt-hours-table">
            <tbody>
              {openingHours.map((row) => (
                <tr key={row.day}>
                  <td>{row.day}</td>
                  <td className={row.closed ? 'gt-closed' : ''}>
                    {row.hours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Get Directions button */}
          <a
            href="https://maps.google.com/?q=509+E+Broadway,+Glendale,+CA+91205"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="gt-directions-btn">Get Directions</button>
          </a>

        </div>
</div>
      </motion.section>

    </div>
  );
}