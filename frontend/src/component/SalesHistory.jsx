import React from "react";
const salesData = [
    { buyerName: "ABC Supplies", itemName: "Laptop", qty: 1, amount: 50000 },
    { buyerName: "XYZ Traders", itemName: "Monitor", qty: 2, amount: 32000 },
    { buyerName: "PQR Enterprise", itemName: "CPU", qty: 2, amount: 60000 },
  ];

export default function SalesHistory () {
 
    return (
      <div className="p-6 bg-gray-800 shadow rounded-lg">
        <h2 className="text-xl font-bold  text-amber-50 mb-4">Sales History</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-300  text-amber-50 p-2">Buyer Name</th>
              <th className="border border-gray-300  text-amber-50 p-2">Item Name</th>
              <th className="border border-gray-300  text-amber-50 p-2">Quantity</th>
              <th className="border border-gray-300  text-amber-50 p-2">Amount</th>
              <th className="border border-gray-300  text-amber-50 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300  text-amber-50 p-2">{sale.buyerName}</td>
                <td className="border border-gray-300  text-amber-50 p-2">{sale.itemName}</td>
                <td className="border border-gray-300  text-amber-50 p-2">{sale.qty}</td>
                <td className="border border-gray-300  text-amber-50 p-2">₹{sale.amount}</td>
                <td className="border border-gray-300  text-amber-50 p-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded">Track Shipment</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };