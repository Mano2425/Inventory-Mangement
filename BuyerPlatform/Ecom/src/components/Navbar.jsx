import { Link, useNavigate, useParams } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";
import { useState } from "react";

export default function Navbar({ cart, setCart }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // You can navigate to a search results page or filter products based on `searchQuery`
  };

  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-gray-700 text-white shadow-md rounded-lg mb-5">
        <h1 className="text-2xl font-bold">MSME E-commerce</h1>
        
        {/* Search Box */}
        <div className="flex items-center bg-white rounded-lg px-2">
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 text-gray-700 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch} className="p-2 text-gray-700">
            <Search className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-4">
          <Link to="/">
            <button className="bg-white text-gray-700 p-2 rounded-lg">order</button>
          </Link>
          
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)} className="bg-red-500 text-white p-2 rounded-lg">
              Sign Out
            </button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)} className="bg-white text-gray-700 p-2 rounded-lg">
              Login
            </button>
          )}
          
          <button className="relative" onClick={() => navigate('/cart')}>
            <ShoppingCart className="w-8 h-8 text-white" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
