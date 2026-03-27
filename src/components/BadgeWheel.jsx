"use client";

import styles from "../styles/BadgeWheel.module.css";

export default function BadgeWheel() {
  const badges = [
    "Badge 1",
    "Badge 2",
    "Badge 3",
    "Badge 4",
    "Badge 5",
    "Badge 6",
    "Badge 7",
    "Badge 8",
    "Badge 9",
    "Badge 10",
    "Badge 11",
    "Badge 12",
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
                transform: `rotate(${angle}deg) translate(${radius}px)`
              }}
            >
              <span className={styles.badgeInner}>
                {badge}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}