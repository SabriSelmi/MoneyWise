import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';

const currencies = [
  {
    value: 'Fixe',
    label: 'Fixe',
  },
  {
    value: 'Variable',
    label: 'Variable',
  },
];

export default function SelectTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
            Ajouter vos Charges Fixe 
        </div>
      <div>
        <TextField id="outlined-basic" label="Désignation" variant="outlined" />
      </div>

      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Dépense fixe ou variables"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
              <Button>Submit</Button>
        <div> 
      </div>
    </Box>
  );
}