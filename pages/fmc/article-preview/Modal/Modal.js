import React from "react";
import { CSSTransition } from "react-transition-group";
import { MdStar } from "react-icons/md";

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
          <MdStar className={styles.icon} />
          <p className={styles.titulo}>Thank you for your support</p>
          <p className={styles.texto}>Sharing buttons are currently disabled</p>
        </div>
        <button className={styles.button} onClick={props.close}>
          DISMISS
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
