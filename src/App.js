import React from "react";
import "./App.scss";

import Header from "./containers/Header";
import Notes from "./components/Notes/Notes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  // handleClick = e => {
  //   const noteForm = document.forms.noteForm;
  //   if (noteForm.contains(e.target)) return;
  //   this.makeNote();
  // };
  return (
    <div
      className="App"
      // onClick={this.handleClick}
    >
      <Header />

      <main>
        <Sidebar />
        <Notes />
      </main>
    </div>
  );
}

export default App;
