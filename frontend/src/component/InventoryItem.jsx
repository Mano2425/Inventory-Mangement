import { useState } from "react";

export default function InventoryItem({ product, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleChange = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate(updatedProduct);
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Call the onDelete function passed from parent to remove the product
    onDelete(product.id);
  };

  return (
    <div className="p-4 border rounded bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={updatedProduct.name}
            onChange={handleChange}
            className="border p-1 rounded w-full"
          />
        ) : (
          <h2 className="text-lg font-semibold">{product.name}</h2>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-2">
        <div>
          <label className="block text-sm">Quantity</label>
          {isEditing ? (
            <input
              type="number"
              name="quantity"
              value={updatedProduct.quantity}
              onChange={handleChange}
              className="border p-1 rounded w-full"
            />
          ) : (
            <p>{product.quantity}</p>
          )}
        </div>

        <div>
          <label className="block text-sm">Price (INR)</label>
          {isEditing ? (
            <input
              type="number"
              name="price"
              value={updatedProduct.price}
              onChange={handleChange}
              className="border p-1 rounded w-full"
            />
          ) : (
            <p>₹{product.price}</p>
          )}
        </div>

        <div>
          <label className="block text-sm">Description</label>
          {isEditing ? (
            <textarea
              name="description"
              value={updatedProduct.description}
              onChange={handleChange}
              className="border p-1 rounded w-full"
            />
          ) : (
            <p>{product.description}</p>
          )}
        </div>
      </div>

      <div className="mt-4 flex justify-between ">
        <div>
          {isEditing ? (
            <button onClick={handleSave} className="bg-green-500 text-white px-4 py-1 rounded">
              Save
            </button>
          ) : (
            <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-1 rounded">
              Edit
            </button>
          )}
        </div>

        {/* Delete Button */}
        <div>
          <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-1 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
