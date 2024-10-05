import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./noticias.module.css";

const Noticias = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=ypNzPlbsiKYnuYA5ANKk0FOGKXFTgHWP"
        );
        setData(response.data.results);
        console.log(response.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <section className={styles.card_element}>
      <div className={styles.card}>
        {data.map((item) => (
          <h6>{item.title}</h6>
        ))}
      </div>
    </section>
  );
};

export default Noticias;
