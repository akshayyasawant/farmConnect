// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './FarmerNavBar.css'; // Ensure you create a corresponding CSS file

// const FarmerNavBar = ({ onOrdersClick, onSellClick, onLogout }) => {
//     const navigate = useNavigate();

//     return (
//         <div className="farmer-navbar">
//             <header className="farmer-dashboard-header">
//                 <div className="logo">FarmConnect</div>
                
//                 <div className="icon-container">
//                     <button className="icon-btn" onClick={onOrdersClick}>
//                         <i className="fas fa-shopping-cart"></i> Orders
//                     </button>
//                     <button className="icon-btn" onClick={onSellClick}>
//                         <i className="fas fa-plus-circle"></i> Sell
//                     </button>
//                     <button className="logout-btn" onClick={onLogout}>
//                         Logout <i className="fas fa-sign-out-alt"></i>
//                     </button>
//                 </div>
//             </header>
//         </div>
//     );
// };

// export default FarmerNavBar;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
// import './FarmerNavBar.css'; // Import your custom CSS

// const FarmerNavBar = ({ onAccountClick, onLogout }) => {
//     const navigate = useNavigate();

//     return (
//         <nav className="farmer-navbar">
//             <div className="navbar-logo" onClick={() => navigate('/farmer-dashboard')}>
//                 <h2>FarmConnect</h2> {/* Acts as the home link */}
//             </div>
//             <ul className="navbar-links">
//                 <li onClick={() => navigate('/farmer-dashboard')}>Home</li>

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

// export default FarmerNavBar;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import './FarmerNavBar.css'; // Import your custom CSS

const FarmerNavBar = ({ onLogout }) => {
    const navigate = useNavigate();

    return (
        <nav className="farmer-navbar">
            <div className="navbar-logo" onClick={() => navigate('/farmer-dashboard')}>
                <h2>FarmConnect</h2> {/* Acts as the home link */}
            </div>
            <ul className="navbar-links">
                <li onClick={() => navigate('/farmer-dashboard')}>Home</li>

                {/* Account Icon */}
                <li onClick={() => navigate('/farmer-account')}> {/* Navigate to FarmerAccountPage */}
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

export default FarmerNavBar;
