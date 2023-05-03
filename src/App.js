import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Error404 from "./containers/errors/Error404"; 
import Home from "./containers/pages/Home"; 
import store from "./store";
import React from 'react';
import Convocatoria from "containers/pages/Convocatoria";
import Registro from "containers/pages/Registro";
import Educacion from "containers/pages/Educacion";
import Quienes from "containers/pages/Quienes";
import ENMICE from "containers/pages/ENMICE";
import Blog from "containers/pages/Blog";
import Patrocinadores from "containers/pages/Patrocinadores";
import Acceder from 'containers/pages/Acceder';
import RegisAsis from "./containers/pages/RegisAsis";
import RegisCli from "./containers/pages/RegisCli";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*Error Display */}
          <Route path="*" element={<Error404 />} />

          {/*Home Display*/}
          <Route path="/" element={<Home />} />
          <Route path="/Acceder" element={<Acceder />} />
          <Route path="/RegisAsis" element={<RegisAsis />} />  
          <Route path="/RegisCli" element={<RegisCli />} />
          <Route path="/Convocatoria" element={<Convocatoria />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Educacion" element={<Educacion />} />
          <Route path="/Quienes" element={<Quienes />} />
          <Route path="/ENMICE" element={<ENMICE />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Patrocinadores" element={<Patrocinadores />} />

        </Routes>
      </Router>
    </Provider>
    
  );
}

export default App;

// Codigo React Login y logotipo.

/*

import React, { Component } from "react";
import logo from './logo.png';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Blog App</h1>
        </header>

       <p>Estamos mejorando para ti, Convocatoria 2023 Muy Pronto! </p>

        <div className="loginForm">
          <button onClick={() => this.loginForm()}>Login</button>
        </div>
      </div>
    );
  }

  loginForm() {
    console.log("Login rendered");
  }
}

export default App;
*/

