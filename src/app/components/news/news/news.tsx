"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./news.module.css";
import Pagination from "../../pagination/pagination";

const API_KEY = "ypNzPlbsiKYnuYA5ANKk0FOGKXFTgHWP";

function News() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${API_KEY}`
        );
        setData(response.data.results);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / perPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <section className={styles.card_element}>
      <h2>Artigos mais populares</h2>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <div className={styles.card_container}>
        {paginatedData.map((item) => (
          <div key={item.url} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.abstract}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Leia mais
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;
