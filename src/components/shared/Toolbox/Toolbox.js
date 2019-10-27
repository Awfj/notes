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
import Menu from "../Menu/Menu";

const Toolbox = props => {
  const { parent } = props;
  const parentNote = parent === "Note";
  const parentNewNote = parent === "NewNote";

  // function changeColor(color) {
  //   props.noteForm.style.backgroundColor = color;
  // }

  let classToolbox = styles.Toolbox;
  // if (parentNote) {
  //   classToolbox += ` ${styles.hidden}`;
  // }
  return (
    <div className={classToolbox}>
      {parentNote ? (
        <button type="button" className={styles.select}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </button>
      ) : null}
      <div>{props.children}</div>
      <button type="button" className={styles.pin}>
        <FontAwesomeIcon icon={faThumbtack} />
      </button>
      <footer>
        <div className={styles.tools}>
          <button type="button">
            <FontAwesomeIcon icon={faBell} fixedWidth />
          </button>
          <Menu
            buttonValue={<FontAwesomeIcon icon={faFillDrip} fixedWidth />}
            layout="grid"
            options={["white", "red"]}
          />
          <button type="button">
            <FontAwesomeIcon icon={faFolderOpen} fixedWidth />
          </button>
          <Menu
            buttonValue={<FontAwesomeIcon icon={faEllipsisV} fixedWidth />}
            layout="list"
            options={["Delete note", "Add label", "Make a copy"]}
          />

          {parentNewNote ? (
            <>
              <button type="button">
                <FontAwesomeIcon icon={faUndoAlt} fixedWidth />
              </button>
              <button type="button">
                <FontAwesomeIcon icon={faRedoAlt} fixedWidth />
              </button>
            </>
          ) : null}
        </div>
        {parentNewNote ? <button>Close</button> : null}
      </footer>
    </div>
  );
};

export default Toolbox;
