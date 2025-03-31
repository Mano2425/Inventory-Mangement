import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
function CartPage({cart}) {
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  

  return (
    <>
    <Navbar cart={cart}/>
    <div className="p-5 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-2 border-b">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" />
              <p>{item.name} (x{item.quantity})</p>
              <p>${item.price * item.quantity}</p>
            </div>
          ))}
          <h3 className="text-lg font-bold mt-3">Total: ${totalPrice}</h3>
          <div className="flex gap-4 mt-4">
            <button className="bg-gray-700 text-white p-2 rounded-lg" onClick={() => navigate("/")}>Continue Shopping</button>
            <button className="bg-green-500 text-white p-2 rounded-lg" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
    </>
    
  );
}
  export default CartPage;