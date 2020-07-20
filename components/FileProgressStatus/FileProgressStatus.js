import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import clsx from "clsx";
import styles from "./FileProgressStatus.module.scss";
import transition from "./Transition.module.scss";

const FileProgressStatus = (props) => {
  const progress = (props.progress / props.maxProgress) * 100;
  const [progressBarHover, setProgressBarHover] = useState(false);
  const [click, setClick] = useState(false);
  // Style
  const boldClass = props.boldClass ? props.boldClass : styles.textBold;
  const [txtDark, txtLight] = props.txtColor;
  const [bgContainer, bgSmall, bgBig] = props.bgColor;
  // Functions
  const handleHoverEnter = () => {
    setProgressBarHover(true);
  };
  const handleHoverLeave = () => {
    if (!click) {
      setProgressBarHover(false);
    }
  };
  const handleClick = () => {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
      setProgressBarHover(true);    
    }
  }
  return (
    <div className={clsx(styles.container, bgContainer)}>
      <p className={styles.text}>
        You’ve used <span className={boldClass}>815 GB</span> of your storage
      </p>
      <div
        className={clsx(styles.progress, bgBig)}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        onClick={handleClick}
      >
        <div
          className={clsx(styles.progressBar, bgSmall)}
          style={{ width: progress + "%" }}
        />
        <CSSTransition
          in={progressBarHover}
          timeout={100}
          classNames={transition}
        >
          <div className={clsx(styles.progressInfo, boldClass, txtDark)}>
            {props.maxProgress - props.progress}
            <span className={clsx(styles.progressInfoSpan, txtLight)}>
              GB Left
            </span>
          </div>
        </CSSTransition>
      </div>
      <div
        className={clsx(styles.info, boldClass)}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
      >
        <p>0 GB</p>
        <p>1000 GB</p>
      </div>
    </div>
  );
};

export default FileProgressStatus;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}