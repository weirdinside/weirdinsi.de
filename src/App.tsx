{
  /* UTIL */
}
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

{
  /* STYLES */
}
import styles from "./App.module.css";

{
  /* COMPONENT IMPORTS */
}

import Homepage from "./Components/Homepage/Homepage";
import Music from "./Components/Music/Music";
import RRST from "./Components/Music/RRST/RRST"
import ColdStart from "./Components/Music/RRST/Cold Start/ColdStart";

import { useCallback, useContext, useEffect, useState } from "react";
import PreviewModal from "./Components/Modals/PreviewModal";
import { ImagePreviewContext } from "./Contexts/ImagePreviewContext";
import CruiseControl from "./Components/Music/RRST/Cruise Control/CruiseControl";
import Equinox from "./Components/Music/RRST/Equinox/Equinox";
import CrossCountry from "./Components/Music/RRST/Cross Country/CrossCountry";
import Console from "./Components/Console/Console";
import DenisBiblioni from "./Components/Music/Denis Biblioni/DenisBiblioni";

{
  /* COMPONENT EXPORT */
}
export default function App() {
  const location = useLocation();

  const navigate = useNavigate();

  const [background, setBackground] = useState<string>("");

  const setBackgroundGradient = useCallback(() => {
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
  }, [setBackground, location]);

  const { setPreviewModalOpen, isPreviewModalOpen } =
    useContext(ImagePreviewContext);

  function closeModal() {
    setPreviewModalOpen(false);
  }

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (isPreviewModalOpen) {
          closeModal();
        } else {
          navigate("..");
        }
      }
    }

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  });

  useEffect(() => {
    setBackgroundGradient();
  }, [setBackgroundGradient, location]);

  return (
    <div style={{ background: `var(${background})` }} className={styles.page}>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="console" element={<Console />} />
          <Route path="music" element={<Music />}>
            <Route path="denis-biblioni" element={<DenisBiblioni />}>
              <Route path="DENIS" element={<></>} />
              <Route path="the-usual" element={<></>} />
            </Route>
            <Route path="rrst" element={<RRST />}>
              <Route path="cold-start" element={<ColdStart />} />
              <Route path="equinox" element={<Equinox />} />
              <Route path="cross-country" element={<CrossCountry />} />
              <Route path="cruise-control" element={<CruiseControl />} />
            </Route>
          </Route>
        </Route>
      </Routes>

      <PreviewModal closeModal={closeModal} />
    </div>
  );
}
