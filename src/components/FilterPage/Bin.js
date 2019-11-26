import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

import FilterPage from "./FilterPage";
import NoteList from "../NoteList/NoteList";
import FilterMessage from "../FilterMessage/FilterMessage";

import { getNotesByStatus } from "../../redux/selectors/notes";
import { NOTE_STATUS } from "../../constants";

const Bin = ({ notes, notesLayout }) => {
  return (
    <FilterPage>
      {notes.length > 0 ? (
        <NoteList notes={notes} notesLayout={notesLayout} />
      ) : (
        <FilterMessage
          message="No notes in Recycle Bin"
          extraMessage="Notes in the Recycle Bin are deleted after 7 days."
          icon={<DeleteOutlinedIcon />}
        />
      )}
    </FilterPage>
  );
};

Bin.propTypes = {
  notes: PropTypes.array.isRequired,
  notesLayout: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  notes: getNotesByStatus(state, NOTE_STATUS.DELETED)
});

export default connect(mapStateToProps)(Bin);
