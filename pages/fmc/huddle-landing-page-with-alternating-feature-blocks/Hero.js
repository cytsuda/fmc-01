import React from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";
import Button from "../../../components/Button/Button";
//huddle-landing-page-with-alternating-feature-blocks
const Hero = (props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroMenu}>
        <img
          className={styles.heroMenuLogo}
          src="/fmc/huddle-landing-page-with-alternating-feature-blocks/logo.svg"
        />
        <Button
          onClick={props.onClick}
          className={clsx(styles.btn, styles.btnSecondary)}
        >
          Try It Free
        </Button>
      </div>
      <div className={styles.heroBox}>
        <div className={styles.heroBoxText}>
          <h1 className={styles.heroBoxTextTitulo}>
            Build The Community Your Fans Will Love
          </h1>
          <p className={styles.heroBoxTextTexto}>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <Button
            onClick={props.onClick}
            className={clsx(styles.btn, styles.btnPrimary)}
          >
            Get Start For Free
          </Button>
        </div>
        <div className={styles.heroBoxImage}>
          <img
            className={styles.img}
            src="/fmc/huddle-landing-page-with-alternating-feature-blocks/illustration-mockups.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
