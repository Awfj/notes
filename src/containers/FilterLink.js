import { connect } from "react-redux";
import Link from "../components/Link/Link";
import { changeVisibilityFilter } from "../redux/actions/actionCreators";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(changeVisibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
