import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BuyerProfile = () => {
    const [buyer, setBuyer] = useState(null);
    const { id } = useParams(); // Get buyer ID from URL

    useEffect(() => {
        const fetchBuyerData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/buyer/${id}`);
                const data = await response.json();
                if (data.success) {
                    setBuyer(data.buyer);
                }
            } catch (error) {
                console.error('Error fetching buyer details:', error);
            }
        };

        fetchBuyerData();
    }, [id]);

    if (!buyer) return <p>Loading...</p>;

    return (
        <div>
            <h2>Buyer Profile</h2>
            <p><strong>Name:</strong> {buyer.firstName} {buyer.lastName}</p>
            <p><strong>Email:</strong> {buyer.email}</p>
            <p><strong>Phone:</strong> {buyer.phoneNumber}</p>
            <p><strong>Address:</strong> {buyer.address}</p>
        </div>
    );
};

export default BuyerProfile;
