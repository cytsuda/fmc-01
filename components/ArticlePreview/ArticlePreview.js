import React, { useState } from "react";
import clsx from "clsx";
import { CSSTransition } from "react-transition-group";

import {
  IoIosShareAlt,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoPinterest,
} from "react-icons/io";

import styles from "./ArticlePreview.module.scss";
import animation from "./Animation.module.scss";

const ArticlePreview = (props) => {
  const data = props.data;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardThumbnail}>
        <img
          className={styles.cardThumbnailImage}
          src={"/fmc/article-preview/" + data.thumbnail}
          alt={data.thumbnail}
        />
      </div>
      <div className={styles.preview}>
        <h3 className={styles.previewTitle}>{data.title}</h3>
        <p className={styles.previewText}>{data.text}</p>
        <div className={styles.info}>
          <img
            className={styles.infoAvatar}
            src={"/fmc/article-preview/" + data.authorPhoto}
            alt={data.author}
          />
          <div className={styles.infoAuthor}>
            <h4 className={styles.infoAuthorName}>{data.author}</h4>
            <p className={styles.infoAuthorDate}>{data.date}</p>
          </div>
          <div className={styles.share}>
            <button
              className={clsx(styles.infoButton, open && styles.btnActive)}
              onClick={handleOpen}
            >
              <IoIosShareAlt />
            </button>
            <CSSTransition in={open} timeout={200} classNames={animation}>
              <div className={styles.shareContainer}>
                <a className={styles.shareItem}>SHARE</a>
                <a className={clsx(styles.shareItem, styles.icon)}>
                  <IoLogoFacebook />
                </a>
                <a className={clsx(styles.shareItem, styles.icon)}>
                  <IoLogoTwitter />
                </a>
                <a className={clsx(styles.shareItem, styles.icon)}>
                  <IoLogoPinterest />
                </a>
                <button
                  className={clsx(styles.infoButton, styles.shareButton, open && styles.btnActive)}
                  onClick={handleOpen}
                >
                  <IoIosShareAlt />
                </button>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
