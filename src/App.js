import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    notes: ["a", "b"],
    value: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const value = e.target["new note"].value;
    if (!value) return;

    const notes = this.state.notes.concat(value);
    this.setState({ notes });
  };

  removeNote = id => {
    const notes = [...this.state.notes];
    notes.splice(id, 1);
    this.setState({ notes });
  };

  render() {
    // console.log(this.state.notes);

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
      <div className="App">
        <header className="">
          <h1>Notes</h1>
        </header>
        <main>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Take a note..." name="new note" />
            <button>Submit</button>
          </form>
          {notes}
        </main>
      </div>
    );
  }
}

export default App;
