import React, { useState } from "react";
import Head from "next/head";

import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";
import styles from "./style.module.scss";
import Button from "../../../components/Button/Button";

import Backdrop from "../../../components/Backdrop/Backdrop";
import Modal from "./Modal/Modal";

const Main = (props) => {
  const [modal, setModal] = useState(false);
  const handleModalOpen = (props) => {
    setModal(true);
  };
  const handleModalClose = (props) => {
    setModal(false);
  };
  return (
    <React.Fragment>
      <Head>
        <title>Huddle landing page with single introductory section</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Backdrop show={modal} close={handleModalClose}>
        <Modal open={modal} close={handleModalClose}/>
        <main className={styles.main}>
          <div className={styles.logo}>
            <img
              className={styles.logoImg}
              src="/fmc/huddle-landing-page-with-single-introductory-section/logo.svg"
            />
          </div>
          <div className={styles.center}>
            <div className={styles.centerFirst}>
              <img
                className={styles.centerFirstImg}
                src="/fmc/huddle-landing-page-with-single-introductory-section/illustration-mockups.svg"
              />
            </div>
            <div className={styles.centerSecond}>
              <h1 className={styles.centerSecondTitulo}>
                Build The Community <br /> Your Fans Will Love
              </h1>
              <p className={styles.centerSecondText}>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <Button
                className={styles.centerSecondButton}
                onClick={handleModalOpen}
              >
                Register
              </Button>
            </div>
          </div>
          <div className={styles.social}>
            <div className={styles.socialIcon} onClick={handleModalOpen}>
              <GrFacebookOption />
            </div>
            <div className={styles.socialIcon} onClick={handleModalOpen}>
              <GrTwitter />
            </div>
            <div className={styles.socialIcon} onClick={handleModalOpen}>
              <GrInstagram />
            </div>
          </div>
        </main>
      </Backdrop>
    </React.Fragment>
  );
};

export default Main;
