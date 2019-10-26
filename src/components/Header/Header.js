import React from "react";
import PropTypes from "prop-types";
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
import Menu from "../../components/shared/Menu/Menu";

const Header = props => {
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
        {window.innerWidth >= 600 ? (
          <button type="button" onClick={props.toggleNotesLayout}>
            <FontAwesomeIcon
              icon={props.notesLayout === "grid" ? faThList : faTh}
            />
          </button>
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

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  notesLayout: PropTypes.string.isRequired,
  toggleNotesLayout: PropTypes.func.isRequired,
  toggleDarkTheme: PropTypes.func.isRequired
};

export default Header;
