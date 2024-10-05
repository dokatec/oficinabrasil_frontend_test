import React, { useState, useEffect } from "react";
import axios from "axios";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ypNzPlbsiKYnuYA5ANKk0FOGKXFTgHWP"
      );
      setArticles(response.data.results);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Notícias do New York Times</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.url}>
            <h2>{article.title}</h2>
            <p>{article.abstract}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
