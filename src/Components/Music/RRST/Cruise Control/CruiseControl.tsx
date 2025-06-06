import { CRUISECONTROL_ARTWORKS } from "../../../../constants";
import Videos from "../../../Video/Videos";
import Carousel from "../../Carousel/Carousel";
import styles from "./CruiseControl.module.css";

const MusicVideos = [
  {
    videoUrl: "https://youtu.be/BE5LIOrpsxs?si=zclhEHP3B1D787jh",
    description:
      "credits: Ani Bharadwaj (animator, director, editor) \nanimated & edited in: 1 week \nruntime: 1:52",
  },
];

const PromoVideos = [
  { videoUrl: "https://youtu.be/Utjv54l_upQ?si=caCTEF4MToboArOA" },
];

export default function CruiseControl() {
  return (
    <>
      <div className={styles.main__heading_box}>
        <h2 className={styles.main__heading_text}>
          CRUISE CONTROL
        </h2>
        <div className={styles.main__heading_infobox}>
          <p className={styles.main__heading_subtitle}>LP; 11 TRACKS</p>
          <p className={styles.main__heading_subtitle}>RUNTIME: 36MIN44S</p>
          <p className={styles.main__heading_information}>01 JUL 2018</p>
          <p className={styles.main__heading_information}>AMBIENT, DOWNTEMPO</p>
          <p className={styles.main__heading_information}>
            P: DENIS BIBLIONI MUSIC
          </p>
        </div>
      </div>

      <section
        className={`${styles.main__section} ${styles.main__section_abstract}`}
      >
        <h2 className={styles.main__title}>ABSTRACT</h2>
        <p className={styles.main__description}>
          'cruise control' is the debut album of the RRST project. it serves as
          the entry point into the concept of RRST, offering a general
          perspective into the feeling of driving in various terrain. the music
          is highly progressive and meditative, very much akin to sitting on an
          interstate highway in the US and traveling thousands of miles (on
          cruise control).
        </p>
      </section>
      <section
        className={`${styles.main__section} ${styles.main__section_artwork}`}
      >
        <h2 className={styles.main__title}>ARTWORK</h2>
        <Carousel carouselItems={CRUISECONTROL_ARTWORKS} />
        <p className={styles.main__description}>
          the artwork of the singles is highly correlated to each of the songs
          on 'cruise control'; for example, the artwork for the single 'state
          line' is based on a photo taken on the blue ridge parkway, which the
          song is based on. for 'all of it,' the art is derived from a still of
          its music video. the common feature of each of the artworks is the
          'cruise control' logo, colored to match the themes of the image behind
          it.
        </p>
      </section>
      <section
        className={`${styles.main__section} ${styles.main__section_videos}`}
      >
        <h2 className={styles.main__title}>MUSIC VIDEOS</h2>
        <Videos videoList={MusicVideos} />
      </section>
      <section
        className={`${styles.main__section} ${styles.main__section_promo}`}
      >
        <h2 className={styles.main__title}>PROMOTIONAL MATERIAL</h2>
        <Videos videoList={PromoVideos} />
      </section>
    </>
  );
}
