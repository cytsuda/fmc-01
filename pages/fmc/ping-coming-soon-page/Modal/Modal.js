import React from "react";
import clsx from "clsx";

import { CSSTransition } from "react-transition-group";
import { RiThumbUpLine, RiCodeSSlashLine } from "react-icons/ri";

import styles from "./Modal.module.scss";
import animation from "../../../api/animation.module.scss";

const Modal = (props) => {
  let icon = <RiCodeSSlashLine />;
  let msg1 = "Thank you for visiting my social media.";
  let msg2 = "Links are currently unavailable.";

  if (props.type === "sign") {
    icon = <RiThumbUpLine />;
    msg1 = "Successfully registered";
    msg2 = "This newsletter isn't real.";
  }
  return (
    <CSSTransition
      in={props.open}
      timeout={200}
      classNames={animation}
      unmountOnExit
    >
      <div className={clsx(styles.modal, styles[props.type])}>
        <div className={styles.top}>
          <div className={styles.icon}>{icon}</div>
          <p className={styles.titulo}>{msg1}</p>
          <p className={styles.texto}>{msg2}</p>
        </div>
        <button className={styles.button} onClick={props.close}>
          GO BACK
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
