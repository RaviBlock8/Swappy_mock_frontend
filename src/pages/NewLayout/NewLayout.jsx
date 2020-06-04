import React from "react";
import Cards from "../../components/NewLayout/Cards";
import { Grid } from "@material-ui/core";
import DrawerContent from "../../components/Drawer/DrawerContent";

function NewLayout() {
  return (
    <React.Fragment>
      <Grid container minHeight="90vh">
        {/* <Grid item xs={3} style={{ marginTop: "11vh", height:"400px", border:"1px solid black" }}>
          Hello
        </Grid> */}
        <Grid xs={6}>
          <DrawerContent/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default NewLayout;
