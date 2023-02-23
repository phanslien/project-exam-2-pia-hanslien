import HeadingLarge from "../../components/elements/heading/HeadingLarge";
import ButtonPrimary from "../../components/elements/button/ButtonPrimary";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import cover from "../../img/cover.jpg";
import floyen from "../../img/floyen.jpg";
import contentImage1 from "../../img/contentImage1.jpg";
import hikefjellheimen from "../../img/hikefjellheimen.jpg";
import kayakstrynvatten from "../../img/kayakstrynvatten.jpg";
import HeadingMedium from "../../components/elements/heading/HeadingMedium";

function Home() {
  return (
    <>
        <div className={styles.container_home_content_one}>
          <HeadingLarge headingLarge="Find your stay now!" />
          <p className={styles.home_content_one__text}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
          <Link to="/accommodation">
            <ButtonPrimary buttonPrimary="Search" />
          </Link>
        </div>
        <div className={styles.container_home_content_two}>
          <div className={styles.container_home_content_two__text}>
            <HeadingMedium headingMedium="About" />
            <span className={styles.container_home_divider}> </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div>
            <img src={contentImage1} alt="" />
          </div>
        </div>
        <div>
          <div className={styles.container_home_content_three}>
            <HeadingMedium headingMedium="Top three things to do in the area" />
            <span className={styles.container_home_divider}> </span>
            <div className={styles.container_home_content_three_grid}>
              <div>
                <img src={hikefjellheimen} alt="" />
                <span className={styles.container_home_divider}> </span>
                <p>"Lorem ipsum sipsumt varie skol"</p>
              </div>
              <div>
                <img src={floyen} alt="" />
                <span className={styles.container_home_divider}> </span>
                <p>"Lorem ipsum sipsumt varie skol"</p>
              </div>
              <div>
                <img src={kayakstrynvatten} alt="" />
                <span className={styles.strek}></span>
                <span className={styles.container_home_divider}> </span>
                <p>"Lorem ipsum sipsumt varie skol"</p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Home;
