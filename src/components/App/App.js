import React from "react";

import styles from "./App.module.scss";
import Header from "../../containers/Header";
import NewNote from "../notes/NewNote/NewNote";
import NoteList from "../../containers/NoteList";
import Sidebar from "../Sidebar/Sidebar";

function App(props) {
  // console.log(props)
  // handleClick = e => {
  //   const noteForm = document.forms.noteForm;
  //   if (noteForm.contains(e.target)) return;
  //   this.makeNote();
  // };
  return (
    <div
      className={styles.App}
      // onClick={this.handleClick}
    >
      <Header />

      <main>
        <Sidebar />
        <div className={styles.notes}>
          <NewNote />
          <NoteList />
        </div>
      </main>
    </div>
  );
}

export default App;
