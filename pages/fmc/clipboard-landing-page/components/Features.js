import React from "react";

import Paragraph from "./Paragraph";
import styles from "../styles.module.scss";

const features = [
  {
    imgName: "icon-blacklist.svg",
    title: "Create blacklists",
    text:
      "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
  },
  {
    imgName: "icon-text.svg",
    title: "Plain text snippets",
    text: "Remove unwanted formatting from copied text for a consistent look.",
  },
  {
    imgName: "icon-preview.svg",
    title: "Sneak preview",
    text: "Quick preview of all snippets on your Clipboard for easy access.",
  },
];
const imgList = [
  "logo-google.png",
  "logo-hp.png",
  "logo-ibm.png",
  "logo-microsoft.png",
  "logo-vector-graphics.png",
];

const imgUrl = "/fmc/clipboard-landing-page/";
const Features = (props) => {
  return (
    <div className={styles.features}>
      <Paragraph title="Supercharge your workflow">
        We’ve got the tools to boost your productivity.
      </Paragraph>
      <ul className={styles.featuresInfo}>
        {features.map((item, index) => (
          <li key={index} className={styles.featuresInfoItem}>
            <img
              className={styles.featuresInfoItemImg}
              src={imgUrl + item.imgName}
            />
            <h4 className={styles.featuresInfoItemTitle}>{item.title}</h4>
            <p className={styles.featuresInfoItemText}>{item.text}</p>
          </li>
        ))}
      </ul>
      <div className={styles.featuresImgs}>
        {imgList.map((item, index) => (
          <img key={index} src={imgUrl + item} />
        ))}
      </div>
    </div>
  );
};

export default Features;
