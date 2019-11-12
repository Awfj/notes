import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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
import { addLabel, deleteLabel } from "../../redux/actions/actionCreators";

const Sidebar = ({ labels, addLabel, deleteLabel }) => {
  return (
    <aside className={styles.Sidebar}>
      <ul>
        <li>
          <FilterLink filter={VISIBILITY_FILTERS.SHOW_ACTIVE}>
            <FontAwesomeIcon icon={faLightbulb} fixedWidth />
            Notes
          </FilterLink>
        </li>
        <li>
          <FilterLink>
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
              <li key={label.id} label={label.id}>
                <button type="button" onClick={() => deleteLabel(label.id)}>
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
          <FilterLink filter={VISIBILITY_FILTERS.SHOW_ARCHIVED}>
            <FontAwesomeIcon icon={faFolderOpen} fixedWidth />
            Archive
          </FilterLink>
        </li>
        <li>
          <FilterLink filter={VISIBILITY_FILTERS.SHOW_DELETED}>
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

export default connect(
  mapStateToProps,
  { addLabel, deleteLabel }
)(Sidebar);
