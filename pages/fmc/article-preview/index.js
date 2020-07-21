import {useState} from "react";
import Head from "next/head";
import ArticlePreview from "../../../components/ArticlePreview/ArticlePreview";
import styles from "./style.module.scss";

import Backdrop from "../../../components/Backdrop/Backdrop";
import Modal from "../../../components/Modal/Modal";

export default function Main(props) {
  const articleData = {
    title:
      "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
    text:
      "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
    author: "Michelle Appleton",
    date: "28 Jun 2020",
    thumbnail: "drawers.jpg",
    authorPhoto: "avatar-michelle.jpg"
  };
  const [modal, setModal] = useState(false);
  const modalOpenHandle = () => {
    setModal(true);
  }
  const modalCloseHandle = () => {
    setModal(false)
  }
  return (
    <React.Fragment>
      <Head>
        <title>Article preview component</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Backdrop show={modal}>
        <Modal title="Sharing button is disabled" open={modal} close={modalCloseHandle}>
        This functionality has not been implemented, it is just a way of showing interaction
        </Modal>
        <div className={styles.container}>
          <ArticlePreview data={articleData} modal={modalOpenHandle}/>
        </div>
      </Backdrop>
    </React.Fragment>
  );
}
