import { Outlet, useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import DevNavItem from "../NavItem/DevNavItem";

import FIG_ICON from "/other logos/figmalogo.png";
import JS_ICON from "/other logos/jslogo.png";
import MD_ICON from "/other logos/mdlogo.png";
import { useState, useEffect } from "react";

const DEFAULT_PAGES = [
  {
    title: "README.md",
    icon: MD_ICON,
    url: "#readme",
  },
  {
    title: "stack.js",
    icon: JS_ICON,
    url: "#stack",
  },
  {
    title: "design.fig",
    icon: FIG_ICON,
    url: "#design",
  },
];

export default function Projects() {
  const [activeItem, setActiveItem] = useState<string>("");

  const location = useLocation();

  useEffect(() => {
    const lastSlug = location.pathname.split("/").at(-1);
    if (lastSlug) setActiveItem(lastSlug);
    return;
  }, [location]);

  return (
    <div className={styles.column__main}>
      <div className={styles.column__nav}>
        <DevNavItem
          title="DENIS.WORKS"
          link="denisworks"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          items={DEFAULT_PAGES}
        />
        <DevNavItem
          title="20VT.HELP"
          link="20vt"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          items={DEFAULT_PAGES}
        />
        <DevNavItem
          title="REES.CLUB"
          link="reesclub"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          items={DEFAULT_PAGES}
        />
        <DevNavItem
          title="BENDER.FILM"
          link="bender"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          items={DEFAULT_PAGES}
        />
      </div>
      <div className={styles.logo}>
        
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}
