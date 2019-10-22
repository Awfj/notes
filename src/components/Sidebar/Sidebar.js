import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faBell,
  faTrashAlt,
  faEdit,
  faFolderOpen
} from "@fortawesome/free-regular-svg-icons";
import styles from "./Sidebar.module.scss";
import FilterLink from "../../containers/FilterLink";
import { notesVisibilityFilters } from "../../store/actions/actionTypes";

const Sidenav = () => {
  return (
    <aside className={styles.Sidebar}>
      <ul>
        <li>
          <FilterLink filter={notesVisibilityFilters.SHOW_ACTIVE}>
            <FontAwesomeIcon icon={faLightbulb} fixedWidth />Notes
          </FilterLink>
        </li>
        <li>
          <FilterLink>
            <FontAwesomeIcon icon={faBell} fixedWidth />Reminders
          </FilterLink>
        </li>
      </ul>
      <dl>
        <dt>Labels</dt>
        <dd>
          <button type="button">
            <FontAwesomeIcon icon={faEdit} fixedWidth />Edit labels
          </button>
        </dd>
      </dl>
      <ul>
        <li>
          <FilterLink filter={notesVisibilityFilters.SHOW_ARCHIVED}>
            <FontAwesomeIcon icon={faFolderOpen} fixedWidth />Archive
          </FilterLink>
        </li>
        <li>
          <FilterLink filter={notesVisibilityFilters.SHOW_DELETED}>
            <FontAwesomeIcon icon={faTrashAlt} fixedWidth />Bin
          </FilterLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidenav;
