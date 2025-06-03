import styles from "./Video.module.css";

export default function Video({
  description,
  videoUrl,
}: {
  description?: string;
  videoUrl: string;
}) {
  function calculateVideoMarkup() {
    if (videoUrl.toLowerCase().includes("youtu.be")) {
      let slug;
      if (videoUrl.toLowerCase().includes("youtu.be")) {
        slug = videoUrl.substring(
          videoUrl.indexOf(".be/") + 3,
          videoUrl.indexOf("?")
        );
        slug = slug + "?si=nulltracker";
      }

      return (
        <iframe
          className={styles.video__embed}
          src={`https://www.youtube.com/embed/${slug}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        />
      );
    } else if (videoUrl.toLowerCase().includes("vimeo.com")) {
      const slug = videoUrl.split("/").pop();
      return (
        <>
          <iframe
            src={`https://player.vimeo.com/video/${slug}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{width: '100%', height: 'auto', aspectRatio: '16 / 9'}}
            className={styles.video__embed}
          />

          <script src="https://player.vimeo.com/api/player.js"></script>
        </>
      );
    }
  }

  return (
    <div className={styles.video}>
      {calculateVideoMarkup()}
      {description && (
        <div className={styles.video__description}>{description}</div>
      )}
    </div>
  );
}
