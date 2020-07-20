import { useState } from "react";
import { MdKeyboardArrowRight, MdPriorityHigh } from "react-icons/md";
import { CSSTransition } from "react-transition-group";
import clsx from "clsx";
import slideUp from "./slideUp.module.scss";
import Head from "next/head";
import { emailValidation } from "../../../helpers/helpers";

import styles from "./style.module.scss";

export default function Main(props) {
  const [validation, setValidation] = useState({
    touch: false,
    valid: false,
    validated: false,
  });
  const [email, setEmail] = useState("");

  const verifySubmit = (checkingEmail) => {
    console.log('SUBMIT');
    console.log('checkingEmail: '+checkingEmail);
    if (emailValidation(checkingEmail)) {
      alert("Submit");
      setEmail("");
      setValidation({
        touch: false,
        valid: false
      });
    } else {
      setValidation((prev) => ({ ...prev, touch: true}));
    }
  };
  const inputEmailChange = event => {
    if (validation.touch) {
      if (emailValidation(event.target.value)) {
        setValidation(prev => ({ ...prev, valid: true }));
      } else {
        setValidation(prev => ({ ...prev, valid: false }));
      }
    }
    setEmail(event.target.value);
  }
  return (
    <React.Fragment>
      <Head>
        <title>Base Apparel Coming Soon Page</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="/fmc/base-apparel-coming-soon-page/logo.svg" />
          </div>
          
          <div className={styles.image} />
          <div className={styles.text}>
            <h1 className={styles.textTitle}>
              <span className={styles.textTitleFirst}>We're</span>
              <span className={styles.textTitleSecond}>coming soon</span>
            </h1>
            <p className={styles.textText}>
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with
              announcementsand our launch deals.
            </p>
          </div>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="Email address"
              className={clsx(styles.inputBox, validation.touch && !validation.valid && styles.error)}
              onChange={inputEmailChange}
              value={email}
            />
            <CSSTransition
              in={validation.touch && !validation.valid}
              timeout={200}
              classNames={slideUp}
            >
              <div className={styles.inputIcon}>
                <MdPriorityHigh />
              </div>
            </CSSTransition>
            <button
              disabled={validation.touch && !validation.valid}
              className={styles.inputButton}
              onClick={()=>verifySubmit(email)}
            >
              <MdKeyboardArrowRight />
            </button>
            <CSSTransition
              in={validation.touch && !validation.valid }
              timeout={200}
              classNames={slideUp}
            >
              <p className={styles.inputError}>Please provide a valid email</p>
            </CSSTransition>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
