import { useState } from "react";
import Head from "next/head";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import styles from "./style.module.scss";
import clsx from "clsx";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import slideUp from "./slideUp.module.scss";
import slideLeft from "./slideLeft.module.scss";
import slideRight from "./slideRight.module.scss";

const testimonials = [
  {
    id: 0,
    autor: "John Tarkpor",
    titulo: "Junior Front-end Developer",
    texto: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    foto: "image-john.jpg",
  },
  {
    id: 1,
    autor: "Tanya Sinclair",
    titulo: "UX Engineer",
    texto:
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.”",
    foto: "image-tanya.jpg",
  },
];

export default function Main(props) {
  const [slideId, setSlideId] = useState(0);
  const [direction, setDirection] = useState(0);
  const nextSlide = (dir) => {
    if (dir === "left" && slideId !== 0) {
      setSlideId((prev) => prev - 1);
    }
    if (dir === "right" && slideId !== testimonials.length - 1) {
      setSlideId((prev) => prev + 1);
    }
  };
  return (
    <React.Fragment>
      <Head>
        <title>Coding Bootcamp Testimonials Slider</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.containerText}>
            <SwitchTransition mode="out-in">
              <CSSTransition key={slideId} timeout={400} classNames={slideLeft}>
                <p className={styles.text}>{testimonials[slideId].texto}</p>
              </CSSTransition>
            </SwitchTransition>

            <SwitchTransition mode="out-in">
              <CSSTransition key={slideId} timeout={400} classNames={slideRight}>
                <div className={styles.author}>
                  <p className={styles.authorName}>
                    {testimonials[slideId].autor}
                  </p>
                  <p className={styles.authorTitle}>
                    {testimonials[slideId].titulo}
                  </p>
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div className={styles.containerImage}>
            <div className={styles.control}>
              <button
                onClick={() => nextSlide("left")}
                className={styles.controlIcon}
                disabled={slideId === 0}
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={() => nextSlide("right")}
                className={styles.controlIcon}
                disabled={slideId === testimonials.length - 1}
              >
                <IoIosArrowForward />
              </button>
            </div>
            <SwitchTransition mode="out-in">
              <CSSTransition key={slideId} timeout={400} classNames={slideUp}>
                <img
                  className={styles.image}
                  src={
                    "/fmc/coding-bootcamp-testimonials-slider/" +
                    testimonials[slideId].foto
                  }
                />
              </CSSTransition>
            </SwitchTransition>
            <div className={styles.imageBackground} />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
