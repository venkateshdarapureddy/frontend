import { Routes, Route} from "react-router-dom"; // BrowserRouter wrapper
import LayOut from "../Layout";
import Home from "./home";
import Login from "./login";
import Profile from "./profile";
import Register from "./register";
import Product from "../pages/products";
import { Cart } from "./cart";
import Shipping from "./shipping";
import Checkout from "./checkout";




export default function AppRouter() {
  return (
      
      <Routes>
         
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path= "/shipping" element={<Shipping />} />
          <Route path="/checkout" element={<Checkout />} />
          
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
   
  );
}
