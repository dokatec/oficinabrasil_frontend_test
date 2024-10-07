"use client";
import React, { useEffect, useState } from "react";
import ChartComponent from "./ChartComponent";
import CoinSearch from "./CoinSearch";
import styles from "../../styles/coin.module.css";
import axios from "axios";

const Coins: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [coin, setCoin] = useState("bitcoin");
  const API_KEY = "CG-E57MSGzfYVKqsQe7y4otBPWv";

  const fetchData = async (coin: string) => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=7&key=${API_KEY}`
    );
    const array = Object.entries(response.data).map(([key, value]) => ({
      name: key,
      ...value,
    }));
    setData(array);
    console.log(array);
  };

  useEffect(() => {
    fetchData(coin);
  }, [coin]);

  const chartData = {
    labels: data.map((item) => item.name),
    price: data.map((item) => item.usd),
    marketCap: data.map((item) => item.usd_market_cap),
    volume: data.map((item) => item.usd_24h_vol),
    change24h: data.map((item) => item.usd_24h_change),
    lastUpdated: data.map((item) => item.last_updated_at),
  };

  const handleSearch = (newCoin: string) => {
    setCoin(newCoin);
  };

  return (
    <section className={styles.card_element}>
      <CoinSearch onSearch={handleSearch} />
      <div className={styles.card}>
        {data.length > 0 && (
          <ChartComponent
            labels={chartData.labels}
            data={{
              price: chartData.price,
              marketCap: chartData.marketCap,
              volume: chartData.volume,
              change24h: chartData.change24h,
              lastUpdated: chartData.lastUpdated,
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Coins;
