import { CRUISECONTROL_ARTWORKS } from "../../../../constants";
import CoverFlow from "../../Cover Flow/CoverFlow";
import styles from "./CruiseControl.module.css";
export default function CruiseControl() {
  return (
    <div className={styles.page}>
      <section className={`${styles.section} ${styles.abstract}`}>
        <CoverFlow images={CRUISECONTROL_ARTWORKS} />
        <h2 className={styles.section__title}>ABSTRACT</h2>
        <p className={styles.description}>
          'cruise control' is the debut album of the RRST project. it serves as
          the entry point into the concept of RRST, offering a general
          perspective into the feeling of driving in various terrain. the music
          is highly progressive and meditative, very much akin to sitting on an
          interstate highway in the US and traveling thousands of miles (on
          cruise control).
        </p>
      </section>
    </div>
  );
}
