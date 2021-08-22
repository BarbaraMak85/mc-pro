import React from "react";
import styles from "./Content.module.scss";
const Content = ({ claretTitle, secondaryText, blackTitle, whiteTitle }) => {
  return (
    <div className={styles.contentWrapper}>
      <h1
        className={
          claretTitle ? styles.claretTitleStyles : styles.whiteTitlesStyles
        }
      >
        {claretTitle ? claretTitle : whiteTitle}
      </h1>
      <p className={blackTitle ? styles.greySecondaryText : styles.whiteText}>
        {secondaryText}
      </p>
    </div>
  );
};

export default Content;
