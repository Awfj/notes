import React from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCog,
  faTh,
  faThList,
  faBars
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
      <div>
        <button type="button" className={styles.iconMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1>Notes</h1>
      </div>
      <div className={styles.tools}>
        <form>
          <button className={styles.iconSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input type="search" placeholder="Search" />
        </form>
        <div>
          <button type="button" id="grid" onClick={props.changeView}>
            <FontAwesomeIcon icon={iconView} />
          </button>
          <button type="button">
            <FontAwesomeIcon icon={faCog} />
          </button>
          {/* <button type='button'>Enable Dark Theme</button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
