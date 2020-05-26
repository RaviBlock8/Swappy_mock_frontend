import React from "react";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import AddIcon from "@material-ui/icons/Add";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export default function ToggleWindows() {
  const [alignment, setAlignment] = React.useState("add");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="swap" aria-label="centered">
        <AddIcon />
      </ToggleButton>
      <ToggleButton value="add" aria-label="left aligned">
        <SwapHorizIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
