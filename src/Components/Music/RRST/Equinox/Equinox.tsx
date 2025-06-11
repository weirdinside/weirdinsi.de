import styles from "./Equinox.module.css";
export default function Equinox() {
  return (
    <div className={styles.page}>
      <section className={`${styles.section} ${styles.abstract}`}>
        <h2 className={styles.section__title}>ABSTRACT</h2>
        <p className={styles.description}>
          'equinox' was made in collaboration with artist, filmmaker and
          musician Perry André for his short film of the same name.
        </p>
      </section>
    </div>
  );
}
