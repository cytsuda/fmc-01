import React from "react";
import clsx from "clsx";

import styles from "./FileController.module.scss";

const FileController = (props) => {
  return (
    <div className={clsx(styles.control, props.controlClass)}>
      <img className={styles.controlLogo} src="/fmc/fylo-data-store/logo.svg" />
      <div className={styles.controlIcons}>
        {props.icons.map((item) => (
          <div key={"file-controller-"+item.id} className={clsx(styles.controlIcon, props.controlIcon)} onClick={props.open}>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FileController;
