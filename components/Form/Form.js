import React from "react";
import styles from "./Form.module.scss";
import { CSSTransition } from "react-transition-group";
import Input from "./Input/Input";
const Form = (props) => {
  const data = props.data;
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <Input key={index} item={item} changeData={props.changeData} />
      ))}
      {props.children}
    </div>
  );
};

export default Form;
