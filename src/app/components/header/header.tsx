import React from "react";
import Link from "next/link";
import styles from "../../styles/header.module.css";

interface Header {
  name: string;
}

const Header: React.FC<Header> = ({ name }) => {
  return (
    <header className={styles.header}>
      <h1>{name}</h1>
      <div className={styles.links}>
        <Link className={styles.link} href="./weather/">
          WEATHER
        </Link>
        <Link className={styles.link} href="./news/">
          NYTIMES
        </Link>
        <Link className={styles.link} href="./coins/">
          COINGECKO
        </Link>
      </div>
    </header>
  );
};

export default Header;
