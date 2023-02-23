import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ButtonPrimary from "../../components/elements/button/ButtonPrimary";
import styles from "./Details.module.css";
import { NavLink } from "react-router-dom";


const URL = 'http://localhost:1337/api/products';

function HotelDetails() {
  const [hotelDetail, setHotelDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useNavigate();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const api = URL + "/" + id;



  useEffect(
    function () {
      async function fetchData() {
        
        try {
          const response = await fetch(api);

          if (response.ok) {
            const json = await response.json();
            console.log(id, json);
            setHotelDetail(json);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [api]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <div>
      <h1 className={styles.detailPage_heading}>{hotelDetail.data.attributes.Title}</h1>
      <div className={styles.container_detailPage}>
        <div>
          <p>x</p>
        </div>
        <div>
          <p>{hotelDetail.data.attributes.Description}</p>
          <p>$ {hotelDetail.data.attributes.Price}</p>
          <NavLink to="/enquiry">
            <ButtonPrimary buttonPrimary="Book now!" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;
