import React from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
import styles from "./Settings.module.scss";

const Settings = ({ onCloseModal }) => {
  const handleSave = () => {
    onCloseModal();
  };

  return (
    <Modal onCloseModal={onCloseModal}>
      <section className={styles.Settings}>
        <h3>Settings</h3>
        <section>
          <h4>Notes and lists</h4>
          <ul>
            <li>
              <label htmlFor="newItems">Add new items to the bottom</label>
              <input id="newItems" type="checkbox" />
            </li>
            <li>
              <label htmlFor="tickedItems">
                Move ticked items to the bottom
              </label>
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
          <button
            className={styles.cancel}
            type="button"
            onClick={onCloseModal}
          >
            Cancel
          </button>
          <button className={styles.save} type="button" onClick={handleSave}>
            Save
          </button>
        </footer>
      </section>
    </Modal>
  );
};

Settings.propTypes = {
  onCloseModal: PropTypes.func.isRequired
};

export default Settings;