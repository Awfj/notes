import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import styles from "./App.module.scss";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../FilterPage/Home";
import Archive from "../FilterPage/Archive";
import Bin from "../FilterPage/Bin";

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
    <Router>
      <CssBaseline />
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

          <Switch>
            <Route path="/home">
              <Home notesLayout={notesLayout} />
            </Route>
            <Route path="/archive">
              <Archive notesLayout={notesLayout} />
            </Route>
            <Route path="/bin">
              <Bin notesLayout={notesLayout} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
