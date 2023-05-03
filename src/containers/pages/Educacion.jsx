import Footer from "componets/navigation/Footer"
import Navbar from "componets/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Educacion1 from "componets/Education/Educacion1"
import Colaboracion from "componets/Education/Colaboracion"
//import React, { Component } from "react";

function Educacion(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Educacion1/>
                <Colaboracion/>
            </div>
            <Footer/>
        </Layout>
    )

}
export default Educacion
