import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Orders from '../components/Dashboard/Orders';

export default function Revenu() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}