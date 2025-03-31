import React from "react";
export default function Dashboard () {
    return (
      <div className="bg-gray-900 text-white p-8 min-h-full">
        <h1 className="text-3xl font-bold">Inventory Management Dashboard</h1>
        <br />
        
        <div className="grid grid-cols-3 gap-6">
          {/* Sales Activity */}
          <div className="bg-gray-800 p-4 rounded-lg col-span-3">
            <h2 className="text-xl font-semibold text-green-400">Sales Activity</h2>
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-3xl font-bold">228</p>
                <p className="text-gray-400">To be Packed</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-3xl font-bold">6</p>
                <p className="text-gray-400">To be Shipped</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-3xl font-bold">10</p>
                <p className="text-gray-400">To be Delivered</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-3xl font-bold">474</p>
                <p className="text-gray-400">To be Invoiced</p>
              </div>
            </div>
          </div>
  
          {/* Inventory Summary */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-green-400">Inventory Summary</h2>
            <p className="text-4xl font-bold mt-4">10,458</p>
            <p className="text-gray-400">Quantity in Hand</p>
          </div>
  
          {/* Product Details */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-green-400">Product Details</h2>
            <p className="text-gray-400">Low Stock Items: 3</p>
            <p className="text-gray-400">All Item Group: 39</p>
            <p className="text-gray-400">All Items: 190</p>
            <p className="text-gray-400">Unconfirmed Items: 121</p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-16  rounded-full bg-yellow-500 flex items-center justify-center">
                <p className="text-black font-bold">71%</p>
              </div>
            </div>
          </div>
  
          {/* Top Selling Items */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-green-400">Top Selling Items</h2>
            <p className="text-gray-400">Product 1: <span className="text-3xl font-bold">171</span> pcs</p>
            <p className="text-gray-400">Product 2: <span className="text-3xl font-bold">45</span> sets</p>
          </div>
        </div>
      </div>
    );
  };