import { NavLink, Outlet } from "react-router-dom";
import styles from "./AppBar.module.css";

const AppBar = () => (
  <div>
    <nav>
      <NavLink
        to="/home"
        className={styles.link}
        style={({ isActive }) => ({ color: isActive ? "#008000" : " #2a363b" })}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={styles.link}
        style={({ isActive }) => ({ color: isActive ? "#008000" : " #2a363b" })}
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
