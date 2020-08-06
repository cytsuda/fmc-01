import React from "react";

import { GiHazardSign, GiBackgammon } from "react-icons/gi";
import { CSSTransition } from "react-transition-group";

import styles from "./Modal.module.scss";
import animation from "../../../api/modalAnimation.module.scss";

const Modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={400}
      classNames={animation}
      unmountOnExit
    >
      <div className={styles.modal}>
        <div className={styles.top}>
          <div className={styles.icon}>
            {props.type ? <GiHazardSign /> : <GiBackgammon />}
          </div>
          <p className={styles.titulo}>
            {props.type
              ? "Thank you for sign up."
              : "Theses features are amazing."}
          </p>
          <p className={styles.subtitulo}>Shame this is just a fake service.</p>
        </div>
        <button onClick={props.close} className={styles.button}>
          I UNDERSTAND
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
