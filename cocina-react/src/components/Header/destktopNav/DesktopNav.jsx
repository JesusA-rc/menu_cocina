import { NavLink } from "react-router-dom";
import styles from "./DesktopNav.module.css";
import IsActiveLink from "../../../Hooks/IsActiveLink.jsx";

const DesktopNav = ({ scrollToSection }) => {

  function getActiveClass(path){
    return IsActiveLink(path) ? "link active_link" : "link";
  }

  return (
    <div className={styles.desktop_nav_links}>
      <NavLink to="/" className={getActiveClass("/#")} onClick={() => scrollToSection("hero_section")}>
        Home
      </NavLink>
      <NavLink to="/#recipes" className={getActiveClass("/#recipes")} onClick={() => scrollToSection("recipes")}>
        Recipes
      </NavLink>
      <NavLink to="/#reviews" className={getActiveClass("/#reviews")}>
        Reviews
      </NavLink>
    </div>
  );
};

export default DesktopNav;