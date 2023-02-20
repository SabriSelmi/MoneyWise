import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import { Link } from 'react-router-dom';


export const mainListItems = (
  <React.Fragment>
    <Link to="/"  style={{
      textDecoration : "none",
      color : "black"
    }} color={'black'}>
        <ListItemButton >
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        </ListItemButton>
    </Link>
    <Link to="/depenses" style={{
      textDecoration : "none",
      color : "black"
    }} color={'black'}>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Gestion des Dépenses" />
    </ListItemButton>
    </Link>
    <Link to="/revenu" style={{
      textDecoration : "none",
      color : "black"
    }} color={'black'}>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Gestion des Revenus" />
    </ListItemButton>
    </Link>
    <Link to="/rapports" style={{
      textDecoration : "none",
      color : "black"
    }} color={'black'}>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Rapports" />
    </ListItemButton>
    </Link>
    <Link to="/favoris" style={{
      textDecoration : "none",
      color : "black"
    }} color={'black'}>
    <ListItemButton>
      <ListItemIcon>
        <FavoriteBorderSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Liste des Farvoris" />
    </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader 
    component="div" 
    inset
    style={{
      lineHeight : '30px'
    }}>
      Gérer mon profil
    </ListSubheader>
    <Link to="/settings" style={{
      textDecoration : "none",
      color : "black"
    }} color={'black'}>
    <ListItemButton>
      <ListItemIcon>
        <SettingsApplicationsSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Paramètres" />
    </ListItemButton>
    </Link>
    <ListItemButton>
      <ListItemIcon>
      <SettingsApplicationsSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Ajouter les dépenses" />
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
  </React.Fragment>
);