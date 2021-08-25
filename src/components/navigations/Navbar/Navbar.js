import React from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../../assets/icons/logo.png";
import { Link } from "react-scroll";

// import { Link as PageLink } from "react-router-dom";
//import { routes } from "../../../routes/routes";

const Navbar = () => {
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

      <ul className={styles.navigationList__wrapper}>
        <Link
          className
          activeClass={styles.active}
          className={styles.naviagtionList__element}
          to="offer"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <li>oferta</li>
        </Link>
        <Link
          className={styles.naviagtionList__element}
          activeClass={styles.active}
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <li>o mnie</li>
        </Link>

        <Link
          activeClass={styles.active}
          className={styles.naviagtionList__element}
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <li>kontakt</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
