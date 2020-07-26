import React from "react";
import { CSSTransition } from "react-transition-group";

import { GiStarSwirl } from "react-icons/gi";

import styles from "./Modal.module.scss";
import animation from "../../../api/animation.module.scss";

const Modal = (props) => {
  return (
    <CSSTransition
      in={props.open}
      timeout={200}
      classNames={animation}
      unmountOnExit
    >
      <div className={styles.modal}>
        <div className={styles.top}>
          <GiStarSwirl className={styles.icon} />
          <p className={styles.text}>Your application is appreciated.</p>
        </div>
        <button className={styles.button} onClick={props.close}>
          DISMISS
        </button>
      </div>
    </CSSTransition>
  );
};
export default Modal;
