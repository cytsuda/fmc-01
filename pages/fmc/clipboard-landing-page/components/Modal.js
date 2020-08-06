import React from "react";
import clsx from "clsx";
import { RiCheckDoubleLine } from "react-icons/ri";
import { CSSTransition } from "react-transition-group";

import styles from "../styles.module.scss";
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
        <div className={styles.modalTop}>
          <div className={styles.modalTopIcon}>
            <RiCheckDoubleLine />
          </div>
          <p className={styles.modalTopTitle}>Thanks for your visit!</p>
          <p className={styles.modalTopText}>But this website is just a demo.</p>
        </div>
        <button className={clsx(styles.modalButton, styles.button, styles.cyan)} onClick={props.close}>
          Dissmiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
