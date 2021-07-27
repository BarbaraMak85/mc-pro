import React from "react";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.home_content}>content</div>
      <div className={styles.home_image}></div>
    </div>
  );
}

export default Home;
