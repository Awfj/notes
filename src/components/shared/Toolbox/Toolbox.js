import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faThumbtack,
  // faEllipsisV
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Toolbox.module.scss";
// import Menu from "../Menu/Menu";

const Toolbox = props => {
  const { parent } = props;
  const parentNote = parent === "Note";
  const parentNewNote = parent === "NewNote";

  function changeColor(color) {
    props.noteForm.style.backgroundColor = color;
  }

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
          <div className={styles.colorSelector}>
            <button type="button">Change</button>
            <div className={styles.colorList}>
              <button
                className={styles.color}
                type="button"
                onClick={() => changeColor("red")}
              >
                Red
              </button>
            </div>
          </div>
          <button type="button">
            {/* <FontAwesomeIcon icon={faEllipsisV} /> */}
            {/* <Menu view="list" options={["Delete", "Add"]}></Menu> */}
          </button>
        </div>
        {parentNewNote ? <button>Close</button> : null}
      </footer>
    </div>
  );
};

export default Toolbox;
