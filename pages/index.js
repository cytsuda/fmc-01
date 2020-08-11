import React, { useState } from "react";
import Head from "next/head";

import Header from "../components/Main/Header";
import Footer from "../components/Main/Footer";
import Portfolio from "../components/Main/Portfolio";
import styles from "./style.module.scss";

const portfolioWork = [
  "fylo-data-store",
  "article-preview",
  "coding-bootcamp-testimonials-slider",
  "four-card-feature-section",
  "base-apparel-coming-soon-page",
  "intro-component-with-sign-up-form",
  "single-price-grid-component",
  "ping-coming-soon-page",
  "huddle-landing-page-with-alternating-feature-blocks",
  "huddle-landing-page-with-single-introductory-section",
  "fylo-landing-page-with-two-column-layout",
  "social-media-dashboard-with-theme-switcher",
  "insure-landing-page",
  "pricing-component-with-toggle",
  "project-tracking-intro-component",
  "clipboard-landing-page",
];

export default function Home() {
  const [page, setPage] = useState(1);
  const [dir, setDir] = useState(1);
  const maxPage = portfolioWork.length / 8;
  const handleChangePage = (val) => {
    if (val && page < maxPage) {
      setPage(prev => prev + 1);
      setDir(val);
    }
    if (!val && page > 1) {
      setPage(prev => page - 1);
      setDir(val);
    }
  };
  return (
    <React.Fragment>
      <Head>
        <title>This is a nice thing to to</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className={styles.wrapper}>
        <Header />
        <div className={styles.center}>
          <div className={styles.flexLeft}/>
          <div className={styles.flexCenter}>
            <Portfolio page={page} data={portfolioWork} dir={dir} />
          </div>
          <div className={styles.flexRight} />
        </div>
        <Footer page={page} maxPage={maxPage} changePage={handleChangePage} />
      </body>
    </React.Fragment>
  );
}
