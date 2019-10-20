import { connect } from "react-redux";
import Header from "../components/Header/Header";
import { toggleSidebar, searchNotes } from "../store/actions/actions";

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar()),
  searchNotes: (value) => dispatch(searchNotes(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
