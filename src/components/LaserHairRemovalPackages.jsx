"use client";

import React, { useState } from "react";
import "../styles/HairRemoval.css";

/* DATA */

const womenRows = [
  {
    area: "Morpheus8 Full Face",
    single: "$700",
    singleText: "$750", // Naya content add kiya
    pkg: "$1950",
    sessions: "3 Sessions",
    old: "$2250",
  },
  {
    area: "Morpheus8 Body",
    single: "$600",
    singleText: "$700", // Naya content add kiya
    pkg: "$1650",
    sessions: "3 sessions",
    old: "$2100",
  },
  {
    area: "Microneedling with PRF",
    single: "$500",
    singleText: "$550", // Naya content add kiya
    pkg: "$1350",
    sessions: "3 sessions",
    old: "$1650",
  },
  {
    area: "Dermapeel",
    single: "$350",
    pkg: "$900",
    sessions: "3 sessions",
    old: "$1050",
  },
  {
    area: "PRF EZ Gel",
    single: "$650",
    pkg: "$1800",
    sessions: "3 sessions",
    old: "$1950",
  },
  {
    area: "PRF Hair Restoration",
    single: "$450",
    pkg: "$1000",
    sessions: "3 sessions",
    old: "$1350",
  },
  {
    area: "Emsculpt NEO Large Area",
    single: "$800",
    pkg: "$2000",
    sessions: "4 sessions",
    old: "$3200",
  },
  {
    area: "Emsculpt NEO Small Area",
    single: "$500",
    pkg: "$1500",
    sessions: "4 sessions",
    old: "$2000",
  },
];

/* Price Table */

function PriceTable({ rows }) {
  return (
    <>
      <div className="tableSpace">
        <table className="price-table">
          <thead>
            <tr>
              <th>Subservices</th>
              <th style={{ textAlign: "right" }}>Single</th>
              <th style={{ textAlign: "right" }}>Package</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => (
              <tr key={r.area}>
                <td>{r.area}</td>

                {/* Yahan sirf content change kiya hai, aapki purani Bootstrap classes use ki hain taake design na badle */}
                <td className="td-single">
                  <div className="d-flex align-items-center gap-1 justify-content-end">
                    {/* Yahan pehle singleText (3 Sessions) aayega, phir price ($700) aayega */}
                    {r.singleText && (
                      <span className="pkg-sessions">{r.singleText}</span>
                    )}
                    <span className="pkg-price">{r.single}</span>
                  </div>
                </td>

                <td className="td-pkg">
                  <div className="pkg-inner">
                    <div className="d-flex align-items-center gap-1 justify-content-end">
                      <span className="pkg-price">{r.pkg}</span>
                      <span className="pkg-sessions2">{r.sessions}</span>
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
      <div className="accord-body open">
        <PriceTable rows={rows} />
      </div>
    </div>
  );
}

/* MAIN COMPONENT */

export default function LaserHairRemovalPackages() {
  return (
    <section className="packages-section">
      <div className="container customContainer">
        <h2 className="packages-section section-title">
          Skin & Body Treatment Pricing
        </h2>

        <p className="packages-section section-subtitle">
          Choose single sessions or save with packages.
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
