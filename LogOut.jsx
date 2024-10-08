// LogOut.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform your logout logic here (e.g., clear user session)
    console.log('User logged out');

    // Navigate to the login page or home page after logout
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl mb-4">Logout</h2>
      <p className="mb-6">Are you sure you want to log out?</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
