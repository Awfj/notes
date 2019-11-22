import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

import FilterPage from "./FilterPage";
import NewNote from "../NewNote/NewNote";
import NoteList from "../NoteList/NoteList";
import FilterMessage from "../FilterMessage/FilterMessage";
import EditNote from "../EditNote/EditNote";

import { getNotesByStatus } from "../../redux/selectors/notes";
import { NOTE_STATUS } from "../../constants";

const Home = ({ notes, notesLayout }) => {
  return (
    <FilterPage>
      <NewNote />
      {/* <EditNote note={notes[0]} /> */}
      {notes.length > 0 ? (
        <NoteList notes={notes} notesLayout={notesLayout} />
      ) : (
        <FilterMessage
          message="No notes yet"
          icon={<FontAwesomeIcon icon={faLightbulb} fixedWidth />}
        />
      )}
    </FilterPage>
  );
};

Home.propTypes = {
  notes: PropTypes.array.isRequired,
  notesLayout: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  notes: getNotesByStatus(state, NOTE_STATUS.ACTIVE)
});

export default connect(mapStateToProps)(Home);
