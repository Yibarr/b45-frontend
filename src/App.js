import React from 'react';
import { 
  BrowserRouter as Router
} from 'react-router-dom'
import Navigation from './components/Navbar/Navbar.jsx'
import AuthContextProvider from './context/AuthContext.js'
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <AuthContextProvider>
          <Navigation />
          { Routes }
        </AuthContextProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
