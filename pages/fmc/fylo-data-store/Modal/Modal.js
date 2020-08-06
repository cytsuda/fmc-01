import React from "react";
import { CSSTransition } from "react-transition-group";

import { IoMdConstruct } from "react-icons/io";

import styles from "./Modal.module.scss";
import animation from "../../../api/modalAnimation.module.scss";

const Modal = (props) => {
  return (
    <CSSTransition
      in={props.open}
      timeout={400}
      classNames={animation}
      unmountOnExit
    >
      <div className={styles.modal}>
        <div className={styles.top}>
          <IoMdConstruct className={styles.icon} />
          <p className={styles.text}>These icons are just decoration</p>
        </div>
        <button className={styles.button} onClick={props.close}>
          DISMISS
        </button>
      </div>
    </CSSTransition>
  );
};
export default Modal;
