import { useLayoutEffect, useRef, useState } from "react";
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

  const timeoutId = useRef<number | null>(null);

  const [isReady, setIsReady] = useState(false);

  function handleScroll() {
    if (!flowRef.current || itemRefs.current.length < 2) return;

    const flow = flowRef.current;
    const firstItem = itemRefs.current[0];
    if (!firstItem) return;

    const itemWidth = firstItem.getBoundingClientRect().width;
    const flowRect = flow.getBoundingClientRect();
    const viewportCenter = flowRect.width / 2;
    const containerLeft = flowRect.left;

    const clamp = (val: number, min: number, max: number) =>
      Math.max(min, Math.min(val, max));

    const style = {
      scale: (d: number) => {
        const peak = 1.5;
        const spread = 0.1;
        return Math.max(peak * Math.exp(-(d ** 2) / (2 * spread ** 2)), 1);
      },
      rotateY: (d: number) => {
        const maxAngle = -45;
        const spread = 0.05;
        return (
          Math.sign(d) *
          maxAngle *
          (1 - Math.exp(-(d ** 2) / (2 * spread ** 2)))
        );
      },
      translateX: (d: number) => {
        const maxValue = 100;
        const spread = 0.8;
        const x = clamp(d / spread, -1, 1);
        return maxValue * x ** 3;
      },
      translateZ: (d: number) => Math.max(-Math.abs(70 * d ** 2) + 2, 0),
      zIndex: (d: number) => Math.round(-Math.abs(220 * d ** 2) + 30),
    };

    for (const item of itemRefs.current) {
      if (!item || !item.firstChild) continue;

      const rect = item.getBoundingClientRect();
      const itemCenter = rect.left - containerLeft + rect.width / 2;
      const distanceFromCenter = itemCenter - viewportCenter;
      const d = distanceFromCenter / itemWidth / 10;

      const child = item.firstChild as HTMLElement;
      const scale = style.scale(d);
      const translateZ = style.translateZ(d);
      const rotateY = style.rotateY(d);
      const translateX = -style.translateX(d * 2);
      const zIndex = style.zIndex(d);

      child.style.transform = `scale(${scale}) translateZ(${translateZ}em) rotateY(${rotateY}deg) translateX(${translateX}%)`;
      item.style.zIndex = zIndex.toString();
    }
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

  function handlePointerUp() {
    if (isDragging.current) isDragging.current = false;
  }

  useLayoutEffect(() => {
    if (!flowRef.current || itemRefs.current.some((el) => !el)) return;

    const firstItem = itemRefs.current[0];
    const computedStyle = window.getComputedStyle(firstItem!);
    const marginLeft = parseInt(computedStyle.marginLeft);

    flowRef.current.scrollTo(flowRef.current.scrollWidth / 2 - marginLeft, 0);

    function onResize() {
      if (!flowRef.current || itemRefs.current.some((el) => !el)) return;
      flowRef.current.scrollTo(flowRef.current.scrollWidth / 2 - marginLeft, 0);
      handleScroll();
    }

    timeoutId.current = window.setTimeout(() => {
      handleScroll();
      setIsReady(true);
    }, 301);

    window.addEventListener("resize", onResize);

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
        timeoutId.current = null;
      }

      window.removeEventListener("resize", onResize);

      isDragging.current = false;
      initialValue.current = null;
    };
  }, [flowRef, itemRefs]);

  useLayoutEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, images.length);
    while (itemRefs.current.length < images.length) {
      itemRefs.current.push(null);
    }
  }, [images]);

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
        onScroll={() => {
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
