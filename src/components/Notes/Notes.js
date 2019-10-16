import React from "react";

import styles from "./Notes.module.scss";
// import NewNote from "../../containers/NewNote/NewNote";
import NoteList from "../../containers/NoteList";

const Notes = props => {
  return (
    <div className={styles.Notes}>
      {/* <NewNote
        // value={props.value}
        // notes={props.notes}
        // expanded={props.expanded}
        // handleChange={props.handleChange}
        // handleSubmit={props.handleSubmit}
        // expandForm={props.expandForm}
        // removeNote={props.removeNote}
        // makeNote={props.makeNote}
      /> */}
      <NoteList />
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Notes);
export default Notes;
// export default connect(
//   null,
//   { addNote }
// )(Notes);
