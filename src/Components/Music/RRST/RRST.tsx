import styles from "./RRST.module.css";

import RRST_logo from "/art/RRST/rrst.png";

import { Outlet, useLocation, NavLink, Link } from "react-router-dom";

export default function RRST() {
  const location = useLocation();

  return (
    <div className={styles.page}>
      <div className={styles.page__container}>
        <div
          className={`${styles.column__nav} ${
            location.pathname.split("/").at(-1) !== "rrst" && styles.hidden
          }`}
        >
          <NavLink viewTransition to={"/music/rrst"}>
            <img
              alt="rrst_logo"
              className={styles.rrst__logo}
              src={RRST_logo}
            />
          </NavLink>
          <div className={styles.rrst__description}>
            'RRST' is an audiovisual project centered around the feeling of
            driving.
          </div>
          <div className={styles.nav__block}>
            <NavLink
              viewTransition
              to={"cruise-control"}
              className={`${styles.nav__link} ${
                location.pathname.includes("cruise-control") && styles.active
              }`}
            >
              <h3 className={styles.nav__link_title}>cruise control</h3>
              <p className={styles.nav__link_subtitle}>LP;11 TRACKS</p>
              <p className={styles.nav__link_subtitle}>RUNTIME: 36MIN44S</p>
              <p className={styles.nav__link_information}>01 JUL 2018</p>
              <p className={styles.nav__link_information}>AMBIENT, DOWNTEMPO</p>
              <p className={styles.nav__link_information}>
                P: DENIS BIBLIONI MUSIC
              </p>
            </NavLink>
            <NavLink
              viewTransition
              to={"equinox"}
              className={`${styles.nav__link} ${
                location.pathname.includes("equinox") && styles.active
              }`}
            >
              <h3 className={styles.nav__link_title}>equinox</h3>
              <p className={styles.nav__link_subtitle}>SINGLE; 1 TRACK</p>
              <p className={styles.nav__link_subtitle}>RUNTIME: 3MIN20S</p>
              <p className={styles.nav__link_information}>07 JAN 2020</p>
              <p className={styles.nav__link_information}>AMBIENT, DOWNTEMPO</p>
              <p className={styles.nav__link_information}>
                P: Perry André & RRST
              </p>
            </NavLink>
            <NavLink
              viewTransition
              to={"cold-start"}
              className={`${styles.nav__link} ${
                location.pathname.includes("cold-start") && styles.active
              }`}
            >
              <h3 className={styles.nav__link_title}>cold start</h3>
              <p className={styles.nav__link_subtitle}>EP;5 TRACKS</p>
              <p className={styles.nav__link_information}>21 MAY 2021</p>
              <p className={styles.nav__link_subtitle}>RUNTIME: 12MIN</p>
              <p className={styles.nav__link_information}>AMBIENT, DOWNTEMPO</p>
              <p className={styles.nav__link_information}>
                P: DENIS BIBLIONI MUSIC
              </p>
            </NavLink>
            <NavLink
              viewTransition
              to={"cross-country"}
              className={`${styles.nav__link} ${
                location.pathname.includes("cross-country") && styles.active
              }`}
            >
              <h3 className={styles.nav__link_title}>cross country</h3>
              <p className={styles.nav__link_subtitle}>WIP; 4 TRACKS</p>
              <p className={styles.nav__link_information}>RD: UNKNOWN</p>
              <p className={styles.nav__link_subtitle}>RUNTIME: UNKNOWN</p>
              <p className={styles.nav__link_information}>AMBIENT, DOWNTEMPO</p>
              <p className={styles.nav__link_information}>
                P: DENIS BIBLIONI MUSIC
              </p>
            </NavLink>
          </div>
        </div>
        <main
          className={`${styles.column__content} ${
            location.pathname.split("/").at(-1) === "rrst" && styles.hidden
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
