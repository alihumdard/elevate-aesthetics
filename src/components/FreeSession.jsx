import styles from '@/styles/FreeSession.module.css';

export default function FreeSession() {
  return (
    <div className={styles.customContainer}>
      <section className={styles.section}>
      <h2 className={styles.title}>Your First Session On Us!</h2>
      <p className={styles.subtitle}>
        <b>FREE FIRST TREATMENT</b> on any areas under $60.
      </p>
    </section>
    </div>
  );
}
