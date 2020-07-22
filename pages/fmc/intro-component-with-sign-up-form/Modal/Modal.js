import React from "react";
import clsx from "clsx";
import { GiCakeSlice, GiSummits } from "react-icons/gi";
import { CSSTransition } from "react-transition-group";

import animation from "../../../api/animation.module.scss";
import styles from "./Modal.module.scss";

const Modal = (props) => {
  const msg = !props.tipo
    ? "Sign up to get your free stuffs"
    : "The cake is a lie, system is made of pastry";
  const icon = !props.tipo ? (
    <GiSummits className={styles.icon} />
  ) : (
    <GiCakeSlice className={styles.icon} />
  );
  return (
    <CSSTransition in={props.show} timeout={200} classNames={animation} unmountOnExit>
      <div
        className={clsx(styles.modal, props.tipo ? styles.green : styles.blue)}
      >
        <div className={styles.top}>
          {icon}
          <p className={styles.msg}>{msg}</p>
        </div>
        <button
          className={styles.button}
          onClick={() => props.close(props.tipo)}
        >
          DISSMISS
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
