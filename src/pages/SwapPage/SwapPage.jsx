import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import SwapWindow from "../../components/SwapWindow/SwapWindow";
function SwapPage() {
  const [tokenInType, setTokenInType] = useState("eth");
  const [tokenOutType, setTokenOutType] = useState("dai");
  const [errorMsg, setErrorMsg] = useState("");
  const regex = /^[0-9\b]+$/;
  const changeTokenType = (tokenName, tokenType) => {
    switch (tokenType) {
      case "tokenIn":
        setTokenInType(tokenName);
        tokenName == tokenOutType
          ? setErrorMsg("Token In and Token Out cannot be of same type")
          : setErrorMsg("");
        break;
      case "tokenOut":
        setTokenOutType(tokenName);
        tokenName == tokenInType
          ? setErrorMsg("Token In and Token Out cannot be of same type")
          : setErrorMsg("");
        break;
      default:
        setErrorMsg("Not correct type of tokens");
    }
  };
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={7} style={{ marginTop: "20vh" }}>
        <SwapWindow
          changeTokenType={changeTokenType}
          errorMsg={errorMsg}
          tokenInType={tokenInType}
          tokenOutType={tokenOutType}
        />
      </Grid>
    </Grid>
  );
}

export default SwapPage;