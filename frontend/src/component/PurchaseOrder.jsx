import React from "react";
import { useState } from "react";
const purchaseOrders = [
    { itemId: "201", itemName: "Monitor", orderQuantity: 10, status: "Ordered" },
    { itemId: "202", itemName: "Chair", orderQuantity: 20, status: "Pending" },
    { itemId: "203", itemName: "Desk", orderQuantity: 15, status: "Ordered" },
  ];
  
  export default function PurchaseOrder () {
    const [orders, setOrders] = useState(purchaseOrders);
  
    const handleArrival = (id) => {
      setOrders(
        orders.map(order => 
          order.itemId === id ? { ...order, status: "Arrived" } : order
        )
      );
    };
  
    return (
      <div className="p-6 bg-gray-800 shadow rounded-lg">
        <h2 className="text-xl font-bold  text-amber-50 mb-4">Purchase Orders</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-white-200">
              <th className="border border-gray-300 t text-amber-50 p-2">Item ID</th>
              <th className="border border-gray-300  text-amber-50  p-2">Item Name</th>
              <th className="border border-gray-300  text-amber-50  p-2">Order Quantity</th>
              <th className="border border-gray-300  text-amber-50  p-2">Status</th>
              <th className="border border-gray-300  text-amber-50  p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.itemId} className="text-center">
                <td className="border border-gray-300  text-amber-50 p-2">{order.itemId}</td>
                <td className="border border-gray-300  text-amber-50 p-2">{order.itemName}</td>
                <td className="border border-gray-300  text-amber-50 p-2">{order.orderQuantity}</td>
                <td className="border border-gray-300  text-amber-50 p-2">{order.status}</td>
                <td className="border border-gray-300  text-amber-50 p-2">
                  {order.status === "Ordered" && (
                    <button 
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                      onClick={() => handleArrival(order.itemId)}
                    >
                      Mark as Arrived
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  