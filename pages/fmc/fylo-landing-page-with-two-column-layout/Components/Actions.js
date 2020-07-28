import React from "react";

import clsx from "clsx";

import Button from "../../../../components/Button/Button";
import styles from "../style.module.scss";
const Actions = (props) => {
  return (
    <div className={styles.actions}>
      <div className={styles.aFirst}>
        <h3 className={styles.aFirstTitulo}>Get early access today</h3>
        <p className={styles.aFirstText}>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <form className={styles.aSec} onSubmit={props.submit}>
        <input
          type="email"
          placeholder="email@example.com"
          className={clsx(styles.input, styles.nborder)}
          value={props.email}
          onChange={props.emailChange}
          name="email"
        />
        <Button className={clsx(styles.button, styles.actions)}>
          Get Started
        </Button>
      </form>
    </div>
  );
};

export default Actions;
