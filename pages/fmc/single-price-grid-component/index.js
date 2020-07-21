import React from "react";
import Head from "next/head";
import PrinceComponents from "../../../components/PriceComponent/PriceComponent";

import styles from "./styles.module.scss";
const Main = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Single price grid component</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <main className={styles.main}>
        <PrinceComponents />
      </main>
    </React.Fragment>
  );
};

export default Main;