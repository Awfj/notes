import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faThumbtack,
  faFillDrip,
  faEllipsisV,
  faUndoAlt,
  faRedoAlt
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faFolderOpen } from "@fortawesome/free-regular-svg-icons";

import styles from "./Toolbox.module.scss";
import ColorPicker from "../ColorPicker/ColorPicker";
import Dropdown from "../Dropdown/Dropdown";
import {
  addNote,
  archiveNote,
  changeNoteColor,
  deleteNote
} from "../../redux/actions/actionCreators";

const Toolbox = props => {
  // const { id, title, content, color, labels } = props.note;

  const { parent } = props;
  const parentNote = parent === "Note";
  const parentNewNote = parent === "NewNote";

  let classToolbox = styles.Toolbox;
  // if (parentNote) {
  //   classToolbox += ` ${styles.hidden}`;
  // }
  return (
    <div className={classToolbox}>
      {parentNote && (
        <button type="button" className={styles.select}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </button>
      )}
      <div>{props.children}</div>
      <button type="button" className={styles.pin}>
        <FontAwesomeIcon icon={faThumbtack} />
      </button>
      <footer>
        <div className={styles.tools}>
          <button type="button">
            <FontAwesomeIcon icon={faBell} fixedWidth />
          </button>
          <ColorPicker
            activeColor={props.activeColor}
            mainButton={<FontAwesomeIcon icon={faFillDrip} fixedWidth />}
            onChangeNoteColor={color =>
              props.changeNoteColor(props.note.id, color)
            }
          />
          <button
            type="button"
            onClick={() => props.archiveNote(props.note.id)}
          >
            <FontAwesomeIcon icon={faFolderOpen} fixedWidth />
          </button>
          <Dropdown
            mainButton={<FontAwesomeIcon icon={faEllipsisV} fixedWidth />}
            options={[
              ["Delete note", () => props.deleteNote(props.note.id)],
              ["Add label"],
              [
                "Make a copy",
                () =>
                  props.addNote(
                    props.note.title,
                    props.note.content,
                    props.note.color,
                    props.note.labels
                  )
              ]
            ]}
          ></Dropdown>

          {parentNewNote && (
            <>
              <button type="button">
                <FontAwesomeIcon icon={faUndoAlt} fixedWidth />
              </button>
              <button type="button">
                <FontAwesomeIcon icon={faRedoAlt} fixedWidth />
              </button>
            </>
          )}
        </div>
        {parentNewNote && <button>Close</button>}
      </footer>
    </div>
  );
};

export default connect(
  null,
  { addNote, archiveNote, changeNoteColor, deleteNote }
)(Toolbox);
