import React from "react";

import Paragraph from "./Paragraph";

import styles from "../styles.module.scss";

const imgUrl = "/fmc/clipboard-landing-page/";
const info = [
  {
    title: "Quick Search",
    text:
      "Easily search your snippets by content, category, web address, application, and more.",
  },
  {
    title: "iCloud Sync",
    text: "Instantly saves and syncs snippets across all your devices.",
  },
  {
    title: "Complete History",
    text: "Retrieve any snippets from the first moment you started using the app.",
  },
];
const Info = (props) => {
  return (
    <div className={styles.info}>
      <Paragraph title="Keep track of your snippets">
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </Paragraph>
      <div className={styles.infoContainer}>
        <img className={styles.infoImg} src={imgUrl + "image-computer.png"} />
        <ul className={styles.infoList}>
          {info.map((item, index) => (
            <li key={index} className={styles.infoItem}>
              <h3 className={styles.infoItemTitle}>{item.title}</h3>
              <p className={styles.infoItemText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Info;
