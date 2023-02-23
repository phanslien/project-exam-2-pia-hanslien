import FetchData from "../../../hooks/FetchHotels";
import styles from "./TabContentOne.module.css";

function TabContentTwo() {
  const [loading, error, data] = FetchData(
    "http://localhost:1337/api/enquiries"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      {data.map((enquires) => (
        <div className={styles.container_tabTwo}>
          <p className={styles.container_tabOne__datePublished}>
            {enquires.attributes.createdAt}
          </p>
          <p>
            <span className={styles.container_tabOne__span}>First name: </span>
            {enquires.attributes.FirstName}
          </p>
          <p>
            <span className={styles.container_tabOne__span}>Last name: </span>
            {enquires.attributes.FirstName}
          </p>
          <p>
            <span className={styles.container_tabOne__span}>E-post: </span>
            {enquires.attributes.Email}
          </p>
          <p>
            <span className={styles.container_tabOne__span}>
              Date of arrival: 
            </span>
            {enquires.attributes.Date}
          </p>
          <p>
            <span className={styles.container_tabOne__span}>People: </span>
            {enquires.attributes.People}
          </p>
          <p>
            <span className={styles.container_tabOne__span}>Nights: </span>
            {enquires.attributes.Stays}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TabContentTwo;
