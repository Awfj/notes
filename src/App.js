import React from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Notes from "./components/Notes/Notes";
import Sidenav from "./components/Sidenav/Sidenav";

class App extends React.Component {
  state = {
    title: "",
    value: "",
    color: "white",
    expanded: false,
    selected: false,
    view: "list",
    notes: [
      {
        id: 0,
        title: "Qwe",
        body: "gds",
        color: ""
      },
      {
        id: 1,
        title: "",
        body: "hrer",
        color: "yellow"
      }
    ]
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({ value });
  };

  removeNote = id => {
    const notes = [...this.state.notes];
    notes.splice(id, 1);
    this.setState({ notes });
  };

  expandForm = () => {
    if (this.state.expanded) return;
    this.setState({ expanded: true });
  };

  makeNote = () => {
    const noteForm = document.forms.noteForm;
    const title = noteForm["title"].value;
    const body = noteForm["body"].value;
    if (!title && !body) {
      this.setState({ expanded: false, color: "white" });
      return;
    } else {
      const notes = [...this.state.notes];
      notes.splice(0, 0, { title, body });
      this.setState({ notes, expanded: false, value: "", color: "white" });
    }
  };

  handleClick = e => {
    const noteForm = document.forms.noteForm;
    if (noteForm.contains(e.target)) return;
    this.makeNote();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.makeNote();
  };

  changeColor = color => {
    // document.forms.noteForm.style.backgroundColor = color;
    this.setState({ color });
  };

  changeView = () => {
    if (this.state.view === "list") {
      this.setState({ view: "grid" });
    } else {
      this.setState({ view: "list" });
    }
  };

  render() {
    // console.log(this.state.expanded);

    return (
      <div className="App" onClick={this.handleClick}>
        <Header view={this.state.view} changeView={this.changeView} />

        <main>
          <Sidenav />
          <Notes
            value={this.state.value}
            notes={this.state.notes}
            view={this.state.view}
            expanded={this.state.expanded}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            expandForm={this.expandForm}
            removeNote={this.removeNote}
            makeNote={this.makeNote}
          />
        </main>
      </div>
    );
  }
}

export default App;
