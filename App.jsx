import { Fragment } from "react"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/Home/Home"
import Product from "./components/product/Product"
import Login from "./components/login/Login"
import Footer from "./components/footer/footer"


const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <Home/>
      <Product/>
      <Login/>
      <Footer/>
   
    </Fragment>
    
  )
}

export default App
