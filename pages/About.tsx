import Head from "next/head";
import Script from "next/script";
import React from "react";

const About = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div>This is my about component</div>
    </>
  );
};

export default About;
