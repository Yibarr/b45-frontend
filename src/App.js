import React from 'react';
import { 
  BrowserRouter as Router
} from 'react-router-dom'
import Navigation from './components/Navbar/Navbar.jsx'
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        { Routes }
      </Router>
    </React.Fragment>
  );
}

export default App;
