import React from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";
import Button from "../../../components/Button/Button";
//huddle-landing-page-with-alternating-feature-blocks
const Hero = (props) => {
  return (
    <div className={styles.cta}>
      <h4 className={styles.ctaText}>Ready To Build Your Community?</h4>
      <Button className={clsx(styles.btn, styles.btnPrimary, styles.ctaBtn)} onClick={props.onClick}>
        Get Started For Free
      </Button>
    </div>
  );
};

export default Hero;
