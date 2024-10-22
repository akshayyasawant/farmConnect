// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './BuyerNavBar.css'; // Ensure you create a corresponding CSS file

// const BuyerNavBar = ({ onCartClick, onAccountClick, onLogout }) => {
//     const navigate = useNavigate();

//     return (
//         <div className="buyer-navbar">
//             <header className="buyer-dashboard-header">
//                 <div className="logo">FarmConnect</div>
                
//                 <div className="icon-container">
//                     <button className="icon-btn" onClick={onCartClick}>
//                         <i className="fas fa-shopping-cart"></i>
//                         <span className="icon-count">0</span> {/* Update dynamically as needed */}
//                     </button>
//                     <button className="icon-btn" onClick={onAccountClick}>
//                         <i className="fas fa-user"></i>
//                     </button>
//                     <button className="logout-btn" onClick={onLogout}>
//                         Logout <i className="fas fa-sign-out-alt"></i>
//                     </button>
//                 </div>
//             </header>
//         </div>
//     );
// };

// export default BuyerNavBar;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './BuyerNavBar.css'; // Ensure you create a corresponding CSS file

// const BuyerNavBar = ({ onCartClick, onAccountClick, onLogout }) => {
//     const navigate = useNavigate();

//     return (
//         <div className="buyer-navbar">
//             <header className="buyer-dashboard-header">
//                 <div className="logo">FarmConnect</div>
                
//                 <div className="icon-container">
//                     <button className="icon-btn" onClick={onCartClick}>
//                         {/* Use Font Awesome icons here */}
//                         <i className="fas fa-shopping-cart"></i>
//                         <span className="icon-count">0</span> {/* Update dynamically as needed */}
//                     </button>
//                     <button className="icon-btn" onClick={onAccountClick}>
//                         <i className="fas fa-user"></i>
//                     </button>
//                     <button className="logout-btn" onClick={onLogout}>
//                         Logout <i className="fas fa-sign-out-alt"></i>
//                     </button>
//                 </div>
//             </header>
//         </div>
//     );
// };

// export default BuyerNavBar;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './BuyerNavBar.css'; // Ensure you create a corresponding CSS file

// const BuyerNavBar = ({ onCartClick, onAccountClick, onLogout, onHomeClick, onAboutUsClick }) => {
//     const navigate = useNavigate();

//     return (
//         <div className="buyer-navbar">
//             <header className="buyer-dashboard-header">
//                 <div className="logo" onClick={onHomeClick}>FarmConnect</div>
                
//                 <nav className="nav-links">
//                     <button className="nav-btn" onClick={onHomeClick}>Home</button>
//                     <button className="nav-btn" onClick={onAboutUsClick}>About Us</button>
//                 </nav>
                
//                 <div className="icon-container">
//                     <button className="icon-btn" onClick={onCartClick}>
//                         <i className="fas fa-shopping-cart"></i>
//                         <span className="icon-count">0</span> {/* Update dynamically as needed */}
//                     </button>
//                     <button className="icon-btn" onClick={onAccountClick}>
//                         <i className="fas fa-user"></i>
//                     </button>
//                     <button className="logout-btn" onClick={onLogout}>
//                         Logout <i className="fas fa-sign-out-alt"></i>
//                     </button>
//                 </div>
//             </header>
//         </div>
//     );
// };

// export default BuyerNavBar;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import icons
// import './BuyerNavBar.css'; // Import your custom CSS

// const BuyerNavBar = ({ onCartClick, onAccountClick, onLogout }) => {
//     const navigate = useNavigate();

//     return (
//         <nav className="navbar">
//             <div className="navbar-logo" onClick={() => navigate('/buyer-dashboard')}>
//                 <h2>FarmConnect</h2> {/* This acts as the home link */}
//             </div>
//             <ul className="navbar-links">
//                 <li onClick={() => navigate('/buyer-dashboard')}>Home</li>
               
                
                
//                 {/* Cart Icon */}
//                 <li onClick={onCartClick}>
//                     <FontAwesomeIcon icon={faShoppingCart} className="icon" /> My Cart
//                 </li>

//                 {/* Account Icon */}
//                 <li onClick={onAccountClick}>
//                     <FontAwesomeIcon icon={faUser} className="icon" /> Account
//                 </li>

//                 {/* Logout Icon */}
//                 <li onClick={onLogout}>
//                     <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Logout
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default BuyerNavBar;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import './BuyerNavBar.css';

// const BuyerNavBar = ({ onCartClick, onAccountClick, onLogout }) => {
//     const navigate = useNavigate();
//     const buyerId = localStorage.getItem('buyerId'); // Fetch buyerId from localStorage

//     const handleAccountClick = () => {
//         if (buyerId) {
//             navigate(`/buyer-profile/${buyerId}`); // Navigate to the buyer's profile page with ID
//         } else {
//             onAccountClick(); // Additional handling if buyerId isn't found
//         }
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-logo" onClick={() => navigate('/buyer-dashboard')}>
//                 <h2>FarmConnect</h2> {/* Acts as a home link */}
//             </div>
//             <ul className="navbar-links">
//                 <li onClick={() => navigate('/buyer-dashboard')}>Home</li>

//                 {/* Cart Icon */}
//                 <li onClick={onCartClick}>
//                     <FontAwesomeIcon icon={faShoppingCart} className="icon" /> My Cart
//                 </li>

//                 {/* Account Icon */}
//                 <li onClick={handleAccountClick}>
//                     <FontAwesomeIcon icon={faUser} className="icon" /> Account
//                 </li>

//                 {/* Logout Icon */}
//                 <li onClick={onLogout}>
//                     <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Logout
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default BuyerNavBar;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './BuyerNavBar.css';

const BuyerNavBar = ({ onCartClick, onAccountClick, onLogout }) => {
    const navigate = useNavigate();
    const buyerId = localStorage.getItem('buyerId'); // Fetch buyerId from localStorage

    const handleAccountClick = () => {
        if (buyerId) {
            navigate(`/buyer-profile/${buyerId}`); // Navigate to the buyer's profile page with ID
        } else {
            onAccountClick(); // Additional handling if buyerId isn't found
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo" onClick={() => navigate('/buyer-dashboard')}>
                <h2>FarmConnect</h2> {/* Acts as a home link */}
            </div>
            <ul className="navbar-links">
                <li onClick={() => navigate('/buyer-dashboard')}>Home</li>

                {/* Cart Icon */}
                <li onClick={onCartClick}>
                    <FontAwesomeIcon icon={faShoppingCart} className="icon" /> My Cart
                </li>

                {/* Account Icon */}
                <li onClick={handleAccountClick}>
                    <FontAwesomeIcon icon={faUser} className="icon" /> Account
                </li>

                {/* Logout Icon */}
                <li onClick={onLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Logout
                </li>
            </ul>
        </nav>
    );
};

export default BuyerNavBar;
