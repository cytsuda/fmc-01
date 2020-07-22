import React, { useState, useEffect } from "react";
import Head from "next/head";
import Form from "../../../components/Form/Form";
import Button from "../../../components/Button/Button";
import Modal from "./Modal/Modal";
import Backdrop from "../../../components/Backdrop/Backdrop";

import { emailValidation } from "../../../helpers/helpers";

const initialData = [
  {
    name: "fName",
    type: "text",
    texto: "First Name",
    value: "",
    touch: false,
    valid: false,
  },
  {
    name: "lName",
    type: "text",
    texto: "Last Name",
    value: "",
    touch: false,
    valid: false,
  },
  {
    name: "email",
    type: "email",
    texto: "Email",
    value: "",
    touch: false,
    valid: false,
  },
  {
    name: "password",
    type: "password",
    texto: "Password",
    value: "",
    touch: false,
    valid: false,
  },
];
import styles from "./styles.module.scss";
const Main = (props) => {
  const [data, setData] = useState(initialData);
  const [submit, setSubmit] = useState(false);
  const [modal, setModal] = useState({ open: false, type: 0 });
  useEffect(() => {
    const submit = data.find((item) => !item.valid);
    if (!submit) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  }, [data]);
  const changeDataHandle = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      const index = prev.findIndex((item) => item.name === name);
      let newArray = [...prev];
      if (!newArray[index].touch) {
        newArray[index] = {
          ...newArray[index],
          touch: true,
          value: value,
        };
      } else if (newArray[index].type === "email") {
        newArray[index] = {
          ...newArray[index],
          valid: emailValidation(value),
          value: value,
        };
      } else if (newArray[index].type === "password") {
        newArray[index] = {
          ...newArray[index],
          valid: value.length >= 8,
          value: value,
        };
      } else {
        newArray[index] = {
          ...newArray[index],
          value: value,
          valid: value.length > 0,
        };
      }
      return newArray;
    });
  };
  const handleClick = (val) => {
    setModal({ open: true, type: val });
    if (val) {
      setData(initialData);
    }
  };
  const modalClose = (val) => {
    setModal({ open: false, type: val });
  };
  return (
    <React.Fragment>
      <Head>
        <title>Fylo data storage component</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Backdrop show={modal.open}>
        <Modal show={modal.open} tipo={modal.type} close={modalClose} />
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.first}>
              <h1 className={styles.titulo}>
                Learn to code by watching others
              </h1>
              <p className={styles.texto}>
                See how experienced developers solve problems in eal-time.
                Watching scripted tutorials is great, but understanding how
                developers think is invaluable.
              </p>
            </div>
            <div className={styles.second}>
              <Button
                className={styles.button}
                onClick={() => handleClick(0)}
                type="blue"
              >
                <b>Try it free 7 days</b> then $20/mo. thereafter
              </Button>
              <Form data={data} changeData={changeDataHandle}>
                <Button
                  type="green"
                  onClick={() => handleClick(1)}
                  disabled={submit}
                >
                  CLAIM YOUR FREE TRIAL
                </Button>
                <p className={styles.agree}>
                  By clicking the button, you are agreeing to our{" "}
                  <a className={styles.agreeLink} href="/">
                    Terms and Services
                  </a>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </Backdrop>
    </React.Fragment>
  );
};

export default Main;
