import { Grid, Paper } from "@mui/material";
import Chart from "../components/Dashboard/Chart";

export default function Rapports () {
    return (
            <Grid item xs={12} md={8} lg={9} sx={{width:'100%' }}>
                <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}
                >
                    <Chart />
            </Paper>
        </Grid>
        )
}