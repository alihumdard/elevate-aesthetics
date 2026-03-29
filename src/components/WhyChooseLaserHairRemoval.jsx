"use client";

import "../styles/HairRemoval.css";

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
    <section className="why-section">
      <div className="container customContainer">
        <h2 className="why-section section-title">
          Why Choose Our Skin & Body Treatments?
        </h2>

        <p className="why-section section-subtitle">
          Our treatments are designed to improve skin texture, boost collagen,
          and enhance your natural beauty with safe and effective methods.
        </p>

        <div className="why-grid">
          <div className="why-col-left">
            <WhyCard card={whyCards.left} />
          </div>

          <div className="why-col-center">
            <WhyCard card={whyCards.centerTop} />
            <WhyCard card={whyCards.centerBottom} />
          </div>

          <div className="why-col-right">
            <WhyCard card={whyCards.right} />
          </div>
        </div>
      </div>
    </section>
  );
}
