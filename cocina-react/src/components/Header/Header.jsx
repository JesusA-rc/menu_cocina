import React, { useState } from "react";
import styles from "./Header.module.css";
import DesktopNav from "./destktopNav/DesktopNav";
import MobileNav from "./mobileNav/MobileNav";
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

  <header className={styles.header}>
      <div className={styles.logo_container}>
        <img className={styles.logo} src="https://i.pinimg.com/736x/88/ae/50/88ae50f96f105292e5f83753ffa6eb0c.jpg" alt="Logo"/>
        <span className={styles.logo_text}>Cook</span>
      </div>

      <button className={styles.menu_button_mobile}onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>

      <DesktopNav scrollToSection={scrollToSection} />
      <MobileNav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
    </header>
  );
};

export default Header;