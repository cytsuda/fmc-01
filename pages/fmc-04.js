import Head from "next/head";
import styles from "./style/fmc-04.module.scss";
import clsx from "clsx";

const data = [
  {
    id: 0,
    titulo: "Supervisor",
    texto: "Monitors activity to identify project roadblocks",
    icon: "icon-supervisor.svg",
    color: styles.cardCyan
  },{
    id: 1,
    titulo:"Team Builder",
    texto:"Scans our talent network to create the optimal team for your project",
    icon:"icon-team-builder.svg",
    color:styles.cardRed,
  },{
    id:2,
    titulo:"Karma",
    texto:"Regularly evaluates our talent to ensure quality",
    icon:"icon-karma.svg",
    color:styles.cardOrange,
  }, {
    id:"3",
    titulo:"Calculator",
    texto:"Uses data from past projects to provide better delivery estima",
    icon:"icon-calculator.svg",
    color:styles.cardBlue,
  }
]

const FrontendMentorChallenge04 = (props) => {
  
  return (
    <div className={styles.body}>
      <Head>
        <title>Frontend Mentor | Article preview component</title>
        <link rel="icon" href="./assets/favicon-32x32.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.heading}>
          <h1 className={styles.headingMain}>Reliable, efficient delivery</h1>
          <h2 className={styles.headingSub}>Powered by Technology</h2>
          <p className={styles.headingLeg}>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful.
          </p>
        </div>
        <div className={styles.container}>
          {data.map((item, index) => (
            <div key={item.id} className={clsx(styles.card, item.color)}>
              <h3 className={styles.cardTitulo}>{item.titulo}</h3>
              <p className={styles.cardTexto}> {item.texto}</p>
              <img  className={styles.cardImagem} src={`./assets/fmc-04/${item.icon}`} />
            </div>
          ))}
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

export default FrontendMentorChallenge04;
