import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ApplyForm = () => {
  // useNavigate hook to navigate to different pages after form submission
  const navigate = useNavigate();
  // useLocation hook to get the state passed from the previous page (CommunityDetails)
  const location = useLocation();
  // Destructure communityName from the location's state (or set default value to empty if not available)
  const { communityName } = location.state || {};

  // State variables to manage form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    // Alerting user that the application is submitted (you can replace it with API call)
    alert("Application Submitted!");
    // Navigate to home page (or another route) after submission
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-6 bg-gray-100">
      <div className="p-8 w-full max-w-md bg-white shadow-xl rounded-lg transform transition-all duration-300">
        {/* Heading displaying the community name */}
        <h1 className="text-2xl lg:text-3xl font-bold text-orange-500 text-center mb-4">
          Apply to {communityName}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name input */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update state on input change
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
              required
            />
          </div>

          {/* Email input */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
              required
            />
          </div>

          {/* Phone input */}
          <div>
            <label htmlFor="phone" className="block text-lg font-medium">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)} // Update state on input change
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
              required
            />
          </div>

          {/* Address input */}
          <div>
            <label htmlFor="address" className="block text-lg font-medium">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)} // Update state on input change
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
              required
            />
          </div>

          {/* Message textarea */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Why do you want to join? <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Update state on input change
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
              required
            />
          </div>

          {/* Submit button */}
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="mt-6 px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-700 transition duration-200 transform hover:scale-105">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;





