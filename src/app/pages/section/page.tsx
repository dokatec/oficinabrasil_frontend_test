"use client";
import React, { useState } from "react";
import SectionNews from "../../components/News/Section/SectionNews";
import styles from "./home.module.css";

const Home = () => {
  const [section, setSection] = useState("world");

  const handleSectionChange = (event) => {
    setSection(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h1>New York Times Top Stories</h1>
      <label>
        Selecione a Seção:
        <select value={section} onChange={handleSectionChange}>
          <option value="world">World</option>
          <option value="technology">Technology</option>
          <option value="science">Science</option>
          {/* Adicione outras seções conforme necessário */}
        </select>
      </label>
      <SectionNews section={section} />
    </div>
  );
};

export default Home;
