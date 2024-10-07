"use client";
import React from "react";
import Header from "../../components/Header/Header";
import Weather from "../../components/Weather/Weather";

const WeatherPage = () => {
  return (
    <>
      <Header name="DASHBOARD" />
      <Weather />
    </>
  );
};

export default WeatherPage;
