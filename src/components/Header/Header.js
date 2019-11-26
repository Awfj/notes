import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./Header.module.scss";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search";
import ViewAgendaOutlinedIcon from "@material-ui/icons/ViewAgendaOutlined";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";
import Search from "../../components/Search/Search";
import Settings from "../../components/Modal/Settings/Settings";
import Menu from "../Menu/Menu";

const Header = props => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <header className={styles.header}>
      {isSettingsOpen && (
        <Settings onCloseModal={() => setIsSettingsOpen(false)} />
      )}
      <div>
        <IconButton
          className={styles.iconSidebar}
          onClick={props.toggleSidebar}
        >
          <MenuIcon />
        </IconButton>
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
          <IconButton>
            <SearchIcon />
          </IconButton>
        )}
        <IconButton aria-label="Refresh">
          <RefreshIcon />
        </IconButton>
        {window.innerWidth >= 600 && (
          <IconButton aria-label="Toggle Layout" onClick={props.toggleNotesLayout}>
            {props.notesLayout === "grid" ? (
              <ViewAgendaOutlinedIcon />
            ) : (
              <DashboardOutlinedIcon />
            )}
          </IconButton>
        )}

        <Menu
          icon={<SettingsOutlinedIcon />}
          options={[
            ["Settings", () => setIsSettingsOpen(true)],
            ["Enable dark theme"]
          ]}
        />
        {/* <Dropdown /> */}
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
