import styles from "./Site20vt.module.css";

export default function Site20vt() {
  return (
    <div className={styles.page}>
      <div className={styles.page__content}>
        <h1 className={styles.heading}>## README</h1>
        <br />
        <div id="readme" className={styles.page__description}>
          <a className={styles.link} target="_blank" href="https://20vt.help">
            20vt.help
          </a>{" "}
          is a site that I built to act as a supporting resource to others like{" "}
          <a
            className={styles.link}
            target="_blank"
            href="https://forums.quattroworld.com/s4s6/"
          >
            quattroworld,
          </a>{" "}
          <a className={styles.link} target="_blank" href="https://12v.org/">
            12v.org,
          </a>{" "}
          and{" "}
          <a className={styles.link} target="_blank" href="https://20v.org/">
            20v.org.
          </a>{" "}
          It currently has a{" "}
          <span style={{ color: `#dcdda8` }}>wheel gallery</span> (an community
          sourced and contributed collection of images that helps owners decide
          on wheel choices for their vehicles), and a{" "}
          <span style={{ color: `#dcdda8` }}>compendium</span> (an encyclopaedia
          of information on vintage Audis). I'm working on adding a{" "}
          <span style={{ color: `#9bdbff` }}>blog</span> to update users of the
          website with ongoing/incoming changes to the platform, and a{" "}
          <span style={{ color: `#9bdbff` }}>builds</span> page that allows
          users to showcase and write about their builds.
          <br /> <br />I began building it in March 2024 (starting with the
          wheel gallery), but expanded it to include the compendium in August
          2024. I started developing the website in vanilla JS and HTML,
          switched it to a React application scaffolded using Vite, and
          subsequently switched it to using Next.JS, which it currently sits on.
          As of June 2025, I am the sole maintainer of this website.
          <br /> <br /> Some nice features of this website are the interactive
          part number diagrams for each subsection. They are built using HTML
          Image Maps and utilize an Image Map Resizer script to maintain the
          drawn areas (which reside on a canvas element).
        </div>
        <br />
        <h1 className={styles.heading}>## STACK</h1>
        <br />
        <div className={styles.stack}></div>
        <h1 className={styles.heading}>## DESIGN</h1>
        <br />
      </div>
    </div>
  );
}
