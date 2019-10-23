import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCog,
  faTh,
  faThList,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import ChangeButton from "../../containers/ChangeButton";
import Menu from "../../components/shared/Menu/Menu";
import { notesLayoutOptions } from "../../store/actions/actionTypes";

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
        <button
          type="button"
          className={styles.iconSidebar}
          onClick={props.toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1>Notes</h1>
      </div>
      <div>
        <form>
          <button className={styles.iconSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input type="search" placeholder="Search" />
        </form>
      </div>
      <div>
        {/* <button type="button" id="grid" onClick={props.changeView}>
            <FontAwesomeIcon icon={iconView} />
          </button> */}
        <ChangeButton notesLayout={notesLayoutOptions.LIST}>
          <FontAwesomeIcon icon={iconView} />
        </ChangeButton>
        <div className={styles.menuContainer}>
          <button type="button">
            <FontAwesomeIcon icon={faCog} />
          </button>
          <Menu>
            <ul className={styles.menu}>
              <li><button type="button">Settings</button></li>
              <li><button type="button">Enable Dark Theme</button></li>
            </ul>
          </Menu>
        </div>
        {/* <button type='button'>Enable Dark Theme</button> */}
      </div>
    </header>
  );
};

export default Header;
