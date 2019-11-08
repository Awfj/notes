import React, { createRef } from "react";
// import PropTypes from "prop-types";

import styles from "./Note.module.scss";
import Toolbox from "../Toolbox/Toolbox";

const Note = ({ note }) => {
  const noteRef = createRef();  
  const { title, content, color, labels } = note;

  function handleMouseHover(e) {
    // const toolbox = e.currentTarget.children[0].children;
    // for (var tag of toolbox) {
    //   if (tag.type === "button" || tag.tagName === "FOOTER") {
    //     if (e.type === "mouseenter") {
    //       tag.style.opacity = "1";
    //     } else if (e.type === "mouseleave") {
    //       tag.style.opacity = "0";
    //     }
    //   }
    // }
  }

  return (
    <div
      ref={noteRef}
      className={`note ${styles.Note} ${color}`}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
    >
      <Toolbox activeColor={color} parent="Note" note={note}>
        {title && <h3>{title}</h3>}
        {content && <p>{content}</p>}
        {labels.length > 0 && (
          <ul className={styles.labels}>
            {labels.map((label, index) => (
              <li key={index}>{label}</li>
            ))}
          </ul>
        )}
      </Toolbox>
    </div>
  );
};

Note.propTypes = {
  // id: PropTypes.number.isRequired,
  // title: PropTypes.string.isRequired,
  // content: PropTypes.string.isRequired,
  // color: PropTypes.string.isRequired,
  // labels: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Note;
