import React from "react";
import clsx from "clsx";

import styles from "../style.module.scss";
const srcLocal = "/fmc/social-media-dashboard-with-theme-switcher/";

const InfoCard = (props) => {
  return (
    <div className={clsx(styles.card, styles.view)} onClick={props.openModal}>
      <h4 className={styles.viewText}>{props.titulo}</h4>{" "}
      <img
        className={styles.viewIcon}
        src={srcLocal + `icon-${props.type}.svg`}
      />
      <p className={styles.viewValue}>{props.value}</p>
      <div className={styles.viewBalance}>
        {props.balance.signal ? (
          <img src={srcLocal + `icon-up.svg`} />
        ) : (
          <img src={srcLocal + `icon-down.svg`} />
        )}
        <span
          className={clsx(
            styles.viewBalanceValue,
            props.balance.signal ? styles.green : styles.red
          )}
        >
          {props.balance.value}
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
