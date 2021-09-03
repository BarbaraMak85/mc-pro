import React, { useState, useRef } from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../../assets/icons/logo.png";
import { Link } from "react-scroll";
import menu from "../../../assets/icons/list.svg";
import closeIcon from "../../../assets/icons/close.svg";

// import { Link as PageLink } from "react-router-dom";
//import { routes } from "../../../routes/routes";

const Navbar = () => {
  const navRef = useRef(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const switchResponsiveMenu = (e) => {
    if (menuVisible) {
      navRef.current.style.left = "-110%";
    } else {
      navRef.current.style.left = 0;
    }

    setMenuVisible((prevState) => !prevState);
  };

  const closeMenuAfterClick = () => {
    navRef.current.style.left = "-110%";
    setMenuVisible(false);
  };

  return (
    <nav className={styles.navigationWrapper}>
      <div className={styles.imgNavigations}>
        <Link
          className
          activeClass={styles.active}
          className={styles.naviagtionList__element}
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <img className={styles.imgNavbar} src={Logo} />
        </Link>
      </div>

      <ul className={styles.navigationList__wrapper} ref={navRef}>
        <li className={styles.navbarList}>
          <Link
            className
            activeClass={styles.active}
            className={styles.naviagtionList__element}
            to="offer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeMenuAfterClick}
          >
            oferta
          </Link>
        </li>
        <li className={styles.navbarList}>
          <Link
            className={styles.naviagtionList__element}
            activeClass={styles.active}
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeMenuAfterClick}
          >
            o mnie
          </Link>
        </li>
        <li className={styles.navbarList}>
          <Link
            activeClass={styles.active}
            className={styles.naviagtionList__element}
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeMenuAfterClick}
          >
            kontakt
          </Link>
        </li>
      </ul>
      <img
        src={menuVisible ? closeIcon : menu}
        alt="menu"
        className={styles.hamburgerMenu}
        onClick={switchResponsiveMenu}
      />
      {/* <button className={styles.navbarBtn} onClick={switchResponsiveMenu}>
        Menu
      </button> */}
    </nav>
  );
};

export default Navbar;
