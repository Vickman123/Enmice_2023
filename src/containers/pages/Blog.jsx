import Header from "componets/cases/Header"
import Footer from "componets/navigation/Footer"
import Navbar from "componets/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Noticias from "componets/Blog/Noticias"
import UseCases from "componets/home/UseCases"


function Blog(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Noticias/>
                <UseCases/>
            </div>
            <Footer/>
        </Layout>
    )

}
export default Blog