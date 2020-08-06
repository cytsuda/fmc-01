import React, { useState } from "react";
import Head from "next/head";
import clsx from "clsx";
import { IoIosMenu, IoIosClose } from "react-icons/io";

import Button from "../../../components/Button/Button";
import Backdrop from "../../../components/Backdrop/Backdrop";
import Modal from "./components/modal";

import styles from "./styles.module.scss";

const Main = (props) => {
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const handleToggleMenu = () => {
    setMenu((prev) => !prev);
  };
  const handleModalOpen = () => {
    setModal(true);
  }
  const handleModalClose = () => {
    setModal(false);
  }
  return (
    <React.Fragment>
      <Head>
        <title>Frontend Mentor | Project tracking intro component</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Backdrop show={modal} close={handleModalClose}>
        <Modal open={modal} close={handleModalClose} />
        <main className={styles.main}>
          <nav className={styles.nav}>
            <img
              className={styles.navLogo}
              src="/fmc/project-tracking-intro-component/logo.svg"
            />
            <Button className={styles.navMenu} onClick={handleToggleMenu}>
              {menu ? (
                <IoIosClose className={styles.navMenuIcon} />
              ) : (
                <IoIosMenu className={styles.navMenuIcon} />
              )}
            </Button>
            <ul className={clsx(styles.navList, menu && styles.open)}>
              <li className={styles.navItem}>
                <a className={styles.navLink} onClick={handleModalOpen}>Product</a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} onClick={handleModalOpen}>Features</a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} onClick={handleModalOpen}>Pricing</a>
              </li>
              <li className={styles.navItem}>
                <div className={styles.navCircle} />
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} onClick={handleModalOpen}>Login</a>
              </li>
            </ul>
          </nav>
          <div className={styles.hero}>
            <div className={styles.heroFirst}>
              <div className={styles.heroTop}>
                <span className={styles.heroTopTag}>New</span>
                <span className={styles.longText}>Monograph Dashboard</span>
              </div>
              <h1 className={styles.heroTitle}>
                POWERFUL INSIGHTS INTO YOUR TEAM
              </h1>
              <p className={styles.heroText}>
                Project planning and time tracking for agile teams
              </p>
              <div className={styles.heroCta}>
                <Button className={styles.button} onClick={handleModalOpen}>
                  SCHEDULE A DEMO
                </Button>{" "}
                <span className={clsx(styles.longText, styles.heroCtaText)}>
                  TO SEE A PREVIEW
                </span>
              </div>
            </div>
            <div className={styles.heroSecond}>
              <img
                className={styles.heroSecondImg}
                src="/fmc/project-tracking-intro-component/illustration-devices.svg"
              />
            </div>
          </div>
        </main>
      </Backdrop>
    </React.Fragment>
  );
};

export default Main;
