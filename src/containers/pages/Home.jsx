import Footer from "componets/navigation/Footer"
import Navbar from "componets/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import React, { Component } from "react";
import Header from "componets/home/Header";
import Incentives from "componets/home/Incentives";
import UseCases from "componets/home/UseCases";
import Features from "componets/home/Features";
import CTA from "componets/home/CTA";
import LogoCloud from "componets/home/LogoCloud";


function Home(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Incentives/>
                <CTA/>
            </div>
            <Footer/>
        </Layout>
    )

}
export default Home

// 3:45:06


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

<Features/>
<LogoCloud/>
<UseCases/>
*/