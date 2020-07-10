// 02 - Article preview component
import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import clsx from "clsx";
import { CSSTransition } from "react-transition-group";

import styles from "./style/fmc-02.module.scss";
import {
  IoMdShareAlt,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoPinterest,
} from "react-icons/io";

const handleShareOptions = (ref, control, functionControl) => {
  const [refBar, refBtn] = ref;
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        control &&
        refBar.current &&
        !refBar.current.contains(event.target) &&
        refBtn.current &&
        !refBtn.current.contains(event.target)
      ) {
        console.log("trigger");
        functionControl();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, control]);
};

const FrontendMentorDesafio02 = (props) => {
  const [shareActive, setShareActive] = useState(false);
  const refControlBar = useRef(null);
  const refControlBtn = useRef(null);
  const toggleShare = () => {
    setShareActive((prev) => !prev);
  };
  handleShareOptions([refControlBar, refControlBtn], shareActive, toggleShare);
  return (
    <div>
      <Head>
        <title>Frontend Mentor | Article preview component</title>
        <link rel="icon" href="./assets/favicon-32x32.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.cardImag}>
            <img src="./assets/fmc-02/drawers.jpg" />
          </div>
          <div className={styles.cardInfo}>
            <h2 className={styles.cardInfoTtl}>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h2>
            <p className={styles.cardInfoPhrase}>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
            <div className={styles.cardAvatar}>
              <div className={styles.cardAvatarImag}>
                <img src="./assets/fmc-02/avatar-michelle.jpg" />
              </div>
              <div className={styles.cardAvatarInfo}>
                <p className={styles.cardAvatarName}>Michelle Appleton</p>
                <p className={styles.cardAvatarDate}>28 Jun 2020</p>
              </div>
              <div
                className={clsx(
                  styles.cardAvatarShare,
                  shareActive && styles.active
                )}
              >
                <button
                  ref={refControlBtn}
                  className={styles.cardAvatarShareBtn}
                  onClick={toggleShare}
                >
                  <IoMdShareAlt className={styles.cardAvatarShareBtnIcon} />
                </button>
                <CSSTransition
                  in={shareActive}
                  timeout={200}
                  classNames={{
                    enterActive: styles.enterActive,
                    enterDone: styles.enterDone,
                    exitActive: styles.exitActive,
                    exitDone: styles.exitDone,
                  }}
                >
                  <div
                    ref={refControlBar}
                    className={styles.cardAvatarShareInfo}
                  >
                    <a className={styles.cardAvatarShareInfoTxt}>SHARE</a>
                    <a>
                      <IoLogoFacebook />
                    </a>
                    <a>
                      <IoLogoTwitter />
                    </a>
                    <a>
                      <IoLogoPinterest />
                    </a>
                  </div>
                </CSSTransition>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style global jsx>{`
        *,
        *:after,
        *:before {
          margin: 0;
          border: 0;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default FrontendMentorDesafio02;
