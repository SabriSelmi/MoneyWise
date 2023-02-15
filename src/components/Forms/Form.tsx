import React, { useState } from 'react';
// Redux 
import { connect, useDispatch } from 'react-redux';
import { addExpense} from '../../store/actions/actionTypes';
// Material Ui 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import BasicModal from '../Modal/BasicModal';

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

type ExpenseType = {
    designation : string,
    type : string,
    startDate : string,
    endDate : string,
    recurrence : string
}
type FormProps = {
    expenses : StateStore,
    dispatch : ()=> void
}
const ExpenseForm = (props : any) => {
    console.log("props", props)
  
  const [designation, setDesignation] = useState('');
  const [type, setType] = useState('');
  const [popupOpen, setPopupOpen] = useState(false);

  const dispatch = useDispatch();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
    e.preventDefault();
 
    dispatch(addExpense(designation, type));
  };


  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <form onSubmit={handleFormSubmit}>
    <TextField 
        id="outlined-basic" 
        label="Désignation" 
        variant="outlined"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)} 
    />
       <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="Fixe"
          helperText="Dépense fixe ou variables"
          onChange={(e) => setType(e.target.value)}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      {/* <Button onClick={() => setPopupOpen(true)}>Planifier Done</Button> */}
     
      <BasicModal />
      <Button type="submit" onClick={(e)=>handleFormSubmit(e)}>Submit</Button>
    </form>
    </Box>
  );
};
type StateStore = {
    expense : ExpenseType
}
    function mapStateToProps(state :StateStore){
        return {
            expenses : state.expense
        }
    }
    export default connect(mapStateToProps)(ExpenseForm) ;
    