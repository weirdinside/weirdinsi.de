// import { Link } from "react-router-dom";
// import Videos from "../../../Video/Videos";
// import styles from "./CrossCountry.module.css";
// import { CROSSCOUNTRY_ARTWORKS } from "../../../../constants";
// import Carousel from "../../Carousel/Carousel";

// const MusicVideos = [
//   {
//     videoUrl: "https://youtu.be/CJaIhbKFq7Y?si=lBMhmRjaOo1FgYnE",
//     description:
//       "credits: Ani Bharadwaj (color, edit), Perry André (DP, camera operator), Nick Eckert (driver) \nshot in: 1 day; edited in: 2 weeks\nruntime: 2:09",
//   },
//   {
//     videoUrl: "https://youtu.be/6w9OJjo2fdU?si=wH5AJGHiwihThxUX",
//     description:
//       "credits: Ani Bharadwaj (director, camera operator, color, edit), starring Ben Lewis, Jessica Seelinger, Thomas Seelinger and Ariya Azimi \nshot in: 3 days; edited in: 1 week \nruntime: 2:02",
//   },
// ];

// const PromoVideos = [
//   {
//     videoUrl: "https://youtu.be/pYLH2rFiwqE?si=wjmsoOZggRByyykc",
//   },
//   {
//     videoUrl: "https://youtu.be/hTiuu2bqucY?si=xpNGgjEcSFP6EfBo",
//   },
// ];

// export default function CrossCountry() {
//   return (
//     <>
//       <div className={styles.main__heading_box}>
//         <h2 className={styles.main__heading_text}>
//           CROSS COUNTRY
//         </h2>
//         <div className={styles.main__heading_infobox}>
//           <p className={styles.main__heading_subtitle}>WIP; 4 TRACKS</p>
//           <p className={styles.main__heading_subtitle}>RUNTIME: UNKNOWN</p>

//           <p className={styles.main__heading_information}>RD: UNKNOWN</p>
//           <p className={styles.main__heading_information}>AMBIENT, DOWNTEMPO</p>
//           <p className={styles.main__heading_information}>
//             P: DENIS BIBLIONI MUSIC
//           </p>
//         </div>
//       </div>
//       <section
//         className={`${styles.main__section} ${styles.main__section_abstract}`}
//       >
//         <h2 className={styles.main__title}>ABSTRACT</h2>
//         <p className={styles.main__description}>
//           'cross country' is, like{" "}
//           <Link to="/music/rrst/cruise-control">'cruise control'</Link> ,
//           another exploration into traversing the vast scenery of the United
//           States. the project is currently being made and released as a series
//           of singles, each with its own carefully crafted visual counterpart.
//           <br /> <br /> 'document (searching)' is an ode to the roads of rural
//           new jersey and new york in the fall, and 'COME2SENSES' is an ode to
//           the stops made along a road trip, visiting friends and family.
//         </p>
//       </section>
//       <section
//         className={`${styles.main__section} ${styles.main__section_artwork}`}
//       >
//         <h2 className={styles.main__title}>ARTWORK</h2>
//         <Carousel carouselItems={CROSSCOUNTRY_ARTWORKS} />
//         <p className={styles.main__description}></p>
//       </section>
//       <section
//         className={`${styles.main__section} ${styles.main__section_videos}`}
//       >
//         <h2 className={styles.main__title}>MUSIC VIDEOS</h2>
//         <Videos videoList={MusicVideos} />
//       </section>
//       <section
//         className={`${styles.main__section} ${styles.main__section_promo}`}
//       >
//         <h2 className={styles.main__title}>ADDITIONAL CONTENT</h2>
//         <Videos videoList={PromoVideos} />
//       </section>
//     </>
//   );
// }
