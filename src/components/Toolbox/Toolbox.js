import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faThumbtack } from "@fortawesome/free-solid-svg-icons";

import styles from "./Toolbox.module.scss";

const Toolbox = props => {
  return (
    <div className={styles.Toolbox}>
      <button type="button" className={styles.select}>
        <FontAwesomeIcon icon={faCheckCircle} size="lg" />
      </button>
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
        <button type="button">Close</button>
      </footer>
    </div>
  );
};

export default Toolbox;
