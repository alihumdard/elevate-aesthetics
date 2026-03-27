'use client';

import "../styles/HairRemoval.css";

const whyCards = {
  left: {
    src: '/images/skin-treat1.png',
    icon: '/images/left-icon.svg',
    title: 'Safe & Effective Technology',
    desc: 'Performed by trained professionals using advanced laser systems.',
  },

  centerTop: {
    src: '/images/laser-removal-center-top.png',
    icon: '/images/center-top.png',
    title: 'Long-Lasting Results',
    desc: 'Laser technology targets hair follicles.'
  },

  centerBottom: {
    src: '/images/skin-treat2.png',
    icon: '/images/center-bottom.png',
    title: 'Save Time & Money',
    desc: 'No more constant shaving.'
  },

  right: {
    src: '/images/skin-treat3.png',
    icon: '/images/right-icon.png',
    title: 'Smooth Skin',
    desc: 'Enjoy silky-smooth skin.'
  }
};

function WhyCard({ card }) {
  return (
    <div className="why-card">
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
          Why Choose Laser Hair Removal?
        </h2>

        <p className="why-section section-subtitle">
          Laser hair removal offers a safe and effective way to reduce
          unwanted hair and enjoy smoother skin.
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