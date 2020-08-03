import React from "react";
import clsx from "clsx";

import styles from "../style.module.scss";

import Button from "../../../../components/Button/Button";

const urlPath = "/fmc/insure-landing-page/";
const Cta = (props) => {
  return (
    <div className={styles.cta}>
      <h5 className={styles.ctaTitulo}>Find out more about how we work</h5>
      <Button
        className={clsx(styles.btn, styles.white)}
        onClick={props.openModal}
      >
        HOW WE WORK
      </Button>
    </div>
  );
};

export default Cta;
