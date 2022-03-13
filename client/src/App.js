import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import  NavBar  from './components/utils/Navbar';
import  Routes  from './components/utils/Routes'


function App() {
  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  );
}

export default App;
