"use client";

import { motion } from "framer-motion";
import styles from "@/styles/FreeSession.module.css";

export default function FreeSession({ title, subtitle }) {

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
    <div className={styles.customContainer}>
      <motion.section
        className={styles.section}
       variants={fadeUp(.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
      >
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </motion.section>
    </div>
  );
}