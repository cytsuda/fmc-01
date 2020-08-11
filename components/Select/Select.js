import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { RiArrowDownSLine, RiSubtractLine } from "react-icons/ri";
import { CSSTransition } from "react-transition-group";

import styles from "./Select.module.scss";
import animation from "./Animation.module.scss";

const Select = (props) => {
  const [open, setOpen] = useState(false);
  const disabled = true;
  const containerRef = React.useRef();
  const { list, classes } = props;
  const toggleSelect = () => {
    if (!disabled) {
      setOpen((prev) => !prev);
    }
  };

  const handleUserClick = (event) => {
    const notIcon = event.target.tagName !== "svg" && event.target.tagName !== "g" && event.target.tagName !== "path"; 
    const value = event.target.dataset.value;
    if (open && containerRef.current && !containerRef.current.contains(event.target) && notIcon) {
      setOpen(false);
    }
    if (open && value) {
      props.setValue(props.name,value);
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleUserClick);

    return () => {
      window.removeEventListener("click", handleUserClick);
    };
  }, [handleUserClick]);

  return (
    <div className={clsx(styles.select, classes.container)} ref={containerRef}>
      <p className={clsx(styles.selectLabel, classes.label)}>{props.name}</p>
      <div
        className={clsx(styles.selectInput, classes.input, open && styles.open, styles.disabled)}
        onClick={toggleSelect}
      >
        {props.value} {open ? <RiSubtractLine />:<RiArrowDownSLine />}
      </div>
      <CSSTransition
        in={open}
        timeout={100}
        classNames={animation}
        unmountOnExit
      >
        <ul className={clsx(styles.selectList, classes.list)}>
          {list.map((item, index) => (item.value!==props.value &&
            <li key={index} className={clsx(styles.selectItem, classes.item)} data-value={item.value} name={props.name}>
              {item.nome}
            </li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  );
};

export default Select;
