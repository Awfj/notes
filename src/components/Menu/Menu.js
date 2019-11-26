import React from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import styles from "./Menu.module.scss";

const Menu = ({ icon, options, title }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab" || event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleOptionFunction = optionFunction => {
    optionFunction();
    setOpen(false);
  };

  return (
    <div className={styles.root}>
      <Tooltip title={title}>
        <IconButton
          aria-label={title}
          ref={anchorRef}
          onClick={handleToggle}
          aria-controls={open ? "menu-list-fade" : undefined}
          aria-haspopup="true"
        >
          {icon}
        </IconButton>
      </Tooltip>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        placement={"bottom-start"}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={100}>
            <Paper className={styles.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-fade"
                  onKeyDown={handleListKeyDown}
                >
                  {options.map(option => {
                    const [optionTitle, optionFunction] = option;
                    return (
                      <MenuItem
                        key={optionTitle}
                        onClick={() => handleOptionFunction(optionFunction)}
                      >
                        {optionTitle}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

Menu.propTypes = {
  icon: PropTypes.element.isRequired,
  options: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default Menu;
