// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavBar from './NavBar'; // Adjust the import path as needed
// import './BuyerDashboard.css'; // CSS File

// const BuyerDashboard = () => {
//     const navigate = useNavigate();
    
//     // Create a ref for the featured categories section
//     const featuredCategoriesRef = useRef(null);

//     const handleLogout = () => {
//         navigate('/');
//     };

//     const handleCart = () => {
//         navigate('/cart');
//     };


//     const handleAccount = () => {
//         navigate('/account');
//     };

//     // Function to handle category click
//     const handleCategoryClick = (category) => {
//         navigate(`/products/${category}`);
//     };

//     // Function to scroll to the Featured Categories section
//     const handleShopNowClick = () => {
//         if (featuredCategoriesRef.current) {
//             featuredCategoriesRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             {/* NavBar Component */}
//             <NavBar 
               
//                 onCartClick={handleCart} 
//                 onAccountClick={handleAccount} 
//                 onLogout={handleLogout} 
//             />

//             {/* Hero Section */}
//             <div className="hero-section">
//                 <h1>From Farms to Your Doorstep, Fresh and Direct</h1>
//                 <p>Your Marketplace for Farm-Fresh Goods. Shop Farm-Fresh Fruits, Vegetables & More</p>
//                 <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
//             </div>
           
//             {/* Featured Categories Section */}
//             <div className="featured-categories" ref={featuredCategoriesRef}>
//                 <h2>Featured Categories</h2>
//                 <div className="categories-container">
//                     <div className="category" onClick={() => handleCategoryClick('fruits')}>
//                         <img src='/fruit.jpg' alt="Fruits" />
//                         <div className="category-title">Fruits</div>
//                     </div>
//                     <div className="category" onClick={() => handleCategoryClick('vegetables')}>
//                         <img src="/vegetable.jpg" alt="Vegetables" />
//                         <div className="category-title">Vegetables</div>
//                     </div>
//                     <div className="category" onClick={() => handleCategoryClick('grains')}>
//                         <img src="/grains.jpg" alt="Grains" />
//                         <div className="category-title">Grains</div>
//                     </div>
//                 </div>
//             </div>

//             {/* About Us Section */}
//             <div className="about-us-section">
//                 <div className="about-us-content">
//                     <h2>About Us</h2>
//                     <p><b>
//                         FarmConnect is an innovative platform designed to bridge the gap between farmers and buyers, ensuring that fresh, high-quality agricultural products reach your doorstep directly from the source. Our mission is simple: to empower farmers by giving them a marketplace to sell their produce without the burden of middlemen, while providing buyers access to fresh, affordable, and locally-sourced products.
//                     </b></p>
//                 </div>
//                 <div className="about-us-stats">
//                     <div className="stat-item">
//                         <p>Delivery Rate</p>
//                         <div className="progress-bar">
//                             <div className="progress" style={{ width: "85%" }}></div>
//                         </div>
//                     </div>
//                     <div className="stat-item">
//                         <p>Customer Satisfaction</p>
//                         <div className="progress-bar">
//                             <div className="progress" style={{ width: "95%" }}></div>
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
//                             <span className="offer-label">Exclusive Offer <span className="offer-tag">15% OFF</span></span>
//                             <h3>Weekly Subscription</h3>
//                             <p>Enjoy fresh produce delivered weekly with 15% off for our new members. Get fruits, vegetables, and grains delivered right to your door.</p>
//                             <button className="subscribe-btn">Get Best Deal →</button>
//                         </div>

//                         <div className="subscription-plan card">
//                             <span className="offer-label">Regular Offer</span>
//                             <h3>Monthly Subscription</h3>
//                             <p>Stay stocked up for the entire month. Subscribe now and receive 10% cashback on your first month of fresh farm products.</p>
//                             <button className="subscribe-btn">Shop Now →</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BuyerDashboard;



// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import BuyerNavBar from './BuyerNavBar'; // Import the Buyer NavBar
// import './BuyerDashboard.css'; // CSS File

// const BuyerDashboard = () => {
//     const navigate = useNavigate();
    
//     // Create a ref for the featured categories section
//     const featuredCategoriesRef = useRef(null);

//     const handleLogout = () => {
//         navigate('/');
//     };

//     const handleCart = () => {
//         navigate('/cart');
//     };

//     const handleAccount = () => {
//         navigate('/account');
//     };

//     // Function to handle category click
//     const handleCategoryClick = (category) => {
//         navigate(`/products/${category}`);
//     };

//     // Function to scroll to the Featured Categories section
//     const handleShopNowClick = () => {
//         if (featuredCategoriesRef.current) {
//             featuredCategoriesRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             {/* BuyerNavBar Component */}
//             <BuyerNavBar 
//                 onCartClick={handleCart} 
//                 onAccountClick={handleAccount} 
//                 onLogout={handleLogout} 
//             />

//             {/* Hero Section */}
//             <div className="hero-section">
//                 <h1>From Farms to Your Doorstep, Fresh and Direct</h1>
//                 <p>Your Marketplace for Farm-Fresh Goods. Shop Farm-Fresh Fruits, Vegetables & More</p>
//                 <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
//             </div>
           
//             {/* Featured Categories Section */}
//             <div className="featured-categories" ref={featuredCategoriesRef}>
//                 <h2>Featured Categories</h2>
//                 <div className="categories-container">
//                     <div className="category" onClick={() => handleCategoryClick('fruits')}>
//                         <img src='/fruit.jpg' alt="A variety of fresh fruits" />
//                         <div className="category-title">Fruits</div>
//                     </div>
//                     <div className="category" onClick={() => handleCategoryClick('vegetables')}>
//                         <img src="/vegetable.jpg" alt="A selection of fresh vegetables" />
//                         <div className="category-title">Vegetables</div>
//                     </div>
//                     <div className="category" onClick={() => handleCategoryClick('grains')}>
//                         <img src="/grains.jpg" alt="Different types of grains" />
//                         <div className="category-title">Grains</div>
//                     </div>
//                 </div>
//             </div>

//             {/* About Us Section */}
//             <div className="about-us-section">
//                 <div className="about-us-content">
//                     <h2>About Us</h2>
//                     <p><b>
//                         FarmConnect is an innovative platform designed to bridge the gap between farmers and buyers, ensuring that fresh, high-quality agricultural products reach your doorstep directly from the source. Our mission is simple: to empower farmers by giving them a marketplace to sell their produce without the burden of middlemen, while providing buyers access to fresh, affordable, and locally-sourced products.
//                     </b></p>
//                 </div>
//                 <div className="about-us-stats">
//                     <div className="stat-item">
//                         <p>Delivery Rate</p>
//                         <div className="progress-bar">
//                             <div className="progress" style={{ width: "85%" }}></div>
//                         </div>
//                     </div>
//                     <div className="stat-item">
//                         <p>Customer Satisfaction</p>
//                         <div className="progress-bar">
//                             <div className="progress" style={{ width: "95%" }}></div>
//                         </div>
//                     </div>
//                     <div className="stat-item">
//                         <p>Produce Quality Rating</p>
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
//                             <span className="offer-label">Exclusive Offer <span className="offer-tag">15% OFF</span></span>
//                             <h3>Weekly Subscription</h3>
//                             <p>Enjoy fresh produce delivered weekly with 15% off for our new members. Get fruits, vegetables, and grains delivered right to your door.</p>
//                             <button className="subscribe-btn" onClick={() => alert('Subscription functionality coming soon!')}>Get Best Deal →</button>
//                         </div>

//                         <div className="subscription-plan card">
//                             <span className="offer-label">Regular Offer</span>
//                             <h3>Monthly Subscription</h3>
//                             <p>Stay stocked up for the entire month. Subscribe now and receive 10% cashback on your first month of fresh farm products.</p>
//                             <button className="subscribe-btn" onClick={() => alert('Subscription functionality coming soon!')}>Shop Now →</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BuyerDashboard;



// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import BuyerNavBar from './BuyerNavBar'; // Import the new BuyerNavBar
// import './BuyerDashboard.css'; // CSS File

// const BuyerDashboard = () => {
//     const navigate = useNavigate();
    
//     // Create a ref for the featured categories section
//     const featuredCategoriesRef = useRef(null);

//     const handleLogout = () => {
//         navigate('/');
//     };

//     const handleCart = () => {
//         navigate('/cart');
//     };

//     const handleAccount = () => {
//         navigate('/account');
//     };

//     // Function to handle category click
//     const handleCategoryClick = (category) => {
//         navigate(`/products/${category}`);
//     };

//     // Function to scroll to the Featured Categories section
//     const handleShopNowClick = () => {
//         if (featuredCategoriesRef.current) {
//             featuredCategoriesRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             {/* BuyerNavBar Component */}
//             <BuyerNavBar 
//                 onCartClick={handleCart} 
//                 onAccountClick={handleAccount} 
//                 onLogout={handleLogout} 
//             />

//             {/* Hero Section */}
//             <div className="hero-section">
//                 <h1>From Farms to Your Doorstep, Fresh and Direct</h1>
//                 <p>Your Marketplace for Farm-Fresh Goods. Shop Farm-Fresh Fruits, Vegetables & More</p>
//                 <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
//             </div>
           
//             {/* Featured Categories Section */}
//             <div className="featured-categories" ref={featuredCategoriesRef}>
//                 <h2>Featured Categories</h2>
//                 <div className="categories-container">
//                     <div className="category" onClick={() => handleCategoryClick('fruits')}>
//                         <img src='/fruit.jpg' alt="A variety of fresh fruits" />
//                         <div className="category-title">Fruits</div>
//                     </div>
//                     <div className="category" onClick={() => handleCategoryClick('vegetables')}>
//                         <img src="/vegetable.jpg" alt="A selection of fresh vegetables" />
//                         <div className="category-title">Vegetables</div>
//                     </div>
//                     <div className="category" onClick={() => handleCategoryClick('grains')}>
//                         <img src="/grains.jpg" alt="Different types of grains" />
//                         <div className="category-title">Grains</div>
//                     </div>
//                 </div>
//             </div>

//             {/* About Us Section */}
//             <div className="about-us-section">
//                 <div className="about-us-content">
//                     <h2>About Us</h2>
//                     <p><b>
//                         FarmConnect is an innovative platform designed to bridge the gap between farmers and buyers, ensuring that fresh, high-quality agricultural products reach your doorstep directly from the source. Our mission is simple: to empower farmers by giving them a marketplace to sell their produce without the burden of middlemen, while providing buyers access to fresh, affordable, and locally-sourced products.
//                     </b></p>
//                 </div>
//                 <div className="about-us-stats">
//                     <div className="stat-item">
//                         <p>Delivery Rate</p>
//                         <div className="progress-bar">
//                             <div className="progress" style={{ width: "85%" }}></div>
//                         </div>
//                     </div>
//                     <div className="stat-item">
//                         <p>Customer Satisfaction</p>
//                         <div className="progress-bar">
//                             <div className="progress" style={{ width: "95%" }}></div>
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
//                             <span className="offer-label">Exclusive Offer <span className="offer-tag">15% OFF</span></span>
//                             <h3>Weekly Subscription</h3>
//                             <p>Enjoy fresh produce delivered weekly with 15% off for our new members. Get fruits, vegetables, and grains delivered right to your door.</p>
//                             <button className="subscribe-btn" onClick={() => alert('Subscription functionality coming soon!')}>Get Best Deal →</button>
//                         </div>

//                         <div className="subscription-plan card">
//                             <span className="offer-label">Regular Offer</span>
//                             <h3>Monthly Subscription</h3>
//                             <p>Stay stocked up for the entire month. Subscribe now and receive 10% cashback on your first month of fresh farm products.</p>
//                             <button className="subscribe-btn" onClick={() => alert('Subscription functionality coming soon!')}>Shop Now →</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BuyerDashboard;


// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import BuyerNavBar from './BuyerNavBar';
// import './BuyerDashboard.css';

// const BuyerDashboard = () => {
//     const navigate = useNavigate();
//     const featuredCategoriesRef = useRef(null);

//     const handleLogout = () => {
//         navigate('/');
//     };

//     const handleCart = () => {
//         navigate('/cart');
//     };

//     const handleAccount = () => {
//         navigate('/account');
//     };

//     const handleCategoryClick = (category) => {
//         navigate(`/products/${category}`);
//     };

//     const handleShopNowClick = () => {
//         if (featuredCategoriesRef.current) {
//             featuredCategoriesRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             <BuyerNavBar 
//                 onCartClick={handleCart} 
//                 onAccountClick={handleAccount} 
//                 onLogout={handleLogout} 
//             />

//             <div className="hero-section">
//                 <div className="hero-content">
//                     <h1>From Farms to Your Doorstep, Fresh and Direct</h1>
//                     <p>Your Marketplace for Farm-Fresh Goods. Shop Farm-Fresh Fruits, Vegetables & More</p>
//                     <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
//                 </div>
//             </div>
           
//             <div className="featured-categories" ref={featuredCategoriesRef}>
//                 <h2>Featured Categories</h2>
//                 <div className="categories-container">
//                     <div className="category" onClick={() => handleCategoryClick('fruits')}>
//                         <img src='/fruit.jpg' alt="A variety of fresh fruits" />
//                         <div className="category-title">Fruits</div>
//                     </div>
//                     <div className="category" onClick={() => handleCategoryClick('vegetables')}>
//                         <img src="/vegetable.jpg" alt="A selection of fresh vegetables" />
//                         <div className="category-title">Vegetables</div>
//                     </div>
//                     <div className="category" onClick={() => handleCategoryClick('grains')}>
//                         <img src="/grains.jpg" alt="Different types of grains" />
//                         <div className="category-title">Grains</div>
//                     </div>
//                 </div>
//             </div>

//             <div className="subscription-section">
//                 <h2>Choose Your Subscription Plan</h2>
//                 <div className="subscription-container">
//                     <div className="subscription-plan">
//                         <span className="offer-label">Exclusive Offer <span className="offer-tag">15% OFF</span></span>
//                         <h3>Weekly Subscription</h3>
//                         <p>Enjoy fresh produce delivered weekly with 15% off for our new members. Get fruits, vegetables, and grains delivered right to your door.</p>
//                         <button className="subscribe-btn" onClick={() => alert('Subscription functionality coming soon!')}>Get Best Deal →</button>
//                     </div>

//                     <div className="subscription-plan">
//                         <span className="offer-label">Regular Offer</span>
//                         <h3>Monthly Subscription</h3>
//                         <p>Stay stocked up for the entire month. Subscribe now and receive 10% cashback on your first month of fresh farm products.</p>
//                         <button className="subscribe-btn" onClick={() => alert('Subscription functionality coming soon!')}>Shop Now →</button>
//                     </div>
//                 </div>
//             </div>

//             <div className="about-us-section">
//                 <div className="about-us-content">
//                     <h2>About Us</h2>
//                     <p><b>
//                         FarmConnect is an innovative platform designed to bridge the gap between farmers and buyers, ensuring that fresh, high-quality agricultural products reach your doorstep directly from the source. Our mission is simple: to empower farmers by giving them a marketplace to sell their produce without the burden of middlemen, while providing buyers access to fresh, affordable, and locally-sourced products.
//                     </b></p>
//                 </div>
//                 <div className="about-us-stats">
//                     <div className="stat-item">
//                         <p>Delivery Rate</p>
//                         <div className="progress-bar">
//                             <div className="progress" style={{ width: "85%" }}></div>
//                         </div>
//                     </div>
//                     <div className="stat-item">
//                         <p>Customer Satisfaction</p>
//                         <div className="progress-bar">
//                             <div className="progress" style={{ width: "95%" }}></div>
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
//         </div>
//     );
// };

// export default BuyerDashboard;


import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BuyerNavBar from './BuyerNavBar';
import './BuyerDashboard.css';

const BuyerDashboard = () => {
    const navigate = useNavigate();
    const aboutUsRef = useRef(null);
    const featuredCategoriesRef = useRef(null);

    const handleLogout = () => {
        navigate('/');
    };

    const handleCart = () => {
        navigate('/cart');
    };

    const handleAccount = () => {
        navigate('/account'); // Show buyer's account details
    };

    const handleCategoryClick = (category) => {
        navigate(`/products/${category}`);
    };

    const handleShopNowClick = () => {
        if (featuredCategoriesRef.current) {
            featuredCategoriesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleHomeClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleAboutUsClick = () => {
        if (aboutUsRef.current) {
            aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="dashboard-container">
            <BuyerNavBar 
                onCartClick={handleCart} 
                onAccountClick={handleAccount} 
                onLogout={handleLogout}
                onHomeClick={handleHomeClick}
                onAboutUsClick={handleAboutUsClick}
            />

            <div className="hero-section">
                <div className="hero-content">
                    <h1>From Farms to Your Doorstep, Fresh and Direct</h1>
                    <p>Your Marketplace for Farm-Fresh Goods. Shop Farm-Fresh Fruits, Vegetables & More</p>
                    <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
                </div>
            </div>

            <div className="featured-categories" ref={featuredCategoriesRef}>
                <h2>Featured Categories</h2>
                <div className="categories-container">
                    <div className="category" onClick={() => handleCategoryClick('fruits')}>
                        <img src='/fruit.jpg' alt="A variety of fresh fruits" />
                        <div className="category-title">Fruits</div>
                    </div>
                    <div className="category" onClick={() => handleCategoryClick('vegetables')}>
                        <img src="/vegetable.jpg" alt="A selection of fresh vegetables" />
                        <div className="category-title">Vegetables</div>
                    </div>
                    <div className="category" onClick={() => handleCategoryClick('grains')}>
                        <img src="/grains.jpg" alt="Different types of grains" />
                        <div className="category-title">Grains</div>
                    </div>
                </div>
            </div>

            <div className="subscription-section">
                <h2>Choose Your Subscription Plan</h2>
                <div className="subscription-container">
                    <div className="subscription-plan">
                        <span className="offer-label">Exclusive Offer <span className="offer-tag">15% OFF</span></span>
                        <h3>Weekly Subscription</h3>
                        <p>Enjoy fresh produce delivered weekly with 15% off for our new members. Get fruits, vegetables, and grains delivered right to your door.</p>
                        <button className="subscribe-btn" onClick={() => alert('Subscription functionality coming soon!')}>Get Best Deal →</button>
                    </div>

                    <div className="subscription-plan">
                        <span className="offer-label">Regular Offer</span>
                        <h3>Monthly Subscription</h3>
                        <p>Stay stocked up for the entire month. Subscribe now and receive 10% cashback on your first month of fresh farm products.</p>
                        <button className="subscribe-btn" onClick={() => alert('Subscription functionality coming soon!')}>Shop Now →</button>
                    </div>
                </div>
            </div>

            <div className="about-us-section" ref={aboutUsRef}>
                <div className="about-us-content">
                    <h2>About Us</h2>
                    <p><b>
                        FarmConnect is an innovative platform designed to bridge the gap between farmers and buyers, ensuring that fresh, high-quality agricultural products reach your doorstep directly from the source. Our mission is simple: to empower farmers by giving them a marketplace to sell their produce without the burden of middlemen, while providing buyers access to fresh, affordable, and locally-sourced products.
                    </b></p>
                </div>
                <div className="about-us-stats">
                    <div className="stat-item">
                        <p>Delivery Rate</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: "85%" }}></div>
                        </div>
                    </div>
                    <div className="stat-item">
                        <p>Customer Satisfaction</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: "95%" }}></div>
                        </div>
                    </div>
                    <div className="stat-item">
                        <p>Produce Quality Rating </p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: "90%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyerDashboard;

