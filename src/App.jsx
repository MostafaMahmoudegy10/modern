import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Product from "./pages/Product"
import DashBoard from "./pages/DashBoard"
import Error from "./pages/Error"
import Wislist from "./pages/Wislist"
import Footer from './component/Footer'
import Header from './component/Header'
import About from "./pages/aboutus/About"

function App() {

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/dashboard" element={<DashBoard />}/>
          <Route path="/wislist" element={<Wislist />}/>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<Error />}/>

        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
