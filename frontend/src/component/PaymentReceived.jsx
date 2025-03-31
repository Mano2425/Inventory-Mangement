import React from 'react';
import { Search, Filter } from 'lucide-react';

const PaymentsReceived = () => { 
return(
<div className="p-4 min-h-screen bg-gray-100"> 
<div className="flex justify-between items-center mb-4">
     <h1 className="text-2xl font-bold">Payments Received</h1>
      <div className="flex gap-2">
         <button className="p-2 bg-white shadow-md rounded-lg hover:bg-gray-200"> 
            <Search className="w-5 h-5" /> </button>
             <button className="p-2 bg-white shadow-md rounded-lg hover:bg-gray-200"> 
            <Filter className="w-5 h-5" /> </button> </div> </div>

<div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-lg font-medium">Mj Prvt Limited</h2>
        <p className="text-sm text-gray-500">31 Mar 2025</p>
        <p className="text-sm text-gray-700">INVOICE PAYMENT</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold">Rs. 6,000.00</p>
        <p className="text-sm text-green-600">Cash</p>
      </div>
    </div>
  </div>
</div>

);
 };

export default PaymentsReceived;