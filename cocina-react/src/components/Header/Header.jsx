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
        <img
          className={styles.logo} src="https://i.pinimg.com/736x/88/ae/50/88ae50f96f105292e5f83753ffa6eb0c.jpg"  alt="Logo"
        />
        <span className={styles.logo_text}>Cook</span>
      </div>

      <button className={styles.menu_button} onClick={()=>isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)}>☰</button>

      <div className={styles.nav_links}>
        <Link className="link" onClick={() => scrollToSection("hero_section")}>Home</Link>
        <Link className="link" onClick={() => scrollToSection("reviews")}>Reviews</Link>
        <Link className="link" onClick={() => scrollToSection("recipes")}>Recipes</Link>
      </div>

      <div className={`${styles.nav_links_mobile} ${isMenuOpen ? styles.active : ""}`}>
        <ul>
          <li>
            <Link className="link" onClick={() => {setIsMenuOpen(false); scrollToSection("hero_section")}}>Home</Link>
          </li>
          <li>
            <Link className="link" onClick={() => {setIsMenuOpen(false); scrollToSection("reviews")}}> Reviews</Link>
          </li>
          <li>
            <Link className="link" onClick={() => {setIsMenuOpen(false); scrollToSection("recipes")}}>Recipes</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;