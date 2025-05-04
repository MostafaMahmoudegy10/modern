import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Error from "./pages/Error"
import Footer from './component/Footer'
import Header from './component/Header'
import About from "./pages/aboutus/About"
import CategoryPage from "./pages/CategoryPage"
import ProductList from './pages/ProductList';
import ProductForm from "./pages/ProductForm";
import Product from "./pages/Product";


function App() {

  return (
      <div className="bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/productlist" element={<ProductList />}/>
          <Route path="/product/:id" element={<Product />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/form" element={<ProductForm></ProductForm>}/>

          <Route path="*" element={<Error />}/>
        </Routes>
        <Footer />
      </div>
  )
}

export default App
