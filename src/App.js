import React  from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import MenuBar from './component/MenuBar';
import MenuRouter from './component/MenuRouter';

const App =() =>{      
  return (
      <Router>
        <MenuBar/>
        <MenuRouter/>
      </Router>
  );
}

export default App;
