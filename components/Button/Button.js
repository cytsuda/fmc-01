import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

const Button = props => {
  return (
    <button {...props} className={clsx(styles.button, styles[props.type], props.className)}>
      {props.children}
    </button>
  );
}

export default Button;