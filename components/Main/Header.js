import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { withRouter } from "next/router";

import { BsChevronContract } from "react-icons/bs";
import styles from "../../pages/style.module.scss";

const Header = (props) => {
  // const parentStyle = props.styles;
  const { router } = props;
  return (
    <div className={styles.header}>
      <div className={styles.flexLeft}>
        <img className={styles.headerLogo} src="/assets/logo.svg" />
      </div>
      <div className={clsx(styles.headerMenu, styles.flexCenter)}>
        <Link href="/">
          <a className={clsx(styles.headerMenuLink, router.pathname==="/" && styles.active)}>Portifólio</a>
        </Link>
        <div className={styles.headerMenuControl}>
          <BsChevronContract />
        </div>
        <Link href="/fmc">
          <a className={styles.headerMenuLink}>FMC</a>
        </Link>
      </div>
      <div className={styles.flexRight}>
        <Link href="/contato">
          <a className={styles.headerLink}>Contato</a>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Header);
