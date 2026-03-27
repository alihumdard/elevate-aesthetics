'use client';

import styles from '@/styles/Hero.module.css';
import BadgeWheel from './BadgeWheel';

export default function Hero() {
  return (
    <div className="custom-container">
    <div className={styles.heroWrapper}>
      <section className={styles.hero}>
        {/* Background image */}
        <img
          className={styles.heroBg}
          src="/images/banner-image.jpg"
          alt="Smooth skin laser hair removal"
        />

        {/* Dark overlay */}
        <div className={styles.overlay} />

        {/* Headline */}
        <div className={styles.heroText}>
          <h1>Smooth Skin. No More Shaving.</h1>
          <p>
            Advanced laser hair removal for long-lasting results,<br />
            smooth skin, and confidence every day.
          </p>
        </div>

       <div className={styles.curveContainer}>
  <img
    className={styles.curveBg}
    src="/images/curve.png"
    alt="curve background"
  />
   
  <button className={styles.bookNowBtn}><span className="cta-circle">
      <span className="cta-bg"></span>
      <span className="arrow">→</span>
    </span> Book Now</button>
</div>

 <BadgeWheel />
      </section>
    </div>
      </div>
  );
}
