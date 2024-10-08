// src/components/AUTH/SignIn.jsx
import React, { useState } from 'react';

const SignIn = () => {
  // State to store the input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submit
    
    // Simple form validation
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }
    
    // Logic for handling sign-in (this can be integrated with API)
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Reset the form after submission (optional)
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        
        {/* Left Column (Video) */}
        <div className="hidden md:block bg-gradient-to-r from-purple-400 to-blue-500 p-8">
          <video 
            className="w-full h-full object-contain"
            autoPlay
            loop
            muted
            controls
          >
            <source src="https://www.example.com/path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Column (Form) */}
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Sign In</h2>
          
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Your Email
              </label>
              <input 
                type="email" 
                id="email" 
                value={email} // Value bound to state
                onChange={(e) => setEmail(e.target.value)} // Update state on change
                placeholder="Your Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required // Ensures field is required
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Your Password
              </label>
              <input 
                type="password" 
                id="password" 
                value={password} // Value bound to state
                onChange={(e) => setPassword(e.target.value)} // Update state on change
                placeholder="Your Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required // Ensures field is required
              />
            </div>

            {/* Sign In Button */}
            <div className="mb-6">
              <button 
                type="submit" 
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none"
              >
                Sign in
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-gray-500 text-sm">
              Are you new here? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
            </p>

            {/* Divider */}
            <div className="my-4 text-center text-gray-500">OR</div>

            {/* Google Sign In */}
            <div>
              <button className="w-full bg-red-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-red-600 focus:outline-none">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                  alt="Google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
