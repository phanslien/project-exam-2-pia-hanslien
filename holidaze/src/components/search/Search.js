import styles from "./Search.module.css";
import AccommodationsList from "../accommodationList/AccommodationsList";
import { useState } from "react";

function Search() {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase("");
    setInputText(lowerCase);
  };

  return (
      <div className={styles.container_search}>
        <form>
          <input
            onChange={inputHandler}
            placeholder="Search..."
            className={styles.container_search__input}
          />
        </form>
        <AccommodationsList input={inputText} />
      </div>
  );
}

export default Search;
