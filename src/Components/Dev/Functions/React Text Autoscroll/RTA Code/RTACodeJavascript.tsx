// RTACode.tsx
import { useEffect, useRef } from "react";

import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";
import "prismjs/themes/prism-tomorrow.css";

import styles from "./RTACode.module.css";
import AUTOSCROLL_TEXT_CODE from "../RTA Demo/Autoscroll.jsx?raw";

export default function RTACodeJavascript() {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, []);

  const handleClick = () => {
    navigator.clipboard.writeText(AUTOSCROLL_TEXT_CODE);
  };

  return (
    <div className={styles.page}>
      <div className={styles.codeview}>
        <div className={styles.codeview__body} onClick={handleClick}>
          <div className={styles.codeview__overlay} />
          <pre style={{ margin: 0 }}>
            <code
              ref={codeRef}
              className="language-tsx"
              style={{
                whiteSpace: "pre-wrap",
                fontFamily: "monospace",
              }}
            >
              {AUTOSCROLL_TEXT_CODE}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
