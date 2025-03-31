import { useState } from "react";
import { Edit, Paperclip, MoreVertical, Phone, Mail, Smartphone, Globe, Trash2, Check, X } from "lucide-react";
import { useParams } from "react-router-dom";

const VendorProfile = ({customers}) => {
  const [activeTab, setActiveTab] = useState("details");
  const [expandedSection, setExpandedSection] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const {id}=useParams();
  console.log(id);
  const customer=customers.find((customer)=>customer.id=== parseInt(id))
  const [vendor, setVendor] = useState(customer);
  console.log(customer)
  const [editedVendor, setEditedVendor] = useState({ ...vendor });

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this vendor?")) {
      console.log("Vendor deleted");
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setVendor(editedVendor);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedVendor(vendor);
    setIsEditing(false);
  };

  return (
    <div className=" max-w-lg mx-auto bg-white shadow-md rounded-lg p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-3">
        {isEditing ? (
          <input
            type="text"
            className="text-lg font-semibold border p-1 rounded w-full"
            value={editedVendor.name}
            onChange={(e) => setEditedVendor({ ...editedVendor, name: e.target.value })}
          />
        ) : (
          <h2 className="text-lg font-semibold">{vendor.name}</h2>
        )}
        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <Check className="cursor-pointer text-green-500" onClick={handleSaveClick} />
              <X className="cursor-pointer text-red-500" onClick={handleCancelClick} />
            </>
          ) : (
            <Edit className="cursor-pointer" onClick={handleEditClick} />
          )}
          <Paperclip className="cursor-pointer" />
          <div className="relative group">
            <MoreVertical className="cursor-pointer" />
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 flex items-center"
                onClick={handleDelete}
              >
                <Trash2 className="mr-2" /> Delete Vendor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payables & Unused Credits */}
      <div className="grid grid-cols-2 gap-4 py-3 border-b">
        <div>
          <p className="text-gray-500">Payables</p>
          <p className="text-xl font-semibold">{vendor.payables}</p>
          <p className="text-gray-500 mt-1">To be received: {vendor.toBeReceived}</p>
          <p className="text-gray-500">Total items ordered: {vendor.totalItemsOrdered}</p>
        </div>
        <div>
          <p className="text-gray-500">Unused Credits</p>
          <p className="text-xl font-semibold">{vendor.unusedCredits}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b mt-3">
        {["details", "transactions", "comments"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${activeTab === tab ? "border-b-2 border-black font-semibold" : "text-gray-500"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Vendor Details */}
      {activeTab === "details" && (
        <div className="mt-4 bg-gray-50 p-3 rounded-lg">
          <h3 className="font-semibold flex items-center">
            <Globe className="mr-2" /> {vendor.name} <span className="ml-2 bg-gray-200 px-2 rounded">INR</span>
          </h3>
          <a href={`mailto:${vendor.email}`} className="text-blue-500">{vendor.email}</a>
          <div className="flex items-center text-gray-500 mt-2">
            <Smartphone className="mr-2" /> {vendor.mobile}
            <Phone className="ml-4 mr-2" /> {vendor.workPhone}
          </div>
        </div>
      )}

      {/* Collapsible Sections */}
      {["More Information", "Contact Persons"].map((section) => (
        <div key={section} className="mt-4 bg-gray-50 p-3 rounded-lg">
          <button
            className="w-full flex justify-between items-center font-semibold text-left"
            onClick={() => toggleSection(section)}
          >
            {section}
            <span>{expandedSection === section ? "▲" : "▼"}</span>
          </button>
          {expandedSection === section && <p className="text-gray-500 mt-2">More details about {section}...</p>}
        </div>
      ))}
    </div>
  );
};

export default VendorProfile;
