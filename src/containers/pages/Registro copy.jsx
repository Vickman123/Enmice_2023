import Footer from "componets/navigation/Footer"
import Navbar from "componets/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { connect } from "react-redux"
import Menuregistro from "../../componets/Services/Menuregistro"

function Registro(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Menuregistro />
            </div>
            <Footer/>
        </Layout>
    )

}
export default Registro




/*

import React, { Component } from "react";
import logo from './logo.png';
import "./App.css";

//// <RegistroList section_title={'Registro e inicio de sesion.'}/>

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




/*

import React from "react";

function Dashboard({ username, onLogout }) {
  return (
    <div className="Dashboard">
      <h2>Bienvenido, {username}!</h2>
      <button onClick={onLogout}>Cerrar sesión</button>
    </div>
  );
}

export default Dashboard;
*/