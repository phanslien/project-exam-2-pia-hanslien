import { useState } from "react";
import { URL } from "../../../constants/API";
import styles from "./TabContentOne.module.css";
import ButtonPrimary from "../../elements/button/ButtonPrimary";
import axios from "axios";

function TabContentThree() {
  const [files, setFiles] = useState();

  const uploadImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("files", files[0]);

    axios
      .post("http://localhost:1337/api/upload", formData)
      .then((response) => {
        const imageId = response.body[0].id;

        axios
          .post(URL, { Image: imageId })
          .then((response) => {
  
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {

      });
  };

  const [hotelTitle, setTitle] = useState("");
  const [hotelSmallDescription, setSmallDescription] = useState("");
  const [price, setPrice] = useState("");
  const [hotelFullDescription, setFullDescription] = useState("");

  function addForm(e) {
    e.preventDefault();
    let Title = hotelTitle;
    let Small_description = hotelSmallDescription;
    let Price = price;
    let Description = hotelFullDescription;

    let body = {
      data: {
        Title,
        Small_description,
        Price,
        Description,
      },
    };

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(body),
    }).then(() => {
      setTitle("");
      setSmallDescription("");
      setFullDescription("");
    });
  }

  return (
    <div onSubmit={addForm}>
      <form className={styles.form} onSubmit={uploadImage}>
        <input type="file"  onChange={(e) => setFiles(e.target.files)} />
        <p className={styles.container_tabThree__span}>Name of hotell:</p>
        <input
          className={styles.container_tabThree__input}
          type="text"
          placeholder="Enter your first name"
          value={hotelTitle}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <p className={styles.container_tabThree__span}>Price:</p>
        <input
          className={styles.container_tabThree__input}
          type="number"
          placeholder="Enter your first name"
          value={price}
          onChange={(e) => setPrice(e.currentTarget.value)}
        />
        <p className={styles.container_tabThree__span}>Small description</p>
        <textarea
          className={styles.container_tabThree__textarea}
          type="text"
          placeholder="Enter your first name"
          value={hotelSmallDescription}
          onChange={(e) => setSmallDescription(e.currentTarget.value)}
        ></textarea>
        <p className={styles.container_tabThree__span}>Full description:</p>
        <textarea
          className={styles.container_tabThree__textarea}
          type="text"
          placeholder="Enter your first name"
          value={hotelFullDescription}
          onChange={(e) => setFullDescription(e.currentTarget.value)}
        ></textarea>
        <div>
          <ButtonPrimary type="submit" buttonPrimary="Button" />
        </div>
      </form>
    </div>
  );
}
export default TabContentThree;