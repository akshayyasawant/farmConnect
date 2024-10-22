// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
// import buyerBackground from './buyerpagebck.avif'; // Ensure correct path for your background image

// const inputStyle = {
//   width: '300px',
//   padding: '10px',
//   margin: '10px',
//   borderRadius: '5px',
//   border: '1px solid #ccc',
//   fontSize: '16px',
// };

// const buttonStyle = {
//   width: '320px',
//   padding: '10px',
//   fontSize: '18px',
//   margin: '10px',
//   cursor: 'pointer',
//   border: 'none',
//   borderRadius: '5px',
//   backgroundColor: '#3182ce',
//   color: 'white',
//   fontFamily: 'Segoe UI Black',
//   transition: 'background-color 0.3s',
// };

// const BuyerRegister = () => {
//   const navigate = useNavigate();

//   // State for form inputs
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     address: '',
//     phoneNumber: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [error, setError] = useState('');

//   // Handler to update state with form values
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Function to check if password is alphanumeric
//   const isAlphanumeric = (password) => {
//     const alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
//     return alphanumericRegex.test(password);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Phone number validation
//     if (!/^\d{10}$/.test(formData.phoneNumber)) {
//       setError('Phone number must be exactly 10 digits!');
//       return;
//     }

//     // Password validation (check for minimum length and alphanumeric)
//     if (formData.password.length < 8) {
//       setError('Password must be at least 8 characters long!');
//       return;
//     }

//     if (!isAlphanumeric(formData.password)) {
//       setError('Password must be alphanumeric and contain both letters and numbers!');
//       return;
//     }

//     // Confirm password validation
//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match!');
//       return;
//     }

//     // Clear error if all validations pass
//     setError('');

//     // Show a success toast message
//     toast.success('Registration successful!', {
//       position: "top-center",  // Direct string usage for toast position
//       autoClose: 2000, // Auto close after 2 seconds
//     });

//     // Navigate to the login page after a delay (to allow the toast to show)
//     setTimeout(() => {
//       navigate('/buyer-login');
//     }, 2000);
//   };

//   return (
//     <div style={{
//       position: 'relative',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       backgroundImage: `url(${buyerBackground})`, // Use your buyer register background image
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//     }}>
//       {/* Background Overlay */}
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
//         zIndex: 1,
//       }}></div>

//       {/* Content (with higher z-index to be on top of the overlay) */}
//       <div style={{ zIndex: 2, textAlign: 'center' }}>
//         <h2 style={{
//           fontSize: '36px',
//           color: '#ffffff',
//           fontFamily: 'Cooper Black',
//           textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
//           marginBottom: '20px',
//         }}>
//           Buyer Registration
//         </h2>
//         <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             style={inputStyle}
//             required
//           />

//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             style={inputStyle}
//             required
//           />

//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             value={formData.address}
//             onChange={handleChange}
//             style={inputStyle}
//             required
//           />

//           <input
//             type="tel"
//             name="phoneNumber"
//             placeholder="Phone Number"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             style={inputStyle}
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             style={inputStyle}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             style={inputStyle}
//             required
//           />

//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             style={inputStyle}
//             required
//           />

//           {error && <p style={{ color: 'red' }}>{error}</p>}

//           <button 
//             type="submit" 
//             style={buttonStyle}
//             onMouseEnter={e => e.target.style.backgroundColor = '#4299e1'}
//             onMouseLeave={e => e.target.style.backgroundColor = '#3182ce'}
//           >
//             Register
//           </button>
//         </form>

//         {/* Add ToastContainer to display toast notifications */}
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default BuyerRegister;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import buyerBackground from './buyerpagebck.avif';

// const buttonStyle = {
//   width: '300px',
//   padding: '10px',
//   fontSize: '20px',
//   margin: '10px',
//   cursor: 'pointer',
//   border: 'none',
//   borderRadius: '5px',
//   color: 'white',
//   fontFamily: 'Segoe UI Black',
//   backgroundColor: '#3182ce',
//   transition: 'background-color 0.3s',
// };

// const BuyerRegister = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     address: '',
//     phoneNumber: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!/^\d{10}$/.test(formData.phoneNumber)) {
//       setError('Phone number must be exactly 10 digits!');
//       return;
//     }

//     if (formData.password.length < 8) {
//       setError('Password must be at least 8 characters long!');
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match!');
//       return;
//     }

//     setError('');

//     try {
//       const response = await fetch('http://localhost:5000/api/register', { // Adjust the endpoint as needed
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       toast.success('Registration successful!', {
//         position: "top-center",
//         autoClose: 2000,
//       });

//       setTimeout(() => {
//         navigate('/buyer-login');
//       }, 2000);
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div style={{
//       position: 'relative',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       backgroundImage: `url(${buyerBackground})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//     }}>
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         zIndex: 1,
//       }}></div>

//       <div style={{ zIndex: 2, textAlign: 'center' }}>
//         <h2 style={{
//           fontSize: '36px',
//           color: '#ffffff',
//           fontFamily: 'Cooper Black',
//           textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
//           marginBottom: '20px',
//         }}>
//           Buyer Registration
//         </h2>
//         <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             value={formData.address}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="tel"
//             name="phoneNumber"
//             placeholder="Phone Number"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           <button
//             type="submit"
//             style={buttonStyle}
//             onMouseEnter={e => e.target.style.backgroundColor = '#4299e1'}
//             onMouseLeave={e => e.target.style.backgroundColor = '#3182ce'}
//           >
//             Register
//           </button>
//         </form>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default BuyerRegister;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import buyerBackground from './buyerpagebck.avif';

// const buttonStyle = {
//   width: '300px',
//   padding: '10px',
//   fontSize: '20px',
//   margin: '10px',
//   cursor: 'pointer',
//   border: 'none',
//   borderRadius: '5px',
//   color: 'white',
//   fontFamily: 'Segoe UI Black',
//   backgroundColor: '#3182ce',
//   transition: 'background-color 0.3s',
// };

// const BuyerRegister = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     address: '',
//     phoneNumber: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!/^\d{10}$/.test(formData.phoneNumber)) {
//       setError('Phone number must be exactly 10 digits!');
//       return;
//     }

//     if (formData.password.length < 8) {
//       setError('Password must be at least 8 characters long!');
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match!');
//       return;
//     }

//     setError('');

//     try {
//       const response = await fetch('http://localhost:5000/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       toast.success('Registration successful!', {
//         position: "top-center",
//         autoClose: 2000,
//       });

//       setTimeout(() => {
//         navigate('/buyer-login'); // Navigate to login page after registration
//       }, 2000);
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div style={{
//       position: 'relative',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       backgroundImage: `url(${buyerBackground})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//     }}>
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         zIndex: 1,
//       }}></div>

//       <div style={{ zIndex: 2, textAlign: 'center' }}>
//         <h2 style={{
//           fontSize: '36px',
//           color: '#ffffff',
//           fontFamily: 'Cooper Black',
//           textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
//           marginBottom: '20px',
//         }}>
//           Buyer Registration
//         </h2>
//         <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             value={formData.address}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="tel"
//             name="phoneNumber"
//             placeholder="Phone Number"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           <button
//             type="submit"
//             style={buttonStyle}
//             onMouseEnter={e => e.target.style.backgroundColor = '#4299e1'}
//             onMouseLeave={e => e.target.style.backgroundColor = '#3182ce'}
//           >
//             Register
//           </button>
//         </form>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default BuyerRegister;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import buyerBackground from './buyerpagebck.avif';

// const buttonStyle = {
//   width: '300px',
//   padding: '10px',
//   fontSize: '20px',
//   margin: '10px',
//   cursor: 'pointer',
//   border: 'none',
//   borderRadius: '5px',
//   color: 'white',
//   fontFamily: 'Segoe UI Black',
//   backgroundColor: '#3182ce',
//   transition: 'background-color 0.3s',
// };

// const BuyerRegister = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     address: '',
//     phoneNumber: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!/^\d{10}$/.test(formData.phoneNumber)) {
//       setError('Phone number must be exactly 10 digits!');
//       return;
//     }

//     if (formData.password.length < 8) {
//       setError('Password must be at least 8 characters long!');
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match!');
//       return;
//     }

//     setError('');

//     try {
//       const response = await fetch('http://localhost:5000/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       toast.success('Registration successful!', {
//         position: "top-center",
//         autoClose: 2000,
//       });

//       setTimeout(() => {
//         navigate('/buyer-login'); // Navigate to login page after registration
//       }, 2000);
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div style={{
//       position: 'relative',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       backgroundImage: `url(${buyerBackground})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//     }}>
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         zIndex: 1,
//       }}></div>

//       <div style={{ zIndex: 2, textAlign: 'center' }}>
//         <h2 style={{
//           fontSize: '36px',
//           color: '#ffffff',
//           fontFamily: 'Cooper Black',
//           textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
//           marginBottom: '20px',
//         }}>
//           Buyer Registration
//         </h2>
//         <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             value={formData.address}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="tel"
//             name="phoneNumber"
//             placeholder="Phone Number"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           <button
//             type="submit"
//             style={buttonStyle}
//             onMouseEnter={e => e.target.style.backgroundColor = '#4299e1'}
//             onMouseLeave={e => e.target.style.backgroundColor = '#3182ce'}
//           >
//             Register
//           </button>
//         </form>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default BuyerRegister;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import buyerBackground from './buyerpagebck.avif';

// const buttonStyle = {
//   width: '300px',
//   padding: '10px',
//   fontSize: '20px',
//   margin: '10px',
//   cursor: 'pointer',
//   border: 'none',
//   borderRadius: '5px',
//   color: 'white',
//   fontFamily: 'Segoe UI Black',
//   backgroundColor: '#3182ce',
//   transition: 'background-color 0.3s',
// };

// const BuyerRegister = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     address: '',
//     phoneNumber: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!/^\d{10}$/.test(formData.phoneNumber)) {
//       setError('Phone number must be exactly 10 digits!');
//       return;
//     }

//     if (formData.password.length < 8) {
//       setError('Password must be at least 8 characters long!');
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match!');
//       return;
//     }

//     setError('');

//     try {
//       const response = await fetch('http://localhost:5000/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.status === 400) {
//         // Handle existing user case
//         setError(data.message); // Display error message from the server
//         toast.error(data.message, { position: "top-center", autoClose: 2000 });
//       } else if (data.success) {
//         toast.success('Registration successful!', {
//           position: "top-center",
//           autoClose: 2000,
//         });

//         setTimeout(() => {
//           navigate('/buyer-login'); // Navigate to login page after registration
//         }, 2000);
//       }
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div style={{
//       position: 'relative',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       backgroundImage: `url(${buyerBackground})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//     }}>
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         zIndex: 1,
//       }}></div>

//       <div style={{ zIndex: 2, textAlign: 'center' }}>
//         <h2 style={{
//           fontSize: '36px',
//           color: '#ffffff',
//           fontFamily: 'Cooper Black',
//           textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
//           marginBottom: '20px',
//         }}>
//           Buyer Registration
//         </h2>
//         <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             value={formData.address}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="tel"
//             name="phoneNumber"
//             placeholder="Phone Number"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             style={{ margin: '10px', padding: '10px', width: '300px' }}
//             required
//           />
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           <button
//             type="submit"
//             style={buttonStyle}
//             onMouseEnter={e => e.target.style.backgroundColor = '#4299e1'}
//             onMouseLeave={e => e.target.style.backgroundColor = '#3182ce'}
//           >
//             Register
//           </button>
//         </form>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default BuyerRegister;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import buyerBackground from './assets/buyerpagebck.avif';

const buttonStyle = {
  width: '300px',
  padding: '10px',
  fontSize: '20px',
  margin: '10px',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '5px',
  color: 'white',
  fontFamily: 'Segoe UI Black',
  backgroundColor: '#3182ce',
  transition: 'background-color 0.3s',
};

const BuyerRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setError('Phone number must be exactly 10 digits!');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long!');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 400) {
        setError(data.message); // Display error message from the server
        toast.error(data.message, { position: "top-center", autoClose: 2000 });
      } else if (data.success) {
        localStorage.setItem('buyerToken', data.token); // Store token for authenticated requests
        toast.success('Registration successful!', {
          position: "top-center",
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate('/buyer-login'); // Navigate to login page after registration
        }, 2000);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: `url(${buyerBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
      }}></div>

      <div style={{ zIndex: 2, textAlign: 'center' }}>
        <h2 style={{
          fontSize: '36px',
          color: '#ffffff',
          fontFamily: 'Cooper Black',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          marginBottom: '20px',
        }}>
          Buyer Registration
        </h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            style={{ margin: '10px', padding: '10px', width: '300px' }}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            style={{ margin: '10px', padding: '10px', width: '300px' }}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            style={{ margin: '10px', padding: '10px', width: '300px' }}
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={{ margin: '10px', padding: '10px', width: '300px' }}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ margin: '10px', padding: '10px', width: '300px' }}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{ margin: '10px', padding: '10px', width: '300px' }}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{ margin: '10px', padding: '10px', width: '300px' }}
            required
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" style={buttonStyle}>Register</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default BuyerRegister;
