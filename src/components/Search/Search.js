import React, { createRef } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { changeVisibilityFilter } from "../../redux/actions/actionCreators";
import { VISIBILITY_FILTERS } from "../../constants";

import styles from "./Search.module.scss";

const Search = ({ searchQuery, setSearchQuery, changeVisibilityFilter }) => {
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
        onClick={() => changeVisibilityFilter(VISIBILITY_FILTERS.search)}
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

export default connect(null, { changeVisibilityFilter })(Search);
