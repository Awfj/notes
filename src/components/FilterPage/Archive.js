import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";

import FilterPage from "./FilterPage";
import NoteList from "../NoteList/NoteList";
import FilterMessage from "../FilterMessage/FilterMessage";

import { getNotesByStatus } from "../../redux/selectors/notes";
import { NOTE_STATUS } from "../../constants";

const Archive = ({ notes, notesLayout }) => {
  return (
    <FilterPage>
      {notes.length > 0 ? (
        <NoteList notes={notes} notesLayout={notesLayout} />
      ) : (
        <FilterMessage
          message="Your archived notes appear here"
          icon={<FontAwesomeIcon icon={faFolderOpen} fixedWidth />}
        />
      )}
    </FilterPage>
  );
};

Archive.propTypes = {
  notes: PropTypes.array.isRequired,
  notesLayout: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  notes: getNotesByStatus(state, NOTE_STATUS.ARCHIVED)
});

export default connect(mapStateToProps)(Archive);
