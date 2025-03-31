
import { NavLink } from "react-router-dom";
import { Home, PlusCircle, ShoppingBag, History, ChevronDown, Boxes } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-5">
      <h1 className="text-xl font-bold mb-6">Admin Dashboard</h1>
      <nav className="space-y-4">
        <NavLink to="/" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
          <Home /> <span>Dashboard</span>
        </NavLink>
        <NavLink to="/purchase-order" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
          <ShoppingBag /> <span>Purchase</span>
        </NavLink>

        {/* Sales Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-700"
          >
            <div className="flex items-center space-x-2">
              <History />
              <span>Sales</span>
            </div>
            <ChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="mt-2 bg-gray-600 rounded shadow-lg">
              <NavLink to="/customers" className="block px-4 py-2 text-gray-100 hover:bg-gray-500">
                Customers
              </NavLink>
              <NavLink to="/sales-history" className="block px-4 py-2 text-gray-100 hover:bg-gray-500">
                Sales History
              </NavLink>
              <NavLink to="/purchase-order/receives-bill" className="block px-4 py-2 text-gray-100 hover:bg-gray-500">
                Sales Activity
              </NavLink>
              <NavLink to="/paymentReceived" className="block px-4 py-2 text-gray-100 hover:bg-gray-500">
                Payment Received
              </NavLink>
            </div>
          )}
        </div>
        <NavLink to="/inventory" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
          <Boxes /> <span>Inventory</span>
        </NavLink>

        {/* Add Product - Placed below Sales Dropdown when open */}
        {isOpen ? (
          <div className="mt-2">
            <NavLink to="/add-product" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
              <PlusCircle /> <span>Add Product</span>
            </NavLink>
          </div>
        ) : (
          <NavLink to="/add-product" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
            <PlusCircle /> <span>Add Product</span>
          </NavLink>
        )}
      </nav>
    </div>
  );
}
