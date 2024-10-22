// import React from 'react';

// const YourProductsPage = () => {
//     return (
//         <div>
//             <h2>Your added products to edit delete or update anything</h2>
//             <p>Displays product added by farmer to sell ...</p>
//             {/* Add order details and functionalities */}
//         </div>
//     );
// };

// export default YourProductsPage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YourProductsPage = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('farmerToken'); // Fetch token from localStorage
    
                if (!token) {
                    console.error('No token found, please login');
                    return;
                }
    
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`, // Add token in Authorization header
                    },
                };
    
                const response = await axios.get('/api/farmer/products', config);
                setProducts(response.data); // Set the products data
            } catch (error) {
                console.error("Error fetching farmer's products", error);
            }
        };
    
        fetchProducts();
    }, []);
    

    

    return (
        <div>
            <h1>Your Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <h3>{product.name}</h3>
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price}</p>
                        <p>Stock: {product.stock}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default YourProductsPage;
