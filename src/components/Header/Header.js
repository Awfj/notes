import React from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCog,
  faTh,
  faThList
} from "@fortawesome/free-solid-svg-icons";

const Header = props => {
  let iconView = "";
  switch (props.view) {
    case "grid":
      iconView = faThList;
      break;
    default:
      iconView = faTh;
  }
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
        <button type="button" id="grid" onClick={props.changeView}>
          <FontAwesomeIcon icon={iconView} size="lg" />
        </button>
        <button type="button">
          <FontAwesomeIcon icon={faCog} size="lg" />
        </button>
        {/* <button type='button'>Enable Dark Theme</button> */}
      </div>
    </header>
  );
};

export default Header;
