import React, {useState} from "react";
// import PropTypes from "prop-types";
import Dialog from "../Dialog";

const Settings = props => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog>
      <h3>Settings</h3>
      <section>
        <h4>Notes and lists</h4>
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
      <footer>
        <button type="button">Cancel</button>
        <button type="button">Save</button>
      </footer>
    </Dialog>
  );
};

Settings.propTypes = {};

export default Settings;
