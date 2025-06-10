import { useEffect, useRef, useState, type RefObject } from "react";
import styles from "./Console.module.css";

export default function ConsolePrompt({
  setIsPromptTyping,
  inputRef,
  consoleRef,
  handleSubmitCommand,
  promptText,
  name,
  writeText = true,
}: {
  setIsPromptTyping: (arg0: boolean) => void;
  handleSubmitCommand: (arg0: string) => void;
  writeText: boolean;
  inputRef: RefObject<HTMLInputElement | null>;
  consoleRef: RefObject<HTMLDivElement | null>;
  promptText: string;
  name: string;
}) {
  const textField = useRef<HTMLDivElement>(null);

  const [showInput, setShowInput] = useState(false);
  const hasStartedTyping = useRef(false);

  const speed = 10;

  async function typeWriter(): Promise<void> {
    return new Promise((resolve) => {
      let i = 0;

      function typeChar() {
        if (textField.current) {
          setIsPromptTyping(true);
          const char = promptText.charAt(i);
          textField.current.innerHTML += char === "\n" ? "<br />" : char;
          i++;
          if (i < promptText.length) {
            setTimeout(typeChar, speed);
          } else {
            setIsPromptTyping(false);
            resolve();
          }
        }
      }

      typeChar();
    });
  }

  useEffect(() => {
    if (hasStartedTyping.current) return;
    hasStartedTyping.current = true;

    if (writeText) {
      async function startTyping() {
        await typeWriter();
        setShowInput(true);
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }, 0);
      }

      if (textField.current) {
        startTyping();
      }
    } else {
      textField.current!.textContent = promptText;
      setShowInput(true);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 0);
    }
  }, [promptText, writeText]);

  return (
    <div ref={consoleRef}>
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .thick-caret {
          cursor: pointer;
          display: inline-block;
          width: 8px;
          height: 1.2em;
          background-color: currentColor;
          animation: blink 1s infinite;
          margin-left: 2px;
        }
      `}</style>

      <div
        ref={textField}
        style={{
          display: "inline",
          fontSize: "16px",
          fontFamily: "monospace",
          whiteSpace: "pre-wrap",
        }}
      />
      {showInput && (
        <div
          style={{
            display: "flex",
            fontSize: "16px",
            alignItems: "center",
            fontFamily: "monospace",
            width: "100%",
            whiteSpace: "pre-wrap",
          }}
        >
          <span style={{ flexShrink: 0 }}>{name}@weirdinsi.de ~ %</span>
          <div
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                const command = e.currentTarget.textContent || "";
                handleSubmitCommand(command);
              }
            }}
            ref={inputRef}
            contentEditable
            style={{
              fontSize: "16px",
              caretColor: "transparent",
              background: "transparent",
              border: "none",
              outline: "none",
              fontFamily: "monospace",
              color: "inherit",
              padding: 0,
              marginLeft: 4,
              display: "inline-block",
            }}
          />
          <div
            onClick={() => {
              if (inputRef.current) inputRef.current.focus();
            }}
            className="thick-caret"
          />
        </div>
      )}
    </div>
  );
}
