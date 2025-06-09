import { useEffect, useRef, useState } from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";


export default function Logo({
  mousePosition,
  windowSize,
  isiOS,
  image,
  hoverImage,
  isMainLogo = false,
  DELTA = 30,
  PERC = 3,
  link
}: {
  mousePosition: number[];
  isMainLogo?: boolean;
  windowSize: number[];
  isiOS: () => boolean;
  image: string;
  hoverImage?: string;
  DELTA?: number;
  PERC?: number;
  link: string;
}) {
  const logoRef = useRef<HTMLAnchorElement>(null);
  
  const [style, setStyle] = useState({});
  const [style2, setStyle2] = useState({});
  const [style3, setStyle3] = useState({});

  const [logoPosition, setLogoPosition] = useState<number[]>([]);
  const [distanceFromCenter, setDistanceFromCenter] = useState<number>(0);
  const [distanceFromGlimmer, setDistanceFromGlimmer] = useState<number>(100);

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
    const glimmerY = -0.73;

    const dx = percentageX - glimmerX;
    const dy = percentageY - glimmerY;

    const distFromGlimmer = Math.sqrt(dx ** 2 + dy ** 2);
    setDistanceFromGlimmer(distFromGlimmer);

    if (isiOS()) {
      setStyle({
        transform: `rotateX(${percentageY * -DELTA}deg) rotateY(${
          percentageX * DELTA
        }deg) perspective(0.4cm)`,
        transition: "0.9s cubic-bezier(0.075, 0.82, 0.165, 1)",
      });

      setStyle2({
        transform: `translateX(${percentageX * -PERC}%) translateY(${
          percentageY * -PERC
        }%) rotateX(${percentageY * -DELTA}deg) rotateY(${
          percentageX * DELTA
        }deg) perspective(0.4cm)`,
        filter: `drop-shadow(${percentageX * -10}px ${percentageY * -10}px ${
          distanceFromCenter * 10 + 2
        }px #000)`,
        transition: "0.9s cubic-bezier(0.075, 0.82, 0.165, 1)",
      });

      setStyle3({
        transform: `rotateX(${percentageY * -DELTA}deg) rotateY(${
          percentageX * DELTA
        }deg) perspective(0.4cm)`,
        transition: "0.9s cubic-bezier(0.075, 0.82, 0.165, 1)",
        backgroundPosition: `${percentageX * 100}% ${percentageY * -100}%`,
      });
    } else {
      setStyle({
        transform: `rotateX(${percentageY * -DELTA}deg) rotateY(${
          percentageX * DELTA
        }deg) perspective(0.4cm)`,
      });

      setStyle2({
        transform: `translateX(${percentageX * -PERC}%) translateY(${
          percentageY * -PERC
        }%) rotateX(${percentageY * -DELTA}deg) rotateY(${
          percentageX * DELTA
        }deg) perspective(0.4cm)`,
        filter: `drop-shadow(${percentageX * -10}px ${percentageY * -10}px ${
          distanceFromCenter * 10 + 2
        }px #000)`,
      });

      setStyle3({
        transform: `rotateX(${percentageY * -DELTA}deg) rotateY(${
          percentageX * DELTA
        }deg) perspective(0.4cm)`,
        backgroundPosition: `${percentageX * 100}% ${percentageY * -100}%`,
      });
    }
  }, [mousePosition]);

  return (
    <>
      {isMainLogo && (
        <div
          style={{
            filter: `invert(1) blur(${getFeatheredBlur(
              distanceFromGlimmer
            ) / 3}px)`,
          }}
          className={styles.circle}
        />
      )}

      <Link
        to={`/${link}`}
        style={{
          filter: `blur(${getFeatheredBlur(distanceFromGlimmer)}px)`,
        }}
        ref={logoRef}
        className={styles.nav__logo}
      >
        <div
          style={{ ...style, backgroundImage: `url(${hoverImage})` }}
          className={styles.nav__logo_overlay}
        />
        <div
          style={{ ...style2, backgroundImage: `url(${image})` }}
          className={styles.nav__logo_center}
        />
        <div
          style={{ ...style3, maskImage: `url(${image})` }}
          className={styles.nav__logo_shimmer}
        />
        <div
          style={{ ...style, maskImage: `url(${image})` }}
          className={styles.nav__logo_bg}
        />
      </Link>
    </>
  );
}
