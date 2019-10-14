import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faThumbtack } from "@fortawesome/free-solid-svg-icons";

import styles from "./Toolbox.module.scss";

const Toolbox = props => {
  const { parent } = props;
  const parentNote = parent === "Note";
  const parentNewNote = parent === "NewNote";

  function changeColor() {
    console.log("!!");
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
            <button type="button">Change Color</button>
            <div className={styles.colorList}>
              <button
                className={styles.color}
                type="button"
                onClick={changeColor}
              >
                Red
              </button>
            </div>
          </div>
          <button type="button" onClick={props.deleteNote}>
            Delete note
          </button>
        </div>
        {parentNewNote ? <button>Close</button> : null}
      </footer>
    </div>
  );
};

export default Toolbox;
