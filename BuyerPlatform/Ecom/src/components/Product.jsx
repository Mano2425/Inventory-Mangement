import { useNavigate } from "react-router-dom";
import { useState } from "react";
const products = [
    { id: 1, name: "Product 1", price: 100, image: "https://via.placeholder.com/150", stock: 5, producer: "ABC Ltd." },
    { id: 2, name: "Product 2", price: 200, image: "https://via.placeholder.com/150", stock: 0, producer: "XYZ Pvt." },
    { id: 3, name: "Product 3", price: 300, image: "https://via.placeholder.com/150", stock: 10, producer: "LMN Corp." }
  ];
export default function Product({cart,setCart}){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
    return (
      <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
          <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md" />
          <h3 className="text-lg font-bold mt-2">{product.name}</h3>
          <p className="text-gray-600">Price:${product.price}</p>
          <p className="text-gray-600">Stock:{product.stock}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-gray-700 text-white mt-2 w-full p-2 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
    )
}