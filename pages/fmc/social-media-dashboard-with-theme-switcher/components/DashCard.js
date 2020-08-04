import React from "react";
import clsx from "clsx";

import styles from "../style.module.scss";

const srcLocal = "/fmc/social-media-dashboard-with-theme-switcher/";

const Card = (props) => {
  return (
    <div className={clsx(styles.card, styles.dash, styles[props.type])} onClick={props.openModal}>
      <div className={styles.dashUser}>
        <img
          className={styles.dashUserIcon}
          src={srcLocal + `icon-${props.type}.svg`}
        />
        <span className={styles.dashUserName}>{props.user}</span>
      </div>
      <h3 className={styles.dashNum}>{props.value}</h3>
      <p className={styles.dashSub}>{props.text}</p>
      <p
        className={clsx(
          styles.dashBal,
          props.balanceSignal ? styles.green : styles.red
        )}
      >
        {props.balanceSignal ? (
          <img src={srcLocal + `icon-up.svg`} />
        ) : (
          <img src={srcLocal + `icon-down.svg`} />
        )}
        {props.balanceValue}
      </p>
    </div>
  );
};

export default Card;
