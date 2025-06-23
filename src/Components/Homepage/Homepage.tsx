import { useEffect, useRef, useState } from "react";
import styles from "./Homepage.module.css";

import weirdinside_terminal_logo from "/art/weird inside logos/weird inside terminal.png";
import weirdinside_os_logo from "/art/wos.png";
import music_logo from "/music.png";
import code_logo from '/code.png'

import Logo from "./Logo/Logo";
import { Outlet, useLocation } from "react-router-dom";

export default function Homepage() {
  // some notes - if the implement is touch screen, make sure that you make the site iOS version
  // meaning that the iOS 5 implementation you did takes over as the 'OS'
  // otherwise, show everything as is for desktop. also -
  // when applying the styles, blur is constant 4px-10px for the iOS version. fix this

  const [mousePosition, setMousePosition] = useState<number[]>([0, 0]);
  const [windowSize, setWindowSize] = useState<number[]>([]);

  // const [seed, setSeed] = useState<number>(0);

  const intervalRef = useRef<number>(null);

  const location = useLocation();

  function isiOS() {
    const iosQuirkPresent = function () {
      const audio = new Audio();

      audio.volume = 0.5;
      return audio.volume === 1;
    };

    const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAppleDevice = navigator.userAgent.includes("Macintosh");
    const isTouchScreen = navigator.maxTouchPoints >= 1;

    return isiOS || (isAppleDevice && (isTouchScreen || iosQuirkPresent()));
  }

  useEffect(() => {
    function windowListener() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    windowListener();

    // intervalRef.current = setInterval(() => {
    //   setSeed(Math.random() * 200);
    // }, 10);

    window.addEventListener("resize", windowListener);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      window.removeEventListener("resize", windowListener);
    };
  }, []);

  return (
    <div
      onMouseMove={(e) => {
        setMousePosition([e.clientX, e.clientY]);
      }}
      className={styles.page}
    >
      {/* <svg
        className={styles.grain}
        viewBox="0 0 4000 4000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            seed={seed}
            baseFrequency="0.65"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          filter="url(#noiseFilter)"
        />
      </svg> */}
      <div className={styles.page__content}>
        <div className={`${styles.page__outlet} ${location.pathname.length > 1 && styles.active}`}>
          <Outlet/>
        </div>
        <div className={styles.page__center}>
          <div className={`${styles.nav__item} ${styles.music}`}>
            <Logo
              DELTA={40}
              link="music"
              PERC={2.4}
              image={music_logo}
              mousePosition={mousePosition}
              windowSize={windowSize}
              isiOS={isiOS}
            />
          </div>
          <div className={`${styles.nav__item} ${styles.code}`}>
            <Logo
              DELTA={40}
              link="dev"
              PERC={2.4}
              image={code_logo}
              mousePosition={mousePosition}
              windowSize={windowSize}
              isiOS={isiOS}
            />
          </div>
          <Logo
            link="console"
            isMainLogo
            image={weirdinside_os_logo}
            mousePosition={mousePosition}
            hoverImage={weirdinside_terminal_logo}
            windowSize={windowSize}
            isiOS={isiOS}
          />
        </div>
      </div>
    </div>
  );
}
