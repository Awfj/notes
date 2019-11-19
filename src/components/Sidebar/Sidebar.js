import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
import { getLabels } from "../../redux/selectors/labels";
import { addLabel, deleteLabel } from "../../redux/actions/actionCreators";

const Sidebar = ({ labels, addLabel, deleteLabel }) => {
  // console.warn('Sidebar')
  return (
    <aside className={styles.Sidebar}>
      <ul>
        <li>
          <Link to="/home">
            <FontAwesomeIcon icon={faLightbulb} fixedWidth />
            Notes
          </Link>
        </li>
        <li>
          <Link to="/reminders">
            <FontAwesomeIcon icon={faBell} fixedWidth />
            Reminders
          </Link>
        </li>
      </ul>
      <section className={styles.labels}>
        <h2>Labels</h2>
        <ul>
          {labels.length > 0 &&
            labels.map(label => (
              <li key={label.id}>
                <Link to={`/label/${label.label}`}>
                  <FontAwesomeIcon icon={faHashtag} fixedWidth /> {label.label}
                </Link>
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
          <Link to="/archive">
            <FontAwesomeIcon icon={faFolderOpen} fixedWidth />
            Archive
          </Link>
        </li>
        <li>
          <Link to="/bin">
            <FontAwesomeIcon icon={faTrashAlt} fixedWidth />
            Bin
          </Link>
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
  labels: getLabels(state)
});

export default connect(mapStateToProps, {
  addLabel,
  deleteLabel
})(Sidebar);
