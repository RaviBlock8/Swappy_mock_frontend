import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import SwapWindow from "../../components/SwapWindow/SwapWindow";
function SwapPage() {
  const [tokenInType, setTokenInType] = useState("eth");
  const [tokenOutType, setTokenOutType] = useState("dai");
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={7} style={{ marginTop: "20vh" }}>
        <SwapWindow
          tokenInType={tokenInType}
          setTokenInType={setTokenInType}
          tokenOutType={tokenOutType}
          setTokenOutType={setTokenOutType}
        />
      </Grid>
    </Grid>
  );
}

export default SwapPage;
