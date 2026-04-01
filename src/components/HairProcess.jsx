"use client";

import "../styles/process.css";
import { motion } from "framer-motion";
import Link from "next/link";

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
const steps = [
  {
    number: "1",
    label: "Consultation",
    desc: "We assess your skin and goals to create a personalized plan.",
  },
  {
    number: "2",
    label: "Treatment",
    desc: "We perform the treatment using advanced technology.",
  },
  {
    number: "3",
    label: "Results",
    desc: "Enjoy visible improvements and long-term benefits.",
  },
];

const whyCards = [
  {
    title: "Experienced Specialists",
    desc: "Our trained professionals ensure safe and precise treatments.",
    icon:  '/images/card-icon1.png',
  },
  {
    title: "Modern Technology",
    desc: "We use advanced systems for effective and comfortable results.",
     icon:  '/images/card-icon3.png',
  },
  {
    title: "Personalized Care",
    desc: "Each treatment is customized for your needs and goals.",
    icon:  '/images/card-icon4.png',
  },
  {
    title: "Medical Oversight",
    desc: "Treatments are performed under professional medical supervision.",
     icon:  '/images/card-icon2.png',
  },
];

/* ─────────────────────────────────────
   CURVED ARROW SVG between steps
───────────────────────────────────── */
function CurvedArrow({ flip = false }) {
  return (
    <div className="step-arrow">
      <img src="/images/curve-arrow.png" alt="" />
    </div>
  );
}

/* ─────────────────────────────────────
   MAIN COMPONENT — Process
───────────────────────────────────── */
export default function Process() {
  return (
    <div className="process-wrapper" >
      {/* ══════════════════════════════════
          SECTION 1 — SIMPLE PROCESS
      ══════════════════════════════════ */}
      <section className="process-section" id="LHR">
        <motion.div className="container CustomContainer"
         variants={fadeUp(.6)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
          {/* Heading */}
          <h2 className="process-section section-title">
            Simple Process - Visible Results
          </h2>
          <p className="process-section section-subtitle pt-0">
            Personalized care from consultation to results.
          </p>

          {/* 3 Steps with curved arrows */}
          <div className="steps-row">
            {/* Step 1 */}
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-label">Consultation</div>
              <p className="step-desc">{steps[0].desc}</p>
            </div>

            {/* Arrow 1→2 (curves down) */}
            <CurvedArrow flip={false} />

            {/* Step 2 */}
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-label">Treatment</div>
              <p className="step-desc">{steps[1].desc}</p>
            </div>

            {/* Arrow 2→3 (curves up) */}
            <CurvedArrow flip={true} />

            {/* Step 3 */}
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-label">Results</div>
              <p className="step-desc">{steps[2].desc}</p>
            </div>
          </div>

          {/* Book FREE Session button */}
          <div className="process-cta-wrap">
             <Link href="https://www.joinblvd.com/b/elevate-aesthetics/widget#/visit-type" target="_blank">
            <button className="process-cta-btn">
              Book FREE Consult
              <span className="cta-circle">→</span>
            </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════
          SECTION 2 — WHY CHOOSE ELEVATE
      ══════════════════════════════════ */}
      <section className="why-choose-section">
        <div className="container CustomContainer">
          {/* Heading */}
          <motion.h2 className="why-choose-section section-title" variants={fadeUp(.3)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
            Why Clients Love Elevate Aesthetics?
          </motion.h2>
          <motion.p className="why-choose-section section-subtitle" variants={fadeUp(.6)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
            Expert care and advanced treatments you can trust.
          </motion.p>

          {/* 4 Cards */}
          <motion.div className="why-cards-row" variants={fadeUp(.8)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
            {whyCards.map((card) => (
              <div className="why-card  process-card" key={card.title}>
                <div className="why-card-icon"> <img src={card.icon} alt="" /></div>
                <div className="why-card-title">{card.title}</div>
                <p className="why-card-desc">{card.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
