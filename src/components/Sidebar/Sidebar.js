import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faBell,
  faTrashAlt,
  faFolderOpen,
  faEdit
} from "@fortawesome/free-regular-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import styles from "./Sidebar.module.scss";
import { VISIBILITY_FILTERS } from "../../redux/actions/actionTypes";
import FilterLink from "../../containers/FilterLink";
import { getLabels } from "../../redux/selectors/labels";
import {
  addLabel,
  deleteLabel,
  changeVisibilityFilter
} from "../../redux/actions/actionCreators";

const Sidebar = ({ labels, addLabel, deleteLabel, changeVisibilityFilter }) => {
  return (
    <aside className={styles.Sidebar}>
      <ul>
        <li>
          <FilterLink filter={VISIBILITY_FILTERS.active}>
            <FontAwesomeIcon icon={faLightbulb} fixedWidth />
            Notes
          </FilterLink>
        </li>
        <li>
          <FilterLink filter={VISIBILITY_FILTERS.reminders}>
            <FontAwesomeIcon icon={faBell} fixedWidth />
            Reminders
          </FilterLink>
        </li>
      </ul>
      <section className={styles.labels}>
        <h2>Labels</h2>
        <ul>
          {labels.length > 0 &&
            labels.map(label => (
              <li key={label.id} label={label.id} onClick={() => changeVisibilityFilter(`${VISIBILITY_FILTERS.labels}.${label.id}`)}>
                <button type="button">
                  <FontAwesomeIcon icon={faHashtag} fixedWidth /> {label.label}
                </button>
              </li>
            ))}

          <li>
            <button type="button" onClick={() => addLabel("asf")}>
              <FontAwesomeIcon icon={faEdit} fixedWidth />
              Edit labels
            </button>
          </li>
        </ul>
      </section>
      <ul>
        <li>
          <FilterLink filter={VISIBILITY_FILTERS.archived}>
            <FontAwesomeIcon icon={faFolderOpen} fixedWidth />
            Archive
          </FilterLink>
        </li>
        <li>
          <FilterLink filter={VISIBILITY_FILTERS.deleted}>
            <FontAwesomeIcon icon={faTrashAlt} fixedWidth />
            Bin
          </FilterLink>
        </li>
      </ul>
    </aside>
  );
};

Sidebar.propTypes = {
  labels: PropTypes.array,
  addLabel: PropTypes.func.isRequired,
  deleteLabel: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  labels: getLabels(state.labels)
});

export default connect(mapStateToProps, {
  addLabel,
  deleteLabel,
  changeVisibilityFilter
})(Sidebar);
