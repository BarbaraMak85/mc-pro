import React from "react";
import styles from "./Box.module.scss";

const Box = ({ titleOffer, contentOffer }) => {
  return (
    <div className={styles.boxWrapper}>
      <li className={styles.boxList} key={titleOffer}>
        <div className={styles.box}>
          <p className={styles.boxParagraphTitle}>{titleOffer}</p>
        </div>
        <hr className={styles.boxLine}></hr>
        <p className={styles.boxParagraphContent}>{contentOffer}</p>
      </li>
    </div>
  );
};

export default Box;
