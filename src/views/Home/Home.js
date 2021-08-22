import React from "react";
import Content from "../../components/navigations/Content/Content";
import styles from "./Home.module.scss";
import { Link } from "react-scroll";
function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.home_content}>
        <Content claretTitle="Podziel się" />
        <div className={styles.titleHome}>
          <Content claretTitle="contentem" />
        </div>
        <p className={styles.homeParagraph}>
          MC pro to firma specjalizująca się w prowadzeniu projektów
          marketingowych w obszarze mediów internetowych oraz content
          marketingu. Planujemy działania mediowe, budujemy relacje, usprawniamy
          komunikację oraz tworzymy content.
        </p>

        <Link
          activeClass={styles.active}
          className={styles.naviagtionList__element}
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <p className={styles.homeParagraphContact}>Skontaktujmy się ></p>
        </Link>
      </div>
      <div className={styles.home_image}></div>
    </div>
  );
}

export default Home;
