import { useState } from "react";
import InventoryItem from "./InventoryItem";

export default function Inventory() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      quantity: 10,
      price: 50000,
      description: "High-performance laptop",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Smartphone",
      quantity: 20,
      price: 30000,
      description: "Latest model smartphone",
      image: "https://via.placeholder.com/100",
    },
  ]);

  const handleUpdate = (updatedProduct) => {
    setProducts(products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
  };

  const handleDelete = (productId) => {
    setProducts(products.filter((p) => p.id !== productId)); // Filter out the product to delete
  };

  return (
    <div className="p-6 w-full mx-0">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <InventoryItem key={product.id} product={product} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
