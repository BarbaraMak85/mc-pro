import styles from "./Contact.module.scss";
import Logo from "../../assets/icons/logo_sygnet_white 1.png";
const Contact = () => {
  return (
    <div className={styles.wrapperContact}>
      <h1 className={styles.contactTitle}>Napisz do mnie!</h1>
      <div className={styles.wrapperContactContent}>
        <div className={styles.wrapperContactEmail}>
          <p className={styles.contactEmail}>patrycja.grabarska@gmail.com</p>
        </div>

        <p className={styles.wrapperContactData}>MC PRO PATRYCJA GRABARSKA</p>
        <p className={styles.wrapperContactData}>NIP: 6443558632</p>
        <p className={styles.wrapperContactData}>
          Jana III Sobieskiego, nr 11, lok. E6{" "}
          <span className={styles.contactAdress}> 40-082 Katowice </span>
        </p>
      </div>
      <div className={styles.wrapperFooter}>
        <p className={styles.wrapperFooterText}>
          MCpro 2021 AllRights Reserved.
        </p>
        <div className={styles.imgContact}>
          <img className={styles.img} src={Logo} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
