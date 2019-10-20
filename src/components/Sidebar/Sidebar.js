import React from "react";
import styles from "./Sidebar.module.scss";
import FilterLink from "../../containers/FilterLink";
import { notesVisibilityFilters } from "../../store/actions/actionTypes";

const Sidenav = () => {
  return (
    <aside className={styles.Sidebar}>
      <ul>
        <li>
          <FilterLink filter={notesVisibilityFilters.SHOW_ACTIVE}>Notes</FilterLink>
        </li>
        {/* <li>
          <a href="#as">Reminders</a>
        </li> */}
      </ul>
      <ul>
        <li>
          <FilterLink filter={notesVisibilityFilters.SHOW_ARCHIVED}>
            Archive
          </FilterLink>
        </li>
        <li>
          <FilterLink filter={notesVisibilityFilters.SHOW_DELETED}>Bin</FilterLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidenav;
