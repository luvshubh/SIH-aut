// Template.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Template = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold">Saarthi</h1>
        <nav className="mt-2">
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/signup" className="mr-4 hover:underline">Sign Up</Link>
          <Link to="/login" className="mr-4 hover:underline">Login</Link>
          <Link to="/logout" className="hover:underline">Logout</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 Saarthi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Template;
