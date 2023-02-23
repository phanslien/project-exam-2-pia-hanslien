import { URL } from "../../constants/API";
import { NavLink } from "react-router-dom";
import styles from "./AccommodationsList.module.css";
import FetchData from "../../hooks/FetchHotels";

function AccommodationsList(props) {
  <FetchData />;
  const [loading, error, data] = FetchData(URL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const filteredData = data.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.attributes.Title.toLowerCase().includes(props.input);
    }
  });
  console.log(data);

  //for (var i = 0; i < filteredData.length; i++) {
  //console.log(filteredData[0].attributes.Image.data[0].attributes.formats.thumbnail.url);
  //}

  return (
    <div className={styles.container__accommodations}>
      {filteredData.map((hotel) => (
        <div className={styles.container__accommodations_cardd}>
          <div key={hotel.id} className={styles.container__accommodations_card}>
            <div className={styles.accommodations__card_body}>
              <h2 className={styles.accommodations__card_title}>
                {hotel.attributes.Title}
              </h2>
              <p className={styles.accommodations__card_price}>
                From ${hotel.attributes.Price} a night
              </p>
              <p className={styles.accommodations__card_description}>
                {hotel.attributes.Small_description}
              </p>
            </div>
            <NavLink
              to={`details/${hotel.id}`}
              className={styles.accommodations__card_links}
            >
              Read more<div className={styles.triangle}></div>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AccommodationsList;
