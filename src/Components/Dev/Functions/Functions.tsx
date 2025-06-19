import { Outlet, useLocation } from "react-router-dom";
import DevNavItem from "../NavItem/DevNavItem";
import styles from "./Functions.module.css";

import { useEffect, useState } from "react";
import JS_ICON from "/other logos/jslogo.png";
import MD_ICON from "/other logos/mdlogo.png";
import TS_ICON from "/other logos/tslogo.png";

const DEFAULT_PAGES = [
  {
    title: "README.md",
    icon: MD_ICON,
    url: "#readme",
  },
  {
    title: "code.ts",
    icon: TS_ICON,
    url: "#stack",
  },
  {
    title: "code.js",
    icon: JS_ICON,
    url: "#stack",
  },
];

export default function Functions() {
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
          title="TEXT-AUTOSCROLL"
          link="textautoscroll"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          items={DEFAULT_PAGES}
        />
        <DevNavItem
          title="REACT-KNOB"
          link="reactknob"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          items={DEFAULT_PAGES}
        />
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}
