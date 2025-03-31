import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

function HomePage({cart,setCart}) {
    const navigate = useNavigate();
  
    return (
      <>
       <Navbar cart={cart} setCart={setCart}/>
       <Product cart={cart} setCart={setCart} />
      </>
       
    );
  }
  export default HomePage;