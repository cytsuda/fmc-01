import React from "react";
import { CSSTransition } from "react-transition-group";

import { MdLocalFlorist } from "react-icons/md";

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
          <MdLocalFlorist className={styles.icon} />
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