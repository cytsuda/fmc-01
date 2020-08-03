import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "../../../../components/Button/Button";
import styles from "../style.module.scss";
import clsx from "clsx";

const urlPath = "/fmc/insure-landing-page/";
const Nav = (props) => {
  return (
    <nav className={styles.nav}>
      <img className={styles.navLogo} src={urlPath + "logo.svg"} />
      <ul className={clsx(styles.navList, props.menu && styles.open)}>
        <li className={styles.navListItem}>
          <a className={styles.navListLink} onClick={props.openModal}>
            How we work
          </a>
        </li>
        <li className={styles.navListItem}>
          <a className={styles.navListLink} onClick={props.openModal}>
            Blog
          </a>
        </li>
        <li className={styles.navListItem}>
          <a className={styles.navListLink} onClick={props.openModal}>
            Account
          </a>
        </li>
        <li className={styles.navListItem}>
          <Button className={styles.navListBtn} onClick={props.openModal}>View plans</Button>
        </li>
      </ul>
      <Button
        className={clsx(styles.btn, styles.navBtn)}
        onClick={props.toggleMenu}
      >
        {!props.menu ? <AiOutlineMenu /> : <AiOutlineClose />}
      </Button>
    </nav>
  );
};
export default Nav;
