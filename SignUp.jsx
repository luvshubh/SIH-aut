// Signup.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
    email: '',
    password: '',
    profileImg: null,
    otp: '',
  });

  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      profileImg: e.target.files[0],
    }));
  };

  const sendOtp = async () => {
    try {
      const { phoneNo, email } = formData;

      const response = await axios.post('/api/send-otp', { phoneNo, email });
      console.log(response.data);
      setOtpSent(true); // Set OTP sent state
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object for file upload
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await axios.post('/api/register', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      // Handle successful registration (e.g., redirect, show success message)
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mb-4 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="mb-4 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
          <input
            type="tel"
            name="phoneNo"
            placeholder="Phone Number"
            value={formData.phoneNo}
            onChange={handleChange}
            required
            className="mb-4 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mb-4 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mb-4 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
          <input
            type="file"
            name="profileImg"
            onChange={handleFileChange}
            required
            className="mb-4 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />

          {otpSent ? (
            <>
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
                required
                className="mb-4 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
              <button
                type="button"
                onClick={sendOtp}
                className="mb-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Resend OTP
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={sendOtp}
              className="mb-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Send OTP
            </button>
          )}

          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
