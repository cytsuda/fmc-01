import React from "react";

import styles from "../style.module.scss";

const urlPath = "/fmc/insure-landing-page/";
const Feat = (props) => {
  return (
    <div className={styles.feat}>
      <h2 className={styles.featTitle}>We’re different</h2>
      <div className={styles.featWrapper}>
        <div className={styles.featCard}>
          <img
            className={styles.featCardImg}
            src={urlPath + "icon-snappy-process.svg"}
          />
          <h4 className={styles.featCardTitulo}>Snappy Process</h4>
          <p className={styles.featCardText}>
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </div>
        <div className={styles.featCard}>
          <img
            className={styles.featCardImg}
            src={urlPath + "icon-people-first.svg"}
          />
          <h4 className={styles.featCardTitulo}>Affordable Prices</h4>
          <p className={styles.featCardText}>
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div className={styles.featCard}>
          <img
            className={styles.featCardImg}
            src={urlPath + "icon-affordable-prices.svg"}
          />
          <h4 className={styles.featCardTitulo}> People First</h4>
          <p className={styles.featCardText}>
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feat;
