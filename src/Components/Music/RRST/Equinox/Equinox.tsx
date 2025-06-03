import Videos from "../../../Video/Videos";
import Carousel from "../../Carousel/Carousel";
import styles from "./Equinox.module.css";

// https://vimeo.com/379675478

// https://youtu.be/embed/7Kavwhhlz04?si=t74yX5Eph1xHr9gB

const MusicVideos = [
  {
    videoUrl: "https://vimeo.com/379675478",
    description:
      "credits: Perry André (director, editor, music), Ani Bharadwaj (music) \nruntime: 5:31",
  },
];

const PromoVideos = [
  {
    videoUrl: "https://youtu.be/7Kavwhhlz04?si=t74yX5Eph1xHr9gB",
  },
];

export default function Equinox() {
  return (
    <>
      <section
        className={`${styles.main__section} ${styles.main__section_abstract}`}
      >
        <h2 className={styles.main__title}>ABSTRACT</h2>
        <p className={styles.main__description}>
          'equinox' was made in collaboration with artist, filmmaker and
          musician Perry André for his short film of the same name.
        </p>
      </section>
      <section
        className={`${styles.main__section} ${styles.main__section_videos}`}
      >
        <h2 className={styles.main__title}>VIDEO</h2>
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
