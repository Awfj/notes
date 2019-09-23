import React from "react";
import "./App.scss";

class App extends React.Component {
  state = {
    notes: ["a", "b"],
    title: "",
    value: "",
    expanded: false
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
    const value = noteForm["new note"].value;
    if (!value) {
      this.setState({ expanded: false });
      return;
    } else {
      const notes = this.state.notes.concat(value);
      this.setState({ notes, expanded: false, value: "" });
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

  render() {
    // console.log(this.state);

    const notes =
      this.state.notes.length > 0 ? (
        <ul>
          {this.state.notes.map((note, index) => (
            <li key={index}>
              {note}
              <button type="button" onClick={this.removeNote.bind(this, index)}>
                X
              </button>
            </li>
          ))}
        </ul>
      ) : null;
    return (
      <div className="App" onClick={this.handleClick}>
        <header className="">
          <h1>Notes</h1>
        </header>
        <main>
          <form
            name="noteForm"
            className={this.state.expanded ? "newNote" : null}
            onSubmit={this.handleSubmit}
          >
            {this.state.expanded ? (
              <input type="text" placeholder="Title" />
            ) : null}
            <input
              className={this.state.expanded ? null : "newNote"}
              type="text"
              placeholder="Take a note..."
              name="new note"
              value={this.state.value}
              onChange={this.handleChange}
              onClick={this.expandForm}
            />
            {this.state.expanded ? (
              <footer>
                {/* <button type="button">asf</button> */}
                <button>Close</button>
              </footer>
            ) : null}
          </form>
          {notes}
        </main>
      </div>
    );
  }
}

export default App;
