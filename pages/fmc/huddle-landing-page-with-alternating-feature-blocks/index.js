import React, { useState } from "react";
import Head from "next/head";

import Hero from "./Hero";
import Features from "./Features";
import Cta from "./Cta";
import Footer from "./Footer";
import Modal from "./Modal/Modal";
import Backdrop from "../../../components/Backdrop/Backdrop";

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
        <title>Huddle landing page with alternating feature blocks</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <main>
        <Backdrop show={modal} close={handleCloseModal}>
          <Modal open={modal} close={handleCloseModal} />
          <Hero onClick={handleOpenModal} />
          <Features />
          <Cta onClick={handleOpenModal} />
          <Footer click={handleOpenModal}/>
        </Backdrop>
      </main>
    </React.Fragment>
  );
};

export default Main;
