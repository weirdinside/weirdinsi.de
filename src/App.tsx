{
  /* UTIL */
}
import { Route, Routes, useLocation } from "react-router-dom";

{
  /* STYLES */
}
import styles from "./App.module.css";

{
  /* COMPONENT IMPORTS */
}

import Homepage from "./Components/Homepage/Homepage";
import Music from "./Components/Music/Music";
import RRST from "./Components/Music/RRST/RRST";
import ColdStart from "./Components/Music/RRST/Cold Start/ColdStart";

import { useContext, useEffect, useState } from "react";
import PreviewModal from "./Components/Modals/PreviewModal";
import { ImagePreviewContext } from "./Contexts/ImagePreviewContext";
import CruiseControl from "./Components/Music/RRST/Cruise Control/CruiseControl";
import Equinox from "./Components/Music/RRST/Equinox/Equinox";
import CrossCountry from "./Components/Music/RRST/Cross Country/CrossCountry";

{
  /* COMPONENT EXPORT */
}
export default function App() {
  const location = useLocation();

  const [background, setBackground] = useState<string>("");

  function setBackgroundGradient() {
    const slug = location.pathname.split("/").at(-1);
    switch (slug) {
      case "cruise-control":
        return setBackground("--bg-cruise-control");
      case "cold-start":
        return setBackground("--bg-cold-start");
      case "equinox":
        return setBackground("--bg-equinox");
      case "cross-country":
        return setBackground("--bg-cross-country");
      default:
        return setBackground("--bg-cold-start");
    }
  }

  const { setPreviewModalOpen } = useContext(ImagePreviewContext);

  function closeModal() {
    setPreviewModalOpen(false);
  }

  useEffect(() => {
    function closeOnEsc(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }

    window.addEventListener("keydown", closeOnEsc);
    return () => {
      window.removeEventListener("keydown", closeOnEsc);
    };
  }, []);

  useEffect(() => {
    setBackgroundGradient();
  }, [location]);

  return (
    <div style={{ background: `var(${background})` }} className={styles.page}>
      <Routes>
        <Route path="*" element={<Homepage />} />
        <Route path="music" element={<Music />}>
          <Route path="rrst" element={<RRST />}>
            <Route path="cold-start" element={<ColdStart />} />
            <Route path="equinox" element={<Equinox />} />
            <Route path="cross-country" element={<CrossCountry/>} />
            <Route path="cruise-control" element={<CruiseControl />} />
          </Route>
        </Route>
      </Routes>

      <PreviewModal closeModal={closeModal} />
    </div>
  );
}
