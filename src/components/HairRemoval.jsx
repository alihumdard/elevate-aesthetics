"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/HairRemoval.css";
import Link from "next/link";

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
   DATA
───────────────────────────────────── */

const womenRows = [
  {
    area: "Full Body",
    single: "$300",
    pkg: "$1200",
    sessions: "/5 sessions",
    old: "$1500",
  },
  {
    area: "Shoulders",
    single: "$40",
    pkg: "$160",
    sessions: "/5 sessions",
    old: "$200",
  },
  {
    area: "Full Back",
    single: "$60",
    pkg: "$240",
    sessions: "/5 sessions",
    old: "$300",
  },
  {
    area: "Half Back",
    single: "$30",
    pkg: "$120",
    sessions: "/5 sessions",
    old: "$150",
  },
  {
    area: "Areola",
    single: "$20",
    pkg: "$80",
    sessions: "/5 sessions",
    old: "$100",
  },
  {
    area: "Abdomen",
    single: "$30",
    pkg: "$120",
    sessions: "/5 sessions",
    old: "$150",
  },
  {
    area: "Tummy Line",
    single: "$20",
    pkg: "$80",
    sessions: "/5 sessions",
    old: "$100",
  },
  {
    area: "Full Bikini",
    single: "$60",
    pkg: "$240",
    sessions: "/5 sessions",
    old: "$300",
  },
  {
    area: "Full Legs",
    single: "$150",
    pkg: "$600",
    sessions: "/5 sessions",
    old: "$750",
  },
  {
    area: "Half Legs",
    single: "$70",
    pkg: "$280",
    sessions: "/5 sessions",
    old: "$350",
  },
  {
    area: "Full Arms",
    single: "$60",
    pkg: "$240",
    sessions: "/5 sessions",
    old: "$300",
  },
  {
    area: "Half Arms",
    single: "$40",
    pkg: "$160",
    sessions: "/5 sessions",
    old: "$200",
  },
  {
    area: "Partial Bikini",
    single: "$40",
    pkg: "$160",
    sessions: "/5 sessions",
    old: "$200",
  },
  {
    area: "Full Face",
    single: "$40",
    pkg: "$160",
    sessions: "/5 sessions",
    old: "$200",
  },
  {
    area: "Partial Face",
    single: "$25",
    pkg: "$100",
    sessions: "/5 sessions",
    old: "$125",
  },
  {
    area: "Upper Lip/Chin",
    single: "$20",
    pkg: "$80",
    sessions: "/5 sessions",
    old: "$100",
  },
  {
    area: "Full Neck (front and back)",
    single: "$40",
    pkg: "$160",
    sessions: "/5 sessions",
    old: "$200",
  },
  {
    area: "Inner Thigh",
    single: "$30",
    pkg: "$120",
    sessions: "/5 sessions",
    old: "$150",
  },
  {
    area: "15/Min Touch up",
    single: "$80",
    pkg: "$320",
    sessions: "/5 sessions",
    old: "$400",
  },
];

const menRows = [
  {
    area: "Full Body",
    single: "$380",
    pkg: "$1520",
    sessions: "/5 sessions",
    old: "$1900",
  },
  {
    area: "Shoulders",
    single: "$50",
    pkg: "$200",
    sessions: "/5 sessions",
    old: "$250",
  },
  {
    area: "Full Back",
    single: "$80",
    pkg: "$320",
    sessions: "/5 sessions",
    old: "$400",
  },
  {
    area: "Half Back",
    single: "$50",
    pkg: "$200",
    sessions: "/5 sessions",
    old: "$250",
  },
  {
    area: "Upper Chest",
    single: "$60",
    pkg: "$240",
    sessions: "/5 sessions",
    old: "$300",
  },
  {
    area: "Abdomen",
    single: "$40",
    pkg: "$160",
    sessions: "/5 sessions",
    old: "$200",
  },
  {
    area: "Hands and Toes",
    single: "$30",
    pkg: "$120",
    sessions: "/5 sessions",
    old: "$150",
  },
  {
    area: "Full Bikini ",
    single: "$80",
    pkg: "$320",
    sessions: "/5 sessions",
    old: "$400",
  },
  {
    area: "Partial Bikini",
    single: "$50",
    pkg: "$200",
    sessions: "/5 sessions",
    old: "$250",
  },
  {
    area: "Buttocks",
    single: "$50",
    pkg: "$200",
    sessions: "/5 sessions",
    old: "$250",
  },
  {
    area: "Underarms",
    single: "$20",
    pkg: "$80",
    sessions: "/5 sessions",
    old: "$100",
  },
  {
    area: "Full Face",
    single: "$50",
    pkg: "$200",
    sessions: "/5 sessions",
    old: "$250",
  },
  {
    area: "Partial Face",
    single: "$30",
    pkg: "$120",
    sessions: "/5 sessions",
    old: "$250",
  },
  {
    area: "Ears",
    single: "$20",
    pkg: "$80",
    sessions: "/5 sessions",
    old: "$100",
  },
  {
    area: "Full Neck",
    single: "$50",
    pkg: "$200",
    sessions: "/5 sessions",
    old: "$250",
  },
  {
    area: "Partial Neck",
    single: "$30",
    pkg: "$120",
    sessions: "/5 sessions",
    old: "$150",
  },
];

const whyCards = {
  left: {
    src: "/images/laser-removal-left.png",
    alt: "Safe & Effective Technology",
    icon: "/images/left-icon.svg",
    title: "Safe & Effective Technology",
    desc: "Performed by trained professionals using advanced laser systems.",
  },
  centerTop: {
    src: "/images/laser-removal-center-top.png",
    alt: "Long-Lasting Results",
    icon: "/images/center-top.png",
    title: "Long-Lasting Results",
    desc: "Laser technology targets hair follicles to significantly reduce future hair growth.",
  },
  centerBottom: {
    src: "/images/laser-removal-bottom.png",
    alt: "Save Time & Money",
    icon: "/images/center-bottom.png",
    title: "Save Time & Money",
    desc: "No more constant shaving, waxing, or costly salon visits.",
  },
  right: {
    src: "/images/laser-removal-right.png",
    alt: "Smooth Skin",
    icon: "/images/right-icon.png",
    title: "Smooth Skin",
    desc: "Enjoy softer skin without irritation, ingrown hairs, or razor bumps.",
  },
};

/* PRICE TABLE */

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
              <th style={{ textAlign: "right" }}>Single</th>
              <th style={{ textAlign: "right" }}>Package</th>
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

/* ACCORDION */

function Accordion({ label, isOpen, onToggle, rows }) {
  return (
    <div className="accord-item">
      <div
        className="accord-header"
        onClick={onToggle}
        style={{ cursor: "pointer" }}
      >
        <h3 className="accord-header-title">{label}</h3>
        <div className="accord-icon">{isOpen ? "−" : "+"}</div>
      </div>

      <div className={`accord-body ${isOpen ? "open" : ""}`}>
        <PriceTable rows={rows} />
      </div>
    </div>
  );
}

/* WHY CARD */

function WhyCard({ card }) {
  return (
    <div className="why-card">
      <img src={card.src} alt={card.alt} />
      <div className="why-overlay"></div>

      <div className="why-card-info">
        <img src={card.icon} alt="" className="why-card-icon" />
        <div className="why-card-title">{card.title}</div>
        <div className="why-card-desc">{card.desc}</div>
      </div>
    </div>
  );
}

/* MAIN */

export default function HairRemoval() {
  const [activeTab, setActiveTab] = useState("women");

const currentImage =

  activeTab === "women"

    ? "/images/hair-removal.png"

    : "/images/men-removal.png";
  return (
    <div className="hair-removal-wrapper">
      {/* Packages Section */}

      <section className="packages-section" id="package">
        <div className="container customContainer">
          <motion.h2
            className="section-title"
            variants={fadeUp(.2)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
          >
            Laser Hair Removal Packages
          </motion.h2>

          <motion.p
            className="section-subtitle"
            variants={fadeUp(.4)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
          >
            Choose the package that fits your needs.
          </motion.p>

         <div className="row g-5">
  <div className="col-lg-7 col-12">
    <motion.div
      className="packages-left adjust-width"
      variants={fadeUp(1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Accordion
        label="WOMEN'S LASER HAIR REMOVAL"
        rows={womenRows}
        isOpen={activeTab === "women"}
        onToggle={() => setActiveTab(activeTab === "women" ? null : "women")}
      />

      <Accordion
        label="MEN'S LASER HAIR REMOVAL"
        rows={menRows}
        isOpen={activeTab === "men"}
        onToggle={() => setActiveTab(activeTab === "men" ? null : "men")}
      />
       <Link href="https://www.joinblvd.com/b/elevate-aesthetics/widget#/visit-type" target="_blank">
      <button className="cta-btn mt-3">
        Book Your Free Treatment Now
        <span className="cta-circle big-cta">
          <span className="cta-bg"></span>
          <span className="arrow">→</span>
        </span>
      </button>
      </Link>
    </motion.div>
  </div>

  <div className="col-lg-5 col-12">
    <motion.div
      className="packages-right"
      variants={fadeLeft(1.3)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <img
        className="packages-img packages-width"
        src={currentImage}
        alt="Laser hair removal"
      />
    </motion.div>
  </div>
</div>
        </div>
      </section>

      {/* Why Section */}

      <section className="why-section">
        <div className="container customContainer">
          <motion.h2
            className="section-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Why Choose Laser Hair Removal?
          </motion.h2>

          <motion.p
            className="section-subtitle"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Laser hair removal offers a safe and effective way to reduce
            unwanted hair.
          </motion.p>

          <div
            className="why-grid differ-clr"
            // variants={fadeUp}
            // initial="hidden"
            // whileInView="visible"
            //  transition={{ delay: 3 }}
            // viewport={{ once: true }}
          >
            <motion.div
              className="why-col-left"
              variants={fadeUp(.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
            >
              <WhyCard card={whyCards.left} />
            </motion.div>

            <motion.div
              className="why-col-center"
              variants={fadeUp(1)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
            >
              <WhyCard card={whyCards.centerTop} />
              <WhyCard card={whyCards.centerBottom} />
            </motion.div>

            <motion.div
              className="why-col-right"
              variants={fadeUp(1.3)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
            >
              <WhyCard card={whyCards.right} />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
