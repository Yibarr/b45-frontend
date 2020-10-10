import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navbar/Navbar.jsx'
import Login from './pages/Login/Login.jsx'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Login/>
    </div>
  );
}

export default App;
