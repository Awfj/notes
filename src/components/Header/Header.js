import React from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>Notes</h1>
      <div>
        <form>
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input type="search" placeholder="Search" />
        </form>
        {/* <button type='button'>Enable Dark Theme</button> */}
      </div>
    </header>
  );
};

export default Header;
