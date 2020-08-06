import React from "react";
import clsx from "clsx";
import { GiHeartWings } from "react-icons/gi";
import { CSSTransition } from "react-transition-group";

import Button from "../../../../components/Button/Button";
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
            <GiHeartWings />
          </div>
          <p className={styles.modalTopTitle}>Thanks for your visit!</p>
          <p className={styles.modalTopText}>
            But this website is just a demo. <br />
            This is a series of challenges provided by{" "}
            <a href="https://www.frontendmentor.io/">FrontendMentor.</a>
          </p>
        </div>
        <Button
          className={clsx(styles.modalButton, styles.button)}
          onClick={props.close}
        >
          Dissmiss
        </Button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
