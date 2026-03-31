'use client';

import { useState } from 'react';
import '../styles/ClientSay.css';
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

/* ─────────────────────────────────────
   REVIEWS DATA
───────────────────────────────────── */
const reviews = [
  {
    id: 1,
    text: "I've done my Botox and laser hair removal here and I'm so happy with the results. The staff is friendly, knowledgeable, and always makes me feel comfortable.",
    name: 'Mary B',
    date: 'a year ago',
    initial: 'M',
    avatarClass: 'cs-avatar-m',
    stars: 5,
  },
  {
    id: 2,
    text: 'The staff is incredibly knowledgeable, kind, and professional. Every treatment I\'ve had has left my skin glowing and healthier than ever.',
    name: 'Kristine Adamian',
    date: 'a year ago',
    initial: 'K',
    avatarClass: 'cs-avatar-k',
    stars: 5,
  },
  {
    id: 3,
    text: "Sammy does my laser hair removal and I don't know why I waited so long to try this treatment. The results are amazing!",
    name: 'Katie Borria',
    date: 'a year ago',
    initial: 'K',
    avatarClass: 'cs-avatar-kb',
    stars: 5,
  },
  {
    id: 4,
    text: "From the moment you walk in, the staff is welcoming and attentive. The practitioner explains everything and makes you feel comfortable.",
    name: 'Lisa Agha',
    date: 'a year ago',
    initial: 'L',
    avatarClass: 'cs-avatar-l',
    stars: 5,
  },
];

/* ─────────────────────────────────────
   FAQ DATA
───────────────────────────────────── */
const faqs = [
  {
    id: 1,
    question: 'How many sessions do I need?',
    answer: 'Most clients require 6–8 sessions for optimal results.',
    defaultOpen: true,
  },
  {
    id: 2,
    question: 'Is laser hair removal painful?',
    answer: 'Most clients describe the sensation as a mild snapping feeling, similar to a rubber band. Our advanced technology minimizes discomfort significantly.',
    defaultOpen: false,
  },
  {
    id: 3,
    question: 'Is it safe for all skin types?',
    answer: 'Yes! Our laser systems are designed to safely treat all skin tones and hair types. Our specialists will assess your skin during the consultation.',
    defaultOpen: false,
  },
  {
    id: 4,
    question: 'How long does a session take?',
    answer: 'Session length varies depending on the area being treated. Small areas like the upper lip take 5–10 minutes, while larger areas like the full back may take up to 45 minutes.',
    defaultOpen: false,
  },
];

/* ─────────────────────────────────────
   STAR RENDERER
───────────────────────────────────── */
function Stars({ count = 5, className = 'cs-card-star', wrapClass = 'cs-card-stars' }) {
  return (
    <div className={wrapClass}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={className}>★</span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────
   REVIEW CARD
───────────────────────────────────── */
function ReviewCard({ review }) {
  return (
    <div className="cs-review-card">
      <p className="cs-review-text">{review.text}</p>
      <div className="cs-reviewer">
        <div className="cs-reviewer-left">
          <div className={`cs-avatar ${review.avatarClass}`}>
            {review.initial}
          </div>
          <div className="cs-reviewer-info">
            <span className="cs-reviewer-name">{review.name}</span>
            <span className="cs-reviewer-date">{review.date}</span>
          </div>
        </div>
        <Stars count={review.stars} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   FAQ ACCORDION ITEM
───────────────────────────────────── */
function FaqItem({ faq }) {
  const [open, setOpen] = useState(faq.defaultOpen);

  return (
    <motion.div className={`cs-faq-item ${open ? 'cs-faq-open' : ''}`}  variants={fadeUp(.4)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
      <div
        className="cs-faq-header"
        onClick={() => setOpen((o) => !o)}
        role="button"
        aria-expanded={open}
      >
        <span className="cs-faq-question">{faq.question}</span>
        <div className="cs-faq-toggle">
          {open ? '−' : '+'}
        </div>
      </div>
      {open && (
        <div className="cs-faq-body">
          {faq.answer}
        </div>
      )}
    </motion.div>
  );
}

/* ─────────────────────────────────────
   MAIN COMPONENT — ClientSay
───────────────────────────────────── */
export default function ClientSay() {
  return (
    <div className="cs-wrapper">

      {/* ══════════════════════════════════
          SECTION 1 — WHAT OUR CLIENTS SAY
      ══════════════════════════════════ */}
      <section className="cs-reviews-section">
        <motion.div className="container CustomContainer"  variants={fadeUp(.3)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>

          {/* Heading */}
          <h2 className="cs-section-title">What Our Clients Say</h2>
          <p className="cs-section-sub">
            Visible results after a series of laser hair removal sessions.
          </p>

          {/* Layout: image left + cards right */}
          <div className="cs-reviews-layout">

            {/* LEFT — image with rating */}
            <motion.div className="cs-img-col"  variants={fadeUp(.4)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
              <img
                className="cs-hero-img"
                src="/images/client-say.png"
                alt="Client result"
              />
              <div className="cs-img-overlay" />
              <div className="cs-rating-block">
                <div className="cs-rating-score">4.9</div>
                <Stars
                  count={5}
                  className="cs-star"
                  wrapClass="cs-rating-stars"
                />
                <div className="cs-rating-label">Clients Rating</div>
              </div>
            </motion.div>

            {/* RIGHT — 2×2 review cards */}
            <motion.div className="cs-cards-grid"  variants={fadeUp(.8)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════
          SECTION 2 — FAQ ACCORDION
      ══════════════════════════════════ */}
      <section className="cs-faq-section" id="FAQ">
        <motion.div className="container CustomContainer" variants={fadeUp(.3)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }} >

          {/* Heading */}
          <h2 className="cs-section-title">Laser Hair Removal FAQ</h2>
          <p className="cs-section-sub">
            Answers to the most common questions about laser hair removal.
          </p>

          {/* FAQ accordion list */}
          <div className="cs-faq-list">
            {faqs.map((faq) => (
              <FaqItem key={faq.id} faq={faq} />
            ))}
          </div>

        </motion.div>
      </section>

    </div>
  );
}