"use client";

import styles from "../styles/BadgeWheel.module.css";

export default function BadgeWheel() {
  const badges = [
    "Full Body",
    "Shoulders",
    "Full Back",
    "Half Back",
    "Aereola",
    "Abdomen",
    "Tummy Line",
    "Full Bikini",
    "Full Legs",
    "Half Legs",
    "Full Arms",
    "Half Arms",
    "Partial Bikini",
    "Full Face",
    "Partial Face",
    "Upper Lip/Chin",
    "Full Neck",
    "Inner Thigh",
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
