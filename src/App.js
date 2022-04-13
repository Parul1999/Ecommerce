import { Routes,Route } from "react-router-dom";
import './styles/styles.css'
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/cart/cart";
import Home from "./pages/home/home";
import NotFound from "./pages/notfound/404";
import ProductDetails from "./pages/productdetails/productdetails";
import Products from "./pages/products/products";
import Wishlist from "./pages/wishlist/wishlist";
import Login from "./pages/authentication/login";
import SignUp from "./pages/authentication/signup";
import ForgotPassword from "./pages/authentication/forgotpassword";
import RequiresAuth from "./components/auth/RequiresAuth";



function App() {
  return (
    <div className="App">
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/productdetails/:id" element={<ProductDetails/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/forgotpassword" element={<ForgotPassword/>} />
    <Route path="/cart" element={ <RequiresAuth> <Cart /></RequiresAuth>}/>
    <Route path="/wishlist" element={ <RequiresAuth><Wishlist /></RequiresAuth>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Footer/>
    </div>
  );
}

export default App;
