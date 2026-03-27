'use client';

import { useState } from 'react';
import "../styles/HairRemoval.css";

/* DATA */

const womenRows = [
  { area: 'Morpheus8 Full Face', single: '$700', pkg: '$1950', sessions: '3 Sessions', old: '$2250' },
  { area: 'Morpheus8 Body', single: '$600', pkg: '$1650', sessions: '3 sessions', old: '$2100' },
  { area: 'Microneedling with PRF', single: '$500', pkg: '$1350', sessions: '3 sessions', old: '$1650' },
  { area: 'Dermapeel', single: '$350', pkg: '$900', sessions: '3 sessions', old: '$1050' },
  { area: 'PRF EZ Gel', single: '$650', pkg: '$1800', sessions: '3 sessions', old: '$1950' },
  { area: 'PRF Hair Restoration', single: '$450', pkg: '$1000', sessions: '3 sessions', old: '$1350' },
  { area: 'Emsculpt NEO Large Area', single: '$800', pkg: '$2000', sessions: '4 sessions', old: '$3200' },
  { area: 'Emsculpt NEO Small Area', single: '$500', pkg: '$1500', sessions: '4 sessions', old: '$2000' },
];

// const menRows = [
//   { area: 'Full Body', single: '$350', pkg: '$1400', sessions: '4 sessions', old: '$1750' },
//   { area: 'Chest', single: '$50', pkg: '$200', sessions: '4 sessions', old: '$250' },
//   { area: 'Full Back', single: '$70', pkg: '$280', sessions: '4 sessions', old: '$350' },
//   { area: 'Beard', single: '$40', pkg: '$160', sessions: '4 sessions', old: '$200' },
//   { area: 'Abdomen', single: '$40', pkg: '$160', sessions: '4 sessions', old: '$200' },
//   { area: 'Shoulders', single: '$50', pkg: '$200', sessions: '4 sessions', old: '$250' },
// ];

/* Price Table */

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

/* Accordion */

function Accordion({ label, rows, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="accord-item">

      <div className="accord-header" onClick={() => setOpen(!open)}>
        <h3 className="accord-header-title">{label}</h3>
        <div className="accord-icon">{open ? '−' : '+'}</div>
      </div>

      {open && (
        <div className="accord-body open">
          <PriceTable rows={rows} />
        </div>
      )}

    </div>
  );
}

/* MAIN COMPONENT */

export default function LaserHairRemovalPackages() {
  return (
    <section className="packages-section">
      <div className="container customContainer">

        <h2 className="packages-section section-title">
          Laser Hair Removal Packages
        </h2>

        <p className="packages-section section-subtitle">
          Choose the package that fits your needs.
        </p>

        <div className="row g-4 align-items-start">

          {/* LEFT */}
          <div className="col-lg-6 col-12">
            <div className="packages-left">

              <Accordion
                label="WOMEN'S LASER HAIR REMOVAL"
                rows={womenRows}
                defaultOpen={true}
              />

              {/* <Accordion
                label="MEN'S LASER HAIR REMOVAL"
                rows={menRows}
              />

              <button className="cta-btn">
                Book Your Free Treatment Now
                <span className="cta-circle big-cta">
                  <span className="cta-bg"></span>
                  <span className="arrow">→</span>
                </span>
              </button> */}

            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6 col-12">
            <div className="packages-right">
              <img
                className="packages-img"
                src="/images/single-treatment.png"
                alt="Laser hair removal"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}