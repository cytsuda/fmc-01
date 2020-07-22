import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Backdrop.module.scss";

const Backdrop = (props) => {
  return (
    <div>
      <CSSTransition
        timeout={200}
        in={props.show}
        classNames={{
          enterActive: styles.enterActive,
          enterDone: styles.enterDone,
          exitActive: styles.exitActive,
          exitDone: styles.exitDone,
        }}
      >
        <div className={styles.backdrop} />
      </CSSTransition>
        {props.children}
    </div>
  );
};
export default Backdrop;
