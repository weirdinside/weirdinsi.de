import { useContext } from "react";
import {
  CRUISECONTROL_ARTWORKS,
  CRUISECONTROL_MUSIC,
} from "../../../../constants";
import CoverFlow from "../../Cover Flow/CoverFlow";
import styles from "./CruiseControl.module.css";
import { MusicPlayerContext } from "../../../../Contexts/MusicPlayerContext";
export default function CruiseControl() {
  const { selectSong, setCurrentFile, songInfo } =
    useContext(MusicPlayerContext);
  return (
    <div className={styles.page}>
      <section className={styles.coverflow}>
        <CoverFlow images={CRUISECONTROL_ARTWORKS} />
      </section>

      <section className={`${styles.section} ${styles.music}`}>
        <table className={styles.music__table}>
          <tr className={`${styles.table__row} ${styles.head}`}>
            <th className={styles.table__head}>#</th>
            <th className={styles.table__head}>Name</th>
            <th className={styles.table__head}>Time</th>
            <th className={styles.table__head}>Artist</th>
            <th className={styles.table__head}>Album</th>
          </tr>
          {CRUISECONTROL_MUSIC.map((song, idx) => {
            return (
              <tr
                key={idx}
                onDoubleClick={() => {
                  selectSong({
                    title: song.name,
                    album: "cruise control",
                    artist: "RRST",
                  });
                  setCurrentFile(song.file);
                }}
                className={`${styles.table__row} ${
                  songInfo.title === song.name && styles.active
                }`}
              >
                <td className={`${styles.table__item} ${styles.track} ${ songInfo.title === song.name && styles.active}`}>{song.track}</td>
                <td className={styles.table__item}>{song.name}</td>
                <td className={`${styles.table__item} ${styles.time}`}>
                  {song.time}
                </td>
                <td className={styles.table__item}>RRST</td>
                <td className={styles.table__item}>cruise control</td>
              </tr>
            );
          })}
        </table>
      </section>
      <section className={`${styles.section} ${styles.abstract}`}>
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
