import React from "react";
import { CSSTransition } from "react-transition-group";

import { GiCakeSlice } from "react-icons/gi";

import styles from "./Modal.module.scss";
import animation from "../../../api/animation.module.scss";

import Button from "../../../../components/Button/Button";

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
          <GiCakeSlice className={styles.icon} />
          <p className={styles.text}>The cake is a lie</p>
        </div>
        <Button className={styles.button} onClick={props.close}>
          Close
        </Button>
      </div>
    </CSSTransition>
  );
};
export default Modal;
