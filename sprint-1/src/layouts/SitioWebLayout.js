import Header from "../componentes/Header"
import Footer from "../componentes/Footer"
import Login from "../componentes/Login"


export default function SitioWebLayout (props) {
    return (
        <div>
            <Login />
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}