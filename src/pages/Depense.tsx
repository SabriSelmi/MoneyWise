
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import SelectTextFields from '../components/Forms/DépenseFoms';
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

export default function Depense() {
  return (
    <SelectTextFields/>
      
  );
}