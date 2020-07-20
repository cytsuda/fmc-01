import React from "react";
import { MdClose } from "react-icons/md";
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
          <h3 className={styles.modalTopTitle}>{props.title}</h3>
          <button className={styles.modalTopControl} onClick={props.close}>
            <MdClose />
          </button>
        </div>
        <div className={styles.modalCenter}>{props.children}</div>
        <div className={styles.modalBottom}>
          <button className={styles.button} onClick={props.close}>
            OK
          </button>
          <button className={styles.button} onClick={props.close}>
            Fechar
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
