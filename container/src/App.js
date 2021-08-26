import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";
//change
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  );
};

export default App;
