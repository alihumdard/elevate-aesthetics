import styles from "@/styles/TopBanner.module.css";

export default function TopBanner({
  title
}) {
  return (
    <div className={styles.banner}>
     {title}
    </div>
  );
}
