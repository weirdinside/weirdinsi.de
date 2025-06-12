{
  /* STYLING */
}
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./Music.module.css";

import {
  MdFastForward,
  MdFastRewind,
  MdPause,
  MdPlayArrow,
  MdSearch,
} from "react-icons/md";
import CoverFlow from "./Cover Flow/CoverFlow";
import { ALL_MUSIC } from "../../constants";
import { useContext, useEffect, useState } from "react";
import { MusicPlayerContext } from "../../Contexts/MusicPlayerContext";

export default function Music() {
  const location = useLocation();
  const {
    play,
    pause,
    seek,
    setCurrentFile,
    songInfo,
    currentTime,
    duration,
    playerState,
  } = useContext(MusicPlayerContext);

  const [songTime, setSongTime] = useState<number>(0);
  const [isSeeking, setIsSeeking] = useState<boolean>(false);

  useEffect(() => {
    if (!isSeeking) setSongTime(currentTime);
  }, [currentTime]);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.header__top}>
          <Link to={"/"} className={styles.header__close_button} />
          <div className={styles.header__name}>weird inside OS / music</div>
        </div>
        <div className={styles.header__main}>
          <div className={styles.header__player_controls}>
            <MdFastRewind
              onClick={() => {}}
              className={`${styles.player__button} ${styles.rewind}`}
            />
            {playerState === "paused" && (
              <MdPlayArrow
                onClick={() => {
                  play();
                }}
                className={`${styles.player__button} ${styles.play}`}
              />
            )}
            {playerState === "playing" && (
              <MdPause
                onClick={() => {
                  pause();
                }}
                className={`${styles.player__button} ${styles.play}`}
              />
            )}

            <MdFastForward
              className={`${styles.player__button} ${styles.forward}`}
            />
          </div>
          <div className={styles.header__search_container}>
            <input className={styles.header__search} />
            <MdSearch className={styles.header__search_icon} />
          </div>

          <div className={styles.header__player}>
            <div className={styles.header__digital_player}>
              <p className={styles.digital_player__name}>{songInfo.title}</p>
              <p className={styles.digital_player__name}>{songInfo.artist}</p>
              {currentTime && duration ? (
                <div className={styles.time__controls}>
                  {currentTime && (
                    <p className={styles.time}>{`${Math.floor(
                      songTime / 60
                    )}:${Math.floor(songTime % 60)
                      .toString()
                      .padStart(2, "0")}`}</p>
                  )}
                  <input
                    onPointerDown={() => {
                      setIsSeeking(true);
                    }}
                    onChange={(e) => {
                      setSongTime(e.target.value * duration)
                    }}
                    onPointerUp={(e) => {
                      setIsSeeking(false);
                      const value = e.target.value as Number;
                      seek(value * duration);
                    }}
                    onPointerCancel={(e) => {
                      setIsSeeking(false);
                      seek(e.target.value * duration);
                    }}
                    min={0}
                    max={1}
                    step={0.01}
                    type="range"
                    value={songTime / duration}
                    className={styles.slider}
                  />
                  {duration && (
                    <p
                      className={`${styles.time} ${styles.duration}`}
                    >{`${Math.floor(duration / 60)}:${Math.floor(duration % 60)
                      .toString()
                      .padStart(2, "0")}`}</p>
                  )}
                </div>
              ) : null}
            </div>
            {duration === 0 && <div className={styles.header__player_logo} />}
          </div>
        </div>
      </div>
      <div className={styles.music__content}>
        <div className={styles.column__nav}>
          <div className={styles.column__nav_section}>
            <h3 className={styles.nav__section_title}>WEIRD INSIDE</h3>
            <h4 className={styles.nav__section_option}>as we know</h4>
            <h4 className={styles.nav__section_option}>travel bag</h4>
            <h4 className={styles.nav__section_option}>point in time</h4>
            <h4 className={styles.nav__section_option}>remixes</h4>
            <h4 className={styles.nav__section_option}>singles</h4>
          </div>
          <div className={styles.column__nav_section}>
            <Link
              to={"/music/rrst"}
              className={`${styles.nav__section_title} ${
                location.pathname.split("/").at(-1) === "rrst" && styles.active
              }`}
            >
              RRST
            </Link>
            <Link
              to="rrst/cruise-control"
              className={`${styles.nav__section_option} ${
                location.pathname.split("/").at(-1) === "cruise-control" &&
                styles.active
              }`}
            >
              cruise control
            </Link>
            <Link
              to="rrst/equinox"
              className={`${styles.nav__section_option} ${
                location.pathname.split("/").at(-1) === "equinox" &&
                styles.active
              }`}
            >
              equinox
            </Link>
            <Link
              to="rrst/cold-start"
              className={`${styles.nav__section_option} ${
                location.pathname.split("/").at(-1) === "cold-start" &&
                styles.active
              }`}
            >
              cold start
            </Link>
            <Link
              to="rrst/cross-country"
              className={`${styles.nav__section_option} ${
                location.pathname.split("/").at(-1) === "cross-country" &&
                styles.active
              }`}
            >
              cross country
            </Link>
          </div>
          <div className={styles.column__nav_section}>
            <Link
              to={"denis-biblioni"}
              className={`${styles.nav__section_title} ${
                location.pathname.split("/").at(-1) === "denis-biblioni" &&
                styles.active
              }`}
            >
              DENIS BIBLIONI
            </Link>
            <h4 className={styles.nav__section_option}>DENIS</h4>
            <h4 className={styles.nav__section_option}>the usual*</h4>
          </div>
          <div className={styles.column__nav_section}>
            <Link
              to={"/music"}
              className={`${styles.nav__section_title} ${
                location.pathname.split("/").at(-1) === "music" && styles.active
              }`}
            >
              ALL MUSIC
            </Link>
          </div>
        </div>
        <div className={styles.outlet}>
          {location.pathname.split("/").at(-1) === "music" && (
            <CoverFlow images={ALL_MUSIC} />
          )}
          <Outlet />
        </div>
      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
}
