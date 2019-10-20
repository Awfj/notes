import { connect } from "react-redux";
import { changeNotesLayout } from "../store/actions/actions";
import Button from "../components/Button";

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(changeNotesLayout(ownProps.notesLayout))
});

export default connect(
  null,
  mapDispatchToProps
)(Button);
