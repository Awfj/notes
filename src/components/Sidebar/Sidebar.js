import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

import styles from "./Sidebar.module.scss";
import EditLabels from "../EditLabels/EditLabels";
import { getLabels } from "../../redux/selectors/labels";
import { addLabel, deleteLabel } from "../../redux/actions/actionCreators";

const Sidebar = ({ labels, addLabel, deleteLabel }) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(true);
  // console.warn('Sidebar')
  return (
    <aside className={styles.Sidebar}>
      <EditLabels
        open={dialogIsOpen}
        onClose={() => setDialogIsOpen(false)}
        labels={labels}
      />

      <ul>
        <li>
          <Link to="/home">
            <EmojiObjectsOutlinedIcon />
            Notes
          </Link>
        </li>
        <li>
          <Link to="/reminders">
            <NotificationsOutlinedIcon />
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
                  <LabelOutlinedIcon /> {label.label}
                </Link>
              </li>
            ))}

          <li>
            <button type="button" onClick={() => setDialogIsOpen(true)}>
              <CreateOutlinedIcon />
              Edit labels
            </button>
          </li>
        </ul>
      </section>
      <ul>
        <li>
          <Link to="/archive">
            <ArchiveOutlinedIcon />
            Archive
          </Link>
        </li>
        <li>
          <Link to="/bin">
            <DeleteOutlinedIcon />
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
