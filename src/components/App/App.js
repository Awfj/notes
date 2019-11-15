import React, { useState } from "react";

import styles from "./App.module.scss";
import Header from "../Header/Header";

import Sidebar from "../Sidebar/Sidebar";
import FilterPage from "../FilterPage/FilterPage";

function App() {
  // console.warn('App')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [notesLayout, setNotesLayout] = useState("list");
  const [isDarkThemeActive, setIsDarkThemeActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // handleClick = e => {
  //   const noteForm = document.forms.noteForm;
  //   if (noteForm.contains(e.target)) return;
  //   this.makeNote();
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
        <FilterPage notesLayout={notesLayout} searchQuery={searchQuery} />
      </main>
    </div>
  );
}

export default App;
