import { useEffect, useRef, useState } from "react";
import Video from "./Video";
import styles from "./Video.module.css";

type Video = {
  videoUrl: string;
  description?: string;
};

type VideoList = Video[];

export default function Videos({ videoList }: { videoList: VideoList }) {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [showArrows, setShowArrows] = useState<boolean>(false);

  function setScrollPercentage() {
    if (videoContainerRef.current) {
      const offsetWidth = videoContainerRef.current.offsetWidth;
      const scrollWidth = videoContainerRef.current.scrollWidth;
      const scrollLeft = videoContainerRef.current.scrollLeft;
      setScrollPosition(scrollLeft / (scrollWidth - offsetWidth));
      if (scrollWidth - offsetWidth === 0) {
        setShowArrows(false);
      } else {
        setShowArrows(true);
      }
    }
  }

  useEffect(() => {
    setScrollPercentage();

    window.addEventListener("resize", () => {
      setScrollPercentage();
    });

    return () => {
      window.removeEventListener("resize", () => {
        setScrollPercentage();
      });
    };
  }, []);

  return (
    <div
      className={`${styles.videos__container} ${
        scrollPosition < 0.95 && styles.feather__right
      } ${scrollPosition > 0.07 && styles.feather__left}`}
    >
      {showArrows && scrollPosition < 0.95 && (
        <div className={`${styles.arrow} ${styles.right}`}>➔</div>
      )}
      {showArrows && scrollPosition > 0.07 && (
        <div className={`${styles.arrow} ${styles.left}`}>➔</div>
      )}

      <div
        onScroll={setScrollPercentage}
        ref={videoContainerRef}
        className={styles.videos}
      >
        {videoList.map((video, idx) => {
          return (
            <Video
              key={idx}
              videoUrl={video.videoUrl}
              description={video.description}
            />
          );
        })}
      </div>
    </div>
  );
}
