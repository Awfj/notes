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
  activeColor,
  children,
  dropdownOptions,
  onArchiveNote,
  onChangeNoteColor,
  parent
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
            options={dropdownOptions}
            
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
  activeColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  dropdownOptions: PropTypes.array.isRequired,
  onArchiveNote: PropTypes.func.isRequired,
  onChangeNoteColor: PropTypes.func.isRequired,
  parent: PropTypes.string.isRequired
};

export default Toolbox;
