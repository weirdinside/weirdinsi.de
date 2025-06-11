import { COLDSTART_ARTWORKS } from "../../../../constants";
import Videos from "../../../Video/Videos";
import Carousel from "../../Carousel/Carousel";
import styles from "./ColdStart.module.css";

const PromoVideos = [
  { videoUrl: "https://youtu.be/w3MhZyMDEJA?si=mrpPpIqIyONDAuL1" },
  { videoUrl: "https://youtu.be/cn-FqZRykRc?si=wKaREfppsK1y8v70" },
  { videoUrl: "https://youtu.be/dsOzkO5idrU?si=FyM9NtyM3t8OpKk6" },
];

const MusicVideos = [
  {
    videoUrl: "https://youtu.be/ggoyeOTOoz8?si=EQlzVtORiS6x9ppH",
    description:
      "credits: Ani Bharadwaj (edit, color, driver), Thomas Clark (DP, film) \nshot in: 1 day; edited in: 1 week \nruntime: 2:32",
  },
  {
    videoUrl: "https://youtu.be/GjuJuwa5_C4?si=UjUKIdq3BlVKPLPp",
    description:
      "credits: Ani Bharadwaj (DP, film, edit, color), Michael Perlman (driver)\nshot in: 3 days; edited in: 2 weeks\nruntime: 2:36",
  },
];

export default function ColdStart() {
  return (
    <>
      <div className={styles.main__heading_box}>
        <h2  className={styles.main__heading_text}>
          COLD START
        </h2>
        <div className={styles.main__heading_infobox}>
          <p className={styles.main__heading_subtitle}>EP;5 TRACKS</p>
          <p className={styles.main__heading_subtitle}>RUNTIME: 12MIN</p>
          <p className={styles.main__heading_information}>21 MAY 2021</p>
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
          'cold start' is an EP that captures the feeling of driving through
          snowy terrain in the wintertime. the music is ambient and comforting,
          and focuses on designing soundscapes to act as the complement of the
          experience of finding warmth in the biting cold.
        </p>
      </section>
      <section
        className={`${styles.main__section} ${styles.main__section_artwork}`}
      >
        <h2 className={styles.main__title}>ARTWORK</h2>
        <Carousel carouselItems={COLDSTART_ARTWORKS} />
        <p className={styles.main__description}>
          the design inspiration for the artwork of 'cold start' comes from
          vintage audi vehicles. the items seen in the artwork are derived from
          and inspired by real objects used and designed by Audi AG throughout
          the 1990s. i opted to pursue a muted, simple color palette with simple
          shading and thick, white outlines - styling that is reminiscent of a
          snow-covered landscape.
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
