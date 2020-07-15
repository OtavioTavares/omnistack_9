import React from 'react';
import './App.css';

import logo from "./assets/logo.svg"

import Routes from "./routes"


// Adicionamos as rotas depois do Container e do Content 
// Para manter fixo a parte externa do site e o formulario
function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
