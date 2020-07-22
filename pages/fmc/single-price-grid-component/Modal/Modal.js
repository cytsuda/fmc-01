import React from "react";

import { CSSTransition } from "react-transition-group";
import { GiHazardSign, GiBackgammon } from "react-icons/gi";

import animation from "../../../api/animation.module.scss";
import styles from "./Modal.module.scss";

const Modal = (props) => {
  return (
    <CSSTransition
      in={props.open}
      timeout={200}
      classNames={animation}
      unmountOnExit
    >
      <div
        className={styles.modal}
      >
        <div className={styles.top}>
          <div className={styles.icon}>
            {props.type ? <GiHazardSign /> : <GiBackgammon />}
          </div>
          <p className={styles.titulo}>{props.type?"Thank you for sign up.":"Theses features are amazing."}</p>
          <p className={styles.subtitulo}>Shame this is just a fake service.</p>
        </div>
        <button onClick={props.close} className={styles.button}>I UNDERSTAND</button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
