import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { withRouter } from "next/router";

import styles from "../../pages/style.module.scss";

const Footer = (props) => {
  // const parentStyle = props.styles;
  console.log("FOOTER PAGE: " + props.page);
  const { router } = props;
  return (
    <div className={styles.footer}>
      <div className={styles.flexLeft}>
        <div
          className={clsx(
            styles.footerControl,
            props.page === 1 && styles.disabled
          )}
          onClick={() => props.changePage(0)}
        >
          <BsArrowLeft />
        </div>
      </div>
      <div className={clsx(styles.footerCenter, styles.flexCenter)}>
        <div className={styles.footerCenterBar}>
          <div
            className={styles.footerCenterThumb}
            style={{
              width: `${100 / props.maxPage}%`,
              marginLeft: `${((props.page - 1) * 100) / props.maxPage}%`,
            }}
          />
        </div>
        <div className={styles.footerCenterPages}>
          <span className={styles.footerCenterPagesCurrent}>{props.page}</span>
          <span className={styles.footerCenterPagesSeparator}>/</span>
          <span className={styles.footerCenterPagesMax}>{props.maxPage}</span>
        </div>
      </div>
      <div className={styles.flexRight}>
        <div
          className={clsx(
            styles.footerControl,
            props.page === props.maxPage && styles.disabled
          )}
          onClick={() => props.changePage(1)}
        >
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Footer);
