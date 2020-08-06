import React, { useState } from "react";
import Head from "next/head";

import Hero from "./components/Hero";
import Info from "./components/Info";
import Picture from "./components/Picture";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

import Backdrop from "../../../components/Backdrop/Backdrop";
import Modal from "./components/Modal";

import styles from "./styles.module.scss";

const Main = (props) => {
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  return (
    <React.Fragment>
      <Head>
        <title>Frontend Mentor | Clipboard landing page</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Backdrop show={modal} close={handleCloseModal}>
        <Modal open={modal} close={handleCloseModal} />
        <main className={styles.main}>
          <Hero openModal={handleOpenModal} />
          <Info />
          <Picture />
          <Features />
          <CallToAction openModal={handleOpenModal} />
        </main>
        <Footer openModal={handleOpenModal} />
      </Backdrop>
    </React.Fragment>
  );
};

export default Main;
