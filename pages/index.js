import Head from "next/head";
import Link from "next/link";

import styles from "./style.module.scss";

const idLink = [
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
  "insure-landing-page"
];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <h3 className={styles.titulo}>FrontEnd mentor lista de desafios</h3>
          <div className={styles.list}>
            {idLink.map((item, index) => (
              <Link key={index} href={"/fmc/" + item} as={"/fmc/" + item}>
                <a style={{ textTransform: "capitalize" }}>
                  {index + 1}. {item.replace(/-/g, " ")}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
