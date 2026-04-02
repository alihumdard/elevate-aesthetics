"use client";

import React, { useState } from "react";
import "../styles/HairRemoval.css";
import { motion } from "framer-motion";
import Link from "next/link";

// animation fadeup
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: delay,
    },
  },
});

/* DATA */

const womenRows = [
  {
    area: "Morpheus8 Full Face",
     image: "/images/table4.png",
    single: "$700",
    singleText: "$750",
    pkg: "$1950",
    sessions: "3 Sessions",
    old: "$2250",
  },
  {
    area: "Morpheus8 Body",
    image: "/images/table4.png",
    single: "$600",
    singleText: "$700",
    pkg: "$1650",
    sessions: "3 sessions",
    old: "$2100",
  },
  {
    area: "Microneedling with PRF",
    image: "/images/table4.png",
    single: "$500",
    singleText: "$550", // Naya content add kiya
    pkg: "$1350",
    sessions: "3 sessions",
    old: "$1650",
  },
  {
    area: "Dermapeel",
    image: "/images/table4.png",
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
      <div className="tableSpace tablespace-second">
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
                <td className="d-flex">
                  <span className="pe-2">{r.area}</span>
                  <div className="d-flex align-items-center gap-2">
                    {r.image && (
                      <img
                        src={r.image}
                        alt=""
                        style={{ width: "14px", height: "auto" }}
                      />
                    )}
                  </div>
                </td>

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
    <motion.section
      className="packages-section"
      id="package"
      variants={fadeUp(0.3)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container customContainer">
        <h2 className="packages-section section-title">
          Skin & Body Treatment Pricing
        </h2>

        <p className="packages-section section-subtitle mb-3">
          Choose single sessions or save with packages.
        </p>
        <div className="process-cta-wrap mt-0 my-5">
          <Link
            href="https://www.joinblvd.com/b/elevate-aesthetics/widget#/visit-type"
            target="_blank"
          >
            <button className="process-cta-btn">
              Elevate My Glow
              <span className="cta-circle">→</span>
            </button>
          </Link>
        </div>

        <motion.div
          className="row g-4"
          variants={fadeUp(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
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
            <div className="packages-right second-extra">
              <img
                className="packages-img"
                src="/images/single-treatment.png"
                alt="Laser hair removal"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
