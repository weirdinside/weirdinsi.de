import { createContext, useEffect, useRef, useState } from "react";

type MusicPlayerProviderProps = {
  children: React.ReactNode;
};

type MusicPlayerContextType = {
  setCurrentFile: (songUrl: string) => void;
  duration: number;
};

const defaultContext: MusicPlayerContextType = {
  setCurrentFile: () => {},
  duration: 0,
};

export const MusicPlayerContext =
  createContext<MusicPlayerContextType>(defaultContext);

export default function MusicPlayerProvider({
  children,
}: MusicPlayerProviderProps) {
  const [currentFile, setCurrentFile] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const playerRef = useRef<HTMLAudioElement>(null);

  function play() {
    if (playerRef.current && currentFile) playerRef.current.play();
  }

  function pause() {
    if (playerRef.current && currentFile) playerRef.current.pause();
  }

  function seek(newTime: number){
    setCurrentTime(newTime);
  }

  useEffect(() => {
    if (playerRef.current && currentFile)
      setDuration(playerRef.current.duration);
  }, [currentFile, playerRef]);

  return (
    <MusicPlayerContext.Provider
      value={{
        setCurrentFile,
        duration,
      }}
    >
      {children}
      <audio ref={playerRef} src={currentFile} />
    </MusicPlayerContext.Provider>
  );
}
