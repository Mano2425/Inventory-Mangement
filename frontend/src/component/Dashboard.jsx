import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function Dashboard() {
  const data = [
    { name: "Low Stock Items", value: 10 },
    { name: "All Item Group", value: 39 },
    { name: "All Items", value: 190 },
  ];
  const COLORS = ["#FFBB28", "#FF8042", "#00C49F"];

  return (
    <div className="bg-gray-700 text-white p-8 min-h-full">
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
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold text-green-400">Product Details</h2>

          {/* Displaying numbers outside the chart */}
          <div className="mt-2 text-center">
            <p className="text-gray-400">Low Stock Items: <span className="font-bold">{data[0].value}</span></p>
            <p className="text-gray-400">All Item Group: <span className="font-bold">{data[1].value}</span></p>
            <p className="text-gray-400">All Items: <span className="font-bold">{data[2].value}</span></p>
          </div>

          {/* Donut Chart */}
          <PieChart width={250} height={250}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={8}
              dataKey="value"
              label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                const RADIAN = Math.PI / 180;
                const radius =  innerRadius + (outerRadius - innerRadius) * 0.5;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);
                return (
                  <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                  </text>
                );
              }}
              labelLine={false} // Keeps labels inside the chart
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend align="center" verticalAlign="bottom" />
          </PieChart>
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
}
