import React from "react";
import { CSSTransition } from "react-transition-group";

import { GiVineFlower } from "react-icons/gi";

import style from "./styles.module.scss";
import animation from "../../../api/animation.module.scss";

const Modal = (props) => {
  return (
    <CSSTransition
      in={props.open}
      timeout={200}
      classNames={animation}
      unmountOnExit
    >
      <div className={style.modal}>
        <div className={style.top}>
          <GiVineFlower className={style.icon} />
          <p className={style.text}>
            It's just a demo.
            <br />
            Thanks for visiting
          </p>
        </div>
        <button className={style.button} onClick={props.close}>
          Close
        </button>
      </div>
    </CSSTransition>
  );
};
export default Modal;
