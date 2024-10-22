// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const FarmerDashboard = () => {
//   const navigate = useNavigate();

//   const handleAddProduct = () => {
//     // Navigate to the add product page
//     navigate('/add-product');
//   };

//   const handleViewOrders = () => {
//     // Navigate to the orders page
//     navigate('/view-orders');
//   };

//   const handleViewAnalytics = () => {
//     // Navigate to the analytics page (like sales stats, etc.)
//     navigate('/analytics');
//   };

//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: '20px',
//       height: '100vh',
//       backgroundColor: '#f4f4f9',
//     }}>
//       <h1 style={{
//         fontFamily: 'Cooper Black',
//         fontSize: '36px',
//         marginBottom: '40px',
//         textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
//       }}>
//         Farmer Dashboard
//       </h1>

//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-around',
//         width: '80%',
//         flexWrap: 'wrap',
//       }}>
//         {/* Add Product Section */}
//         <div style={{
//           padding: '20px',
//           margin: '20px',
//           width: '300px',
//           height: '150px',
//           backgroundColor: '#38a169',
//           color: '#fff',
//           borderRadius: '10px',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           cursor: 'pointer',
//           boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//           textAlign: 'center',
//         }} onClick={handleAddProduct}>
//           <h3>Add New Product</h3>
//         </div>

//         {/* View Orders Section */}
//         <div style={{
//           padding: '20px',
//           margin: '20px',
//           width: '300px',
//           height: '150px',
//           backgroundColor: '#4299e1',
//           color: '#fff',
//           borderRadius: '10px',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           cursor: 'pointer',
//           boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//           textAlign: 'center',
//         }} onClick={handleViewOrders}>
//           <h3>View Orders</h3>
//         </div>

//         {/* View Analytics Section */}
//         <div style={{
//           padding: '20px',
//           margin: '20px',
//           width: '300px',
//           height: '150px',
//           backgroundColor: '#d69e2e',
//           color: '#fff',
//           borderRadius: '10px',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           cursor: 'pointer',
//           boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//           textAlign: 'center',
//         }} onClick={handleViewAnalytics}>
//           <h3>View Analytics</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FarmerDashboard;


// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavBar from './NavBar'; // Adjust the import path as needed
// import './FarmerDashboard.css'; // CSS File

// const FarmerDashboard = () => {
//     const navigate = useNavigate();
    
//     // Create a ref for the sales analytics section
//     const salesAnalyticsRef = useRef(null);

//     const handleLogout = () => {
//         navigate('/');
//     };

//     const handleOrders = () => {
//         navigate('/orders');
//     };

//     const handleSellProducts = () => {
//         navigate('/sell');
//     };

//     const handleSalesAnalytics = () => {
//         navigate('/analytics');
//     };

//     // Function to scroll to the Sales Analytics section
//     const handleShopNowClick = () => {
//         if (salesAnalyticsRef.current) {
//             salesAnalyticsRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             {/* NavBar Component */}
//             <NavBar 
//                 onOrdersClick={handleOrders} 
//                 onSellClick={handleSellProducts} 
//                 onLogout={handleLogout} 
//             />

//             {/* Hero Section */}
//             <div className="hero-section">
//                 <h1>Empowering Farmers, Connecting You to Your Market</h1>
//                 <p>Your Platform to Sell Fresh Produce Directly to Consumers.</p>
//                 <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
//             </div>
           
//             {/* Featured Categories Section */}
//             <div className="featured-categories">
//                 <h2>Dashboard Categories</h2>
//                 <div className="categories-container">
//                     <div className="category" onClick={handleSellProducts}>
//                         <img src='/sell.jpg' alt="Sell Products" />
//                         <div className="category-title">Sell Products</div>
//                     </div>
//                     <div className="category" onClick={handleOrders}>
//                         <img src="/orders.jpg" alt="View Orders" />
//                         <div className="category-title">View Orders</div>
//                     </div>
//                     <div className="category" onClick={handleSalesAnalytics}>
//                         <img src="/analytics.jpg" alt="Sales Analytics" />
//                         <div className="category-title">Sales Analytics</div>
//                     </div>
//                 </div>
//             </div>

//             {/* About Us Section */}
//             <div className="about-us-section">
//                 <div className="about-us-content">
//                     <h2>About Us</h2>
//                     <p><b>
//                         At FarmConnect, we empower farmers to directly connect with consumers, enhancing their market reach. Our platform ensures that your high-quality agricultural products are easily accessible, enabling you to grow your business while providing fresh produce to your community.
//                     </b></p>
//                 </div>
//                 <div className="about-us-stats">
//                     <div className="stat-item">
//                         <p>Total Sales</p>
//                         <div className="progress-bar">
//                             <div className="progress" style={{ width: "75%" }}></div>
//                         </div>
//                     </div>
//                     <div className="stat-item">
//                         <p>Customer Feedback</p>
//                         <div className="progress-bar">
//                             <div className="progress" style={{ width: "85%" }}></div>
//                         </div>
//                     </div>
//                     <div className="stat-item">
//                         <p>Produce Quality Rating </p>
//                         <div className="progress-bar">
//                             <div className="progress" style={{ width: "90%" }}></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Subscription Plans Section */}
//             <div className="subscription-section">
//                 <h2>Choose Your Subscription Plan</h2>
//                 <div className="subscription-container">
//                     <div className="subscription-cards">
//                         <div className="subscription-plan card">
//                             <span className="offer-label">Exclusive Offer <span className="offer-tag">10% OFF</span></span>
//                             <h3>Monthly Subscription</h3>
//                             <p>Get access to exclusive tools and resources for your farming business, plus 10% off on premium features.</p>
//                             <button className="subscribe-btn">Get Best Deal →</button>
//                         </div>

//                         <div className="subscription-plan card">
//                             <span className="offer-label">Regular Offer</span>
//                             <h3>Annual Subscription</h3>
//                             <p>Enjoy all benefits for a year with a 15% discount on your subscription plan. Perfect for long-term growth.</p>
//                             <button className="subscribe-btn">Shop Now →</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FarmerDashboard;

// Other imports...
// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavBar from './NavBar'; // Adjust the import path as needed
// import './FarmerDashboard.css'; // CSS File

// const FarmerDashboard = () => {
//     const navigate = useNavigate();
    
//     // Create a ref for the sales analytics section
//     const salesAnalyticsRef = useRef(null);

//     const handleLogout = () => {
//         navigate('/');
//     };

//     const handleOrders = () => {
//         navigate('/orders');
//     };

//     const handleSellProducts = () => {
//         navigate('/sell');
//     };

//     const handleSalesAnalytics = () => {
//         navigate('/analytics');
//     };

//     // Function to scroll to the Sales Analytics section
//     const handleShopNowClick = () => {
//         if (salesAnalyticsRef.current) {
//             salesAnalyticsRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             {/* NavBar Component */}
//             <NavBar 
//                 onOrdersClick={handleOrders} 
//                 onSellClick={handleSellProducts} 
//                 onLogout={handleLogout} 
//             />

//             {/* Hero Section */}
//             <div className="hero-section">
//                 <h1>Empowering Farmers, Connecting You to Your Market</h1>
//                 <p>Your Platform to Sell Fresh Produce Directly to Consumers.</p>
//                 <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
//             </div>
           
//             {/* Updated Featured Categories Section */}
//             <div className="featured-categories">
//                 <h2>Dashboard Categories</h2>
//                 <div className="categories-container">
//                     <div className="category">
//                         <h3>Sell Your Produce</h3>
//                         <p>Connect directly with buyers and sell your fresh produce with ease.</p>
//                         <button onClick={handleSellProducts} className="go-to-sell-btn">Go to Sell</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Products</h3>
//                         <p>Manage and showcase your products effectively to attract customers.</p>
//                         <button onClick={handleSalesAnalytics} className="view-products-btn">View Products</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Orders</h3>
//                         <p>Keep track of all your orders and streamline your sales process.</p>
//                         <button onClick={handleOrders} className="view-orders-btn">View Orders</button>
//                     </div>
//                 </div>
//             </div>

//             {/* About Us Section */}
//             <div className="about-us-section">
//                 <div className="about-us-content">
//                     <h2>About Us</h2>
//                     <p><b>
//                         At FarmConnect, we empower farmers to directly connect with consumers, enhancing their market reach. Our platform ensures that your high-quality agricultural products are easily accessible, enabling you to grow your business while providing fresh produce to your community.
//                     </b></p>
//                 </div>
//             </div>

//             {/* Updated Subscription Plans Section */}
//             <div className="subscription-section">
//                 <h2>Join Our Subscription Plan</h2>
//                 <p className="subscription-description">Unlock exclusive benefits to maximize your farming potential!</p>
//                 <ul className="subscription-benefits">
//                     <li>✔ Enjoy special offers on our services and tools.</li>
//                     <li>✔ Connect with fellow farmers to share experiences and advice.</li>
//                     <li>✔ Receive alerts on market trends to make informed decisions.</li>
//                     <li>✔ Gain tools and information that enhance your productivity.</li>
//                 </ul>
//                 <button className="subscribe-btn">Subscribe Now</button>
//             </div>
//         </div>
//     );
// };

// export default FarmerDashboard;


// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavBar from './NavBar'; // Adjust the import path as needed
// import './FarmerDashboard.css'; // CSS File
// import aboutImage from './farmer.jpg'; // Replace with your image path
// import subscriptionImage from './subscription-image.png'; // Replace with your image path

// const FarmerDashboard = () => {
//     const navigate = useNavigate();
    
//     // Create a ref for the sales analytics section
//     const salesAnalyticsRef = useRef(null);

//     const handleLogout = () => {
//         navigate('/');
//     };

//     const handleOrders = () => {
//         navigate('/orders');
//     };

//     const handleSellProducts = () => {
//         navigate('/sell');
//     };

//     const handleSalesAnalytics = () => {
//         navigate('/analytics');
//     };

//     // Function to scroll to the Sales Analytics section
//     const handleShopNowClick = () => {
//         if (salesAnalyticsRef.current) {
//             salesAnalyticsRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             {/* NavBar Component */}
//             <NavBar 
//                 onOrdersClick={handleOrders} 
//                 onSellClick={handleSellProducts} 
//                 onLogout={handleLogout} 
//             />

//             {/* Hero Section */}
//             <div className="hero-section">
//                 <h1>Empowering Farmers, Connecting You to Your Market</h1>
//                 <p>Your Platform to Sell Fresh Produce Directly to Consumers.</p>
//                 <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
//             </div>
           
//             {/* Updated Featured Categories Section */}
//             <div className="featured-categories">
//                 <h2>Dashboard Categories</h2>
//                 <div className="categories-container">
//                     <div className="category">
//                         <h3>Sell Your Produce</h3>
//                         <p>Connect directly with buyers and sell your fresh produce with ease.</p>
//                         <button onClick={handleSellProducts} className="go-to-sell-btn">Go to Sell</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Products</h3>
//                         <p>Manage and showcase your products effectively to attract customers.</p>
//                         <button onClick={handleSalesAnalytics} className="view-products-btn">View Products</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Orders</h3>
//                         <p>Keep track of all your orders and streamline your sales process.</p>
//                         <button onClick={handleOrders} className="view-orders-btn">View Orders</button>
//                     </div>
//                 </div>
//             </div>

//             {/* About Us Section with Image */}
//             <div className="about-us-section">
//                 <div className="about-us-content">
//                     <h2>About Us</h2>
//                     <p><b>
//                         At FarmConnect, we empower farmers to directly connect with consumers, enhancing their market reach. Our platform ensures that your high-quality agricultural products are easily accessible, enabling you to grow your business while providing fresh produce to your community.
//                     </b></p>
//                 </div>
//                 <img src={aboutImage} alt="About Us" className="about-us-image" />
//             </div>

//             {/* Updated Subscription Plans Section with Image */}
//             <div className="subscription-section">
//                 <h2>Join Our Subscription Plan</h2>
//                 <p className="subscription-description">Unlock exclusive benefits to maximize your farming potential!</p>
//                 <ul className="subscription-benefits">
//                     <li>✔ Enjoy special offers on our services and tools.</li>
//                     <li>✔ Connect with fellow farmers to share experiences and advice.</li>
//                     <li>✔ Receive alerts on market trends to make informed decisions.</li>
//                     <li>✔ Gain tools and information that enhance your productivity.</li>
//                 </ul>
//                 <button className="subscribe-btn">Subscribe Now</button>
//                 <img src={subscriptionImage} alt="Subscription Plans" className="subscription-image" />
//             </div>
//         </div>
//     );
// };

// export default FarmerDashboard;




// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavBar from './NavBar'; // Adjust the import path as needed
// import './FarmerDashboard.css'; // CSS File
// import aboutImage from './farmer.jpg'; // Replace with your image path
// import subscriptionImage from './subscription-image.png'; // Replace with your image path

// const FarmerDashboard = () => {
//     const navigate = useNavigate();
    
//     // Create a ref for the sales analytics section
//     const salesAnalyticsRef = useRef(null);

//     const handleLogout = () => {
//         navigate('/');
//     };

//     const handleOrders = () => {
//         navigate('/orders');
//     };

//     const handleSellProducts = () => {
//         navigate('/sell');
//     };

//     const handleSalesAnalytics = () => {
//         navigate('/analytics');
//     };

//     // Function to scroll to the Sales Analytics section
//     const handleShopNowClick = () => {
//         if (salesAnalyticsRef.current) {
//             salesAnalyticsRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             {/* NavBar Component */}
//             <NavBar 
//                 onOrdersClick={handleOrders} 
//                 onSellClick={handleSellProducts} 
//                 onLogout={handleLogout} 
//             />

//             {/* Hero Section */}
//             <div className="hero-section">
//                 <h1>Empowering Farmers, Connecting You to Your Market</h1>
//                 <p>Your Platform to Sell Fresh Produce Directly to Consumers.</p>
//                 <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
//             </div>
           
//             {/* Updated Featured Categories Section */}
//             <div className="featured-categories">
//                 <h2>Dashboard Categories</h2>
//                 <div className="categories-container">
//                     <div className="category">
//                         <h3>Sell Your Produce</h3>
//                         <p>Connect directly with buyers and sell your fresh produce with ease.</p>
//                         <button onClick={handleSellProducts} className="go-to-sell-btn">Go to Sell</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Products</h3>
//                         <p>Manage and showcase your products effectively to attract customers.</p>
//                         <button onClick={handleSalesAnalytics} className="view-products-btn">View Products</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Orders</h3>
//                         <p>Keep track of all your orders and streamline your sales process.</p>
//                         <button onClick={handleOrders} className="view-orders-btn">View Orders</button>
//                     </div>
//                 </div>
//             </div>

//             {/* About Us Section with Image */}
//             <div className="about-us-section">
//                 <div className="about-us-content">
//                     <h2>About Us</h2>
//                     <p><b>
//                         At FarmConnect, we empower farmers to directly connect with consumers, enhancing their market reach. Our platform ensures that your high-quality agricultural products are easily accessible, enabling you to grow your business while providing fresh produce to your community.
//                     </b></p>
//                 </div>
//                 <img src={aboutImage} alt="About Us" className="about-us-image" />
//             </div>

//             {/* Updated Subscription Plans Section with Image */}
//             <div className="subscription-section">
//                 <div className="subscription-content">
//                     <h2>Join Our Subscription Plan</h2>
//                     <p className="subscription-description">Unlock exclusive benefits to maximize your farming potential!</p>
//                     <ul className="subscription-benefits">
//                         <li>✔ Enjoy special offers on our services and tools.</li>
//                         <li>✔ Connect with fellow farmers to share experiences and advice.</li>
//                         <li>✔ Receive alerts on market trends to make informed decisions.</li>
//                         <li>✔ Gain tools and information that enhance your productivity.</li>
//                     </ul>
//                     <button className="subscribe-btn">Subscribe Now</button>
//                 </div>
//                 <img src={subscriptionImage} alt="Subscription Plans" className="subscription-image" />
//             </div>
//         </div>
//     );
// };

// export default FarmerDashboard;


// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavBar from './NavBar'; // Adjust the import path as needed
// import './FarmerDashboard.css'; // CSS File
// import aboutImage from './farmer.jpg'; // Replace with your image path
// import subscriptionImage from './subscription-image.png'; // Replace with your image path

// const FarmerDashboard = () => {
//     const navigate = useNavigate();
    
//     // Create a ref for the sales analytics section
//     const salesAnalyticsRef = useRef(null);

//     const handleLogout = () => {
//         navigate('/');
//     };

//     const handleOrders = () => {
//         navigate('/orders');
//     };

//     const handleSellProducts = () => {
//         navigate('/sell');
//     };

//     const handleSalesAnalytics = () => {
//         navigate('/analytics');
//     };

//     // Function to scroll to the Sales Analytics section
//     const handleShopNowClick = () => {
//         if (salesAnalyticsRef.current) {
//             salesAnalyticsRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             {/* NavBar Component */}
//             <NavBar 
//                 onOrdersClick={handleOrders} 
//                 onSellClick={handleSellProducts} 
//                 onLogout={handleLogout} 
//             />

//             {/* Hero Section */}
//             <div className="hero-section">
//                 <h1>Empowering Farmers, Connecting You to Your Market</h1>
//                 <p>Your Platform to Sell Fresh Produce Directly to Consumers.</p>
//                 <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
//             </div>
           
//             {/* Updated Featured Categories Section */}
//             <div className="featured-categories">
//                 <h2>Dashboard Categories</h2>
//                 <div className="categories-container">
//                     <div className="category">
//                         <h3>Sell Your Produce</h3>
//                         <p>Connect directly with buyers and sell your fresh produce with ease.</p>
//                         <button onClick={handleSellProducts} className="go-to-sell-btn">Go to Sell</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Products</h3>
//                         <p>Manage and showcase your products effectively to attract customers.</p>
//                         <button onClick={handleSalesAnalytics} className="view-products-btn">View Products</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Orders</h3>
//                         <p>Keep track of all your orders and streamline your sales process.</p>
//                         <button onClick={handleOrders} className="view-orders-btn">View Orders</button>
//                     </div>
//                 </div>
//             </div>

//             {/* About Us Section with Image */}
//             <div className="about-us-section">
//                 <div className="about-us-content">
//                     <h2>About Us</h2>
//                     <p><b>
//                         At FarmConnect, we empower farmers to directly connect with consumers, enhancing their market reach. Our platform ensures that your high-quality agricultural products are easily accessible, enabling you to grow your business while providing fresh produce to your community.
//                     </b></p>
//                 </div>
//                 <img src={aboutImage} alt="About Us" className="about-us-image" />
//             </div>

//             {/* Updated Subscription Plans Section with Image */}
//             <div className="subscription-section">
//                 <div className="subscription-content">
//                     <div className="subscription-image">
//                         <img src={subscriptionImage} alt="Subscription Benefits" />
//                     </div>
//                     <div className="subscription-text">
//                         <h2>Join Our Subscription Plan</h2>
//                         <p>Unlock exclusive benefits to maximize your farming potential!</p>
//                         <ul className="subscription-benefits">
//                             <li>✔ Enjoy special offers on our services and tools.</li>
//                             <li>✔ Connect with fellow farmers to share experiences and advice.</li>
//                             <li>✔ Receive alerts on market trends to make informed decisions.</li>
//                             <li>✔ Gain tools and information that enhance your productivity.</li>
//                         </ul>
//                         {/* Link to subscription page */}
//                         <button className="subscribe-btn">Subscribe Now</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FarmerDashboard;



// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavBar from './NavBar'; // Adjust the import path as needed
// import './FarmerDashboard.css'; // CSS File
// import aboutImage from './farmer.jpg'; // Replace with your image path
// import subscriptionImage from './subscription-image.png'; // Replace with your image path

// const FarmerDashboard = () => {
//     const navigate = useNavigate();
    
//     // Create a ref for the sales analytics section
//     const salesAnalyticsRef = useRef(null);

//     const handleLogout = () => {
//         navigate('/');
//     };

//     const handleOrders = () => {
//         navigate('/orders');
//     };

//     const handleSellProducts = () => {
//         navigate('/sell');
//     };

//     const handleSalesAnalytics = () => {
//         navigate('/analytics');
//     };

//     // Function to scroll to the Sales Analytics section
//     const handleShopNowClick = () => {
//         if (salesAnalyticsRef.current) {
//             salesAnalyticsRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     // Function to reload the current page
//     const handleFarmConnectClick = () => {
//         window.location.reload();
//     };

//     return (
//         <div className="dashboard-container">
//             {/* NavBar Component */}
//             <NavBar 
//                 onOrdersClick={handleOrders} 
//                 onSellClick={handleSellProducts} 
//                 onLogout={handleLogout} 
//                 onFarmConnectClick={handleFarmConnectClick} // Add click handler for FarmConnect
//             />

//             {/* Hero Section */}
//             <div className="hero-section">
//                 <h1>Empowering Farmers, Connecting You to Your Market</h1>
//                 <p>Your Platform to Sell Fresh Produce Directly to Consumers.</p>
//                 <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
//             </div>
           
//             {/* Updated Featured Categories Section */}
//             <div className="featured-categories">
//                 <h2>Dashboard Categories</h2>
//                 <div className="categories-container">
//                     <div className="category">
//                         <h3>Sell Your Produce</h3>
//                         <p>Connect directly with buyers and sell your fresh produce with ease.</p>
//                         <button onClick={handleSellProducts} className="go-to-sell-btn">Go to Sell</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Products</h3>
//                         <p>Manage and showcase your products effectively to attract customers.</p>
//                         <button onClick={handleSalesAnalytics} className="view-products-btn">View Products</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Orders</h3>
//                         <p>Keep track of all your orders and streamline your sales process.</p>
//                         <button onClick={handleOrders} className="view-orders-btn">View Orders</button>
//                     </div>
//                 </div>
//             </div>

//             {/* About Us Section with Image */}
//             <div className="about-us-section">
//                 <div className="about-us-content">
//                     <h2>About Us</h2>
//                     <p><b>
//                         At FarmConnect, we empower farmers to directly connect with consumers, enhancing their market reach. Our platform ensures that your high-quality agricultural products are easily accessible, enabling you to grow your business while providing fresh produce to your community.
//                     </b></p>
//                 </div>
//                 <img src={aboutImage} alt="About Us" className="about-us-image" />
//             </div>

//             {/* Updated Subscription Plans Section with Image */}
//             <div className="subscription-section">
//                 <div className="subscription-content">
//                     <div className="subscription-image">
//                         <img src={subscriptionImage} alt="Subscription Benefits" />
//                     </div>
//                     <div className="subscription-text">
//                         <h2>Join Our Subscription Plan</h2>
//                         <p>Unlock exclusive benefits to maximize your farming potential!</p>
//                         <ul className="subscription-benefits">
//                             <li>✔ Enjoy special offers on our services and tools.</li>
//                             <li>✔ Connect with fellow farmers to share experiences and advice.</li>
//                             <li>✔ Receive alerts on market trends to make informed decisions.</li>
//                             <li>✔ Gain tools and information that enhance your productivity.</li>
//                         </ul>
//                         {/* Link to subscription page */}
//                         <button className="subscribe-btn">Subscribe Now</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FarmerDashboard;


// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavBar from './NavBar'; // Adjust the import path as needed
// import './FarmerDashboard.css'; // CSS File
// import aboutImage from './farmer.jpg'; // Replace with your image path
// import subscriptionImage from './subscription-image.png'; // Replace with your image path

// const FarmerDashboard = () => {
//     const navigate = useNavigate();
    
//     // Create a ref for the sales analytics section
//     const salesAnalyticsRef = useRef(null);

//     const handleLogout = () => {
//         navigate('/');
//     };

//     const handleOrders = () => {
//         navigate('/orders');
//     };

//     const handleSellProducts = () => {
//         navigate('/sell');
//     };

//     const handleSalesAnalytics = () => {
//         navigate('/analytics');
//     };

//     // Function to scroll to the Sales Analytics section
//     const handleShopNowClick = () => {
//         if (salesAnalyticsRef.current) {
//             salesAnalyticsRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     // Function to reload the current page
//     const handleFarmConnectClick = () => {
//         window.location.reload();
//     };

//     return (
//         <div className="dashboard-container">
//             {/* NavBar Component */}
//             <NavBar 
//                 onOrdersClick={handleOrders} 
//                 onSellClick={handleSellProducts} 
//                 onLogout={handleLogout} 
//                 onFarmConnectClick={handleFarmConnectClick} // Add click handler for FarmConnect
//             />

//             {/* Hero Section */}
//             <div className="hero-section">
//                 <h1>Empowering Farmers, Connecting You to Your Market</h1>
//                 <p>Your Platform to Sell Fresh Produce Directly to Consumers.</p>
//                 <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
//             </div>
           
//             {/* Updated Featured Categories Section */}
//             <div className="featured-categories">
//                 <h2>Dashboard Categories</h2>
//                 <div className="categories-container">
//                     <div className="category">
//                         <h3>Sell Your Produce</h3>
//                         <p>Connect directly with buyers and sell your fresh produce with ease.</p>
//                         <button onClick={handleSellProducts} className="go-to-sell-btn">Go to Sell</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Products</h3>
//                         <p>Manage and showcase your products effectively to attract customers.</p>
//                         <button onClick={handleSalesAnalytics} className="view-products-btn">View Products</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Orders</h3>
//                         <p>Keep track of all your orders and streamline your sales process.</p>
//                         <button onClick={handleOrders} className="view-orders-btn">View Orders</button>
//                     </div>
//                 </div>
//             </div>

//             {/* About Us Section with Image */}
//             <div className="about-us-section">
//                 <div className="about-us-content">
//                     <h2>About Us</h2>
//                     <p><b>
//                         At FarmConnect, we empower farmers to directly connect with consumers, enhancing their market reach. Our platform ensures that your high-quality agricultural products are easily accessible, enabling you to grow your business while providing fresh produce to your community.
//                     </b></p>
//                 </div>
//                 <img src={aboutImage} alt="About Us" className="about-us-image" />
//             </div>

//             {/* Updated Subscription Plans Section with Image */}
//             <div className="subscription-section">
//                 <div className="subscription-content">
//                     <div className="subscription-image">
//                         <img src={subscriptionImage} alt="Subscription Benefits" />
//                     </div>
//                     <div className="subscription-text">
//                         <h2>Join Our Subscription Plan</h2>
//                         <p>Unlock exclusive benefits to maximize your farming potential!</p>
//                         <ul className="subscription-benefits">
//                             <li>✔ Enjoy special offers on our services and tools.</li>
//                             <li>✔ Connect with fellow farmers to share experiences and advice.</li>
//                             <li>✔ Receive alerts on market trends to make informed decisions.</li>
//                             <li>✔ Gain tools and information that enhance your productivity.</li>
//                         </ul>
//                         {/* Link to subscription page */}
//                         <button className="subscribe-btn">Subscribe Now</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FarmerDashboard;


// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavBar from './NavBar'; // Adjust the import path as needed
// import './FarmerDashboard.css'; // CSS File
// import aboutImage from './farmer.jpg'; // Replace with your image path
// import subscriptionImage from './subscription-image.png'; // Replace with your image path

// const FarmerDashboard = () => {
//     const navigate = useNavigate();
    
//     // Create a ref for the sales analytics section
//     const salesAnalyticsRef = useRef(null);

//     const handleLogout = () => {
//         navigate('/');
//     };

//     const handleOrders = () => {
//         navigate('/orders');
//     };

//     const handleSellProducts = () => {
//         navigate('/sell');
//     };

//     const handleSalesAnalytics = () => {
//         navigate('/analytics');
//     };

//     // Function to scroll to the Sales Analytics section
//     const handleShopNowClick = () => {
//         if (salesAnalyticsRef.current) {
//             salesAnalyticsRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     // Empty function for the FarmConnect click handler
//     const handleFarmConnectClick = () => {
//         // No action required
//     };

//     return (
//         <div className="dashboard-container">
//             {/* NavBar Component */}
//             <NavBar 
//                 onOrdersClick={handleOrders} 
//                 onSellClick={handleSellProducts} 
//                 onLogout={handleLogout} 
//                 onFarmConnectClick={handleFarmConnectClick} // Pass empty function
//             />

//             {/* Hero Section */}
//             <div className="hero-section">
//                 <h1>Empowering Farmers, Connecting You to Your Market</h1>
//                 <p>Your Platform to Sell Fresh Produce Directly to Consumers.</p>
//                 <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
//             </div>
           
//             {/* Updated Featured Categories Section */}
//             <div className="featured-categories">
//                 <h2>Dashboard Categories</h2>
//                 <div className="categories-container">
//                     <div className="category">
//                         <h3>Sell Your Produce</h3>
//                         <p>Connect directly with buyers and sell your fresh produce with ease.</p>
//                         <button onClick={handleSellProducts} className="go-to-sell-btn">Go to Sell</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Products</h3>
//                         <p>Manage and showcase your products effectively to attract customers.</p>
//                         <button onClick={handleSalesAnalytics} className="view-products-btn">View Products</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Orders</h3>
//                         <p>Keep track of all your orders and streamline your sales process.</p>
//                         <button onClick={handleOrders} className="view-orders-btn">View Orders</button>
//                     </div>
//                 </div>
//             </div>

//             {/* About Us Section with Image */}
//             <div className="about-us-section">
//                 <div className="about-us-content">
//                     <h2>About Us</h2>
//                     <p><b>
//                         At FarmConnect, we empower farmers to directly connect with consumers, enhancing their market reach. Our platform ensures that your high-quality agricultural products are easily accessible, enabling you to grow your business while providing fresh produce to your community.
//                     </b></p>
//                 </div>
//                 <img src={aboutImage} alt="About Us" className="about-us-image" />
//             </div>

//             {/* Updated Subscription Plans Section with Image */}
//             <div className="subscription-section">
//                 <div className="subscription-content">
//                     <div className="subscription-image">
//                         <img src={subscriptionImage} alt="Subscription Benefits" />
//                     </div>
//                     <div className="subscription-text">
//                         <h2>Join Our Subscription Plan</h2>
//                         <p>Unlock exclusive benefits to maximize your farming potential!</p>
//                         <ul className="subscription-benefits">
//                             <li>Enjoy special offers on our services and tools.</li>
//                             <li>Connect with fellow farmers to share experiences and advice.</li>
//                             <li>Receive alerts on market trends to make informed decisions.</li>
//                             <li>Gain tools and information that enhance your productivity.</li>
//                         </ul>
//                         {/* Link to subscription page */}
//                         <button className="subscribe-btn">Subscribe Now</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FarmerDashboard;

// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FarmerNavBar from './FarmerNavBar.js'; // Import the Farmer NavBar
// import './FarmerDashboard.css'; // CSS File
// import aboutImage from './farmer.jpg'; // Replace with your image path
// import subscriptionImage from './subscription-image.png'; // Replace with your image path

// const FarmerDashboard = () => {
//     const navigate = useNavigate();
    
//     // Create a ref for the sales analytics section
//     const salesAnalyticsRef = useRef(null);

//     const handleLogout = () => {
//         navigate('/');
//     };

//     const handleOrders = () => {
//         navigate('/orders');
//     };

//     const handleSellProducts = () => {
//         navigate('/sell');
//     };

//     const handleSalesAnalytics = () => {
//         navigate('/analytics');
//     };

//     // Function to scroll to the Sales Analytics section
//     const handleShopNowClick = () => {
//         if (salesAnalyticsRef.current) {
//             salesAnalyticsRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     // Empty function for the FarmConnect click handler
//     const handleFarmConnectClick = () => {
//         // No action required
//     };

//     return (
//         <div className="dashboard-container">
//             {/* FarmerNavBar Component */}
//             <FarmerNavBar 
//                 onOrdersClick={handleOrders} 
//                 onSellClick={handleSellProducts} 
//                 onLogout={handleLogout} 
//             />

//             {/* Hero Section */}
//             <div className="hero-section">
//                 <h1>Empowering Farmers, Connecting You to Your Market</h1>
//                 <p>Your Platform to Sell Fresh Produce Directly to Consumers.</p>
//                 <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
//             </div>
           
//             {/* Updated Featured Categories Section */}
//             <div className="featured-categories">
//                 <h2>Dashboard Categories</h2>
//                 <div className="categories-container">
//                     <div className="category">
//                         <h3>Sell Your Produce</h3>
//                         <p>Connect directly with buyers and sell your fresh produce with ease.</p>
//                         <button onClick={handleSellProducts} className="go-to-sell-btn">Go to Sell</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Products</h3>
//                         <p>Manage and showcase your products effectively to attract customers.</p>
//                         <button onClick={handleSalesAnalytics} className="view-products-btn">View Products</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Orders</h3>
//                         <p>Keep track of all your orders and streamline your sales process.</p>
//                         <button onClick={handleOrders} className="view-orders-btn">View Orders</button>
//                     </div>
//                 </div>
//             </div>

//             {/* About Us Section with Image */}
//             <div className="about-us-section">
//                 <div className="about-us-content">
//                     <h2>About Us</h2>
//                     <p><b>
//                         At FarmConnect, we empower farmers to directly connect with consumers, enhancing their market reach. Our platform ensures that your high-quality agricultural products are easily accessible, enabling you to grow your business while providing fresh produce to your community.
//                     </b></p>
//                 </div>
//                 <img src={aboutImage} alt="About Us" className="about-us-image" />
//             </div>

//             {/* Updated Subscription Plans Section with Image */}
//             <div className="subscription-section">
//                 <div className="subscription-content">
//                     <div className="subscription-image">
//                         <img src={subscriptionImage} alt="Subscription Benefits" />
//                     </div>
//                     <div className="subscription-text">
//                         <h2>Join Our Subscription Plan</h2>
//                         <p>Unlock exclusive benefits to maximize your farming potential!</p>
//                         <ul className="subscription-benefits">
//                             <li>Enjoy special offers on our services and tools.</li>
//                             <li>Connect with fellow farmers to share experiences and advice.</li>
//                             <li>Receive alerts on market trends to make informed decisions.</li>
//                             <li>Gain tools and information that enhance your productivity.</li>
//                         </ul>
//                         {/* Link to subscription page */}
//                         <button className="subscribe-btn">Subscribe Now</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FarmerDashboard;



// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FarmerNavBar from './FarmerNavBar';
// import './FarmerDashboard.css'; // CSS File
// import aboutImage from './farmer.jpg'; // Replace with your image path
// import subscriptionImage from './subscription-image.png'; // Replace with your image path

// const FarmerDashboard = () => {
//     const navigate = useNavigate();
    
//     // Create a ref for the sales analytics section
//     const salesAnalyticsRef = useRef(null);

//     const handleLogout = () => {
//         navigate('/');
//     };

//     const handleOrders = () => {
//         navigate('/orders');
//     };

//     const handleSellProducts = () => {
//         navigate('/sell');
//     };

//     const handleSalesAnalytics = () => {
//         navigate('/analytics');
//     };

//     // Function to scroll to the Sales Analytics section
//     const handleShopNowClick = () => {
//         if (salesAnalyticsRef.current) {
//             salesAnalyticsRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     // Empty function for the FarmConnect click handler
//     const handleFarmConnectClick = () => {
//         // No action required
//     };

//     return (
//         <div className="dashboard-container">
//             {/* FarmerNavBar Component */}
//             <FarmerNavBar 
//                 onOrdersClick={handleOrders} 
//                 onSellClick={handleSellProducts} 
//                 onLogout={handleLogout} 
//             />

//             {/* Hero Section */}
//             <div className="hero-section">
//                 <h1>Empowering Farmers, Connecting You to Your Market</h1>
//                 <p>Your Platform to Sell Fresh Produce Directly to Consumers.</p>
//                 <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
//             </div>
           
//             {/* Updated Featured Categories Section */}
//             <div className="featured-categories">
//                 <h2>Dashboard Categories</h2>
//                 <div className="categories-container">
//                     <div className="category">
//                         <h3>Sell Your Produce</h3>
//                         <p>Connect directly with buyers and sell your fresh produce with ease.</p>
//                         <button onClick={handleSellProducts} className="go-to-sell-btn">Go to Sell</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Products</h3>
//                         <p>Manage and showcase your products effectively to attract customers.</p>
//                         <button onClick={handleSalesAnalytics} className="view-products-btn">View Products</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Orders</h3>
//                         <p>Keep track of all your orders and streamline your sales process.</p>
//                         <button onClick={handleOrders} className="view-orders-btn">View Orders</button>
//                     </div>
//                 </div>
//             </div>

//             {/* About Us Section with Image */}
//             <div className="about-us-section">
//                 <div className="about-us-content">
//                     <h2>About Us</h2>
//                     <p><b>
//                         At FarmConnect, we empower farmers to directly connect with consumers, enhancing their market reach. Our platform ensures that your high-quality agricultural products are easily accessible, enabling you to grow your business while providing fresh produce to your community.
//                     </b></p>
//                 </div>
//                 <img src={aboutImage} alt="About Us" className="about-us-image" />
//             </div>

//             {/* Updated Subscription Plans Section with Image */}
//             <div className="subscription-section">
//                 <div className="subscription-content">
//                     <div className="subscription-image">
//                         <img src={subscriptionImage} alt="Subscription Benefits" />
//                     </div>
//                     <div className="subscription-text">
//                         <h2>Join Our Subscription Plan</h2>
//                         <p>Unlock exclusive benefits to maximize your farming potential!</p>
//                         <ul className="subscription-benefits">
//                             <li>Enjoy special offers on our services and tools.</li>
//                             <li>Connect with fellow farmers to share experiences and advice.</li>
//                             <li>Receive alerts on market trends to make informed decisions.</li>
//                             <li>Gain tools and information that enhance your productivity.</li>
//                         </ul>
//                         {/* Link to subscription page */}
//                         <button className="subscribe-btn">Subscribe Now</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FarmerDashboard;



// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FarmerNavBar from './FarmerNavBar';
// import './FarmerDashboard.css';
// import aboutImage from './assets/farmer.jpg';
// import subscriptionImage from './assets/subscription-image.png';

// const FarmerDashboard = () => {
//     const navigate = useNavigate();
//     const salesAnalyticsRef = useRef(null);

//     const handleLogout = () => {
//         navigate('/');
//     };

//     const handleOrders = () => {
//         navigate('/orders');
//     };

//     const handleSellProducts = () => {
//         navigate('/sell');
//     };

//     const handleSalesAnalytics = () => {
//         navigate('/analytics');
//     };

//     const handleAccount = () => {
//         navigate('/account');
//     };

//     const handleShopNowClick = () => {
//         if (salesAnalyticsRef.current) {
//             salesAnalyticsRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             <FarmerNavBar 
//                 onOrdersClick={handleOrders} 
//                 onSellClick={handleSellProducts} 
//                 onAccountClick={handleAccount}
//                 onLogout={handleLogout} 
//             />

//             <div className="hero-section">
//                 <div className="hero-content">
//                     <h1>Empowering Farmers, Connecting You to Your Market</h1>
//                     <p>
//                       Sell your produce, connect with buyers, and grow your business with FarmConnect. 
//                       </p>
//                     <button className="shop-now-btn" onClick={handleShopNowClick}>Get Started</button>
//                 </div>
//             </div>
           
//             <div className="featured-categories" ref={salesAnalyticsRef}>
//                 <h2>Dashboard Categories</h2>
//                 <div className="categories-container">
//                     <div className="category">
//                         <h3>Sell Your Produce</h3>
//                         <p>Connect directly with buyers and sell your fresh produce with ease.</p>
//                         <button onClick={handleSellProducts} className="go-to-sell-btn">Go to Sell</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Products</h3>
//                         <p>Manage and showcase your products effectively to attract customers.</p>
//                         <button onClick={handleSalesAnalytics} className="view-products-btn">View Products</button>
//                     </div>
//                     <div className="category">
//                         <h3>Your Orders</h3>
//                         <p>Keep track of all your orders and streamline your sales process.</p>
//                         <button onClick={handleOrders} className="view-orders-btn">View Orders</button>
//                     </div>
//                 </div>
//             </div>

//             <div className="about-us-section">
//                 <div className="about-us-content">
//                     <h2>About Us</h2>
//                     <p><b>
//                         At FarmConnect, we empower farmers to directly connect with consumers, enhancing their market reach. Our platform ensures that your high-quality agricultural products are easily accessible, enabling you to grow your business while providing fresh produce to your community.
//                     </b></p>
//                 </div>
//                 <img src={aboutImage} alt="About Us" className="about-us-image" />
//             </div>

//             <div className="subscription-section">
//                 <div className="subscription-content">
//                     <div className="subscription-image">
//                         <img src={subscriptionImage} alt="Subscription Benefits" />
//                     </div>
//                     <div className="subscription-text">
//                         <h2>Join Our Subscription Plan</h2>
//                         <p>Unlock exclusive benefits to maximize your farming potential!</p>
//                         <ul className="subscription-benefits">
//                             <li><b>Enjoy special offers on our services and tools.</b></li>
//                             <li><b>Connect with fellow farmers to share experiences and advice.</b></li>
//                             <li><b>Receive alerts on market trends to make informed decisions.</b></li>
//                             <li><b>Gain tools and information that enhance your productivity.</b></li>
//                         </ul>
//                         <button className="subscribe-btn">Subscribe Now</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FarmerDashboard;


// FarmerDashboard.js

import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import FarmerNavBar from './FarmerNavBar';
import './FarmerDashboard.css';
import aboutImage from './assets/farmer.jpg';
import subscriptionImage from './assets/subscription-image.png';

const FarmerDashboard = () => {
    const navigate = useNavigate();
    const salesAnalyticsRef = useRef(null);

    const handleLogout = () => {
        navigate('/');
    };

    const handleOrders = () => {
        navigate('/orders');
    };

    const handleSellProducts = () => {
        navigate('/sell');
    };

    

    const handleShopNowClick = () => {
        if (salesAnalyticsRef.current) {
            salesAnalyticsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleViewProducts = () => {
        navigate('/your-products'); // Navigate to YourProductsPage
    };

    return (
        <div className="dashboard-container">
            <FarmerNavBar 
                onOrdersClick={handleOrders} 
                onSellClick={handleSellProducts} 
               
                onLogout={handleLogout} 
            />

            <div className="hero-section">
                <div className="hero-content">
                    <h1>Empowering Farmers, Connecting You to Your Market</h1>
                    <p>
                      Sell your produce, connect with buyers, and grow your business with FarmConnect. 
                    </p>
                    <button className="shop-now-btn" onClick={handleShopNowClick}>Get Started</button>
                </div>
            </div>
           
            <div className="featured-categories" ref={salesAnalyticsRef}>
                <h2>Dashboard Categories</h2>
                <div className="categories-container">
                    <div className="category">
                        <h3>Sell Your Produce</h3>
                        <p>Connect directly with buyers and sell your fresh produce with ease.</p>
                        <button onClick={handleSellProducts} className="go-to-sell-btn">Go to Sell</button>
                    </div>
                    <div className="category">
                        <h3>Your Products</h3>
                        <p>Manage and showcase your products effectively to attract customers.</p>
                        <button onClick={handleViewProducts} className="view-products-btn">View Products</button>
                    </div>
                    <div className="category">
                        <h3>Your Orders</h3>
                        <p>Keep track of all your orders and streamline your sales process.</p>
                        <button onClick={handleOrders} className="view-orders-btn">View Orders</button>
                    </div>
                </div>
            </div>

            <div className="about-us-section">
                <div className="about-us-content">
                    <h2>About Us</h2>
                    <p><b>
                        At FarmConnect, we empower farmers to directly connect with consumers, enhancing their market reach. Our platform ensures that your high-quality agricultural products are easily accessible, enabling you to grow your business while providing fresh produce to your community.
                    </b></p>
                </div>
                <img src={aboutImage} alt="About Us" className="about-us-image" />
            </div>

            <div className="subscription-section">
                <div className="subscription-content">
                    <div className="subscription-image">
                        <img src={subscriptionImage} alt="Subscription Benefits" />
                    </div>
                    <div className="subscription-text">
                        <h2>Join Our Subscription Plan</h2>
                        <p>Unlock exclusive benefits to maximize your farming potential!</p>
                        <ul className="subscription-benefits">
                            <li><b>Enjoy special offers on our services and tools.</b></li>
                            <li><b>Connect with fellow farmers to share experiences and advice.</b></li>
                            <li><b>Receive alerts on market trends to make informed decisions.</b></li>
                            <li><b>Gain tools and information that enhance your productivity.</b></li>
                        </ul>
                        <button className="subscribe-btn">Subscribe Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmerDashboard;
