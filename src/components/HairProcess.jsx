'use client';

import '../styles/process.css';

/* ─────────────────────────────────────
   DATA
───────────────────────────────────── */
const steps = [
  {
    number: '1',
    label: 'Consultation',
    desc: 'We assess your skin and goals to create a personalized plan.',
  },
  {
    number: '2',
    label: 'Treatment',
    desc: 'We perform the treatment using advanced technology.',
  },
  {
    number: '3',
    label: 'Results',
    desc: 'Enjoy visible improvements and long-term benefits.',
  },
];

const whyCards = [
  {
    title: 'Experienced Specialists',
    desc: 'Our trained professionals ensure safe and precise treatments.',
    icon: (
      /* person / specialist icon */
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        <path d="M15 6.5c.8-.5 1.5-1.4 1.5-2.5" strokeDasharray="2 1" />
        <path d="M9 6.5c-.8-.5-1.5-1.4-1.5-2.5" strokeDasharray="2 1" />
      </svg>
    ),
  },
  {
    title: 'Modern Technology',
    desc: 'We use advanced laser systems designed for effective and comfortable treatments.',
    icon: (
      /* lightning / tech icon */
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Personalized Care',
    desc: 'Every treatment plan is customized for your skin and hair type.',
    icon: (
      /* heart icon */
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0
         0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Medical Oversight',
    desc: 'Treatments are performed under professional medical supervision for maximum safety.',
    icon: (
      /* shield / oversight icon */
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
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
    <div className="process-wrapper">

      {/* ══════════════════════════════════
          SECTION 1 — SIMPLE PROCESS
      ══════════════════════════════════ */}
      <section className="process-section">
        <div className="container CustomContainer">

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
              <div className="step-label">Laser Treatment</div>
              <p className="step-desc">{steps[1].desc}</p>
            </div>

            {/* Arrow 2→3 (curves up) */}
            <CurvedArrow flip={true} />

            {/* Step 3 */}
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-label">Gradual Hair Reduction</div>
              <p className="step-desc">{steps[2].desc}</p>
            </div>

          </div>

          {/* Book FREE Session button */}
          <div className="process-cta-wrap">
            <button className="process-cta-btn">
              Book FREE Session
              <span className="cta-circle">→</span>
            </button>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 2 — WHY CHOOSE ELEVATE
      ══════════════════════════════════ */}
      <section className="why-choose-section">
        <div className="container CustomContainer">

          {/* Heading */}
          <h2 className="why-choose-section section-title">
            Why Clients Love Elevate Aesthetics? 
             
          </h2>
          <p className="why-choose-section section-subtitle">
            Expert care and advanced treatments you can trust.
          </p>

          {/* 4 Cards */}
          <div className="why-cards-row">
            {whyCards.map((card) => (
              <div className="why-card" key={card.title}>
                <div className="why-card-icon">
                  {card.icon}
                </div>
                <div className="why-card-title">{card.title}</div>
                <p className="why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}