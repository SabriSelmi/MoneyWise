import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fontSize } from '@mui/system';

const TAX_RATE = 0.07;

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty: number, unit: number) {
  return qty * unit;
}

function createRow(desc: string, qty: number, unit: number) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

interface Row {
  desc: string;
  qty: number;
  unit: number;
  price: number;
}

function subtotal(items: readonly Row[]) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Loyer / Crédit Immo', 100, 1.15),
  createRow('Electricité', 10, 45.99),
  createRow('Charges copropriété', 2, 17.99),
  createRow('Frais Bancaire', 100, 1.15),
  createRow('Forfait Mobile', 10, 45.99),
  createRow('Internet', 2, 17.99),
  createRow('Crédit (Box)', 100, 1.15),
  createRow('Assurance Maison', 10, 45.99),
  createRow('Assurance Voiture', 2, 17.99),
  createRow('Forfait Transport', 2, 17.99),
  createRow('Abonnement Platforms', 2, 17.99),
  createRow('Epargne Précaution', 2, 17.99),
  createRow('Epargne Projet', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function DepenseFixe() {
  return (
    <TableContainer component={Paper}>
      {/* <Table sx={{ minWidth: 700 }} aria-label="spanning table"> */}
      <Table sx={{ minWidth:330, maxWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ 
              color:'black',
              fontSize:'24px'
             }} align="right" >
              Dépenses Fixe
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Designation</TableCell>
            {/* <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Unit</TableCell> */}
            <TableCell align="right">Montant</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              {/* <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell> */}
              {/* <TableCell align="right">{ccyFormat(row.price)}</TableCell> */}
              {/* <TextField id="outlined-basic" label="" variant="outlined" type="number"
          InputLabelProps={{
            shrink: true,
          }}/> */}
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={1}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}