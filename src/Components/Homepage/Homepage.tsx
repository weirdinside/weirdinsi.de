import { useEffect, useRef, useState } from "react";
import styles from "./Homepage.module.css";

import movingLogo from "../../assets/wlogoanim.gif";

export default function Homepage() {
  const [mousePosition, setMousePosition] = useState<number[]>([]);
  const [logoPosition, setLogoPosition] = useState<number[]>([]);
  const [windowSize, setWindowSize] = useState<number[]>([]);

  const [style, setStyle] = useState({});
  const [style2, setStyle2] = useState({});
  const [style3, setStyle3] = useState({});
  const [distanceFromCenter, setDistanceFromCenter] = useState<number>(0);
  const [distanceFromGlimmer, setDistanceFromGlimmer] = useState<number>(0);

  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function windowListener() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    windowListener();

    window.addEventListener("resize", windowListener);
    return () => {
      window.removeEventListener("resize", windowListener);
    };
  }, []);

  useEffect(() => {
    if (logoRef.current) {
      setLogoPosition([
        logoRef.current.getBoundingClientRect().x +
          logoRef.current.getBoundingClientRect().width / 2,
        logoRef.current.getBoundingClientRect().y +
          logoRef.current.getBoundingClientRect().height / 2,
      ]);
    }
  }, [logoRef]);

  function getFeatheredBlur(dist: number) {
    const normalized = Math.min(dist / 0.3, 1);
    const eased = 1 - (1 - normalized) ** 2;
    return (1 - eased) * 7;
  }

  useEffect(() => {
    const percentageX =
      (mousePosition[0] - logoPosition[0]) / (windowSize[0] / 2);
    const percentageY =
      (mousePosition[1] - logoPosition[1]) / (windowSize[1] / 2);

    setDistanceFromCenter(Math.sqrt(percentageX ** 2 + percentageY ** 2));

    const glimmerX = 0.32;

    console.log(movingLogo)
    const glimmerY = -0.73;

    const dx = percentageX - glimmerX;
    const dy = percentageY - glimmerY;

    const distFromGlimmer = Math.sqrt(dx ** 2 + dy ** 2);
    setDistanceFromGlimmer(distFromGlimmer);

    setStyle({
      transform: `rotateX(${percentageY * -30}deg) rotateY(${
        percentageX * 30
      }deg) perspective(0.4cm)`,
    });

    setStyle2({
      transform: `translateX(${percentageX * -3}%) translateY(${
        percentageY * -3
      }%) rotateX(${percentageY * -30}deg) rotateY(${
        percentageX * 30
      }deg) perspective(0.4cm)`,
      filter: `drop-shadow(${percentageX * -10}px ${percentageY * -10}px ${
        distanceFromCenter * 10 + 2
      }px #000)`,
    });

    setStyle3({
      transform: `rotateX(${percentageY * -30}deg) rotateY(${
        percentageX * 30
      }deg) perspective(0.4cm)`,
      backgroundPosition: `${percentageX * 100}% ${percentageY * -100}%`,
    });
  }, [mousePosition]);

  console.log(1 / distanceFromGlimmer / 50);

  return (
    <div
      onMouseMove={(e) => {
        setMousePosition([e.clientX, e.clientY]);
      }}
      className={styles.page}
    >
      <div className={styles.grain} />
      <div className={styles.page__content}>
        <div className={styles.header}>
          <div className={styles.header__os_logo}></div>
          <div className={styles.header__information} />
        </div>
        <div className={styles.page__center}>
          <div
            style={{
              filter: `blur(${getFeatheredBlur(distanceFromGlimmer)}px)`,
            }}
            ref={logoRef}
            className={styles.nav__logo}
          >
            <div
              style={style}
              className={styles.nav__logo_overlay}
            />
            <div style={style2} className={styles.nav__logo_center} />
            <div style={style3} className={styles.nav__logo_shimmer} />
            <div style={style} className={styles.nav__logo_bg} />
          </div>
        </div>
      </div>
    </div>
  );
}
