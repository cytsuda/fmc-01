import React from "react";
import Button from "../Button/Button";

import styles from "./PriceComponent.module.scss";
const PriceComponent = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.mainTitulo}>Join our community</h1>
        <h2 className={styles.mainSubtitulo}>
          30-day, hassle-free money back guarantee
        </h2>
        <p className={styles.mainTexto}>
          <span className={styles.mainTextoSpan}>
            Gain access to our full library of tutorials along with expert code
            reviews. &nbsp;
          </span>
          <span className={styles.mainTextoSpan}>
            Perfect for any developers who are serious about honing their
            skills.
          </span>
        </p>
      </div>
      <div className={styles.price}>
        <h3 className={styles.subtitle}>Monthly Subscription</h3>
        <div className={styles.priceInfo}>
          <span className={styles.priceInfoValue}>$29</span>{" "}
          <span className={styles.priceInfoText}>per month</span>
        </div>

        <p className={styles.priceText}>Full access for less than $1 a day </p>
        <Button className={styles.priceButton} onClick={()=>props.modalOpen(1)}>Sign up</Button>
      </div>
      <div className={styles.features}>
        <h3 className={styles.subtitle}>Why Us</h3>
        <ul className={styles.featuresList}>
          <li className={styles.featuresItem} onClick={()=>props.modalOpen(0)}>Tutorials by industry experts</li>
          <li className={styles.featuresItem} onClick={()=>props.modalOpen(0)}>Peer & expert code review</li>
          <li className={styles.featuresItem} onClick={()=>props.modalOpen(0)}>Coding exercises</li>
          <li className={styles.featuresItem} onClick={()=>props.modalOpen(0)}>Access to our GitHub repos</li>
          <li className={styles.featuresItem} onClick={()=>props.modalOpen(0)}>Community forum</li>
          <li className={styles.featuresItem} onClick={()=>props.modalOpen(0)}>Flashcard decks</li>
          <li className={styles.featuresItem} onClick={()=>props.modalOpen(0)}>New videos every week</li>
        </ul>
      </div>
    </div>
  );
};

export default PriceComponent;
