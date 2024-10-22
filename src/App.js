// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './HomePage';
// import FarmerPage from './FarmerPage';
// import BuyerPage from './BuyerPage';
// import FarmerLogin from './FarmerLogin';
// import FarmerRegister from './FarmerRegister';
// import BuyerLogin from './BuyerLogin';
// import BuyerRegister from './BuyerRegister';
// import BuyerDashboard from './BuyerDashboard';
// import BuyerProducts from './BuyerProducts';
// import BuyerProfile from './BuyerProfile';
// import Products from './Products';
// import CartPage from './CartPage'; // Import CartPage if created
// import FarmerDashboard from './FarmerDashboard'; // Import the component


// // Remove the Home component from here and move it outside the App component if needed

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/farmers" element={<FarmerPage />} />
//         <Route path="/buyers" element={<BuyerPage />} />
//         <Route path="/farmer-login" element={<FarmerLogin />} />
//         <Route path="/farmer-register" element={<FarmerRegister />} />
//         <Route path="/buyer-register" element={<BuyerRegister />} />
//         <Route path="/buyer-products" element={<BuyerProducts />} />
//         <Route path="/buyer-profile" element={<BuyerProfile />} />
//         <Route path="/BuyerDashboard" element={<BuyerDashboard />} /> {/* Corrected the casing */}
//         <Route path="/buyer-login" element={<BuyerLogin />} />
//         <Route path="/products/:category" element={<Products />} /> {/* Dynamic route */}
//         <Route path="/cart" element={<CartPage />} /> {/* Cart page */}
//         <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
//       </Routes>
//     </Router>
//   );
// };

// // If you still need the Home component, it should be outside the App component
// const Home = () => {
//   const handleUserTypeSelection = (userType) => {
//     console.log(`Selected user type: ${userType}`);
//     // Handle logic for user type selection
//   };
  
//   return (
//     <HomePage
//       onFarmerClick={() => handleUserTypeSelection('farmer')}
//       onBuyerClick={() => handleUserTypeSelection('buyer')}
//     />
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './HomePage';
// import FarmerPage from './FarmerPage';
// import BuyerPage from './BuyerPage';
// import FarmerLogin from './FarmerLogin';
// import FarmerRegister from './FarmerRegister';
// import BuyerLogin from './BuyerLogin';
// import BuyerRegister from './BuyerRegister';
// import BuyerDashboard from './BuyerDashboard';
// import BuyerProducts from './BuyerProducts';
// import BuyerProfile from './BuyerProfile';
// import Products from './Products';
// import CartPage from './CartPage'; // Import CartPage if created
// import FarmerDashboard from './FarmerDashboard'; // Import the component
// import ProductSellingPage from './ProductSellingPage';
// import OrdersPage from './OrdersPage';  // Create OrdersPage component
// import Account from './Account'; 
// import YourProductsPage from './YourProductsPage'; // Import the new component
// import FarmerAccountPage from './FarmerAccountPage'; // Import the account page


// import '@fortawesome/fontawesome-free/css/all.min.css';


// const App = () => {
//   return (
//     <Router>
//       <Routes>
        
//         <Route path="/" element={<HomePage />} />
//         <Route path="/farmers" element={<FarmerPage />} />
//         <Route path="/buyers" element={<BuyerPage />} />
//         <Route path="/farmer-login" element={<FarmerLogin />} />
//         <Route path="/farmer-register" element={<FarmerRegister />} />
//         <Route path="/buyer-login" element={<BuyerLogin />} />
//         <Route path="/buyer-register" element={<BuyerRegister />} />
//         <Route path="/buyer-dashboard" element={<BuyerDashboard />} /> {/* Corrected the casing */}
//         <Route path="/buyer-products" element={<BuyerProducts />} />
//         <Route path="/buyer-profile" element={<BuyerProfile />} />
//         <Route path="/products/:category" element={<Products />} /> {/* Dynamic route */}
//         <Route path="/cart" element={<CartPage />} /> {/* Cart page */}
//         <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
//         <Route path="/farmeraccountpage" element={<FarmerAccountPage />} />

//         <Route path="/sell" element={<ProductSellingPage />} />
//         <Route path="/your-products" element={<YourProductsPage />} /> {/* Add this line */}

//                 <Route path="/orders" element={<OrdersPage />} />
//                 <Route path="/buyer-profile/:id" element={<Account />} />

//       </Routes>
//     </Router>
//   );
// };

// // If you still need the Home component, it should be outside the App component
// const Home = () => {
//   const handleUserTypeSelection = (userType) => {
//     console.log(`Selected user type: ${userType}`);
//     // Handle logic for user type selection
//   };

//   return (
//     <HomePage
//       onFarmerClick={() => handleUserTypeSelection('farmer')}
//       onBuyerClick={() => handleUserTypeSelection('buyer')}
//     />
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './HomePage';
// import FarmerPage from './FarmerPage';
// import BuyerPage from './BuyerPage';
// import FarmerLogin from './FarmerLogin';
// import FarmerRegister from './FarmerRegister';
// import BuyerLogin from './BuyerLogin';
// import BuyerRegister from './BuyerRegister';
// import BuyerDashboard from './BuyerDashboard';
// import BuyerProducts from './BuyerProducts';
// import BuyerProfile from './BuyerProfile';
// import Products from './Products';
// import CartPage from './CartPage'; // Import CartPage if created
// import FarmerDashboard from './FarmerDashboard'; // Import the component
// import ProductSellingPage from './ProductSellingPage';
// import OrdersPage from './OrdersPage';  // Create OrdersPage component
// import Account from './Account';
// import YourProductsPage from './YourProductsPage'; // Import the new component
// import FarmerAccountPage from './FarmerAccountPage'; // Import the account page

// import '@fortawesome/fontawesome-free/css/all.min.css';

// const App = () => {
//   const handleLogout = () => {
//       // Clear any user session data and navigate to the login or home page
//       localStorage.removeItem('farmer'); // Clear the farmer data
//       navigate('/'); // Redirect to the home page
//   };
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/farmers" element={<FarmerPage />} />
//         <Route path="/buyers" element={<BuyerPage />} />
//         <Route path="/farmer-login" element={<FarmerLogin />} />
//         <Route path="/farmer-register" element={<FarmerRegister />} />
//         <Route path="/buyer-login" element={<BuyerLogin />} />
//         <Route path="/buyer-register" element={<BuyerRegister />} />
//         <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
//         <Route path="/buyer-products" element={<BuyerProducts />} />
//         <Route path="/buyer-profile/:id" element={<BuyerProfile />} />
//         <Route path="/products/:category" element={<Products />} /> {/* Dynamic route */}
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
//         <Route path="/farmer-account" element={<FarmerAccountPage />} />
//         <Route path="/sell" element={<ProductSellingPage />} />
//         <Route path="/your-products" element={<YourProductsPage />} />
//         <Route path="/orders" element={<OrdersPage />} />
//         <Route path="/buyer-profile/:id" element={<Account />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; // Import useNavigate
import HomePage from './HomePage';
import FarmerPage from './FarmerPage';
import BuyerPage from './BuyerPage';
import FarmerLogin from './FarmerLogin';
import FarmerRegister from './FarmerRegister';
import BuyerLogin from './BuyerLogin';
import BuyerRegister from './BuyerRegister';
import BuyerDashboard from './BuyerDashboard';
import BuyerProducts from './BuyerProducts';
import BuyerProfile from './BuyerProfile';
import Products from './Products';
import CartPage from './CartPage'; // Import CartPage if created
import FarmerDashboard from './FarmerDashboard'; // Import the component
import ProductSellingPage from './ProductSellingPage';
import OrdersPage from './OrdersPage';  // Create OrdersPage component
import Account from './Account';
import YourProductsPage from './YourProductsPage'; // Import the new component
import FarmerAccountPage from './FarmerAccountPage'; // Import the account page

import '@fortawesome/fontawesome-free/css/all.min.css';

// Create a wrapper component for handling logout
const AppRoutes = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleLogout = () => {
    // Clear any user session data and navigate to the login or home page
    localStorage.removeItem('farmer'); // Clear the farmer data
    navigate('/'); // Redirect to the home page
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/farmers" element={<FarmerPage />} />
      <Route path="/buyers" element={<BuyerPage />} />
      <Route path="/farmer-login" element={<FarmerLogin />} />
      <Route path="/farmer-register" element={<FarmerRegister />} />
      <Route path="/buyer-login" element={<BuyerLogin />} />
      <Route path="/buyer-register" element={<BuyerRegister />} />
      <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
      <Route path="/buyer-products" element={<BuyerProducts />} />
      <Route path="/buyer-profile/:id" element={<BuyerProfile />} />
      <Route path="/products/:category" element={<Products />} /> {/* Dynamic route */}
      <Route path="/cart" element={<CartPage />} />
      <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
      <Route path="/farmer-account" element={<FarmerAccountPage />} />
      <Route path="/sell" element={<ProductSellingPage />} />
      <Route path="/your-products" element={<YourProductsPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/buyer-profile/:id" element={<Account />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <AppRoutes /> {/* Use the wrapper component */}
    </Router>
  );
};

export default App;
