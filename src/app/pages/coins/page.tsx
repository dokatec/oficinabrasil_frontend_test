import React from "react";
import Header from "../../components/Header/Header";
import Coins from "../../components/Coin/Coins";

const App: React.FC = () => (
  <div>
    <Header name="DASHBOARD" />
    <Coins />
  </div>
);

export default App;
