import Heading from "../../components/elements/heading/HeadingLarge";
import FetchHotels from "../../hooks/FetchHotels";
import Search from "../../components/search/Search";
import styles from "./Accommodation.module.css";

function Accommodation() {
  <FetchHotels />;

  return (
    <>
      <div className={styles.container_accommodation_heading}>
        <Heading headingLarge="Accommodations" />
      </div>
      <Search />
    </>
  );
}

export default Accommodation;
