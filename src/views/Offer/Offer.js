import React from "react";
import styles from "./Offer.module.scss";
import LineOne from "../../assets/images/line_2.png";
import LineTwo from "../../assets/images/line_3.png";
import Box from "../../components/Box/Box";
import { offerDetailsData } from "../../data/offerDetailsData";

const Offer = () => {
  return (
    <div className={styles.offerWrapper}>
      <div className={styles.offerWrapperLine}>
        <div className={styles.offerWrapperLineTwo}>
          <div className={styles.box}>
            <ul className={styles.offerBox}>
              {offerDetailsData.map((item) => {
                return (
                  <div>
                    <Box {...item} />
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
