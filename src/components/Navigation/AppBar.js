import { NavLink, Outlet } from "react-router-dom";
import styles from "./AppBar.module.css";

const AppBar = () => (
  <div>
    <nav>
      <NavLink
        to="/home"
        className={styles.link}
        activeclassname={styles.activeLink}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={styles.link}
        activeclassname={styles.activeLink}
      >
        Movies
      </NavLink>
    </nav>
    <div className="content">
      <Outlet />
    </div>
  </div>
);

export default AppBar;
