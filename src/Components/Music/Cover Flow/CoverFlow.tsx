import { useEffect, useLayoutEffect, useRef, useState } from "react";
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

  const [isReady, setIsReady] = useState(false);

  function handleScroll() {
    if (
      itemRefs.current &&
      itemRefs.current[0] &&
      itemRefs.current[1] &&
      flowRef.current
    ) {
      const endItem = Number(
        itemRefs.current[0]?.getBoundingClientRect().width
      );
      const roundedEndItem = Math.round(endItem * 2) / 2;

      const gap = 15;
      const coverFlowWidth = flowRef.current.offsetWidth;
      const coverFlowScrollWidth = flowRef.current.scrollWidth;
      const currentPosition = flowRef.current.scrollLeft;

      const oneBoxSize = roundedEndItem + gap;

      itemRefs.current.forEach((item, idx) => {
        const distanceFromItem = Math.round(
          (oneBoxSize * idx - currentPosition) /
          (coverFlowScrollWidth - coverFlowWidth) * 1000) / 1000
        const direction = Math.sign(distanceFromItem);


        if (item && item.firstChild) {
          const calc1 = -Math.abs(70 * distanceFromItem ** 2);
          const calc2 =
            -direction *
            Math.min(Math.abs(50 * Math.abs(distanceFromItem) ** 0.4), 55);
          const calc3 = -1 * Math.abs(1.2 * distanceFromItem) ** 2 + 1.5

          console.log(idx, calc2)

          const child = item.firstChild as HTMLElement;

          child.style.transform = `scale(${Math.max(
            calc1 + 1.5,
            1
          )}) translateZ(${Math.max(
            -Math.abs(70 * distanceFromItem ** 2) + 2,
            0
          )}em) rotateY(${calc2}deg)`;
          item.style.zIndex = `${(-Math.abs(220 * distanceFromItem ** 2) + 30)
            .toFixed(0)
            .toString()}`;
        }
      });
    }

    return 0;
  }

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

  useLayoutEffect(() => {
    if (!flowRef.current || itemRefs.current.some((el) => !el)) return;

    const firstItem = itemRefs.current[0];
    const computedStyle = window.getComputedStyle(firstItem!);
    const marginLeft = parseInt(computedStyle.marginLeft);

    flowRef.current.scrollTo(flowRef.current.scrollWidth / 2 - marginLeft, 0);

    handleScroll();
    setIsReady(true);
  }, [flowRef, itemRefs]);

  return (
    <div className={styles.cards__wrapper}>
      <ul
        style={
          isReady
            ? { pointerEvents: "auto", opacity: "1" }
            : { pointerEvents: "none", opacity: "0" }
        }
        ref={flowRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerUp={handlePointerUp}
        className={styles.cards}
        onScroll={(e) => {
          handleScroll();
        }}
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
