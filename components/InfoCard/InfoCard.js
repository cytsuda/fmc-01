import React from "react";
import clsx from "clsx";

import styles from "./InfoCard.module.scss";

const InfoCard = (props) => {
  const data = props.data;
  return (
    <div className={clsx(styles.card, props.style)}>
      <h3 className={clsx(styles.cardTitulo, props.color.title)}>{data.titulo}</h3>
      <p className={clsx(styles.cardText, props.color.text)}>{data.texto}</p>
      <img className={styles.cardIcon} src={`/fmc/four-card-feature-section/${data.icon}`} />
    </div>
  )
}

export default InfoCard;