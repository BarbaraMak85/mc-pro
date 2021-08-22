import React from "react";
import styles from "./About.module.scss";
const About = () => {
  return (
    <div className={styles.wrapperAbout}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutImage}></div>
        <div className={styles.aboutText}>
          <h1 className={styles.aboutName}>
            Patrycja <br></br>
            <span className={styles.aboutSurname}>Grabarska</span>
          </h1>
          <p className={styles.aboutParagraph}>
            Moją przygodę z marketingiem rozpoczęłam w 2014 roku - od praktyk w
            instytucjach nauki i kultury (Uniwersytet Śląski oraz Teatr Śląski
            im. Stanisława Wyspiańskiego w Katowicach). Największe doświadczenie
            zdobyłam w agencjach marketingowych. Pracowałam m.in. w Linkhouse
            oraz ORION MEDIA GROUP, gdzie odpowiadałam za współpracę z wydawcami
            internetowymi - zarówno lokalnymi, branżowymi jak i największymi
            grupami mediowymi w Polsce. Byłam również kierowniczką działu
            content marketingu w WUNDERTEAM, w którym prowadziłam projekty dla
            klientów. Dodatkowo współorganizowałam Czwartkowe Spotkania Social
            Media w Katowicach. Teraz działam tutaj - w miejscu stworzonym
            przeze mnie
          </p>
        </div>
      </div>
      <div className={styles.aboutImageLine}></div>
    </div>
  );
};

export default About;
