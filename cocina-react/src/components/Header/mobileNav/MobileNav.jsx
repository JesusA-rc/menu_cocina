import { NavLink } from "react-router-dom";
import IsActiveLink from "../../../Hooks/IsActiveLink";
import styles from "./MobileNav.module.css";

const MobileNav = ({ isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  function getActiveClass(path) {
    return IsActiveLink(path) ? "link active_link" : "link";
  }
  return (
    <div className={`${styles.nav_links_mobile} ${isMenuOpen ? styles.active : ""}`}>
      <ul>
        <li>
          <NavLink to="/" className={getActiveClass("/")} onClick={() => { setIsMenuOpen(false); scrollToSection("hero_section"); }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/#reviews" className={getActiveClass("/#reviews")} onClick={() => setIsMenuOpen(false)}>
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink to="/#recipes" className={getActiveClass("/#recipes")} onClick={() => setIsMenuOpen(false)}>
            Recipes
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;