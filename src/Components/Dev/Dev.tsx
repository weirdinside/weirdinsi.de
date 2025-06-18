import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Dev.module.css";
import DevNavItem from "./NavItem/DevNavItem";

const DENIS_PAGES = [
  {
    title: "README.md",
    url: "#readme",
  },
  {
    title: "stack.js",
    url: "#stack",
  },
  {
    title: "design.fig",
    url: "#design",
  },
];

const REES_CLUB_PAGES = [
  {
    title: "README.md",
    url: "#readme",
  },
  {
    title: "stack.js",
    url: "#stack",
  },
  {
    title: "design.fig",
    url: "#design",
  },
];

export default function Dev() {
  const [activeItem, setActiveItem] = useState<string>("");

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link to="/" className={styles.header__close_button} />
        <div className={styles.header__title}>
          weird inside OS -- software development work
        </div>
      </header>
      <div className={styles.page__content}>
        <div className={styles.column__options}></div>
        <div className={styles.column__main}>
          <div className={styles.column__nav}>
            <DevNavItem
              title="DENIS.WORKS"
              link="denisworks"
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              items={DENIS_PAGES}
            />
            <DevNavItem
              title="20VT.HELP"
              link="20vt"
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              items={REES_CLUB_PAGES}
            />
            <DevNavItem
              title="REES.CLUB"
              link="reesclub"
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              items={REES_CLUB_PAGES}
            />
          </div>
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
