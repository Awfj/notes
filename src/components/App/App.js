import React, { useState } from "react";

import styles from "./App.module.scss";
import Header from "../../containers/Header";
import NewNote from "../notes/NewNote/NewNote";
import NoteList from "../../containers/NoteList";
import Sidebar from "../Sidebar/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [notesLayout, setNotesLayout] = useState("list");
  const [isDarkThemeActive, setIsDarkThemeActive] = useState(false);

  // handleClick = e => {
  //   const noteForm = document.forms.noteForm;
  //   if (noteForm.contains(e.target)) return;
  //   this.makeNote();
  // };
  return (
    <div
      className={styles.App}
      style={isDarkThemeActive ? { backgroundColor: "pink" } : null}
      // onClick={this.handleClick}
    >
      <Header
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        notesLayout={notesLayout}
        toggleNotesLayout={() =>
          setNotesLayout(notesLayout === "list" ? "grid" : "list")
        }
        toggleDarkTheme={() => setIsDarkThemeActive(!isDarkThemeActive)}
      />
      <main>
        {window.innerWidth >= 1024 && isSidebarOpen ? <Sidebar /> : null}
        <div className={styles.notes}>
          <NewNote />
          <NoteList notesLayout={notesLayout} />
        </div>
      </main>
    </div>
  );
}

export default App;
