import React, { createRef } from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import styles from "./Search.module.scss";

const Search = ({ searchQuery, setSearchQuery }) => {
  const search = createRef();
  return (
    <form className={styles.search}>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <input
        ref={search}
        type="search"
        placeholder="Search"
        value={searchQuery}
        onChange={() =>
          setSearchQuery(search.current.value.trim().toLowerCase())
        }
      />
    </form>
  );
};

Search.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired
};

export default Search;
