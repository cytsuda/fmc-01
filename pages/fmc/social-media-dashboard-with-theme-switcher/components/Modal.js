import React from "react";

import { CSSTransition } from "react-transition-group";
import { GiCardRandom } from "react-icons/gi";
import styles from "../style.module.scss";
import animation from "../../../api/animation.module.scss";

const Modal = (props) => {
  return (
    <CSSTransition
      in={props.open}
      timeout={200}
      unmountOnExit
      classNames={animation}
    >
      <div className={styles.modal}>
        <div className={styles.modalTop}>
          <div className={styles.modalIcon}>
          <GiCardRandom className={styles.modalIconSvg}/>
          </div>
          <h3 className={styles.modalTopTitulo}>We're sorry!</h3>
          <p className={styles.modalTopText}>But, all cards are disabled for now</p>
        </div>
        <button className={styles.modalTopButton} onClick={props.closeModal}>close</button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
