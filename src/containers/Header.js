import { connect } from "react-redux";
import Header from "../components/Header/Header";
import { searchNotes } from "../redux/actions/actionCreators";

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch => ({
//   searchNotes: (value) => dispatch(searchNotes(value))
// })

export default connect(
  mapStateToProps,
  { searchNotes }
)(Header);
