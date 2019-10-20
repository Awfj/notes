import React from "react";
import styles from "./Header.module.scss";
import ChangeButton from "../../containers/ChangeButton";
import { notesLayoutOptions } from '../../store/actions/actionTypes';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCog,
  faTh,
  faThList,
  faBars
} from "@fortawesome/free-solid-svg-icons";

const Header = props => {
  // console.log(props)
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
        {/* <ToggleButton>
          <FontAwesomeIcon icon={faBars} />
        </ToggleButton> */}
        <button
          type="button"
          className={styles.iconMenu}
          onClick={props.toggleSidebar}
        >
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
          {/* <button type="button" id="grid" onClick={props.changeView}>
            <FontAwesomeIcon icon={iconView} />
          </button> */}
          <ChangeButton notesLayout={notesLayoutOptions.LIST}>
            <FontAwesomeIcon icon={iconView} />
          </ChangeButton>
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
