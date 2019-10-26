import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCog,
  faTh,
  faThList,
  faBars,
  faSync
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import ChangeButton from "../../containers/ChangeButton";
import Menu from "../../components/shared/Menu/Menu";
import { notesLayoutOptions } from "../../store/actions/actionTypes";

const Header = props => {
  console.log(window.innerWidth < 768);
  let iconView = "";
  switch (props.view) {
    case "grid":
      iconView = faThList;
      break;
    default:
      iconView = faTh;
  }
  return (
    <header className={styles.header}>
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
      {window.innerWidth >= 768 ? (
        <form className={styles.search}>
          <button className={styles.iconSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input type="search" placeholder="Search" />
        </form>
      ) : null}

      <div>
        {window.innerWidth < 768 ? (
          <button type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        ) : null}
        <button type="button">
          <FontAwesomeIcon icon={faSync} />
        </button>
        {/* <button id="grid" onClick={props.changeView}>
          </button> */}
        {window.innerWidth >= 600 ? (
          <ChangeButton notesLayout={notesLayoutOptions.LIST}>
            <FontAwesomeIcon icon={iconView} />
          </ChangeButton>
        ) : null}

        <Menu
          buttonValue={<FontAwesomeIcon icon={faCog} />}
          layout="list"
          options={["Settings", "Enable dark theme"]}
        />
      </div>
    </header>
  );
};

export default Header;
