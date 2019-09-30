import React from "react";
import "./App.scss";

import Keep from "./components/Keep/Keep";

class App extends React.Component {
  state = {
    title: "",
    value: "",
    color: "white",
    expanded: false,
    selected: false,
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
    console.log(id);
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
      const notes = this.state.notes.concat({ title, body });
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

  render() {
    // console.log(this.state.notes);

    return (
      <div className="App" onClick={this.handleClick}>
        <header>
          <h1>Notes</h1>
        </header>

        <main>
          <Keep
            value={this.state.value}
            notes={this.state.notes}
            expanded={this.state.expanded}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            expandForm={this.expandForm}
            removeNote={this.removeNote}
          />
        </main>
      </div>
    );
  }
}

export default App;
