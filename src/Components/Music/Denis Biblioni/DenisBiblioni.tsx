import { Outlet } from "react-router-dom";
import styles from "./DenisBiblioni.module.css";
export default function DenisBiblioni() {
  return (
    <div className={styles.page}>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}
