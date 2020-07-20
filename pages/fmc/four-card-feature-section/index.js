import Head from "next/head";
import styles from "./styles.module.scss";

import InfoCard from "../../../components/InfoCard/InfoCard";

const data = [
  {
    id: 0,
    titulo: "Supervisor",
    texto: "Monitors activity to identify project roadblocks",
    icon: "icon-supervisor.svg",
  },
  {
    id: 1,
    titulo: "Team Builder",
    texto:
      "Scans our talent network to create the optimal team for your project",
    icon: "icon-team-builder.svg",
  },
  {
    id: 2,
    titulo: "Karma",
    texto: "Regularly evaluates our talent to ensure quality",
    icon: "icon-karma.svg",
  },
  {
    id: 3,
    titulo: "Calculator",
    texto: "Uses data from past projects to provide better delivery estimates",
    icon: "icon-calculator.svg",
  },
];
const arrayStyles = [styles.p1, styles.p2, styles.p3, styles.p4];
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Four Card Feature Section</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1 className={styles.titleMain}>Reliable, efficient delivery</h1>
            <h2 className={styles.titleSub}>Powered by Technology</h2>
            <p className={styles.titleText}>
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure that your project is successful
            </p>
          </div>
          <div className={styles.grid}>
            {data.map((item, index) => (
              <InfoCard
                key={index}
                style={arrayStyles[index]}
                data={item}
                color={{ title: styles.titulo, text: styles.texto }}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
