import Footer from "componets/navigation/Footer"
import Navbar from "componets/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Header2 from "componets/Patron/Header2"
import Patron1 from "componets/Patron/Patron1"

//import React, { Component } from "react";

function Patrocinadores(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header2/>
                <Patron1/>
            </div>
            <Footer/>
        </Layout>
    )

}
export default Patrocinadores
