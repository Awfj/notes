import React, { createRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import styles from "./Search.module.scss";

const Search = ({ searchQuery, setSearchQuery }) => {
  const search = createRef();
  return (
    <form className={styles.search}>
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
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
