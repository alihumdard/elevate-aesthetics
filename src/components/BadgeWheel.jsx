"use client";

import styles from "../styles/BadgeWheel.module.css";

export default function BadgeWheel() {
  const badges = [
    "Dermapeel",
    "Emsculpt NEO",
    "Microneedling",
    "Dermapeel",
    "Morpheus 8",
    "Microneedling",
    "PRF",
    "Morpheus 8",
    "Emsculpt NEO",
    "PRF",
    "Hair Restoration",
    "Emsculpt NEO",
    "PRF EZ Gel",
    "Hair Restoration",
    "Dermapeel",
    "PRF EZ Gel",
    "Microneedling",
    "Morpheus 8",
  ];

  const radius = 200;

  return (
    <div className={styles.wrapper}>
      <div className={styles.wheel}>
        {badges.map((badge, index) => {
          const angle = (index / badges.length) * 360;

          return (
            <div
              key={index}
              className={styles.badge}
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px)`,
              }}
            >
              <span className={styles.badgeInner}>
                <span className="me-2">
                  <img src="/images/dot.png" alt="" />
                </span>{" "}
                {badge}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
