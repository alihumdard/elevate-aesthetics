"use client";

import { motion } from "framer-motion";
import styles from "@/styles/FreeSession.module.css";

export default function FreeSession({ title, subtitle }) {

  const sectionAnimation = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className={styles.customContainer}>
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"       // triggers when in viewport
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </motion.section>
    </div>
  );
}