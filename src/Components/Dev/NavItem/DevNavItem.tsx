import { Link, useNavigate } from "react-router-dom";
import styles from "./DevNavItem.module.css";

type Items = {
  title: string;
  icon: string;
  url: string;
};

export default function DevNavItem({
  title,
  link,
  activeItem,
  setActiveItem,
  items,
}: {
  title: string;
  link: string;
  activeItem: string;
  setActiveItem: (arg0: string) => void;
  items: Items[];
}) {
  const isActive = title === activeItem;

  const navigate = useNavigate();

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        const target = e.target as Element;
        if (
          target.classList.contains(styles.column__nav_heading) ||
          target.classList.contains(styles.arrow)
        ) {
          if (isActive) {
            setActiveItem("");
            navigate("/dev");
          } else {
            setActiveItem(title);
            navigate(link);
          }
        }
      }}
      className={`${styles.column__nav_item} ${isActive && styles.active}`}
    >
      <h3 className={styles.column__nav_heading}>
        <span className={styles.arrow}></span>
        {title}
      </h3>
      <div className={styles.subheadings}>
        {items.map((item) => {
          return (
            <Link to={item.url} className={styles.column__nav_subheading}>
              <div
                style={{ backgroundImage: `url(${item.icon})` }}
                className={styles.logo}
              />
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
