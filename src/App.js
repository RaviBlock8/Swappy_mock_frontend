import React from "react";
import "./App.css";
import SwapPage from "./pages/SwapPage/SwapPage";
import AddLiquidityPage from "./pages/AddLiquidityPage/AddLiquidityPage";

function App() {
  return (
    <React.Fragment>
      <SwapPage />
      <AddLiquidityPage />
    </React.Fragment>
  );
}

export default App;
