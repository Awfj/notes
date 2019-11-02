import React from "react";
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

const Toolbox = props => {
  // console.log(props)
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
            onChangeNoteColor={props.onChangeNoteColor}
          />
          <button type="button" onClick={props.onArchiveNote}>
            <FontAwesomeIcon icon={faFolderOpen} fixedWidth />
          </button>
          <Dropdown
            mainButton={<FontAwesomeIcon icon={faEllipsisV} fixedWidth />}
            options={[
              ["Delete note", props.onDeleteNote],
              ["Add label"],
              ["Make a copy", props.onAddNote]
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

export default Toolbox;
