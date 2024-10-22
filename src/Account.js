// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Account = () => {
//   const [buyer, setBuyer] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAccountDetails = async () => {
//       try {
//         const token = localStorage.getItem('buyerToken'); // Assumes you're storing the token in localStorage
//         const response = await fetch('http://localhost:5000/api/buyer/account', {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         const data = await response.json();

//         if (response.status === 403) {
//           toast.error('Session expired. Please log in again.', { position: "top-center" });
//           navigate('/buyer-login');
//           return;
//         }

//         if (!data.success) {
//           toast.error(data.message, { position: "top-center" });
//           return;
//         }

//         setBuyer(data.buyer);
//       } catch (error) {
//         console.error('Error fetching account details:', error);
//         toast.error('Failed to fetch account details. Please try again.', { position: "top-center" });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAccountDetails();
//   }, [navigate]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!buyer) {
//     return <div>No account details available.</div>;
//   }

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Account Details</h2>
//       <p><strong>First Name:</strong> {buyer.firstName}</p>
//       <p><strong>Last Name:</strong> {buyer.lastName}</p>
//       <p><strong>Address:</strong> {buyer.address}</p>
//       <p><strong>Phone Number:</strong> {buyer.phoneNumber}</p>
//       <p><strong>Email:</strong> {buyer.email}</p>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Account;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Account.css';

const Account = () => {
  const [buyer, setBuyer] = useState(null);
  const { id } = useParams(); // Assuming you're passing the buyer ID in the URL

  useEffect(() => {
    const fetchBuyerDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/buyer/${id}`);
        const data = await response.json();
        if (data.success) {
          setBuyer(data.buyer);
        } else {
          console.error('Error fetching buyer details:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchBuyerDetails();
  }, [id]);

  if (!buyer) {
    return <p>Loading...</p>;
  }

  return (
    <div className="account-container">
      <div className="profile-card">
        <h2>Buyer Profile</h2>
        <div className="profile-detail">
          <p><strong>First Name:</strong> {buyer.firstName}</p>
          <p><strong>Last Name:</strong> {buyer.lastName}</p>
          <p><strong>Email:</strong> {buyer.email}</p>
          <p><strong>Phone Number:</strong> {buyer.phoneNumber}</p>
          <p><strong>Address:</strong> {buyer.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
