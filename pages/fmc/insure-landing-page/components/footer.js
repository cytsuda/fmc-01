import React from "react";

import { FaFacebookSquare,FaTwitter,FaPinterest,FaInstagram } from "react-icons/fa";


import styles from "../style.module.scss";

const urlPath = "/fmc/insure-landing-page/";
const Footer = props => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <img className={styles.footerImg} src={urlPath + "logo.svg"} />
        <ul className={styles.footerTopList}>
          <li className={styles.footerTopItem} onClick={props.openModal}><FaFacebookSquare/></li>
          <li className={styles.footerTopItem} onClick={props.openModal}><FaTwitter/></li>
          <li className={styles.footerTopItem} onClick={props.openModal}><FaPinterest/></li>
          <li className={styles.footerTopItem} onClick={props.openModal}><FaInstagram/></li>
        </ul>
      </div>
      <div className={styles.footerLine} />
      <div className={styles.footerMenu}>
        <div className={styles.footerMenuSec}>
          <p className={styles.footerMenuSecTitle}>OUR COMPANY</p>
          <ul className={styles.footerMenuSecList}>
            <li className={styles.footerMenuSecItem} onClick={props.openModal}><a className={styles.footerMenuSecLink}>HOW WE WORK?</a></li>
            <li className={styles.footerMenuSecItem} onClick={props.openModal}><a className={styles.footerMenuSecLink}>WHY INSURE</a></li>
            <li className={styles.footerMenuSecItem} onClick={props.openModal}><a className={styles.footerMenuSecLink}>VIEW PLANS</a></li>
            <li className={styles.footerMenuSecItem} onClick={props.openModal}><a className={styles.footerMenuSecLink}>REVIEW</a></li>
          </ul>
        </div>
        <div className={styles.footerMenuSec}>
          <p className={styles.footerMenuSecTitle}>HELP ME</p>
          <ul className={styles.footerMenuSecList}>
            <li className={styles.footerMenuSecItem} onClick={props.openModal}><a className={styles.footerMenuSecLink}>FAQ</a></li>
            <li className={styles.footerMenuSecItem} onClick={props.openModal}><a className={styles.footerMenuSecLink}>TERMS OF USE</a></li>
            <li className={styles.footerMenuSecItem} onClick={props.openModal}><a className={styles.footerMenuSecLink}>PRIVACY POLICY</a></li>
            <li className={styles.footerMenuSecItem} onClick={props.openModal}><a className={styles.footerMenuSecLink}>COOKIES</a></li>
          </ul>
        </div>
        <div className={styles.footerMenuSec}>
          <p className={styles.footerMenuSecTitle}>CONTACT</p>
          <ul className={styles.footerMenuSecList}>
            <li className={styles.footerMenuSecItem} onClick={props.openModal}><a className={styles.footerMenuSecLink}>SALES</a></li>
            <li className={styles.footerMenuSecItem} onClick={props.openModal}><a className={styles.footerMenuSecLink}>SUPPORT</a></li>
            <li className={styles.footerMenuSecItem} onClick={props.openModal}><a className={styles.footerMenuSecLink}>LIVE CHAT</a></li>
          </ul>
        </div>
        <div className={styles.footerMenuSec}>
          <p className={styles.footerMenuSecTitle}>OTHERS</p>
          <ul className={styles.footerMenuSecList}>
            <li className={styles.footerMenuSecItem} onClick={props.openModal}><a className={styles.footerMenuSecLink}>CAREERS</a></li>
            <li className={styles.footerMenuSecItem} onClick={props.openModal}><a className={styles.footerMenuSecLink}>PRESS</a></li>
            <li className={styles.footerMenuSecItem} onClick={props.openModal}><a className={styles.footerMenuSecLink}>LICENSES</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
