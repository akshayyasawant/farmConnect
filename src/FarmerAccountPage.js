// // FarmerAccountPage.js

// import React, { useEffect, useState } from 'react';
// import './FarmerAccountPage.css'; // Custom CSS for styling

// const FarmerAccountPage = () => {
//     // You can replace this with real data fetched from your backend
//     const [farmerDetails, setFarmerDetails] = useState({
//         name: 'John Doe',
//         email: 'johndoe@example.com',
//         farmName: 'Sunny Farms',
//         location: 'Maharashtra, India'
//     });

//     // Simulating fetching farmer data from backend
//     useEffect(() => {
//         // In the future, you can fetch this data from your API
//         // e.g., fetch('/api/farmer-details').then(response => response.json()).then(data => setFarmerDetails(data))
//     }, []);

//     return (
//         <div className="farmer-account-container">
//             <h1>Farmer Account Details</h1>
//             <div className="account-details">
//                 <p><strong>Name:</strong> {farmerDetails.name}</p>
//                 <p><strong>Email:</strong> {farmerDetails.email}</p>
//                 <p><strong>Farm Name:</strong> {farmerDetails.farmName}</p>
//                 <p><strong>Location:</strong> {farmerDetails.location}</p>
//             </div>
//         </div>
//     );
// };

// export default FarmerAccountPage;
// FarmerAccountPage.js

import React from 'react';
import './FarmerAccountPage.css'; // Optional: Custom CSS

const FarmerAccountPage = () => {
    const farmer = JSON.parse(localStorage.getItem('farmer')); // Get the farmer's info from local storage

    return (
        <div className="farmer-account-container">
            <h1>Farmer Profile</h1>
            {farmer ? (
                <div className="account-details">
                    <p><strong>First Name:</strong> {farmer.firstName}</p>
                    <p><strong>Last Name:</strong> {farmer.lastName}</p>
                    <p><strong>Email:</strong> {farmer.email}</p>
                </div>
            ) : (
                <p>No farmer details available. Please register or log in.</p>
            )}
        </div>
    );
};

export default FarmerAccountPage;
