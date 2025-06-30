import { createContext, useEffect, useRef, useState } from "react";

type MusicPlayerProviderProps = {
  children: React.ReactNode;
};

type MusicPlayerContextType = {
  play: () => void;
  pause: () => void;
  stop: () => void;
  seek: (arg0: number) => void;
  currentTime: number;
  setCurrentFile: (songUrl: string) => void;
  duration: number;
  songInfo: SongInfo;
  selectSong: (arg0: SongInfo) => void;
  currentFile: string;
  playerState: "playing" | "paused";
  setPlaybackRate: (arg0: number) => void;
};

const defaultContext: MusicPlayerContextType = {
  play: () => {},
  pause: () => {},
  stop: () => {},
  seek: () => {},
  currentFile: "",
  setCurrentFile: () => {},
  duration: 0,
  songInfo: {
    title: "",
    artist: "",
    album: "",
  },
  currentTime: 0,
  selectSong: () => {},
  playerState: "playing",
  setPlaybackRate: () => {},
};

type SongInfo = {
  title: string;
  artist: string;
  album: string;
};

export const MusicPlayerContext =
  createContext<MusicPlayerContextType>(defaultContext);

export default function MusicPlayerProvider({
  children,
}: MusicPlayerProviderProps) {
  const [currentFile, setCurrentFile] = useState<string>("");
  const [songInfo, setSongInfo] = useState<SongInfo>({
    title: "",
    artist: "",
    album: "",
  });
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [playerState, setPlayerState] = useState<"playing" | "paused">(
    "paused"
  );
  const playerRef = useRef<HTMLAudioElement>(null);

  function selectSong({ title, artist, album }: SongInfo) {
    setSongInfo({ title: title, artist: artist, album: album });
  }

  function play() {
    if (playerRef.current && currentFile) playerRef.current.play();
  }

  function pause() {
    if (playerRef.current && currentFile) playerRef.current.pause();
  }

  function stop() {
    setDuration(0);
    setCurrentTime(0);
    setPlaybackRate(1);
    setCurrentFile("");
    if (playerRef.current) playerRef.current.src = "";
  }

  function setPlaybackRate(rate: number) {
    if (rate < 0 && rate > 2) return;
    if (playerRef.current) playerRef.current.playbackRate = rate;
  }

  function seek(newTime: number) {
    if (playerRef.current) {
      setCurrentTime(newTime);
      playerRef.current.currentTime = newTime;
    }
  }

  useEffect(() => {
    if (playerRef.current && currentFile)
      setDuration(playerRef.current.duration);
  }, [currentFile, playerRef]);

  return (
    <MusicPlayerContext.Provider
      value={{
        play,
        pause,
        seek,
        stop,
        currentTime,
        currentFile,
        setCurrentFile,
        duration,
        songInfo,
        selectSong,
        playerState,
        setPlaybackRate,
      }}
    >
      {children}
      <audio
        onTimeUpdate={() => {
          if (playerRef.current) setCurrentTime(playerRef.current.currentTime);
        }}
        onPlay={() => {
          setPlayerState("playing");
        }}
        onPause={() => {
          setPlayerState("paused");
        }}
        onEnded={() => {
          setCurrentFile("");
          setSongInfo({ title: "", artist: "", album: "" });
          setPlayerState("paused");
          setDuration(0);
          setCurrentTime(0);
        }}
        onLoadedData={() => {
          play();
          if (playerRef.current) setDuration(playerRef.current.duration);
        }}
        ref={playerRef}
        src={currentFile}
      />
    </MusicPlayerContext.Provider>
  );
}
