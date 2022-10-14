import Head from "next/head";
import Link from "next/link";
import React from "react";
import Cards from "./Cards";
import pink from "../../public/images/1.jpg";
import fantasy from "../../public/images/2.jpg";
import garden from "../../public/images/download.jpg";
import img from "../../public/images/1.jpg";
import Image from "next/image";
const FirstPost = () => {
  return (
    <div>
      <Head>
        <title>post Page here </title>
        <meta property="og:title" content="My Post title" key="title" />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

      <Cards priority src={pink} />
      <Cards src={fantasy} />
      <Cards src={garden} />
      <Cards src={garden} />
      <Cards src={garden} />
    </div>
  );
};

export default FirstPost;
