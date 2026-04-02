"use client";

import styles from "../styles/BadgeWheel.module.css";

export default function BadgeWheel({ type = "default" }) {

  const badgeData = {
    default: [
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
    ],

    second: [
      "Morpheus 8",
      "Microneedling",
      "Dermapeel",
      "PRF EZ Gel",
      "Hair Restoration",
      "Emsculpt NEO",
      "PRF",
      "Morpheus 8",
      "Microneedling",
      "Dermapeel",
      "PRF EZ Gel",
      "Hair Restoration",
      "Emsculpt NEO",
      "PRF",
      "Morpheus 8",
      "Microneedling",
       "Dermapeel",
         "Emsculpt NEO",
    ]
  };

  const badges = badgeData[type];

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
                </span>
                {badge}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}