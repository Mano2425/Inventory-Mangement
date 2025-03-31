import { Link } from "lucide-react";
import { useNavigate } from "react-router-dom";
const VendorCard = ({ vendor }) => {
  
  const navigate=useNavigate();
  const id=vendor.id;

   const handleOnClick =()=>{
     navigate(`/customers/${id}`);
   }
    return (
       <div onClick={handleOnClick} className="w-80 p-4 shadow-md border rounded-lg bg-gray-400">
        <div className="mb-2">
          <h2 className="text-lg font-semibold">{vendor.name}</h2>
        </div>
        <div>
          <p className="text-sm text-gray-100">📧 {vendor.email}</p>
          <p className="text-sm text-gray-100">📞 {vendor.phone}</p>
          <p className="text-sm text-gray-100 font-semibold">
            💰 Payables: ₹{vendor.payables.toLocaleString()}
          </p>
        </div>
      </div>
     
    );
  };
  
  export default VendorCard;
  