// 01 - Fylo Data Storage Component
import Head from "next/head";

import styles from "./style/fmc-01.module.scss";

const ControlContainer = (props) => {
  return (
    <div className={styles.control}>
      <img className={styles.logo} src="./assets/fmc-01/logo.svg" />
      <div className={styles.icons}>
        <div className={styles.icon}>
          <img src="./assets/fmc-01/icon-document.svg" />
        </div>
        <div className={styles.icon}>
          <img src="./assets/fmc-01/icon-folder.svg" />
        </div>
        <div className={styles.icon}>
          <img src="./assets/fmc-01/icon-upload.svg" />
        </div>
      </div>
    </div>
  );
};

const ProgressBar = (props) => {
  return (
    <div className={styles.processBarContainer}>
      <h5>
        You’ve used <b>815 GB</b> of your storage
      </h5>
      <div className={styles.progressBar} onMouseEnter={props.hover}>
        <div className={styles.progressBarInner} style={{ width: "100%" }}>
          <div className={styles.progressBarBall}/>
        </div>
      </div>
      <div className={styles.progressTotal}>
        <p>0 GB</p>
        <p>1000 GB</p>
      </div>
      <div className={styles.speechBallon}>
        <p>185 <small>GB LEFT</small></p>
      </div>
    </div>
  );
};

const FrontendMentorDesafio01 = () => {

  return (
    <div className="container">
      <Head>
        <title>Fylo data storage component</title>
        <link rel="icon" href="./assets/favicon-32x32.png" />
      </Head>
      <main className={styles.main}>
        <ControlContainer />
        <ProgressBar />
      </main>

      <style global jsx>{`
        *,
        *:after,
        *:before {
          font-family: "Raleway", sans-serif;
          margin: 0;
          border: 0;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default FrontendMentorDesafio01;
