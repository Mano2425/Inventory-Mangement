import { useState } from "react";
import LocationPicker from "../components/LocationPicker"; // Ensure you have this component
import Navbar from "../components/Navbar";
function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    landmark: "",
    pincode: "",
    location: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLocationChange = (location) => {
    setFormData({ ...formData, location });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("https://your-api-endpoint.com/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log("Response:", result);
  };

  return (
    <>
     <div className="flex justify-center items-center min-h-screen bg-gray-200 p-10">
      <form className="w-full max-w-2xl grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
        <h2 className="col-span-2 text-3xl font-bold text-gray-700 text-center">Checkout</h2>
        
        <div className="col-span-2">
          <label className="block text-gray-600">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border p-3 rounded-lg" required />
        </div>
        
        <div className="col-span-2">
          <label className="block text-gray-600">Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange} className="w-full border p-3 rounded-lg" required></textarea>
        </div>
        
        <div>
          <label className="block text-gray-600">Landmark:</label>
          <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} className="w-full border p-3 rounded-lg" />
        </div>
        
        <div>
          <label className="block text-gray-600">Pincode:</label>
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} className="w-full border p-3 rounded-lg" required />
        </div>
        
        <div className="col-span-2">
          <label className="block text-gray-600">Current Location:</label>
          <LocationPicker onLocationSelect={handleLocationChange} />
        </div>

        <div className="col-span-2">
          <button type="submit" className="h-12 bg-green-500 w-full text-white font-bold rounded-lg hover:bg-green-600 transition">Continue to Payment</button>
        </div>
      </form>
    </div>
    </>
   
  );
}

export default CheckoutPage;
