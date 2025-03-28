import { NavLink } from "react-router-dom";
import { isActiveLink } from "../../../utils/navigationUtils/navigationUtils.jsx";
import styles from "./DesktopNav.module.css";

const DesktopNav = ({ scrollToSection }) => {
    const getActiveClass = isActiveLink(styles.link, styles.active);
  return (
    <div className={styles.desktop_nav_links}>
      <NavLink to="/" className={getActiveClass} onClick={() => scrollToSection("hero_section")}>
        Home
      </NavLink>
      <NavLink to="/#reviews" className={getActiveClass}>
        Reviews
      </NavLink>
      <NavLink to="/#recipes" className={getActiveClass}>
        Recipes
      </NavLink>
    </div>
  );
};

export default DesktopNav;