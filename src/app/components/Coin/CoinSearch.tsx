import React, { useState } from "react";
import styles from "../../styles/coin.module.css";

interface CoinSearchProps {
  onSearch: (coin: string) => void;
}

const CoinSearch: React.FC<CoinSearchProps> = ({ onSearch }) => {
  const [coin, setCoin] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCoin(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(coin);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(coin);
    }
  };

  return (
    <div className={styles.container_form}>
      <input
        className={styles.input_form}
        type="text"
        value={coin}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Digite o nome da criptomoeda"
      />
      <button className={styles.btn_form} onClick={handleSearchClick}>
        Pesquisar
      </button>
    </div>
  );
};

export default CoinSearch;
