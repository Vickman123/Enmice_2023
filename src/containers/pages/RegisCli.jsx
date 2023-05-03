import Footer from "componets/navigation/Footer"
import Navbar from "componets/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { connect } from "react-redux"
import Header from "componets/Services/Header"
import RegistroList from "componets/Services/RegistroList"
import Usuario from "componets/Services/Usuario"

function RegisCli() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-14">
                <Usuario />
            </div>
            <Footer />
        </Layout>
    )

}
export default RegisCli