import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faThumbtack } from "@fortawesome/free-solid-svg-icons";

import styles from "./Toolbox.module.scss";

const Toolbox = props => {
  const { parent } = props;
  const parentNote = parent === "Note";
  const parentNewNote = parent === "NewNote";

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
          <button type="button">Change Color</button>
          <button type="button" onClick={props.removeNote}>
            Delete note
          </button>
        </div>
        {parentNewNote ? (
          <button type="button" onClick={props.makeNote}>
            Close
          </button>
        ) : null}
      </footer>
    </div>
  );
};

export default Toolbox;
