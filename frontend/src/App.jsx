import React from 'react';
import Dashboard from './component/Dashboard'
import PurchaseOrder from './component/PurchaseOrder';
import SalesHistory from './component/SalesHistory';
import AddProduct from './component/AddProduct';
import Sidebar from './component/Sidebar';
import { Route,Routes ,BrowserRouter} from 'react-router-dom';
import './App.css'
import VendorList from './component/VendorLIst';
import VendorProfile from './component/VendorProfile';
import PaymentsReceived from './component/PaymentReceived';
import Inventory from './component/Inventory';

const customers=[
  {
    "id": 1,
    "name": "Mr. Manoj",
    "type": "Individual",
    "email": "mano16years@gmail.com",
    "mobile": "9466467653",
    "workPhone": "9467667658",
    "payables": "Rs. 0.00",
    "totalItemsOrdered": 0,
    "toBeReceived": 0,
    "unusedCredits": "Rs. 0.00"
  },
  {
    "id": 2,
    "name": "Ms. Priya Sharma",
    "type": "Individual",
    "email": "priya.sharma@example.com",
    "mobile": "9876543210",
    "workPhone": "9823456789",
    "payables": "Rs. 500.00",
    "totalItemsOrdered": 3,
    "toBeReceived": 1,
    "unusedCredits": "Rs. 50.00"
  },
  {
    "id": 3,
    "name": "Mr. Rahul Verma",
    "type": "Individual",
    "email": "rahul.verma@example.com",
    "mobile": "8765432109",
    "workPhone": "8745632109",
    "payables": "Rs. 1200.00",
    "totalItemsOrdered": 5,
    "toBeReceived": 2,
    "unusedCredits": "Rs. 100.00"
  },
  {
    "id": 4,
    "name": "Ms. Ananya Iyer",
    "type": "Individual",
    "email": "ananya.iyer@example.com",
    "mobile": "7654321098",
    "workPhone": "7645321980",
    "payables": "Rs. 250.00",
    "totalItemsOrdered": 2,
    "toBeReceived": 0,
    "unusedCredits": "Rs. 30.00"
  },
  {
    "id": 5,
    "name": "Mr. Suresh Kumar",
    "type": "Individual",
    "email": "suresh.kumar@example.com",
    "mobile": "6543210987",
    "workPhone": "6543987210",
    "payables": "Rs. 800.00",
    "totalItemsOrdered": 4,
    "toBeReceived": 1,
    "unusedCredits": "Rs. 75.00"
  },
  {
    "id": 6,
    "name": "Ms. Kavita Das",
    "type": "Individual",
    "email": "kavita.das@example.com",
    "mobile": "5432109876",
    "workPhone": "5432876109",
    "payables": "Rs. 0.00",
    "totalItemsOrdered": 1,
    "toBeReceived": 0,
    "unusedCredits": "Rs. 20.00"
  },
  {
    "id": 7,
    "name": "Mr. Arjun Nair",
    "type": "Individual",
    "email": "arjun.nair@example.com",
    "mobile": "4321098765",
    "workPhone": "4321765890",
    "payables": "Rs. 3000.00",
    "totalItemsOrdered": 7,
    "toBeReceived": 3,
    "unusedCredits": "Rs. 200.00"
  },
  {
    "id": 8,
    "name": "Ms. Sneha Reddy",
    "type": "Individual",
    "email": "sneha.reddy@example.com",
    "mobile": "3210987654",
    "workPhone": "3210789654",
    "payables": "Rs. 450.00",
    "totalItemsOrdered": 2,
    "toBeReceived": 1,
    "unusedCredits": "Rs. 50.00"
  },
  {
    "id": 9,
    "name": "Mr. Vikram Singh",
    "type": "Individual",
    "email": "vikram.singh@example.com",
    "mobile": "2109876543",
    "workPhone": "2109654783",
    "payables": "Rs. 2000.00",
    "totalItemsOrdered": 6,
    "toBeReceived": 2,
    "unusedCredits": "Rs. 120.00"
  },
  {
    "id": 10,
    "name": "Ms. Pooja Patel",
    "type": "Individual",
    "email": "pooja.patel@example.com",
    "mobile": "1098765432",
    "workPhone": "1098547321",
    "payables": "Rs. 0.00",
    "totalItemsOrdered": 0,
    "toBeReceived": 0,
    "unusedCredits": "Rs. 10.00"
  }
]



function App() {

  return (
    <BrowserRouter>
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/purchase-order" element={<PurchaseOrder />} />
          <Route path="/sales-history" element={<SalesHistory />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/customers" element={<VendorList customers={customers}/>} />
          <Route path="/customers/:id"  element={<VendorProfile customers={customers}/>} />
          <Route path="/paymentReceived"  element={<PaymentsReceived/>} />
          <Route path="/inventory" element={<Inventory/>} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>

  )
}

export default App
