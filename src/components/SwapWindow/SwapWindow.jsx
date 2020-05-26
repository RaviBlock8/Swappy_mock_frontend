import React from "react";
import {
  Paper,
  Grid,
  Box,
  Select,
  MenuItem,
  TextField,
  Button,
  Typography,
  InputBase,
  Divider,
  SvgIcon,
} from "@material-ui/core";
import { makeStyles, styled } from "@material-ui/core/styles";
import MetamaskSvg from "./metamaskSvg.svg";


function SwapWindow({ tokenInType, tokenOutType, changeTokenType, errorMsg }) {
  const classes = useStyles();
  return (
    <Paper elevation={3} component={"div"}>
      <form>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.formComponent}>
            <Typography variant="subtitle1" gutterBottom>
              <strong>Token In</strong>
            </Typography>
            <InputBox display="flex">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tokenInType}
                onChange={(e) => {

                  changeTokenType(e.target.value, "tokenIn");
                }}
                style={{ width: "30%" }}
                disableUnderline={true}
              >
                <MenuItem value="eth">ETH</MenuItem>
                <MenuItem value="dai">DAI</MenuItem>
                <MenuItem value="mkr">MKR</MenuItem>
              </Select>
              <InputBase
                id="tokenIn"
                placeholder="0"
                type="number"
                style={{ width: "70%" }}
                inputProps={{
                  style: {
                    textAlign: "right",
                  },
                }}
              />
            </InputBox>
          </Grid>
          <Grid item xs={12} md={6} className={classes.formComponent}>
            <Typography variant="subtitle1" gutterBottom>
              <strong>Token Out</strong>
            </Typography>
            <InputBox display="flex">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tokenOutType}
                onChange={(e) => {

                  changeTokenType(e.target.value, "tokenOut");
                }}
                style={{ width: "30%" }}
                disableUnderline={true}
              >
                <MenuItem value="eth">ETH</MenuItem>
                <MenuItem value="dai">DAI</MenuItem>
                <MenuItem value="mkr">MKR</MenuItem>
              </Select>
              <InputBase
                id="tokenIn"
                placeholder="0"
                type="number"
                style={{ width: "70%" }}
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
                <strong>1 KNC = 0.003312 ETH = 0.669 USD</strong>
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
              Swap Tokens
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
              By Swapping, you agree to the
              <span style={{ color: "#166ee7" }}> Terms and Conditions</span>
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            style={{ padding: "10px", textAlign: "center" }}
          >
            <Divider variant="middle" />
            <br />
            <MetamaskButton type="submit" variant="contained" size="small">
              <img
                src={require("./metamaskSvg.svg")}
                style={{ width: "14px", marginRight: "3px" }}
              />
              Connect Metamask
            </MetamaskButton>
          </Grid>
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

const MetamaskButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    background: "#f6851b",
    color: "white",
  },
}));

export default SwapWindow;
