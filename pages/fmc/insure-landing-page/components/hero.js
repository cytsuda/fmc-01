import React from "react";
import clsx from "clsx";

import styles from "../style.module.scss";
import Button from "../../../../components/Button/Button";
const urlPath = "/fmc/insure-landing-page/";

const Hero = (props) => {
  return (
    <div className={styles.hero}>
      <img
        className={styles.heroImg}
        src={urlPath + "image-intro-mobile.jpg"}
        srcSet={`
          ${urlPath + "image-intro-mobile.jpg"} 375w, 
          ${urlPath + "image-intro-desktop.jpg"} 540w
        `}
      />
      <div className={styles.heroInfo}>
        <h1 className={styles.heroInfoTitle}>Humanizing your insurance.</h1>
        <p className={styles.heroInfoText}>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <Button className={clsx(styles.btn, styles.white, styles.heroInfoBtn)} onClick={props.openModal}>View plans</Button>
      </div>
    </div>
  );
};

export default Hero;
