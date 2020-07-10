import { useState } from "react";
import Head from "next/head";
import styles from "./style/fmc-03.module.scss";
import clsx from "clsx";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { CSSTransition, SwitchTransition } from "react-transition-group";

const data = [
  {
    id: 0,
    name: "Tanya Sinclair",
    titulo: "UX Engeneer",
    testemunho: `“ I’ve been interested in coding for a while but never taken the
    jump, until now. I couldn’t recommend this course enough. I’m now
    in the job of my dreams and so excited about the future.”`,
    fotoUrl: "image-tanya.jpg",
  },
  {
    id: 1,
    name: "John Tarkpor",
    titulo: "Junior Front-end Developer",
    testemunho: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    fotoUrl: "image-john.jpg",
  },
];

const FrontendMentorDesafio03 = (props) => {
  const [id, setId] = useState(0);
  const [info, setInfo] = useState(data[id]);
  const handleChangeInfo = (val) => {
    const currentId = id;
    if (val && currentId !== data.length - 1) {
      setId(currentId + 1);
      setInfo(data[currentId + 1]);
    }
    if (!val && currentId !== 0) {
      setId(currentId - 1);
      setInfo(data[currentId - 1]);
    }
  };
  console.log(info.id);
  return (
    <div>
      <Head>
        <title>Frontend Mentor | Article preview component</title>
        <link rel="icon" href="./assets/favicon-32x32.png" />
      </Head>
      <main>
        <div className={styles.main}>
          <div className={styles.card}>
            <div className={styles.cardLeft}>
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={info.id}
                  timeout={600}
                  classNames={{
                    enter: styles.slideTopEnter,
                    enterActive: styles.slideTopEnterActive,
                    exit: styles.slideTopExit,
                    exitActive: styles.slideTopExitActive,
                  }}
                >
                  <h2 className={styles.testemunho}>{info.testemunho}</h2>
                </CSSTransition>
              </SwitchTransition>
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={info.id}
                  timeout={800}
                  classNames={{
                    enter: styles.slideRightEnter,
                    enterActive: styles.slideRightEnterActive,
                    exit: styles.slideRightExit,
                    exitActive: styles.slideRightExitActive,
                  }}
                >
                  <div className={styles.legenda}>
                    <p className={styles.legendaNome}>{info.name}</p>
                    <p className={styles.legendaTitulo}>{info.titulo}</p>
                  </div>
                </CSSTransition>
              </SwitchTransition>
            </div>
            <div className={styles.cardRight}>
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={info.id}
                  timeout={800}
                  classNames={{
                    enter: styles.slideLeftEnter,
                    enterActive: styles.slideLeftEnterActive,
                    exit: styles.slideLeftExit,
                    exitActive: styles.slideLeftExitActive,
                  }}
                >
                  <img
                    className={styles.cardRightImagem}
                    src={`./assets/fmc-03/${info.fotoUrl}`}
                  />
                </CSSTransition>
              </SwitchTransition>
              <div className={styles.cardRightBg}></div>
              <div className={styles.cardRightControl}>
                <div
                  onClick={() => handleChangeInfo(0)}
                  className={clsx(
                    styles.cardRightControlPrev,
                    id === 0 && styles.disabled
                  )}
                >
                  <RiArrowLeftSLine />
                </div>
                <div
                  onClick={() => handleChangeInfo(1)}
                  className={clsx(
                    styles.cardRightControlNext,
                    id === data.length - 1 && styles.disabled
                  )}
                >
                  <RiArrowRightSLine />
                </div>
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
        body {
          width: 100%;
          height: 100vh;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #9999c7;
        }
      `}</style>
    </div>
  );
};

export default FrontendMentorDesafio03;
