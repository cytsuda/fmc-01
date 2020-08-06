import React from "react";
import { CSSTransition } from "react-transition-group";

import { TiInfoOutline } from "react-icons/ti";
import animation from "../../../api/modalAnimation.module.scss";

import styles from "../style.module.scss";
/*
type.button
*/
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
          <div className={styles.modalIcon}>
            <TiInfoOutline />
          </div>
          <p className={styles.modalText}><span className={styles.modalTextSpan}>Thanks for visit.<br/> But {props.type}</span> are disabled.</p>
        </div>
        <button className={styles.modalButton} onClick={props.close}>
          Close
        </button>
      </div>
    </CSSTransition>
  );
};
export default Modal;
