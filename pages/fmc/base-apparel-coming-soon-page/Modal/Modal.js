import React from "react";
import { GiHeartWings } from "react-icons/gi";
import styles from "./Modal.module.scss";

import { CSSTransition } from "react-transition-group";
const Modal = (props) => {
  // props.open
  return (
    <CSSTransition
      in={props.open}
      timeout={200}
      classNames={{
        enterActive: styles.enterActive,
        enterDone: styles.enterDone,
        exitActive: styles.exitActive,
        exitDone: styles.exitDone,
      }}
    >
      <div className={styles.modal}>
        <div className={styles.modalTop}>
          <GiHeartWings className={styles.modalTopIcon} />
          <p className={styles.modalTopTitle}>Thank you for sign up<br/> </p>
          <p className={styles.modalTopText}>Your email has been added to an imaginary list.</p>
        </div>
        <button className={styles.modalButton} onClick={props.close}>
          Dissmiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;