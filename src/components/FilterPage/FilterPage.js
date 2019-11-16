import React from "react";
import PropTypes from "prop-types";
import styles from "./FilterPage.module.scss";
import NewNote from "../NewNote/NewNote";
import NoteList from "../NoteList/NoteList";

const FilterPage = ({ searchQuery, notesLayout, visibilityFilter }) => {
  return (
    <div className={styles.FilterPage}>
      <NewNote />
      <NoteList notesLayout={notesLayout} searchQuery={searchQuery} visibilityFilter={visibilityFilter} />
    </div>
  );
};

FilterPage.propTypes = {
  notesLayout: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired
};

export default FilterPage;
