import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Backdrop.module.scss";
import animation from "../../pages/api/animation.module.scss";
const Backdrop = (props) => {
  return (
    <div>
      <CSSTransition timeout={200} in={props.show} unmountOnExit classNames={animation}>
        <div className={styles.backdrop} />
      </CSSTransition>
      {props.children}
    </div>
  );
};
export default Backdrop;
