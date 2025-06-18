import { Link, Outlet } from "react-router-dom";
import styles from "./Dev.module.css";

import PROJECTS_ICON from "/other logos/fileslogo.png";
import FUNCTIONS_ICON from "/other logos/functionlogo.png";

export default function Dev() {
  // const [activeTab, setActiveTab] = useState<string>("");

  // const location = useLocation();


  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link to="/" className={styles.header__close_button} />
        <div className={styles.header__title}>
          weird inside OS ― software development work
        </div>
      </header>
      <div className={styles.page__content}>
        <div className={styles.column__options}>
          <Link
            to="projects"
            style={{ backgroundImage: `url(${PROJECTS_ICON})` }}
            className={`${styles.option} ${styles.projects}`}
          />
          <Link
            to="functions"
            style={{ backgroundImage: `url(${FUNCTIONS_ICON})` }}
            className={`${styles.option} ${styles.functions}`}
          />
        </div>
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footer__projectstatus}>javascript | index</div>
        <div className={styles.footer__information}>WI-08 SX</div>
      </footer>
    </div>
  );
}
