import { Outlet } from "react-router-dom";
import styles from "./RRST.module.css";

export default function RRST() {
  return (
    <div className={styles.page}>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}
