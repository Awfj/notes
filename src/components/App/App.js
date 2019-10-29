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
  const [searchQuery, setSearchQuery] = useState("");

  // handleClick = e => {
  //   const noteForm = document.forms.noteForm;
  //   if (noteForm.contains(e.target)) return;
  //   this.makeNote();
  // };
  
  // const handleClose = e => {
  //   const menu = document.querySelector("#menu");
  //   // if (!menu.hidden && e.target !== menu) {
  //   //   menu.hidden = true;
  //   // }
  // };

  return (
    <div
      className={styles.App}
      style={isDarkThemeActive ? { backgroundColor: "pink" } : null}
      // onClick={handleClose}
    >
      <Header
        notesLayout={notesLayout}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        toggleDarkTheme={() => setIsDarkThemeActive(!isDarkThemeActive)}
        toggleNotesLayout={() =>
          setNotesLayout(notesLayout === "list" ? "grid" : "list")
        }
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <main>
        {window.innerWidth >= 1024 && isSidebarOpen && <Sidebar />}
        <div className={styles.notes}>
          <NewNote />
          <NoteList notesLayout={notesLayout} searchQuery={searchQuery} />
        </div>
      </main>
    </div>
  );
}

export default App;
