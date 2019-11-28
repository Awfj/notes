import React from "react";
import PropTypes from "prop-types";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";

const EditLabels = ({ labels, open, onClose }) => {
  return (
    <Dialog open={open} aria-labelledby="edit-labels-dialog" onClose={onClose}>
      <DialogTitle id="edit-labels-dialog">Edit Labels</DialogTitle>
      <DialogContent>
        <List>
          <ListItem>
            <Tooltip title="Cancel">
              <IconButton aria-label="Cancel">
                <ClearIcon />
              </IconButton>
            </Tooltip>
            <Input id="create-label" autoFocus placeholder="Create new label" />
            <Tooltip title="Create label">
              <IconButton aria-label="Create label">
                <DoneIcon />
              </IconButton>
            </Tooltip>
          </ListItem>
          {labels &&
            labels.map(label => (
              <ListItem key={label.id}>
                <Tooltip title="Delete label">
                  <IconButton aria-label="Delete label">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <Input id="label" placeholder='Enter label name' />
                <Tooltip title="Rename label">
                  <IconButton aria-label="Rename label">
                    <CreateIcon />
                  </IconButton>
                </Tooltip>
              </ListItem>
            ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Done</Button>
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
