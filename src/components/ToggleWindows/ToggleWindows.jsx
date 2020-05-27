import React from "react";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import AddIcon from "@material-ui/icons/Add";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { useHistory } from "react-router-dom";

export default function ToggleWindows() {
  const [alignment, setAlignment] = React.useState("swap");
  const history = useHistory();
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    switch (newAlignment) {
      case "swap":
        history.push("/");
        break;
      case "add":
        history.push("/add");
        break;
      default:
        history.push("/");
        break;
    }
  };

  return (
    <div style={{ height: "10vh" }}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="swap" aria-label="centered">
          <SwapHorizIcon />
        </ToggleButton>
        <ToggleButton value="add" aria-label="left aligned">
          <AddIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
