import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import styles from "./Labels.module.scss";

const Labels = ({ labels }) => {
  return (
    <section className={styles.Labels}>
      <h2>Labels</h2>
      <ul>
        {labels.length > 0 &&
          labels.map(label => (
            <li key={label.id}>
              <button type="button">
                <FontAwesomeIcon icon={faHashtag} fixedWidth /> {label.label}
              </button>
            </li>
          ))}

        <li>
          <button type="button">
            <FontAwesomeIcon icon={faEdit} fixedWidth />
            Edit labels
          </button>
        </li>
      </ul>
    </section>
  );
};

Labels.propTypes = {
  abels: PropTypes.array
};

const mapStateToProps = state => ({
  labels: state.labels
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Labels);
