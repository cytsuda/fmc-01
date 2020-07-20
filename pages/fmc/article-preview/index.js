import Head from "next/head";
import ArticlePreview from "../../../components/ArticlePreview/ArticlePreview";
import styles from "./style.module.scss";

export default function Main(props) {
  const articleData = {
    title:
      "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
    text:
      "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
    author: "Michelle Appleton",
    date: "28 Jun 2020",
    thumbnail: "drawers.jpg",
    authorPhoto: "avatar-michelle.jpg"
  };

  return (
    <React.Fragment>
      <Head>
        <title>Article preview component</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <div className={styles.container}>
        <ArticlePreview data={articleData}/>
      </div>
    </React.Fragment>
  );
}
