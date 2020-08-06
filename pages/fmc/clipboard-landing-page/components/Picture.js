import React from "react";
import Paragraph from "./Paragraph";

import styles from "../styles.module.scss";
const imgUrl = "/fmc/clipboard-landing-page/";
const Picture = (props) => {
  return (
    <div className={styles.picture}>
      <Paragraph title="Access Clipboard anywhere">
        Whether you’re on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </Paragraph>
      <img className={styles.pictureImg} src={imgUrl + "image-devices.png"} />
    </div>
  );
};

export default Picture;