{
  /* STYLING */
}
import { Outlet } from "react-router-dom";
import styles from "./Music.module.css";
import Header from "../Header/Header";

export default function Music() {
  return (
    <div className={styles.page}>
      <Header />
      <Outlet />
    </div>
  );
}
