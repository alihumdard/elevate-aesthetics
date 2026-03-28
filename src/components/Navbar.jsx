"use client";

import { useState } from "react";
import styles from "@/styles/Navbar.module.css";

const navLinks = [
  { label: "How HR Works", href: "/" },
  { label: "Packages", href: "/skinRemoval" },
  { label: "Results", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      {/* Logo */}
      <div className={styles.logo}>
        <img
          className={styles.logoImg}
          src="/images/elevate-logo.png"
          alt="Elevate"
        />
      </div>

      {/* Links */}
      <ul className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}

        <li>
          <button className={styles.bookBtn}>
            <span className="cta-circle">
              <span className="cta-bg"></span>
              <span className="arrow">→</span>
            </span>
            Book FREE Session
          </button>
        </li>
      </ul>

      {/* Right side */}
      <div className={styles.right}>
        <span className={styles.searchIcon}>⌕</span>

        <span
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </span>
      </div>
    </nav>
  );
}
