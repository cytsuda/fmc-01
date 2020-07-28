import React from "react";

import { FaArrowAltCircleRight, FaQuoteLeft } from "react-icons/fa";
import styles from "../style.module.scss"

const imgHref = "/fmc/fylo-landing-page-with-two-column-layout/";
const Testimonial = (props) => {
  return (
    <div className={styles.testimonials}>
      <img
        className={styles.tImage}
        src={imgHref + "bg-curve-mobile.svg"}
        srcSet={`
        ${imgHref + "bg-curve-mobile.svg"} 300w, 
        ${imgHref + "bg-curve-desktop.svg"} 768w
      `}
      />
      <div className={styles.tC}>
        <div className={styles.tCText}>
          <h2 className={styles.tCTextTitle}>
            Stay productive, wherever you are
          </h2>
          <p className={styles.tCTextPhrase}>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className={styles.tCTextPhrase}>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>
          <a className={styles.tCTextLink} onClick={props.click}>
            <span className={styles.tCTextLinkControl}>
              See how Fylo works{" "}
              <FaArrowAltCircleRight className={styles.tCTextIcon} />
            </span>
          </a>
          <div className={styles.card}>
            <FaQuoteLeft className={styles.cardIcon} />
            <p className={styles.cardText}>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className={styles.cardAvatar}>
              <img
                className={styles.cardAvatarImg}
                src={imgHref + "avatar-testimonial.jpg"}
              />
              <div className={styles.cardAvatarInfo}>
                <p className={styles.cardAvatarName}>Kyle Burton</p>
                <p className={styles.cardAvatarRole}>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tCIllustration}>
          <img src={imgHref + "illustration-2.svg"} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;