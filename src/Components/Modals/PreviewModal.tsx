import { useContext, useRef } from "react";
import styles from "./PreviewModal.module.css";
import { ImagePreviewContext } from "../../Contexts/ImagePreviewContext";

export default function PreviewModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { imageSrc, description, isPreviewModalOpen } =
    useContext(ImagePreviewContext);

  const previewRef = useRef<HTMLDivElement>(null);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        if (
          (e.target as HTMLDivElement).classList.contains(styles.previewmodal)
        ) {
          closeModal();
        }
      }}
      className={`${styles.previewmodal} ${
        isPreviewModalOpen && styles.active
      }`}
    >
      <div
        onMouseEnter={() => {
          if (previewRef.current) {
            previewRef.current.style.animationPlayState = "paused";
            previewRef.current.style.scale = '1.01';
          }
        }}
        onMouseLeave={() => {
          if (previewRef.current) {
            previewRef.current.style.animationPlayState = "running";
            previewRef.current.style.scale = '1';
          }
        }}
        ref={previewRef}
        className={styles.previewmodal__content}
      >
        <div className={styles.previewmodal__texture} />
        <img
          className={styles.previewmodal__img}
          src={imageSrc}
          alt={description}
        />
        <p className={styles.previewmodal__description}>{description}</p>
      </div>
    </div>
  );
}
