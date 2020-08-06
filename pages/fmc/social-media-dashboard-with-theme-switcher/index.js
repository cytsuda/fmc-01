import React, { useState } from "react";
import Head from "next/head";
import clsx from "clsx";

import styles from "./style.module.scss";

import Top from "./components/Top";
import DashCard from "./components/DashCard";
import InfoCard from "./components/InfoCard";
import Backdrop from "../../../components/Backdrop/Backdrop";
import Modal from "./components/Modal";
import { dashboard, overview } from "./data.json";

const Main = (props) => {
  const [darkMode, setDarkMode] = useState(true);
  const [modal, setModal] = useState(false);
  const handleMode = (e) => {
    setDarkMode((prev) => !prev);
  };
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <React.Fragment>
      <Head>
        <title>Social Media Dashboard With Theme Switcher</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <main className={darkMode ? styles.dark : styles.light}>
        <Backdrop show={modal} close={closeModal}>
          <Modal open={modal} closeModal={closeModal} />
          <div className={styles.main}>
            <Top click={handleMode} mode={darkMode} />
            <div className={styles.dashboard}>
              {dashboard.map((item, index) => (
                <DashCard key={index} {...item} openModal={openModal} />
              ))}
            </div>
            <h2 className={styles.subtitle}>Overview - Today</h2>
            <div className={styles.overview}>
              {overview.map((item, index) => (
                <InfoCard key={index} {...item} openModal={openModal} />
              ))}
            </div>
          </div>
        </Backdrop>
      </main>
    </React.Fragment>
  );
};

export default Main;
