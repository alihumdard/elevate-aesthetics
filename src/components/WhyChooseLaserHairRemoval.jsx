"use client";

import "../styles/HairRemoval.css";
import { motion } from "framer-motion";

// animation fadeup 
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

const whyCards = {
  left: {
    src: "/images/skin-treat1.png",
    icon: "/images/left-icon.svg",
    title: "Visible Results",
    desc: "See noticeable improvements in your skin and body after just a few sessions.",
  },

  centerTop: {
    src: "/images/laser-removal-center-top.png",
    icon: "/images/center-top.png",
    title: "Advanced Technology",
    desc: "We use modern, clinically proven devices for safe and effective treatments.",
  },

  centerBottom: {
    src: "/images/skinn-treat3.png",
    icon: "/images/center-bottom.png",
    title: "Customized Treatments",
    desc: "Every treatment is tailored to your skin type and goals.",
  },

  right: {
    src: "/images/skin-treat2.png",
    icon: "/images/right-icon.png",
    title: "Minimal Downtime",
    desc: "Most treatments require little to no recovery time.",
  },
};

function WhyCard({ card }) {
  return (
    <div className="why-card clr-white-card">
      <img src={card.src} alt={card.title} />
      <div className="why-overlay"></div>

      <div className="why-card-info">
        <img src={card.icon} className="why-card-icon" />
        <div className="why-card-title">{card.title}</div>
        <div className="why-card-desc">{card.desc}</div>
      </div>
    </div>
  );
}

export default function WhyChooseLaserHairRemoval() {
  return (
    <motion.section className="why-section"  variants={fadeUp(.3)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
      <div className="container customContainer">
        <h2 className="why-section section-title">
          Why Choose Our Skin & Body Treatments?
        </h2>

        <p className="why-section section-subtitle">
          Our treatments are designed to improve skin texture, boost collagen,
          and enhance your natural beauty with safe and effective methods.
        </p>

        <div className="why-grid">
          <motion.div className="why-col-left"  variants={fadeUp(.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
            <WhyCard card={whyCards.left} />
          </motion.div>

          <motion.div className="why-col-center"  variants={fadeUp(1)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
            <WhyCard card={whyCards.centerTop} />
            <WhyCard card={whyCards.centerBottom} />
          </motion.div>

          <motion.div className="why-col-right"  variants={fadeUp(1.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
            <WhyCard card={whyCards.right} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
