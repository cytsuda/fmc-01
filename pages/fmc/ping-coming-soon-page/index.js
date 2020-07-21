import React, { useState } from "react";
import clsx from "clsx";
import Head from "next/head";
import { emailValidation } from "../../../helpers/helpers";
import { CSSTransition } from "react-transition-group";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import styles from "./styles.module.scss";
import animation from "./animation.module.scss";

const Main = (props) => {
  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState({
    touch: false,
    valid: false,
  });
  const handleChangeInput = (event) => {
    const { value } = event.target;
    if (!validation.touch) {
      setValidation((prev) => ({ ...prev, touch: true }));
    } else {
      setValidation((prev) => ({ ...prev, valid: emailValidation(value) }));
    }
    console.log("touch: " + validation);
    setEmail(value);
  };
  console.log("touch: " + validation);
  const handleClickButton = (event) => {
    alert("Email submited");
    setEmail("");
  };
  return (
    <React.Fragment>
      <Head>
        <title>Ping coming soon page</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <img
            className={styles.logo}
            src="/fmc/ping-coming-soon-page/logo.svg"
          />
          <h1 className={styles.titulo}>
            We are launching <b className={styles.tituloNegrito}>soon!</b>
          </h1>
          <p className={styles.subtitulo}>Subscribe and get notified</p>
          <div className={styles.email}>
            <input
              className={clsx(
                styles.emailInput,
                validation.touch && !validation.valid && styles.error
              )}
              placeholder="Your email address..."
              onChange={handleChangeInput}
              value={email}
            />
            <CSSTransition
              in={validation.touch && !validation.valid}
              timeout={200}
              classNames={animation}
              unmountOnExit
            >
              <div className={styles.emailError}>
                <p className={styles.emailErrorMsg}>
                  Please provide a valid email address
                </p>
              </div>
            </CSSTransition>
            <button disabled={!validation.touch || !validation.valid} className={styles.emailButton} onClick={handleClickButton}>
              Notify Me
            </button>
          </div>
          <img
            className={styles.imagem}
            src="/fmc/ping-coming-soon-page/illustration-dashboard.png"
          />
          <div className={styles.social}>
            <div className={styles.socialIcons}>
              <FaFacebookF />
            </div>
            <div className={styles.socialIcons}>
              <FaTwitter />
            </div>
            <div className={styles.socialIcons}>
              <FaInstagram />
            </div>
          </div>
          <p className={styles.copy}>© Copyright Ping. All rights reserved.</p>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Main;
