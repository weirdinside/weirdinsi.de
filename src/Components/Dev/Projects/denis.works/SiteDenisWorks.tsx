import styles from "./SiteDenisWorks.module.css";

export default function SiteDenisWorks() {
  return (
    <div className={styles.page}>
      <div className={styles.page__content}>
        <div id="readme" className={styles.page__description}>
          <a className={styles.link} target="_blank" href="https://denis.works">
            denis.works
          </a>{" "}
          is a website built to showcase the work of musician denis biblioni (a
          project of ani bharadwaj). The design is heavily inspired by hardware
          synthesizers and drum machines, specifically the Elektron Octatrack
          and Digitakt. <br />
          <br /> I built and developed the site starting in August 2024, and
          tested multiple designs before landing on the current one. A huge
          challenge when building the website was figuring out the audio player,
          and making the decision to use native HTML5 audio instead of opting to
          use the Web Audio API.
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
        <div className={styles.stack}></div>
      </div>
    </div>
  );
}
