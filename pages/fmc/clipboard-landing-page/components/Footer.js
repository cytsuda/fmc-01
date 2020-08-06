import React from "react";

import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

import styles from "../styles.module.scss";
const imgUrl = "/fmc/clipboard-landing-page/";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <img className={styles.footerLogo} src={imgUrl + "logo.svg"} />
      <ul className={styles.footerMenu}>
        <li className={styles.footerMenuItem} onClick={props.openModal}>FAQs</li>
        <li className={styles.footerMenuItem} onClick={props.openModal}>Contact Us</li>
        <li className={styles.footerMenuItem} onClick={props.openModal}>Privacy Policy</li>
        <li className={styles.footerMenuItem} onClick={props.openModal}>Press Kit</li>
        <li className={styles.footerMenuItem} onClick={props.openModal}>Install Guide</li>
      </ul>
      <ul className={styles.footerSocial}>
        <li className={styles.footerSocialItem} onClick={props.openModal}>
          <FaFacebookSquare />
        </li>
        <li className={styles.footerSocialItem} onClick={props.openModal}>
          <FaTwitter />
        </li>
        <li className={styles.footerSocialItem} onClick={props.openModal}>
          <FaInstagram />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
