import { useEffect, useRef } from "react";
import styles from "./CoverFlow.module.css";

export default function CoverFlow({
  images,
}: {
  images: { imageSrc: string; description: string }[];
}) {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const flowRef = useRef<HTMLUListElement>(null);
  const initialValue = useRef<number>(null);
  const isDragging = useRef<boolean>(false);

  function handleClick(idx: number) {
    const item = itemRefs.current[idx];
    item?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  function handlePointerDown(e: React.PointerEvent<HTMLUListElement>) {
    isDragging.current = true;
    initialValue.current = e.clientX;
  }

  function handlePointerMove(e: React.PointerEvent<HTMLUListElement>) {
    let initial = 0;
    if (initialValue.current) initial = initialValue.current;
    const current = e.clientX;
    if (!isDragging.current || !flowRef.current) return;
    flowRef.current.scrollBy({
      left: (initial - current) * 3,
      behavior: "smooth",
    });
  }

  function handlePointerUp(e: React.PointerEvent<HTMLUListElement>) {
    if (isDragging.current) isDragging.current = false;
  }

  useEffect(() => {
    if (flowRef.current && itemRefs.current && itemRefs.current[0]) {
      const computedStyle = window.getComputedStyle(itemRefs.current[0]);
      flowRef.current.scrollTo(
        flowRef.current.scrollWidth / 2 - parseInt(computedStyle.marginLeft),
        0
      );
    }
  }, [flowRef]);

  return (
    <div className={styles.cards__wrapper}>
      <ul
        ref={flowRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerUp={handlePointerUp}
        className={styles.cards}
      >
        {images.map((art, idx) => (
          <li
            key={idx}
            className={styles.card__item}
            onClick={() => handleClick(idx)}
            ref={(el) => {
              itemRefs.current[idx] = el;
            }}
          >
            <img
              draggable="false"
              src={art.imageSrc}
              width="500"
              height="500"
              alt={art.description}
              className={styles.card__image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
