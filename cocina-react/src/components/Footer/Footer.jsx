import React from 'react'
import styles from './Footer.module.css'
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_left}>
            <img src="https://i.pinimg.com/736x/88/ae/50/88ae50f96f105292e5f83753ffa6eb0c.jpg" alt="logo" className={styles.footer_logo}/>
            <span className={styles.footer_brand}>Cook</span>
            <span className={styles.footer_description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloremque corrupti repudiandae illo dolores! Quia, hic. Delectus dolorum modi sint pariatur aliquid libero, minima ad a quibusdam maiores, doloribus quo?
            </span>
        </div>
        <div className={styles.footer_right}>
            <div className={styles.newsletter_section}>
                <span className={styles.newsletter_title}>Sign up for our newsletter</span>
                <div className={styles.input_button_container}>
                    <input type="text"  placeholder="Your email address" className={styles.newsletter_input}/>
                    <button className={styles.newsletter_button}>Submit</button>
                </div>
            </div>

            <div className={styles.info_sections_container}>
                <div className={styles.menu_section}>
                    <span className={styles.section_title}>Menu</span>
                    <Link className={styles.menu_link} to="/">Home</Link>
                    <Link className={styles.menu_link} to="/reviews">Reviews</Link>
                    <Link className={styles.menu_link} to="/about-us">About us</Link>
                    <NavLink className={styles.menu_link} to="/recipes">Recipes</NavLink>
                </div>
                <div className={styles.help_section}>
                    <span className={styles.section_title}>Help</span>
                    <ul className={styles.help_list}>
                    <li className={styles.help_item}>Privacy and policy</li>
                    <li className={styles.help_item}>Term of use</li>
                    </ul>
                </div>
                <div className={styles.social_section}>
                    <span className={styles.section_title}>Social</span>
                    <ul className={styles.social_list}>
                    <li className={styles.social_item}>Facebook</li>
                    <li className={styles.social_item}>Instagram</li>
                    <li className={styles.social_item}>Twitter</li>
                    <li className={styles.social_item}>YouTube</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer