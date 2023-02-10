import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardContent from '../components/Dashboard/Dashboard';
import Depense from '../pages/Depense';
import Favoris from '../pages/Favoris';
import Home from '../pages/Home';
import Rapports from '../pages/Rapport';
import Revenu from '../pages/Revenu';
import Settings from '../pages/Settings';

function AppRoutes (){
    return (
      <div> 
        <Router>
            <Routes>
              <Route path='/' element={<DashboardContent component={<Home/>} /> } />
              <Route path='/depenses' element={<DashboardContent component={<Depense/>}/>} />
              <Route path='/revenu' element={<DashboardContent component={<Revenu/>}/>} />
              <Route path='/rapports' element={<DashboardContent component={<Rapports/>}/>} />
              <Route path='/favoris' element={<DashboardContent component={<Favoris/>}/>} />
              <Route path='/settings' element={<DashboardContent component={<Settings/>}/>} />
            </Routes>
        </Router>
      </div>
          
    );
  }
  
  export default AppRoutes;