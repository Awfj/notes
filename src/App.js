import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    notes: ["a", "b"],
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

  makeNote = e => {
    if (!this.state.expanded || e.target.form === document.forms.myForm) return;

    const value = document.forms.myForm["new note"].value;
    if (!value) {
      this.setState({ expanded: false });
      return;
    }

    const notes = this.state.notes.concat(value);
    this.setState({ notes, expanded: false, value: "" });
  };

  render() {
    console.log(this.state);

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
      <div className="App" onClick={this.makeNote}>
        <header className="">
          <h1>Notes</h1>
        </header>
        <main>
          <form name="myForm">
            {this.state.expanded ? (
              <input type="text" placeholder="Title" />
            ) : null}
            <input
              type="text"
              placeholder="Take a note..."
              name="new note"
              value={this.state.value}
              onChange={this.handleChange}
              onClick={this.expandForm}
            />
          </form>
          {notes}
        </main>
      </div>
    );
  }
}

export default App;
