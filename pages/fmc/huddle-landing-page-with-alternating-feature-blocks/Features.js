import React from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

const data = [
  {
    id: 0,
    titulo: "Grow Together",
    texto:
      "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
    url: "illustration-grow-together.svg",
  },
  {
    id: 1,
    titulo: "Flowing Conversations",
    texto: `You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.`,
    url: "illustration-flowing-conversation.svg",
  },
  {
    id: 2,
    titulo: "Your Users",
    texto: `It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.`,
    url: "illustration-your-users.svg",
  },
];

const FeatCard = (props) => {
  return (
    <div className={clsx(styles.feat, props.id % 2 === 0 && styles.rev)}>
      <img
        className={styles.featImg}
        src={
          "/fmc/huddle-landing-page-with-alternating-feature-blocks/" +
          props.url
        }
      />
      <div className={styles.featInfo}>
        <h4 className={styles.featInfoTitulo}>{props.titulo}</h4>
        <p className={styles.featInfoTexto}>{props.texto}</p>
      </div>
    </div>
  );
};

const Features = (props) => {
  return (
    <div className={styles.features}>
      {data.map((item, index) => (
        <FeatCard
          id={item.id}
          titulo={item.titulo}
          texto={item.texto}
          url={item.url}
          key={index}
        />
      ))}
    </div>
  );
};

export default Features;
