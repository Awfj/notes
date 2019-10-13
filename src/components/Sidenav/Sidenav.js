import React from "react";
import styles from "./Sidenav.module.scss";
import FilterLink from "../../containers/FilterLink";
import { visibilityFilters } from "../../store/actions/actionTypes";

const Sidenav = () => {
  return (
    <aside className={styles.Sidenav}>
      <ul>
        <li>
          <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>Notes</FilterLink>
        </li>
        {/* <li>
          <a href="#as">Reminders</a>
        </li> */}
      </ul>
      <ul>
        <li>
          <FilterLink filter={visibilityFilters.SHOW_ARCHIVED}>
            Archive
          </FilterLink>
        </li>
        <li>
          <FilterLink filter={visibilityFilters.SHOW_DELETED}>Bin</FilterLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidenav;
