import { useState } from 'react';

export default function NewItemForm() {
  const [itemType, setItemType] = useState('Goods');
  const [returnable, setReturnable] = useState(true);
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" max-w-full h-screen mx-0 bg-gray-700 min-h-screen ">
      <div className="mx-70 my-0 bg-gray-600 p-6 h-screen min-h-screen rounded-2xl">
      <h1 className="text-2xl font-bold text-amber-50 mb-4">New Item</h1>

      <div className="mb-4 ">
        <label className="block text-amber-50 mb-2 ">Product Image</label>
        <div className="w-24 h-24  border-dashed border-2 border-gray-50 flex items-center  justify-items-center cursor-pointer" onClick={() => document.getElementById('fileInput').click()}>
          {!image ? (
            <span className="text-gray-100 text-center" >+ Add Image</span>
          ) : (
            <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
          )}
        </div>
        <input id="fileInput" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
      </div>

      <div className="mb-6 text-amber-50">
        <label className="block text-amber-50 mb-2">Item Name</label>
        <input type="text" placeholder="Enter item name" className="w-150 p-2 border rounded" />
      </div>


      <div className="mb-4 text-amber-50 flex items-center ">
      <div>
        <label className="block text-amber-50 mb-1 ">Quantity</label>
        <input type="number" placeholder="Enter Quantity" className="w-50 p-2 mr-20 border rounded " />
        </div>
        <div>
        <label className="block text-amber-50 mb-1 ">Minimum Quantity</label>
        <input type="number" placeholder="Enter Min Qty" className="w-50 p-2 border rounded " />
        </div>
      </div>

      <div className="mb-4 text-amber-50">
        <label className="block text-amber-50 mb-2">Selling Price (INR)</label>
        <input type="number" placeholder="Enter Selling Price" className="w-150 p-2 text-amber-50 border rounded" />
      </div>

      <div className="mb-4">
        <label className="block text-amber-50 mb-2">Account</label>
        <select className="w-150 p-2 text-amber-50 border rounded">
          <option value="sales" className="text-black">Sales</option>
          <option value="expenses " className="text-black">Expenses</option>
        </select>
      </div>

      <div className="mb-4 text-amber-50">
        <label className="block mb-2">Description</label>
        <textarea placeholder="Enter description" className="w-150 p-2 border rounded h-24"></textarea>
      </div>

      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
      </div>
      </div>
    </div>
  );
}
