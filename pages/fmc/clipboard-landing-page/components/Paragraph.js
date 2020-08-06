import React from "react";

import styles from "../styles.module.scss";

const Paragraph = (props) => {
  return (
    <div className={styles.paragraph}>
      <h2 className={styles.paragraphTitle}>{props.title}</h2>
      <p className={styles.paragraphText}>{props.children}</p>
    </div>
  );
};

export default Paragraph;
