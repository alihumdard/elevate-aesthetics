"use client";

import { motion } from "framer-motion";
import styles from "@/styles/Hero.module.css";
import BadgeWheel from "./BadgeWheel";

export default function Hero({ title, subtitle, bgImage, buttonText, curveImage="/images/curve.png" }) {

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

  return (
    <div className="custom-container">
      <div className={styles.heroWrapper}>
        <section className={styles.hero}>
          <img className={styles.heroBg} src={bgImage} alt={title} />
          <div className={styles.overlay} />

          <div className={styles.heroTextWrapper}>
            <motion.div
              className={styles.heroText}
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </motion.div>
          </div>

          <div className={styles.curveContainer}>
            <img className={styles.curveBg} src={curveImage} alt="curve background" />
            <button id="book-id" className={styles.bookNowBtn}>
              <span id="cta-circle-clr" className="cta-circle cta-circle-clr">
                <span className="cta-bg"></span>
                <span className="arrow">→</span>
              </span>
              <span className="btn-clor">{buttonText}</span>
            </button>
          </div>

          <BadgeWheel />
        </section>
      </div>
    </div>
  );
}