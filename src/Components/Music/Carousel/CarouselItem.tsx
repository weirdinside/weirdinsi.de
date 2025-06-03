import { useContext } from "react";
import styles from "./Carousel.module.css";
import { ImagePreviewContext } from "../../../Contexts/ImagePreviewContext";

type CarouselItem = {
  imageSrc: string;
  description: string;
};

export default function CarouselItem({ imageSrc, description }: CarouselItem) {
  const { setImageSrc, setDescription, setPreviewModalOpen } =
    useContext(ImagePreviewContext);

  return (
    <div
      onClick={() => {
        setImageSrc(imageSrc);
        setDescription(description);
        setPreviewModalOpen(true);
      }}
      className={styles.carousel__artwork}
    >
      <div className={styles.carousel__artwork_description}>
        <p className={styles.carousel__artwork_description_text}>
          {description}
        </p>
      </div>
      <img className={styles.carousel__artwork_image} src={imageSrc} />
    </div>
  );
}
