import React from "react";
import clsx from "clsx";

import styles from "../styles.module.scss"; 

import Button from "../../../../components/Button/Button";

const imgUrl = "/fmc/clipboard-landing-page/";

const Hero = (props) => {
  return (
    <div className={styles.hero}>
      <img className={styles.logo} src={imgUrl + "logo.svg"} />
      <h1 className={styles.heroTitle}>A history of everything you copy</h1>
      <p className={styles.heroText}>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <div className={styles.bts}>
        <Button className={clsx(styles.button, styles.cyan)} onClick={props.openModal}>
          Download for iOS
        </Button>
        <Button className={clsx(styles.button, styles.blue)} onClick={props.openModal}>
          Download for Mac
        </Button>
      </div>
    </div>
  );
};

export default Hero;
