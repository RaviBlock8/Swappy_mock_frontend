import React from "react";
import { Grid } from "@material-ui/core";
import SwapWindow from "../../components/SwapWindow/SwapWindow";
function SwapPage() {
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={7} style={{ marginTop: "20vh" }}>
        <SwapWindow />
      </Grid>
    </Grid>
  );
}

export default SwapPage;
