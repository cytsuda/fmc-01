import React, { useState } from "react";
import clsx from "clsx";
import Head from "next/head";

import styles from "./style.module.scss";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Feat from "./components/feat";
import Cta from "./components/cta";
import Footer from "./components/footer";
import Modal from "./components/modal";
import Backdrop from "../../../components/Backdrop/Backdrop";

const Main = (props) => {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleToggleMenu = () => {
    setMenu(prev=>!prev);
  }
  const handleModalOpen = () => {
    if (menu) {
      setMenu(false);
    }
    setModal(true);
  }
  const handleModalClose = () => {
    setModal(false);
  }
  return (
    <React.Fragment>
      <Head>
        <title>Insure landing page</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Backdrop show={modal} close={handleModalClose}>
        <Modal open={modal} close={handleModalClose}/>
        <main className={clsx(styles.main, menu && styles.menu)}>
          <div className={styles.wrapper}>
            <Nav menu={menu} toggleMenu={handleToggleMenu} openModal={handleModalOpen}/>
            <Hero openModal={handleModalOpen}/>
          </div>
          <Feat />
          <Cta openModal={handleModalOpen}/>
          <Footer openModal={handleModalOpen}/>
        </main>
      </Backdrop>
    </React.Fragment>
  );
};

export default Main;
