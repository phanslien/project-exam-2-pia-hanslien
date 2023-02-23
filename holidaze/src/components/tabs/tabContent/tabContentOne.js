import FetchData from "../../../hooks/FetchHotels";
import styles from "./TabContentOne.module.css";
import { ContactFormURL } from "../../../constants/API";

function TabContentOne() {
  const [loading, error, data] = FetchData(ContactFormURL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      {data.map((hotel) => (
        <div className={styles.container_tabOne}>
          <p className={styles.container_tabOne__datePublished}>
            {hotel.attributes.createdAt}
          </p>
          <p>
            <span className={styles.container_tabOne__span}>First name:</span>{" "}
            {hotel.attributes.FirstName}
          </p>
          <p>
            <span className={styles.container_tabOne__span}>Last name:</span>{" "}
            {hotel.attributes.LastName}
          </p>
          <p>
            <span className={styles.container_tabOne__span}>E-post:</span>{" "}
            {hotel.attributes.email}
          </p>
          <p>
            <span className={styles.container_tabOne__span}>Message:</span>{" "}
            {hotel.attributes.message}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TabContentOne;
