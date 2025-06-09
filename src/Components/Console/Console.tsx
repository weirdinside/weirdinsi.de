import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Console.module.css";
import ConsolePrompt from "./ConsolePrompt";
export default function Console() {
  const [isPromptTyping, setIsPromptTyping] = useState<boolean>(false);
  const [promptKey, setPromptKey] = useState<number>(0);

  const historyRef = useRef<HTMLDivElement>(null);
  const consoleRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // todo- prompt history

  const navigate = useNavigate();

  const [promptText, setPromptText] = useState<string>(
    'hello, welcome to my internal system. please enter a command, or "help" to see a list of commands'
  );

  function handleSubmitCommand(input: string) {
    if (consoleRef.current && historyRef.current) {
      const caret = consoleRef.current.querySelector(".thick-caret");
      if (caret) caret.remove();

      while (consoleRef.current.firstChild) {
        historyRef.current.appendChild(consoleRef.current.firstChild);
      }
    }

    const validDirs = new Set([
      "dev",
      "music",
      "music/rrst",
      "music/rrst/cold-start",
      "music/rrst/cruise-control",
      "music/rrst/equinox",
      "music/rrst/cross-country",
    ]);

    const commands: Record<string, () => void> = {
      "": () => setPromptText(""),

      hello: () =>
        setPromptText(
          "what's good? (don't respond to that, just tell me what to do i'm just a console not a person)\ntype 'help' to get started"
        ),

      help: () =>
        setPromptText(
          "help -- shows a list of possible commands \n" +
            "whoareyou -- about weirdinsi.de and its creator (ani bharadwaj) \n" +
            "cd <dir> -- takes you to a certain location (<dir>) if it exists. ex. cd music would take you to weirdinsi.de/music \n" +
            "contact -- opens up your email client to send an email to me"
        ),

      whoareyou: () => setPromptText(""),

      contact: () => {
        window.location.href = "mailto:ani@weirdinsi.de";
      },
    };

    if (commands.hasOwnProperty(input)) {
      commands[input]();
    } else if (input.startsWith("cd")) {
      const cdMatch = input.match(/^cd\s+(.+)$/);
      if (cdMatch) {
        const dir = cdMatch[1].trim();
        if (validDirs.has(dir)) {
          navigate(`/${dir}`);
        } else {
          setPromptText(`cd: ${dir}: no such directory`);
        }
      } else {
        setPromptText("cd <dir>: specify a directory");
      }
    } else {
      setPromptText(`${input}: no such command`);
    }

    setPromptKey((prev) => prev + 1);
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.header__buttons}>
          <Link to=".." className={styles.header__close} />
          <div className={styles.header__} />
        </div>
      </header>
      <div className={styles.page__content}>
        <div
          onClick={() => {
            if (inputRef.current) inputRef.current.focus();
          }}
          className={styles.console}
        >
          <div ref={historyRef} className={styles.history} />
          <ConsolePrompt
            key={promptKey}
            handleSubmitCommand={handleSubmitCommand}
            promptText={promptText}
            inputRef={inputRef}
            consoleRef={consoleRef}
            setIsPromptTyping={setIsPromptTyping}
          />
        </div>
      </div>
    </div>
  );
}
