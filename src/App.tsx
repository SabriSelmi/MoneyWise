import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
// import PrimarySearchAppBar from './components/AppBar/AppBar';
// import BasicButtons from './components/Button/Button';
// import { ContainerContent } from './components/Dashboard/Container';
import DashboardContent from './components/Dashboard/Dashboard';
import About from './pages/About';
import Home from './pages/Home';
// import PersistentDrawerLeft from './components/PersistantDrawerLeft/PersistantDrawerLeft';

function App (){
  return (
    <div>
      {/* <PrimarySearchAppBar/>
      <PersistentDrawerLeft/> */}
      
      <Router>
          <Routes>
            <Route path='/' element={<DashboardContent />} />
            <Route path='/depenses' element={<DashboardContent component={<Home/>}/>} />
            <Route path='/revenu' element={<DashboardContent component={<About/>}/>} />
          </Routes>
      </Router>
      
    </div>
        
  );
}

export default App;
