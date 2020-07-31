import React from "react";

import styles from "../style.module.scss";

const Top = (props) => {
  return (
    <div className={styles.top}>
      <div className={styles.topText}>
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <div className={styles.topCheck}>
        <p className={styles.topCheckText} onClick={props.click}>
          Dark Mode
        </p>
        <label className={styles.topCheckBox}>
          <input type="checkbox" checked={props.mode} onClick={props.click} />
          <span className={styles.topCheckToggle} />
        </label>
      </div>
    </div>
  );
};

export default Top;