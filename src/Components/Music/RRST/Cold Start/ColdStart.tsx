import { useContext } from "react";
import { COLDSTART_ARTWORKS, COLDSTART_MUSIC } from "../../../../constants";
import Videos from "../../../Video/Videos";
import CoverFlow from "../../Cover Flow/CoverFlow";
import styles from "./ColdStart.module.css";
import { MusicPlayerContext } from "../../../../Contexts/MusicPlayerContext";

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

export default function CruiseControl() {
  const { selectSong, setCurrentFile, songInfo } =
    useContext(MusicPlayerContext);

  return (
    <div className={styles.page}>
      <section className={styles.coverflow}>
        <CoverFlow images={COLDSTART_ARTWORKS} />
      </section>
      <section className={`${styles.section} ${styles.music}`}>
        <table className={styles.music__table}>
          <thead>
            <tr className={`${styles.table__row} ${styles.head}`}>
              <th className={styles.table__head}>#</th>
              <th className={styles.table__head}>Name</th>
              <th className={styles.table__head}>Time</th>
              <th className={styles.table__head}>Artist</th>
              <th className={styles.table__head}>Album</th>
            </tr>
          </thead>
          <tbody>
            {COLDSTART_MUSIC.map((song, idx) => {
              return (
                <tr
                  key={idx}
                  onDoubleClick={() => {
                    selectSong({
                      title: song.name,
                      album: "cold start",
                      artist: "RRST",
                    });
                    setCurrentFile(song.file);
                  }}
                  className={`${styles.table__row} ${
                    songInfo.title === song.name && styles.active
                  }`}
                >
                  <td
                    className={`${styles.table__item} ${styles.track} ${
                      songInfo.title === song.name && styles.active
                    }`}
                  >
                    {song.track}
                  </td>
                  <td className={styles.table__item}>{song.name}</td>
                  <td className={`${styles.table__item} ${styles.time}`}>
                    {song.time}
                  </td>
                  <td className={styles.table__item}>RRST</td>
                  <td className={styles.table__item}>cold start</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section className={`${styles.section} ${styles.abstract}`}>
        <h2 className={styles.section__title}>ABSTRACT</h2>
        <p className={styles.description}>
          'cold start' is an EP that captures the feeling of driving through
          snowy terrain in the wintertime. the music is ambient and comforting,
          and focuses on designing soundscapes to act as the complement of the
          experience of finding warmth in the biting cold.
        </p>
        <p className={styles.description}>
          
        </p>
      </section>
      <section className={`${styles.section} ${styles.videos}`}>
        <h2 className={styles.section__title}>MUSIC VIDEOS</h2>
        <Videos videoList={MusicVideos} />
      </section>
      <section className={`${styles.section} ${styles.promo}`}>
        <h2 className={styles.section__title}>PROMOTIONAL MATERIAL</h2>
        <Videos videoList={PromoVideos} />
      </section>
    </div>
  );
}
