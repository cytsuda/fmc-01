import React from "react";
import clsx from "clsx";
import { MdPlace, MdPhone, MdEmail } from "react-icons/md";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

import styles from "./styles.module.scss";
import Button from "../../../components/Button/Button";
//huddle-landing-page-with-alternating-feature-blocks
const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <img
        src="/fmc/huddle-landing-page-with-alternating-feature-blocks/logo-white.svg"
        className={styles.logo}
      />
      <div className={styles.info}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <MdPlace className={styles.listItemIcon} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </li>
          <li className={styles.listItem}>
            <MdPhone className={styles.listItemIcon} />
            <p>+1-543-123-4567</p>
          </li>
          <li className={styles.listItem}>
            <MdEmail className={styles.listItemIcon} />
            <p>example@huddle.com</p>
          </li>
        </ul>
        <ul className={styles.link}>
          <li className={styles.linkItem}><a className={styles.linkDir} onClick={props.click}>About Us</a></li>
          <li className={styles.linkItem}><a className={styles.linkDir} onClick={props.click}>What We Do</a></li>
          <li className={styles.linkItem}><a className={styles.linkDir} onClick={props.click}>FAQ</a></li>
          <li className={styles.linkItem}><a className={styles.linkDir} onClick={props.click}>Career</a></li>
          <li className={styles.linkItem}><a className={styles.linkDir} onClick={props.click}>Blog</a></li>
          <li className={styles.linkItem}><a className={styles.linkDir} onClick={props.click}>Contact Us</a></li>
        </ul>
        <ul className={styles.sociais}>
          <li className={styles.sociaisIcon} onClick={props.click}>
            <FaTwitter />
          </li>
          <li className={styles.sociaisIcon} onClick={props.click}>
            <FaFacebookF />
          </li>
          <li className={styles.sociaisIcon} onClick={props.click}>
            <FaInstagram />
          </li>
        </ul>
      </div>
      <p className={styles.copy}>© Copyright 2018 Huddle. All rights reserved.</p>
    </div>
  );
};

export default Footer;
