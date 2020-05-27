import React from "react";
import "./App.css";
import SwapPage from "./pages/SwapPage/SwapPage";
import AddLiquidityPage from "./pages/AddLiquidityPage/AddLiquidityPage";
import ToggleWindows from "./components/ToggleWindows/ToggleWindows";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <ToggleWindows />
        <Switch>
          <Route exact path="/">
            <SwapPage />
          </Route>
          <Route exact path="/add">
            <AddLiquidityPage />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}
export default App;
