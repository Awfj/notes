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
import Menu from "../shared/Menu/Menu";
import Search from "../../components/Search/Search";

const Header = props => {
  // console.log(props);

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
      {window.innerWidth >= 768 && (
        <Search
          searchQuery={props.searchQuery}
          setSearchQuery={props.setSearchQuery}
        />
      )}

      <div>
        {window.innerWidth < 768 && (
          <button type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        )}
        <button type="button">
          <FontAwesomeIcon icon={faSync} />
        </button>
        {window.innerWidth >= 600 && (
          <button type="button" onClick={props.toggleNotesLayout}>
            <FontAwesomeIcon
              icon={props.notesLayout === "grid" ? faThList : faTh}
            />
          </button>
        )}

        <Menu
          mainButton={<FontAwesomeIcon icon={faCog} />}
          options={[["Settings"], ["Enable dark theme"]]}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  notesLayout: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  toggleDarkTheme: PropTypes.func.isRequired,
  toggleNotesLayout: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

export default Header;
