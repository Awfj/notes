import React from "react";
import "./App.scss";

import Note from "./components/Note/Note";
import Toolbox from "./components/Toolbox/Toolbox";

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

    const notes =
      this.state.notes.length > 0 ? (
        <div className="Notes">
          {this.state.notes.map((note, index) => (
            <Note
              key={index}
              note={note}
              removeNote={this.removeNote.bind(this, index)}
            />
          ))}
        </div>
      ) : null;

    let NoteFormStyles = "NoteForm";
    if (this.state.expanded) {
      NoteFormStyles += " newNote";
    }

    return (
      <div className="App" onClick={this.handleClick}>
        <header>
          <h1>Notes</h1>
        </header>

        <main>
          <form
            name="noteForm"
            className={NoteFormStyles}
            onSubmit={this.handleSubmit}
          >
            {this.state.expanded ? (
              <Toolbox>
                <input type="text" name="title" placeholder="Title" />
                <input
                  className={this.state.expanded ? null : "newNote"}
                  type="text"
                  placeholder="Take a note..."
                  autoComplete="off"
                  name="body"
                  value={this.state.value}
                  onChange={this.handleChange}
                  onClick={this.expandForm}
                />
              </Toolbox>
            ) : (
              <input
                className={this.state.expanded ? null : "newNote"}
                type="text"
                placeholder="Take a note..."
                autoComplete="off"
                name="body"
                value={this.state.value}
                onChange={this.handleChange}
                onClick={this.expandForm}
              />
            )}
          </form>
          {notes}
        </main>
      </div>
    );
  }
}

export default App;
