//import Header from "componets/About/Header";
import Stats from "componets/About/Stats";
import Header1 from "componets/ENMICE/Header1";
import Linea from "componets/ENMICE/Linea";
import Footer from "componets/navigation/Footer"
import Navbar from "componets/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import React, { Component } from "react";



function ENMICE(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header1/>
                <Linea/>
                <Stats/>
            </div>
            <Footer/>
        </Layout>
    )

}
export default ENMICE




/*
import React, { Component } from "react";


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
*/