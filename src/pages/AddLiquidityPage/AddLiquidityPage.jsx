import React from "react";
import { Grid } from "@material-ui/core";
import AddLiquidityWindow from "../../components/AddLiquidity/AddLiquidityWindow";

function AddLiquidityPage() {
  const [token1, setToken1] = React.useState("");
  const [token2, setToken2] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");

  const changeTokenType = (tokenName, tokenType) => {
    switch (tokenType) {
      case "token1":
        setToken1(tokenName);
        tokenName == token2
          ? setErrorMsg("Token 1 and Token 2 cannot be of same type")
          : setErrorMsg("");
        break;
      case "token2":
        setToken2(tokenName);
        tokenName == token1
          ? setErrorMsg("Token 1 and Token 2 cannot be of same type")
          : setErrorMsg("");
        break;
      default:
        setErrorMsg("Not correct type of tokens");
    }
  };
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={7} style={{ marginTop: "20vh" }}>
        <AddLiquidityWindow
          changeTokenType={changeTokenType}
          errorMsg={errorMsg}
          token1={token1}
          token2={token2}
        />
      </Grid>
    </Grid>
  );
}

export default AddLiquidityPage;
