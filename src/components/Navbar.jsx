"use client";

import { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar({ firstLabel, firstHref }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: firstLabel || "How LHR Works", href: firstHref || "#LHR" },  
    { label: "Packages", href: "#package" },
    { label: "Results", href: "#Result" },
    { label: "FAQ", href: "#FAQ" },
    { label: "Contact", href: "#get-touch" },
  ];

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
          <Link
            href="https://www.joinblvd.com/b/elevate-aesthetics/widget#/visit-type"
            target="_blank"
          >
            <button className={styles.bookBtn}>
              <span className="cta-circle">
                <span className="cta-bg"></span>
                <span className="arrow">→</span>
              </span>
              Book FREE Session
            </button>
          </Link>
        </li>
      </ul>

      {/* Right side */}
      <div className={styles.right}>
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