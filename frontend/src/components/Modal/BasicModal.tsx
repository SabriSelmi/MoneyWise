import * as React from 'react';
import { useState } from 'react';
import {useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import {planExpense } from '../../store/actions/actionTypes';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const periode = [
    {
      value: 'Jours',
      label: 'Jours',
    },
    {
      value: 'Mois',
      label: 'Mois',
    },
    {
      value: 'Années',
      label: 'Années',
    },
  ];

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [recurrence, setRecurrence] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const dispatch = useDispatch();

  const handlePopupSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
    e.preventDefault();
    console.log(recurrence,startDate,endDate)
    // Ajouter la logique pour ajouter la récurrence planExpense
    dispatch(planExpense(recurrence,startDate,endDate));
    handleClose()
    // onClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Planifier</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handlePopupSubmit}>
          <div style={{ width: '100%'}}>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="Fixe"
          value={recurrence} onChange={(e) => setRecurrence(e.target.value)}
          style={{ width : '100%', display: 'flex', flexDirection:'column'}}
        >
          {periode.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
       
        </TextField>
        </div>
            <TextField 
                id="outlined-basic" 
                placeholder="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)}
            />
            <TextField 
                id="outlined-basic" 
                placeholder="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)}
            />
            <Button type="submit" onClick={(e)=>handlePopupSubmit(e)}>Insérer</Button>
        </form>
        </Box>
      </Modal>
    </div>
  );
}