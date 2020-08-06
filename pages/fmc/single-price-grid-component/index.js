import React, { useState } from "react";
import Head from "next/head";
import PrinceComponents from "../../../components/PriceComponent/PriceComponent";

import Backdrop from "../../../components/Backdrop/Backdrop";
import Modal from "./Modal/Modal";

import styles from "./styles.module.scss";
const Main = (props) => {
  const [modal, setModal] = useState({ open: false, type: false });
  const modalOpenHandle = (val) => {
    setModal({ open: true, type: val });
  };
  const modalCloseHandle = () => {
    setModal((prev) => ({ ...prev, open: false }));
  };
  return (
    <React.Fragment>
      <Head>
        <title>Single price grid component</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Backdrop show={modal.open} close={modalCloseHandle}>
        <Modal show={modal.open} type={modal.type} close={modalCloseHandle} />
        <main className={styles.main}>
          <PrinceComponents modalOpen={modalOpenHandle} />
        </main>
      </Backdrop>
    </React.Fragment>
  );
};

export default Main;
