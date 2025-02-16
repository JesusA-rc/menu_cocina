import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
<div className={styles.header}>
      <div className={styles.logo_container}>
        <img className={styles.logo} src="https://i.pinimg.com/736x/88/ae/50/88ae50f96f105292e5f83753ffa6eb0c.jpg" alt="Logo"/>
        <span className={styles.logo_text}>Cook</span>
      </div>

      <button className={styles.menu_button}onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>

      <div className={styles.nav_links}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link} onClick={() => scrollToSection("hero_section")}>
          Home
        </NavLink>
        <NavLink to="/#reviews" className={({ isActive }) =>isActive ? `${styles.link} ${styles.active}` : styles.link } >
          Reviews
        </NavLink>
        <NavLink to="/#recipes" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
          Recipes
        </NavLink>
      </div>

      <div className={`${styles.nav_links_mobile} ${isMenuOpen ? styles.active : ""}`}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) =>isActive ? `${styles.link} ${styles.active}` : styles.link}
              onClick={() => {setIsMenuOpen(false); scrollToSection("hero_section");}}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/#reviews" className={({ isActive }) =>isActive ? `${styles.link} ${styles.active}` : styles.link}
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink  to="/#recipes" className={({ isActive }) =>isActive ? `${styles.link} ${styles.active}` : styles.link}
              onClick={() => setIsMenuOpen(false)}
            >
              Recipes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;