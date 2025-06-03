import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import weird_inside_logo from "/art/weird inside logos/weird inside  logo copy.png";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();
  const [back, setBack] = useState<string | undefined>("/");

  useEffect(() => {
    const paths = location.pathname.split("/");
    if (paths.length === 2) setBack("/");
    else setBack(paths.at(-2));
  }, [location]);

  return (
    <div className={styles.header}>
      <img className={styles.header__logo} src={weird_inside_logo} />
      <Link to={back ? back : "/"} className={styles.header__back}>
        back to {back ? back : "home"}
      </Link>
    </div>
  );
}
