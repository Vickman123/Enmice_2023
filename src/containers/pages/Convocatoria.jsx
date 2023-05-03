import Header from "componets/cases/Header"
import Footer from "componets/navigation/Footer"
import Navbar from "componets/navigation/Navbar"
import Layout from "hocs/layouts/Layout"


function Convocatoria(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
            </div>
            <Footer/>
        </Layout>
    )

}
export default Convocatoria



//3:54:37