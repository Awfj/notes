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
// import Menu from "../Menu/Menu";

const Toolbox = props => {
  const { parent } = props;
  const parentNote = parent === "Note";
  const parentNewNote = parent === "NewNote";

  // function changeColor(color) {
  //   props.noteForm.style.backgroundColor = color;
  // }

  let classToolbox = styles.Toolbox;
  if (parentNote) {
    classToolbox += ` ${styles.hidden}`;
  }
  return (
    <div className={classToolbox}>
      {parentNote ? (
        <button type="button" className={styles.select}>
          <FontAwesomeIcon icon={faCheckCircle} size="lg" />
        </button>
      ) : null}
      <div>{props.children}</div>
      <button type="button" className={styles.pin}>
        <FontAwesomeIcon icon={faThumbtack} size="lg" />
      </button>
      <footer>
        <div>
          <button type="button">
            <FontAwesomeIcon icon={faBell} />
          </button>
          <div className={styles.menuContainer}>
            <button type="button">
              <FontAwesomeIcon icon={faFillDrip} />
            </button>
            {/* <Menu layout="grid" options={["white", "red"]} custom></Menu> */}
          </div>
          <button type="button">
            <FontAwesomeIcon icon={faEllipsisV} />
            {/* <Menu view="list" options={["Delete", "Add"]}></Menu> */}
          </button>
          <button type="button">
            <FontAwesomeIcon icon={faFolderOpen} />
          </button>
          <button type="button">
            <FontAwesomeIcon icon={faUndoAlt} />
          </button>
          <button type="button">
            <FontAwesomeIcon icon={faRedoAlt} />
          </button>
        </div>
        {parentNewNote ? <button>Close</button> : null}
      </footer>
    </div>
  );
};

export default Toolbox;
