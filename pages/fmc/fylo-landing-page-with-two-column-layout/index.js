import Head from "next/head";
import React, { useState } from "react";

import clsx from "clsx";

import styles from "./style.module.scss";
import Hero from "./Components/Hero";
import Testimonial from "./Components/Testimonials";
import Actions from "./Components/Actions";
import Footer from "./Components/Footer";

import Modal from "./Components/Modal";
import Backdrop from "../../../components/Backdrop/Backdrop";

import { emailValidation } from "../../../helpers/helpers";

const Main = (props) => {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("button");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValidation(email)) {
      setModalType("button");
      handleModalOpen();
      setEmail("");
    }
  };
  const handleOpenLink = () => {
    setModalType("links");
    handleModalOpen(true);
  };
  const handleChange = (e) => setEmail(e.target.value);
  const handleModalOpen = () => setModal(true);
  const handleModalClose = () => setModal(false);

  return (
    <React.Fragment>
      <Head>
        <title>Fylo landing page with two column layout</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Backdrop show={modal}>
        <Modal open={modal} close={handleModalClose} type={modalType} />
        <main className={styles.main}>
          <Hero
            click={handleOpenLink}
            submit={handleSubmit}
            email={email}
            emailChange={handleChange}
          />
          <Testimonial click={handleOpenLink} />
          <Actions
            submit={handleSubmit}
            email={email}
            emailChange={handleChange}
          />
        </main>
        <Footer click={handleOpenLink}/>
      </Backdrop>
    </React.Fragment>
  );
};

export default Main;
