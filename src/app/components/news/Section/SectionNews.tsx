"use client";
import React from "react";
import styles from "../../../styles/sectionNews.module.css";

interface SessionFilterProps {
  onSelectSession: (session: string) => void;
}

const SectionNews: React.FC<SessionFilterProps> = ({ onSelectSession }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectSession(event.target.value);
  };

  return (
    <div className={styles.select_container}>
      <label htmlFor="session-select">Selecione a Sessão:</label>
      <select
        className={styles.select_form}
        id="session-select"
        onChange={handleChange}
      >
        <option value="world">World</option>
        <option value="technology">Technology</option>
        <option value="science">Science</option>
        <option value="health">Health</option>
        <option value="sports">Sports</option>
      </select>
    </div>
  );
};

export default SectionNews;
