import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";

import styles from "./Settings.module.scss";
import Button from "../Button/Button";
import DialogTitle from "../Dialog/DialogTitle/DialogTitle";
import DialogActions from "../Dialog/DialogActions/DialogActions";

const Settings = ({ open, onClose }) => {
  const handleSave = () => onClose();

  return (
    <Dialog
      aria-labelledby="settings-dialog-title"
      open={open}
      onClose={onClose}
      PaperProps={{ className: styles.root }}
    >
      <DialogTitle id="settings-dialog-title" title="Settings" />
      <section className={styles.content}>
        <h3>Notes and lists</h3>
        <ul>
          <li>
            <label htmlFor="newItems">Add new items to the bottom</label>
            <input id="newItems" type="checkbox" />
          </li>
          <li>
            <label htmlFor="tickedItems">Move ticked items to the bottom</label>
            <input id="tickedItems" type="checkbox" />
          </li>
          <li>
            <label htmlFor="linkPreviews">Display rich link previews</label>
            <input id="linkPreviews" type="checkbox" />
          </li>
          <li>
            <label htmlFor="darkTheme">Enable dark theme</label>
            <input id="darkTheme" type="checkbox" />
          </li>
        </ul>
      </section>
      <DialogActions>
        <Button color="primary" onClick={onClose} variant="text">
          Cancel
        </Button>
        <Button color="secondary" onClick={handleSave} variant="text">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Settings;
