import styles from "./SiteDenisWorks.module.css";

import DIGITAKT from "/reference/digitakt.webp";
import OCTATRACK from "/reference/octatrack-closeup.webp";

import DENIS_DESIGN_MD_1 from "/reference/denis.works screengrabs/denis.works-mobile.gif";
import DENIS_DESIGN_MD_2 from "/reference/denis.works screengrabs/mobile.png";
import DENIS_DESIGN_MD_3 from "/reference/denis.works screengrabs/mobile2.png";
import DENIS_DESIGN_DT_1 from "/reference/denis.works screengrabs/desktop.png";
import DENIS_DESIGN_DT_2 from "/reference/denis.works screengrabs/desktop2.png";
import DENIS_DESIGN_DT_3 from "/reference/denis.works screengrabs/desktop3.png";

export default function SiteDenisWorks() {
  return (
    <div className={styles.page}>
      <div className={styles.page__content}>
        <h1 className={styles.heading}>## README</h1>
        <div id="readme" className={styles.page__description}>
          <a className={styles.link} target="_blank" href="https://denis.works">
            denis.works
          </a>{" "}
          is a website built to showcase the work of musician denis biblioni (a
          project of ani bharadwaj). The design is heavily inspired by hardware
          synthesizers and drum machines, specifically the Elektron Octatrack
          and Digitakt. <br />
          <div className={styles.images}>
            <div className={styles.image__container}>
              <img src={DIGITAKT} className={styles.image} />
              <p className={styles.image__caption}>
                picture of Elektron Digitakt MKII, courtesy of Elektron
              </p>
            </div>
            <div className={styles.image__container}>
              <img src={OCTATRACK} className={styles.image} />
              <p className={styles.image__caption}>
                closeup of Elektron Octatrack, courtesy of Elektron
              </p>
            </div>
          </div>
          I built and developed the site starting in August 2024, and tested
          multiple designs before landing on the current one. A huge challenge
          when building the website was figuring out the audio player, and
          making the decision to use native HTML5 audio instead of opting to use
          the Web Audio API.
          <br /> <br />
          As having a "Varispeed" (playback rate change) function was a
          requirement for the audio player, both Web Audio and HTML audio were
          viable solutions to pursue, but unfortunately there was a catch: Web
          Audio changes playback rate on iOS devices instantly, and HTML audio
          rate change requires buffering. However, Web Audio does NOT hook into
          Session API or the device navigator, and there is no way to make it do
          so - on iPhone, this means that when you close the browser, audio
          stops, and having the device on vibrate silences playback.
          <br /> <br />
        </div>
        <h1 className={styles.heading}>## STACK</h1>
        <div className={styles.stack}></div>
        <h1 id="design" className={styles.heading}>
          ## DESIGN
        </h1>
        <div className={styles.design}>
          Here are a few screen grabs/recordings of the website. It is currently
          live at{" "}
          <a target="_blank" className={styles.link} href="https://denis.works">
            denis.works
          </a>
          , and I am still iterating upon it and adding songs to the site as I
          work on them.
          <div className={styles.design}>
            <div className={styles.images}>
              <img
                src={DENIS_DESIGN_MD_2}
                className={`${styles.image} ${styles.portrait}`}
              />

              <img
                src={DENIS_DESIGN_MD_3}
                className={`${styles.image} ${styles.portrait}`}
              />
              <img
                src={DENIS_DESIGN_MD_1}
                className={`${styles.image} ${styles.portrait}`}
              />
            </div>
            The site was designed primarily for mobile use, but has been
            optimized for desktop as well.
            <div className={styles.images}>
              <img
                src={DENIS_DESIGN_DT_2}
                className={`${styles.image} ${styles.landscape}`}
              />

              <img
                src={DENIS_DESIGN_DT_1}
                className={`${styles.image} ${styles.landscape}`}
              />

              <img
                src={DENIS_DESIGN_DT_3}
                className={`${styles.image} ${styles.landscape}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
