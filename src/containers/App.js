import { connect } from "react-redux";
import App from "../components/App/App";
import { toggleSidebar } from "../store/actions/actions";

const mapStateToProps = state => ({
  sidebarIsOpen: state.sidebar.isOpen
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
