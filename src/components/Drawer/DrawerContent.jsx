import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Cards from "../NewLayout/Cards";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function DrawerContent() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <p style={{ height: "60vh", width: "50vw", border: "2px solid black" }}>
        Hello
      </p>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          border: "3px solid black",
          width: "100vw",
        }}
      >
        {["bottom"].map((anchor) => (
          <React.Fragment key={anchor}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "70px",
                backgroundColor:"white"
              }}
            >
              <Button onClick={toggleDrawer(anchor, true)}>
                <h3 style={{color:"rgb(3, 123, 252)"}}>My Wallet</h3>
                <KeyboardArrowUpIcon color="inherit" />
              </Button>
            </div>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  border: "3px solid black",
                }}
              >
                <Button onClick={toggleDrawer(anchor, false)}>
                  My Wallet
                  <KeyboardArrowDownIcon />
                </Button>
              </div>
              <Cards />
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
