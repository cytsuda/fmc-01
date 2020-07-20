import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { MdPriorityHigh } from "react-icons/md";
import clsx from "clsx";

import styles from "./Input.module.scss";
import animation from "./animations.module.scss";

const Input = (props) => {
  const { index, item } = props;
  const message =
    item.type === "email"
      ? "Looks like this is not an email"
      : item.type === "password"
      ? "Your password must be at least 8 characters long"
      : `${item.name} cannot be empty`;
  return (
    <div className={styles.container} key={index}>
      <input
        name={item.name}
        type={item.type}
        placeholder={item.texto}
        required
        className={clsx(
          styles.input,
          item.touch && !item.valid && styles.inputError
        )}
        value={item.value}
        onChange={props.changeData}
      />
      <CSSTransition
        in={item.touch && !item.valid}
        unmountOnExit
        timeout={400}
        classNames={animation}
      >
        <p className={styles.error}>{message}</p>
      </CSSTransition>

      <CSSTransition
        in={item.touch && !item.valid}
        unmountOnExit
        timeout={400}
        classNames={animation}
      >
        <div className={styles.icon}>
          <MdPriorityHigh />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Input;
