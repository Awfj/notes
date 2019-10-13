import React, { Component } from 'react'
import { connect } from "react-redux";
import { addNote } from "../../store/actions/actions";

export default class AddNote extends Component {
  state = {
    input: ''
  }

  handleAddNote = () => {
    this.props.AddMote(this.state.input);
    this.setState({input: ''})
  }

  render() {
    return (
      <div>
        <input type="text" onChange={e => this.handleAddNote} />
      </div>
    )
  }
}

export default connect(
  null,
  { addNote })(AddNote)