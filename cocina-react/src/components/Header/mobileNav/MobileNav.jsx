import { NavLink } from "react-router-dom";
import { isActiveLink } from "../../../utils/navigationUtils/navigationUtils.jsx";
import styles from "./MobileNav.module.css";

const MobileNav = ({ isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  const getActiveClass = isActiveLink(styles.link, styles.active);
  return (
    <div className={`${styles.nav_links_mobile} ${isMenuOpen ? styles.active : ""}`}>
      <ul>
        <li>
          <NavLink to="/" className={getActiveClass} onClick={() => { setIsMenuOpen(false); scrollToSection("hero_section"); }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/#reviews" className={getActiveClass} onClick={() => setIsMenuOpen(false)}>
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink to="/#recipes" className={getActiveClass} onClick={() => setIsMenuOpen(false)}>
            Recipes
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;