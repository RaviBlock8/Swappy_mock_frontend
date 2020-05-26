import React from "react";
import "./App.css";
import SwapPage from "./pages/SwapPage/SwapPage";
import AddLiquidityPage from "./pages/AddLiquidityPage/AddLiquidityPage";
import ToggleWindows from "./components/ToggleWindows/ToggleWindows";

function App() {
  return (
    <React.Fragment>
      <SwapPage />
      <AddLiquidityPage />
      <ToggleWindows />
    </React.Fragment>
  );
}
export default App;
