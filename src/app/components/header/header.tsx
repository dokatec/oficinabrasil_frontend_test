import React from "react";
import styles from "./header.module.css";

interface Header {
  name: string;
}

const Header: React.FC<Header> = ({ name }) => {
  return (
    <header className={styles.header}>
      <h1>{name}</h1>
    </header>
  );
};

export default Header;
