import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardContent from '../components/Dashboard/Dashboard';
import Depense from '../pages/Depense';
import Favoris from '../pages/Favoris';
import Rapports from '../pages/Rapport';
import Revenu from '../pages/Revenu';

function AppRoutes (){
    return (
      <div> 
        <Router>
            <Routes>
              <Route path='/' element={<DashboardContent />} />
              <Route path='/depenses' element={<DashboardContent component={<Depense/>}/>} />
              <Route path='/revenu' element={<DashboardContent component={<Revenu/>}/>} />
              <Route path='/rapports' element={<DashboardContent component={<Rapports/>}/>} />
              <Route path='/favoris' element={<DashboardContent component={<Favoris/>}/>} />
            </Routes>
        </Router>
      </div>
          
    );
  }
  
  export default AppRoutes;