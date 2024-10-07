"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../../Pagination/pagination";
import SectionNews from "../Section/SectionNews";
import styles from "../../../styles/news.module.css";

const API_KEY = "ypNzPlbsiKYnuYA5ANKk0FOGKXFTgHWP";

const News: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [session, setSession] = useState("world");
  const perPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/topstories/v2/${session}.json?api-key=${API_KEY}`
        );
        setData(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [session]);

  const totalPages = Math.ceil(data.length / perPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSessionChange = (newSession: string) => {
    setSession(newSession);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <section className={styles.card_element}>
      <SectionNews onSelectSession={handleSessionChange} />
      <h2>Mais populares</h2>

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
};

export default News;
