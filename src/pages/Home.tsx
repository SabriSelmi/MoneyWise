import { Grid, Paper } from "@mui/material";
import Chart from "../components/Dashboard/Chart";
import Deposits from "../components/Dashboard/Deposits";
import Orders from "../components/Dashboard/Orders";

import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
// import SpanningTable from '../components/Table/SpanningTable';
import DepenseFixe from '../components/Table/DepenseFixe';
import DepenseVariable from '../components/Table/DepenseVariable';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Home () {
    return (
        <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
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
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
      <Stack
        display={'flex'}
        flexWrap='wrap'
        direction="row"
        // divider={<Divider orientation="vertical" flexItem />}
        spacing={10}
        sx={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-around',
          px: [0],
          overflow: 'auto'
        }}
        
      >
        <Item><DepenseFixe/></Item>
        <Item><DepenseVariable/></Item>
        {/* <Item><SpanningTable/></Item> */}
        {/* <Item><SpanningTable/></Item> */}
        {/* <Item>Item 4</Item> */}
      </Stack>
      </Grid>
    
      </Grid>
        )
}