import React from "react";
import { CSSTransition } from "react-transition-group";


import styles from "./Modal.module.scss";

const Modal = (props) => {
  return (
    <CSSTransition
      in={props.open}
      timeout={200}
      unmountOnExit
    >
      <div className={styles.modal}>
        <div className={styles.top}>
          <p className={styles.text}>It's just a demo.<br/>Thanks for visiting</p>
        </div>
        <button className={styles.button} onClick={props.close}>
          Close
        </button>
      </div>
    </CSSTransition>
  );
};
export default Modal;