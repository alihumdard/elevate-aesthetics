import styles from '@/styles/FreeSession.module.css';

export default function FreeSession({
  title,
  subtitle
}) {
  return (
    <div className={styles.customContainer}>
      <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>
       {subtitle}
      </p>
    </section>
    </div>
  );
}
