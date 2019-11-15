import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./FilterLink.module.scss";
import { changeVisibilityFilter } from "../../redux/actions/actionCreators";

const FilterLink = ({
  // active,
  changeVisibilityFilter,
  children,
  filter,
  to
}) => {
  const location = window.location.hash;
  let active = location === `#${to}`;

  let styledFilterLink = styles.FilterLink;
  if (active) styledFilterLink += ` ${styles.active}`;

  // useEffect(() => {
  //   const location = window.location.hash;
  // let active = location === `#${to}`;
  // if (active) styledFilterLink += ` ${styles.active}`;
  // });

  return (
    <a
      href={`#${to}`}
      className={styledFilterLink}
      onClick={() => changeVisibilityFilter(filter)}
    >
      {children}
    </a>
  );
};

FilterLink.propTypes = {
  // active: PropTypes.bool.isRequired,
  changeVisibilityFilter: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  filter: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  // active: ownProps.filter === state.visibilityFilter
});

export default connect(mapStateToProps, { changeVisibilityFilter })(FilterLink);
