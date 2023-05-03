import Header from "componets/About/Header"
import Stats from "componets/About/Stats"
import Team from "componets/About/Team"
import Test from "componets/About/Test"
import Footer from "componets/navigation/Footer"
import Navbar from "componets/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import LogoCloud from "componets/home/LogoCloud";

function Quienes(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Test/>
                <Team/>
                <LogoCloud/>
            </div>
            <Footer/>
        </Layout>
    )

}
export default Quienes


