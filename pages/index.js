import Head from "next/head";
import Image from "next/image";

import styles from "./Home.module.css";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>The Bedtime Project</title>
        <meta name="description" content="A website by Daniel Stigmon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>The Bedtime Project</h1>
        <div>Your pathway from Virtual to Reality</div>
        <div>
          Welcome to Bridge, a place where your imagination is the limit and you
          are the main character of your story. Step into one of our unique
          worlds and become a part of your next fairy tale.{" "}
        </div>
      </main>
    </Layout>
  );
}
