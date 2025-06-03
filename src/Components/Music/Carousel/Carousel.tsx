import styles from "./Carousel.module.css";
import CarouselItem from "./CarouselItem";

type CarouselItem = {
  imageSrc: string;
  description: string;
};

export default function Carousel({
  carouselItems,
}: {
  carouselItems: CarouselItem[];
}) {
  return (
    <div className={styles.carousel}>
      {carouselItems.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            imageSrc={item.imageSrc}
            description={item.description}
          />
        );
      })}
    </div>
  );
}
