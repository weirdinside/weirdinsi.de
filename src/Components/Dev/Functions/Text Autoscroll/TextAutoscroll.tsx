import { Link } from "react-router-dom";
import styles from "./TextAutoscroll.module.css";

export default function TextAutoscroll() {
  return (
    <div className={styles.page}>
      <div className={styles.page__content}>
        <h1 className={styles.heading}>## README</h1>
        <br />
        <div className={styles.page__description}>
          Text-Autoscroll is a React component that I built as a replacement for
          the now deprecated HTML{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/marquee"
            className={styles.link}
            style={{ color: `#49c9af` }}
          >
            &lt;marquee/&gt;
          </a>{" "}
          tag. There are a few alternatives (
          <a
            className={styles.link}
            href="https://www.npmjs.com/package/react-simple-marquee"
          >
            react-simple-marquee
          </a>{" "}
          and{" "}
          <a
            className={styles.link}
            href="https://www.npmjs.com/package/react-fast-marquee"
          >
            react-fast-marquee
          </a>{" "}
          to name two), but none of them satisfied my exact needs and behaviors
          for the use case. This was initially developed for the homepage on{" "}
          <Link className={styles.link} to="/dev/projects/20vt">
            20vt.help
          </Link>
          , but I have used it in many other projects since. It has no
          dependencies and utilizes event listeners to keep consistency even
          when resizing the window. A demo page of it is available below and
          code snippets are available below as well.
        </div>
        <br />
        <h1 className={styles.heading}>## DEMO</h1>
        <br />
        
        <h1 className={styles.heading}>## CODE [TYPESCRIPT]</h1>
        <br />
        
        <h1 className={styles.heading}>## CODE [VANILLA JS]</h1>
        <br />
      </div>
    </div>
  );
}
