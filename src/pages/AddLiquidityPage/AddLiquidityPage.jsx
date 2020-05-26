import React from "react";
import { Grid } from "@material-ui/core";
import AddLiquidityWindow from "../../components/AddLiquidity/AddLiquidityWindow";

function AddLiquidityPage() {
	return (
		<Grid container justify="center">
			<Grid item xs={12} md={7} style={{ marginTop: "20vh" }}>
				<AddLiquidityWindow/>
			</Grid>
		</Grid>
	);
}

export default AddLiquidityPage;
