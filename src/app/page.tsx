"use client";
import React from "react";
import Noticias from "./components/noticias/noticias";
import Navbar from "./components/navbar/navbar";
import Artigos from "./components/noticias/artigos";
import Coins from "./components/coin/coin";

export default function App() {
  return (
    <>
      <header>
        <h1>DASHBOARD</h1>
      </header>

      <main>
        <Navbar />
        <Coins />
      </main>
    </>
  );
}
