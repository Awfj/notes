import React, { useState } from "react";
import PropTypes from "prop-types";

import MuiDialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from '@material-ui/core/DialogContent';



const Dialog = ({ open, onClose, children }) => {
  const handleClose = () => {
    onClose(false);
  };

  return (
    <MuiDialog onClose={handleClose} aria-labelledby="dialog-title" open={open}>
      {/* <DialogTitle id="dialog-title">Settings</DialogTitle>
      <DialogContent>

      </DialogContent> */}
      {children}
    </MuiDialog>
  );
};

Dialog.propTypes = {
  open: PropTypes.bool.isRequired
};

export default Dialog;
