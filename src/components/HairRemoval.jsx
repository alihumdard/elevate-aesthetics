'use client';

import { useState } from 'react';
import "../styles/HairRemoval.css"

/* ─────────────────────────────────────
   DATA
───────────────────────────────────── */
const womenRows = [
  { area: 'Full Body',   single: '$300', pkg: '$1200', sessions: '4 sessions', old: '$1500' },
  { area: 'Shoulders',   single: '$40',  pkg: '$160',  sessions: '4 sessions', old: '$200'  },
  { area: 'Full Back',   single: '$60',  pkg: '$240',  sessions: '4 sessions', old: '$300'  },
  { area: 'Half Back',   single: '$30',  pkg: '$120',  sessions: '4 sessions', old: '$150'  },
  { area: 'Areola',      single: '$20',  pkg: '$80',   sessions: '4 sessions', old: '$100'  },
  { area: 'Abdomen',     single: '$30',  pkg: '$120',  sessions: '4 sessions', old: '$150'  },
  { area: 'Tummy Line',  single: '$20',  pkg: '$80',   sessions: '4 sessions', old: '$100'  },
  { area: 'Full Bikini', single: '$60',  pkg: '$240',  sessions: '4 sessions', old: '$300'  },
];

const menRows = [
  { area: 'Full Body',  single: '$350', pkg: '$1400', sessions: '4 sessions', old: '$1750' },
  { area: 'Chest',      single: '$50',  pkg: '$200',  sessions: '4 sessions', old: '$250'  },
  { area: 'Full Back',  single: '$70',  pkg: '$280',  sessions: '4 sessions', old: '$350'  },
  { area: 'Beard',      single: '$40',  pkg: '$160',  sessions: '4 sessions', old: '$200'  },
  { area: 'Abdomen',    single: '$40',  pkg: '$160',  sessions: '4 sessions', old: '$200'  },
  { area: 'Shoulders',  single: '$50',  pkg: '$200',  sessions: '4 sessions', old: '$250'  },
];

const whyCards = {
  left: {
    src: '/images/laser-removal-left.png',
    alt: 'Safe & Effective Technology',
    icon: '/images/left-icon.svg',
    title: 'Safe & Effective Technology',
    desc: 'Performed by trained professionals using advanced laser systems.',
  },
  centerTop: {
    src: '/images/laser-removal-center-top.png',
    alt: 'Long-Lasting Results',
    icon: '/images/center-top.png',
    title: 'Long-Lasting Results',
    desc: 'Laser technology targets hair follicles to significantly reduce future hair growth.',
  },
  centerBottom: {
    src: '/images/laser-removal-bottom.png',
    alt: 'Save Time & Money',
    icon: '/images/center-bottom.png',
    title: 'Save Time & Money',
    desc: 'No more constant shaving, waxing, or costly razor blades.',
  },
  right: {
    src: '/images/laser-removal-right.png',
    alt: 'Smooth Skin',
    icon: '/images/right-icon.png',
    title: 'Smooth Skin',
    desc: 'Enjoy silky-smooth skin without irritation, ingrown hairs, or razor bumps.',
  },
};

/* ─────────────────────────────────────
   PRICE TABLE SUB-COMPONENT
───────────────────────────────────── */
function PriceTable({ rows }) {
  return (
    <>
      <div className="promo-badge">
        BUY 4 SESSIONS AND GET THE 5TH ONE FOR FREE
      </div>
      <div className="tableSpace">
          <table className="price-table">
        <thead>
          <tr>
            <th>Body Areas</th>
            <th style={{ textAlign: 'right' }}>Single</th>
            <th style={{ textAlign: 'right' }}>Package</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.area}>
              <td>{r.area}</td>
              <td className="td-single">{r.single}</td>
              <td className="td-pkg">
                <div className="pkg-inner">
                  <div className="d-flex align-items-center gap-1 justify-content-end">
                    <span className="pkg-price">{r.pkg}</span>
                    <span className="pkg-sessions">{r.sessions}</span>
                     <span className="pkg-old">{r.old}</span>
                  </div>
                 
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
     
    </>
  );
}

/* ─────────────────────────────────────
   ACCORDION SUB-COMPONENT
───────────────────────────────────── */
function Accordion({ label, rows, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
   <div className="accord-item">
  <div className="accord-header" onClick={() => setOpen((o) => !o)}>
    <h3 className="accord-header-title">{label}</h3>
    <div className="accord-icon">{open ? '−' : '+'}</div>
  </div>

  {open && (
   <div className={`accord-body ${open ? "open" : ""}`}>
     <PriceTable rows={rows} />
        
</div>
  )}
</div>
  );
}

/* ─────────────────────────────────────
   WHY CARD SUB-COMPONENT
───────────────────────────────────── */
function WhyCard({ card }) {
  return (
    <div className="why-card">
      <img src={card.src} alt={card.alt} />
      <div className="why-overlay"></div>

      <div className="why-card-info">
        <span className="why-card-icon"> <img 
      src={card.icon} 
      alt={card.title} 
      className="why-card-icon" 
    /></span>
        <div className="why-card-title">{card.title}</div>
        <div className="why-card-desc">{card.desc}</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   MAIN COMPONENT — HairRemoval
───────────────────────────────────── */
export default function HairRemoval() {
  return (
    <div className="hair-removal-wrapper">

      {/* ══════════════════════════════════
          SECTION 1 — LASER PACKAGES
      ══════════════════════════════════ */}
      <section className="packages-section">
        <div className="container customContainer">

          {/* Top heading */}
          <h2 className="packages-section section-title">
            Laser Hair Removal Packages
          </h2>
          <p className="packages-section section-subtitle">
            Choose the package that fits your needs.
          </p>

          {/* Two-column layout: table left, image right */}
          <div className="row g-4 align-items-start">

            {/* LEFT — accordion + CTA */}
            <div className="col-lg-6 col-12">
              <div className="packages-left">
                <Accordion
                  label="WOMEN'S LASER HAIR REMOVAL"
                  rows={womenRows}
                  defaultOpen={true}
                />
                <Accordion
                  label="MEN'S LASER HAIR REMOVAL"
                  rows={menRows}
                  defaultOpen={false}
                />
                <button className="cta-btn">
                  Book Your Free Treatment Now
                  <span className="cta-circle big-cta">
      <span className="cta-bg"></span>
      <span className="arrow">→</span>
    </span>
                </button>
              </div>
            </div>

            {/* RIGHT — image */}
            <div className="col-lg-6 col-12">
              <div className="packages-right">
                <img
                  className="packages-img"
                  src="/images/hair-removal.png"
                  alt="Laser hair removal model"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 2 — WHY CHOOSE
      ══════════════════════════════════ */}
      <section className="why-section">
        <div className=" container customContainer">

          {/* Top heading */}
          <h2 className="why-section section-title">
            Why Choose Laser Hair Removal?
          </h2>
          <p className="why-section section-subtitle">
            Laser hair removal offers a safe and effective way to reduce
            unwanted hair and enjoy smoother skin with long-lasting results.
          </p>

          {/* Three-column image grid */}
          <div className="why-grid">

            {/* LEFT — single tall image */}
            <div className="why-col-left">
              <WhyCard card={whyCards.left} />
            </div>

            {/* CENTER — two stacked images */}
            <div className="why-col-center">
              <WhyCard card={whyCards.centerTop} />
              <WhyCard card={whyCards.centerBottom} />
            </div>

            {/* RIGHT — single tall image */}
            <div className="why-col-right">
              <WhyCard card={whyCards.right} />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}