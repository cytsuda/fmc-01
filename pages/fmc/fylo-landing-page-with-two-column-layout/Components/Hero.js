import React from "react";
import clsx from "clsx";
import Button from "../../../../components/Button/Button";

import styles from "../style.module.scss";

const imgHref = "/fmc/fylo-landing-page-with-two-column-layout/";
const Hero = (props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.nav}>
        <img className={styles.navLogo} src={imgHref + "logo.svg"} />
        <ul className={styles.navMenu}>
          <li className={styles.navMenuItem}>
            <a className={styles.navMenuLink} onClick={props.click}>Features</a>
          </li>
          <li className={styles.navMenuItem}>
            <a className={styles.navMenuLink} onClick={props.click}>Team</a>
          </li>
          <li className={styles.navMenuItem}>
            <a className={styles.navMenuLink} onClick={props.click}>Sign In</a>
          </li>
        </ul>
      </div>
      <div className={styles.heroMain}>
        <div className={styles.hFirst}>
          <h1 className={styles.hFirstTitle}>
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className={styles.hFirstText}>
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <form onSubmit={props.submit} className={styles.hFirstForm}>
            <input
              name="email"
              type="email"
              value={props.email}
              onChange={props.emailChange}
              className={styles.input}
              placeholder="Enter your email..."
            />
            <Button className={styles.button}>Get Started</Button>
          </form>
        </div>
        <div className={styles.hSecond}>
          <img
            className={styles.hSecondImg}
            src={imgHref + "illustration-1.svg"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
