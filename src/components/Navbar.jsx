import styles from "@/styles/Navbar.module.css";

const navLinks = [
  { label: "How HR Works", href: "#" },
  { label: "Packages", href: "#" }, // active: true
  { label: "Results", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
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
      <ul className={styles.links}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} className={link.active ? styles.active : ""}>
              {link.label}
            </a>
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

 <div className={styles.right}>
        <span className={styles.searchIcon}>⌕</span>
        <span className={styles.hamburger}>☰</span>
      </div>
      </ul>

      {/* Right side */}
     
    </nav>
  );
}
