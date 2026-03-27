'use client';

import styles from '@/styles/Hero.module.css';
import BadgeWheel from './BadgeWheel';

export default function Hero({ 
  title, 
  subtitle, 
  bgImage, 
  buttonText, 
  curveImage = '/images/curve.png' // default curve
}) {
  return (
    <div className="custom-container">
      <div className={styles.heroWrapper}>
        <section className={styles.hero}>
          {/* Background image */}
          <img
            className={styles.heroBg}
            src={bgImage}
            alt={title}
          />

          {/* Dark overlay */}
          <div className={styles.overlay} />

          {/* Headline */}
          <div className={styles.heroText}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>

          {/* Curve + Button */}
          <div className={styles.curveContainer}>
            <img
              className={styles.curveBg}
              src={curveImage}
              alt="curve background"
            />
            <button className={styles.bookNowBtn}>
              <span className="cta-circle">
                <span className="cta-bg"></span>
                <span className="arrow">→</span>
              </span> 
              {buttonText}
            </button>
          </div>

          <BadgeWheel />
        </section>
      </div>
    </div>
  );
}