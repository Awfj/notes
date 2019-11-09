import React from "react";
import PropTypes from "prop-types";
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

const Toolbox = ({
  parent,
  children,
  activeColor,
  onAddNote,
  onArchiveNote,
  onChangeNoteColor,
  onDeleteNote
}) => {
  const isNewNoteParent = parent === "NewNote";
  const isNoteParent = parent === "Note";
  // const isEditNoteParent = parent === "EditNote";

  let classToolbox = styles.Toolbox;
  // if (isNoteParent) {
  //   classToolbox += ` ${styles.hidden}`;
  // }
  return (
    <div className={classToolbox}>
      {isNoteParent && (
        <button type="button" className={styles.select}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </button>
      )}
      <div>{children}</div>
      <button type="button" className={styles.pin}>
        <FontAwesomeIcon icon={faThumbtack} />
      </button>
      <footer>
        <div className={styles.tools}>
          <button type="button">
            <FontAwesomeIcon icon={faBell} fixedWidth />
          </button>
          <ColorPicker
            activeColor={activeColor}
            mainButton={<FontAwesomeIcon icon={faFillDrip} fixedWidth />}
            onChangeNoteColor={onChangeNoteColor}
          />
          <button type="button" onClick={onArchiveNote}>
            <FontAwesomeIcon icon={faFolderOpen} fixedWidth />
          </button>
          <Dropdown
            mainButton={<FontAwesomeIcon icon={faEllipsisV} fixedWidth />}
            options={[
              ["Delete note", onDeleteNote],
              ["Add label"],
              ["Make a copy", onAddNote]
            ]}
          ></Dropdown>

          {isNewNoteParent && (
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
        {isNewNoteParent && <button>Close</button>}
      </footer>
    </div>
  );
};

Toolbox.propTypes = {
  parent: PropTypes.string.isRequired,
  onAddNote: PropTypes.func,
  onArchiveNote: PropTypes.func,
  onChangeNoteColor: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func
};

export default Toolbox;
