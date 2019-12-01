import React from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import UnarchiveOutlinedIcon from "@material-ui/icons/UnarchiveOutlined";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/RedoOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import styles from "./Toolbox.module.scss";
// import ColorPicker from "../ColorPicker/ColorPicker";
import Menu from "../Menu/Menu";

const Toolbox = ({
  children,
  dropdownOptions,
  isPinned,
  onArchiveNote,
  onPinNote,
  role,
  ColorPicker
}) => {
  const isEdit = role === "edit";
  const isView = role === "view";

  let classToolbox = styles.Toolbox;
  // if (isView) {
  //   classToolbox += ` ${styles.hidden}`;
  // }
  return (
    <div className={classToolbox}>
      {isView && (
        <IconButton className={styles.select}>
          <CheckCircleIcon />
        </IconButton>
      )}
      <div>{children}</div>
      <IconButton className={styles.pin} onClick={onPinNote}>
        {isPinned ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </IconButton>
      <footer>
        <div className={styles.tools}>
          <Tooltip title="Remind me">
            <IconButton aria-label="Remind me">
              <AddAlertOutlinedIcon />
            </IconButton>
          </Tooltip>
          {ColorPicker}
          <Tooltip title="Archive">
            <IconButton aria-label="Archive" onClick={onArchiveNote}>
              <UnarchiveOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Menu
            icon={<MoreVertIcon />}
            options={dropdownOptions}
            title="More"
          ></Menu>

          {isEdit && (
            <>
              <Tooltip title="Undo">
                <IconButton aria-label="Undo">
                  <UndoIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Redo">
                <IconButton aria-label="Redo">
                  <RedoIcon />
                </IconButton>
              </Tooltip>
            </>
          )}
        </div>
        {isEdit && <button>Close</button>}
      </footer>
    </div>
  );
};

Toolbox.propTypes = {
  children: PropTypes.node.isRequired,
  dropdownOptions: PropTypes.array.isRequired,
  isPinned: PropTypes.bool.isRequired,
  onArchiveNote: PropTypes.func.isRequired,
  onPinNote: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
  ColorPicker: PropTypes.element.isRequired
};

export default Toolbox;
