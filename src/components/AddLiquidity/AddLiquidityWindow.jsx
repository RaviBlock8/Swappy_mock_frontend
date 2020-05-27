import React from "react";
import {
  Paper,
  Grid,
  Box,
  Select,
  MenuItem,
  Button,
  Typography,
  InputBase,
} from "@material-ui/core";
import { makeStyles, styled } from "@material-ui/core/styles";

function AddLiquidityWindow({ token1, token2, changeTokenType, errorMsg }) {
  const classes = useStyles();
  const [amountOfToken1, setAmountToken1] = React.useState("");
  const [amountOfToken2, setAmountToken2] = React.useState("");

  const handleAmountToken1 = (event) => {
    setAmountToken1(event.target.value);
  };
  const handleAmountToken2 = (event) => {
    setAmountToken2(event.target.value);
  };

  const onSubmit = (data) => {
    data.preventDefault();
    let obj = {
      typeOfToken1: token1,
      typeOfToken2: token2,
      amountOfToken1: data.currentTarget.elements.amountOfToken1.value,
      amountOfToken2: data.currentTarget.elements.amountOfToken2.value,
    };
    console.log(obj);
  };

  return (
    <Paper elevation={3} component={"div"}>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.formComponent}>
            <Typography variant="subtitle1" gutterBottom>
              <strong>Token A</strong>
            </Typography>
            <InputBox display="flex">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={token1}
                disableUnderline={true}
                onChange={(e) => {
                  changeTokenType(e.target.value, "token1");
                }}
                style={{ width: "30%" }}
              >
                <MenuItem value={"ETH"}>ETH</MenuItem>
                <MenuItem value={"DAI"}>DAI</MenuItem>
                <MenuItem value={"MKR"}>MKR</MenuItem>
              </Select>
              <InputBase
                id="tokenIn"
                placeholder="0"
                style={{ width: "70%" }}
                name="amountOfToken1"
                value={amountOfToken1}
                onChange={handleAmountToken1}
                inputProps={{
                  style: { textAlign: "right" },
                }}
              />
            </InputBox>
          </Grid>
          <Grid item xs={12} md={6} className={classes.formComponent}>
            <Typography variant="subtitle1" gutterBottom>
              <strong>Token B</strong>
            </Typography>
            <InputBox display="flex">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={token2}
                disableUnderline={true}
                onChange={(e) => {
                  changeTokenType(e.target.value, "token2");
                }}
                style={{ width: "30%" }}
              >
                <MenuItem value={"ETH"}>ETH</MenuItem>
                <MenuItem value={"DAI"}>DAI</MenuItem>
                <MenuItem value={"MKR"}>MKR</MenuItem>
              </Select>
              <InputBase
                id="tokenIn"
                placeholder="0"
                style={{ width: "70%" }}
                name="amountOfToken2"
                value={amountOfToken2}
                onChange={handleAmountToken2}
                inputProps={{
                  style: { textAlign: "right" },
                }}
              />
            </InputBox>
            <ErrorBox component="span">{errorMsg}</ErrorBox>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box display="flex" justifyContent="flex-end" pr={3}>
              <Typography variant="subtitle2" gutterBottom>
                <strong>1 ETH = 106.232552DAI = 21724.54 USD</strong>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} className={classes.buttonCont}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              size="large"
            >
              Add Liquidity
            </Button>
            <Typography
              variant="caption"
              style={{
                fontWeight: "lighter",
                color: "#a3a3a3",
                fontStyle: "italics",
              }}
              gutterBottom
            >
              <br />
              <br />
              By Adding tokens, you agree to the
              <span style={{ color: "#166ee7" }}> Terms and Conditions</span>
            </Typography>
          </Grid>
          {/* <Grid
						item
						xs={12}
						md={12}
						style={{ padding: "10px", textAlign: "center" }}
					>
						<Divider variant="middle" />
						<br />
						<Button type="submit" variant="contained" size="small">
							<img
								src={require("./metamaskSvg.svg")}
								style={{ width: "10px" }}
							/>
							Connect Metamask
						</Button>
					</Grid> */}
        </Grid>
      </form>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  formComponent: {
    padding: theme.spacing(3),
    boxSizing: "border-box",
  },
  buttonCont: {
    textAlign: "center",
    padding: theme.spacing(5),
  },
}));

const InputBox = styled(Box)(({ theme }) => ({
  width: "100%",
  boxSizing: "border-box",
  background: "#f0f0f0",
  padding: theme.spacing(1),
  borderRadius: "7px",
}));

const ErrorBox = styled(Box)(({ theme }) => ({
  fontSize: "0.9rem",
  color: "red",
}));

export default AddLiquidityWindow;
