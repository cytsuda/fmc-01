import React, { useState } from "react";
import clsx from "clsx";
import Head from "next/head";

import styles from "./style.module.scss";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Feat from "./components/feat";
import Cta from "./components/cta";
import Footer from "./components/footer";

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
      
        <main className={clsx(styles.main, menu && styles.menu)}>
          <div className={styles.wrapper}>
            <Nav menu={menu} toggleMenu={handleToggleMenu} openModal={handleModalOpen}/>
            <Hero openModal={handleModalOpen}/>
          </div>
          <Feat />
          <Cta openModal={handleModalOpen}/>
          <Footer openModal={handleModalOpen}/>
      </main>
      
    </React.Fragment>
  );
};

export default Main;
