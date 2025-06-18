import { CROSSCOUNTRY_ARTWORKS } from "../../../../constants";
import CoverFlow from "../../Cover Flow/CoverFlow";
import styles from "./CrossCountry.module.css";

export default function CrossCountry() {
  return (
    <div className={styles.page}>
      <section className={`${styles.section} ${styles.abstract}`}>
        <CoverFlow images={CROSSCOUNTRY_ARTWORKS} />
        <h2 className={styles.section__title}>ABSTRACT</h2>
        <p className={styles.description}>
          'cold start' is an EP that captures the feeling of driving through
          snowy terrain in the wintertime. the music is ambient and comforting,
          and focuses on designing soundscapes to act as the complement of the
          experience of finding warmth in the biting cold.
        </p>
      </section>
      <section className={`${styles.section} ${styles.songs}`}></section>
    </div>
  );
}
