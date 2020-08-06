import React from "react";
import clsx from "clsx";
import Paragraph from "./Paragraph";
import Button from "../../../../components/Button/Button";

import styles from "../styles.module.scss";

const CallToAction = (props) => {
  return (
    <div className={styles.cta}>
      <Paragraph title="Clipboard for iOS and Mac OS">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </Paragraph>
      <div className={styles.bts}>
        <Button className={clsx(styles.button, styles.cyan)} onClick={props.openModal}>
          Download for iOS
        </Button>
        <Button className={clsx(styles.button, styles.blue)} onClick={props.openModal}>
          Download for Mac
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
