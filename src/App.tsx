import React from 'react';

import './App.css';
import PrimarySearchAppBar from './components/AppBar/AppBar';
import PersistentDrawerLeft from './components/PersistantDrawerLeft/PersistantDrawerLeft';

function App (){
  return (
    <div>
          <PrimarySearchAppBar/>
          <PersistentDrawerLeft/>
          
    </div>
        
  );
}

export default App;
