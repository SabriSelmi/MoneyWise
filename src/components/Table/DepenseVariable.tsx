import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  createRow('Repas Extérieur', 100, 1.15),
  createRow('Courses Alimentaires', 10, 45.99),
  createRow('Billet Trains / Avion ', 2, 17.99),
  createRow('Cadeaux', 2, 17.99),
  createRow('Bars / Soirées', 2, 17.99),
  createRow('Carburant', 2, 17.99),
  createRow('Santé / Pharmacie', 2, 17.99),
  createRow('Imprévus', 2, 17.99),
  createRow('Vetement/Chaussures', 2, 17.99),
  createRow('Vancances', 2, 17.99),
  createRow('Autres', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function DepenseVariable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth:550,maxWidth: 800, }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}
            sx={{ 
              color:'black',
              fontSize:'24px'
             }}>
              Dépense Variables
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Désignation</TableCell>
            {/* <TableCell align="right">Qty.</TableCell> */}
            <TableCell align="right">Montant Prévisionel</TableCell>
            <TableCell align="right">Montant Réel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              {/* <TableCell align="right">{row.qty}</TableCell> */}
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            {/* <TableCell rowSpan={2} /> */}
            <TableCell >Total Dépenses Variables</TableCell>
            <TableCell align="right">0 €</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ecart provisionnel réel</TableCell>
            {/* <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell> */}
            <TableCell ></TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={1}>Total</TableCell>
            <TableCell align="right">0 €</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}