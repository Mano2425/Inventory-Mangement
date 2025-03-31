import { useState } from "react";
import VendorCard from "./VendorCard";

const VendorList = ({ customers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const vendorsPerPage = 12; 


  const totalPages = Math.ceil(customers.length / vendorsPerPage);

  const indexOfLastVendor = currentPage * vendorsPerPage;
  const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage;
  const currentVendors = customers.slice(indexOfFirstVendor, indexOfLastVendor);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full p-4 bg-gray-800 min-h-full">
      <h2 className="text-xl font-bold text-gray-100 text-center mb-4">Customers</h2>
      <div className="grid grid-cols-3 gap-4">
        {currentVendors.map((vendor, index) => (
          <VendorCard key={index} vendor={vendor} />
        ))}
      </div>
      
      <div className="flex justify-center mt-7">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-2 bg-blue-500 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </button>
        <span className="text-white px-4 py-2">Page {currentPage} of {totalPages}</span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 mx-2 bg-blue-500 text-white rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VendorList;
