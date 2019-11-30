import React from "react";
import PropTypes from "prop-types";

import Dialog from "@material-ui/core/Dialog";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import Input from "@material-ui/core/Input";
// import Tooltip from "@material-ui/core/Tooltip";
import ClearIcon from "@material-ui/icons/Clear";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";

import styles from "./EditLabels.module.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import DialogTitle from "../Dialog/DialogTitle/DialogTitle";
import DialogActions from "../Dialog/DialogActions/DialogActions";

const EditLabels = ({ labels, open, onClose }) => {
  return (
    <Dialog
      aria-labelledby="edit-labels-dialog-title"
      open={open}
      onClose={onClose}
      PaperProps={{ className: styles.root }}
    >
      <DialogTitle id="edit-labels-dialog-title" title="Edit Labels" />
      <section className={styles.content}>
        <form>
          <div className={styles.fieldset}>
            <Button label="Cancel">
              <ClearIcon />
            </Button>
            <Input placeholder="Create new label" />
            <Button label="Create label">
              <DoneIcon />
            </Button>
          </div>
          {labels &&
            labels.map(label => (
              <div key={label.id} className={styles.fieldset}>
                <Button label="Delete label">
                  <DeleteIcon />
                </Button>
                <Input placeholder="Enter label name" />
                <Button label="Rename label">
                  <CreateIcon />
                </Button>
              </div>
            ))}
        </form>
      </section>
      <DialogActions>
        <Button color="primary" onClick={onClose} variant="text">
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
};

EditLabels.propTypes = {
  labels: PropTypes.array,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default EditLabels;
