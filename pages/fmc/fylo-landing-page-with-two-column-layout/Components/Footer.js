import React from "react";

import styles from "../style.module.scss";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const imgHref = "/fmc/fylo-landing-page-with-two-column-layout/";
const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <img className={styles.footerLogo} src={imgHref + "Wlogo.svg"} />
      <div className={styles.footerWrap}>
        <ul className={styles.footerInfo}>
          <li className={styles.footerInfoLink}>
            <MdPhoneInTalk />
            Phone: +1-543-123-4567
          </li>
          <li className={styles.footerInfoLink}>
            <MdEmail />
            example@fylo.com
          </li>
        </ul>
        <ul className={styles.footerMenu}>
          <div className={styles.footerMenuSep}>
            <li onClick={props.click}>About Us</li>
            <li onClick={props.click}>Jobs</li>
            <li onClick={props.click}>Press</li>
            <li onClick={props.click}>Blog</li>
          </div>
          <div className={styles.footerMenuSep}>
            <li onClick={props.click}>Contact Us</li>
            <li onClick={props.click}>Terms</li>
            <li onClick={props.click}>Privacy</li>
          </div>
        </ul>
        <ul className={styles.footerSocial}>
          <li className={styles.footerSocialItem} onClick={props.click}>
            <FaFacebookF />
          </li>
          <li className={styles.footerSocialItem} onClick={props.click}>
            <FaTwitter />
          </li>
          <li className={styles.footerSocialItem} onClick={props.click}>
            <FaInstagram />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
