import { connect } from "react-redux";
import Link from "../components/Link/Link";
import { changeNotesVisibility } from "../store/actions/actions";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(changeNotesVisibility(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
