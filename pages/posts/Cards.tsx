import React from "react";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import styles from "../../styles/Home.module.css";

const Cards = (props) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.imagecomonentcard}
        width={300}
        height={200}
        alt="my imaage"
        {...props}
        // help to spread oprate to use all props values
      />
      <h2>Card here </h2>
      <p> lorem ipsum here now to get here </p>
    </div>
  );
};

export default Cards;
