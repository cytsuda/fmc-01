import React, {useState} from "react";
import Head from "next/head";
import styles from "./styles.module.scss";

import { MdInsertDriveFile, MdFolder, MdCloudUpload } from "react-icons/md";

// Importando components personalizados
import FileController from "../../../components/FileController/FileController";
import FileProgressStatus from "../../../components/FileProgressStatus/FileProgressStatus";
import Backdrop from "../../../components/Backdrop/Backdrop";
import Modal from "../../../components/Modal/Modal";

const Main = (props) => {
  const icons = [
    {
      id: "file",
      icon: <MdInsertDriveFile />,
    },
    {
      id: "folder",
      icon: <MdFolder />,
    },
    {
      id: "upload",
      icon: <MdCloudUpload />,
    },
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  }
  const handleModalClose = () => {
    setModalOpen(false);
  }
  return (
    <React.Fragment>
      <Head>
        <title>Fylo data storage component</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Backdrop show={modalOpen}>
        <Modal title="Botões desativados" open={modalOpen} close={handleModalClose}>
          O botão funciona mas não possui nenhuma utilidade.
        </Modal>
        <main className={styles.main}>
          <div className={styles.container}>
            <FileController
              controlClass={styles.bg}
              controlIcon={styles.icon}
              icons={icons}
              open={handleModalOpen}
            />
            <FileProgressStatus
              bgColor={[styles.bg, styles.bgSmall, styles.bgDark]}
              txtColor={[styles.colorDark, styles.colorGray]}
              progress={815}
              maxProgress={1000}
              boldClass={styles.bold}
            />
          </div>
        </main>
      </Backdrop>
    </React.Fragment>
  );
};

export default Main;
