import React, { useState } from "react"; // Importing React and useState hook for managing state in the component
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa"; // Importing icon components for styling

// Define the Contact component
const Contact = () => {
  // State variables to manage form data, form errors, submission status, and error status
  const [formData, setFormData] = useState({
    firstName: "", // First name of the user
    lastName: "",  // Last name of the user
    email: "",     // Email address of the user
    phone: "",     // Phone number of the user
    message: "",   // Message from the user
  });

  const [formErrors, setFormErrors] = useState({}); // To store form validation errors
  const [isSubmitted, setIsSubmitted] = useState(false); // To track whether the form is successfully submitted
  const [isError, setIsError] = useState(false); // To track if there was an error in the form submission

  // Handle input field changes and update the state
  const handleChange = (e) => {
    const { name, value } = e.target; // Get the name and value of the input field
    setFormData((prevData) => ({ ...prevData, [name]: value })); // Update the respective field in the form data
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    const errors = validateForm(formData); // Validate the form data
    if (Object.keys(errors).length === 0) {
      // If there are no errors
      setIsSubmitted(true); // Set form submission state to true
      setIsError(false); // Set error state to false
      console.log("Form submitted successfully:", formData); // Log the form data (you would normally send this data to the server here)
    } else {
      setFormErrors(errors); // If errors exist, store them in the state
      setIsError(true); // Set error state to true
    }
  };

  // Form validation function
  const validateForm = (data) => {
    const errors = {}; // Object to store error messages
    if (!data.firstName) errors.firstName = "First Name is required"; // Check if the first name is empty
    if (!data.lastName) errors.lastName = "Last Name is required"; // Check if the last name is empty
    if (!data.email) errors.email = "Email Address is required"; // Check if the email is empty
    if (!data.phone) errors.phone = "Phone Number is required"; // Check if the phone number is empty
    if (!data.message) errors.message = "Message is required"; // Check if the message is empty
    return errors; // Return the errors object
  };

  return (
    <div className="w-full mt-16">
      {/* Header Section */}
      <div className="bg-blue-950 text-white py-32 text-center mb-10 lg:mb-16">
        {/* Title of the page */}
        <h1 className="text-6xl font-bold text-yellow-200 flex justify-center items-center gap-3">
          <FaEnvelope size={60} /> Contact Us {/* Icon and title */}
        </h1>
      </div>

      {/* Contact Details Section */}
      <div className="bg-white py-20 px-8 lg:px-32 flex flex-col lg:flex-row mb-10 lg:mb-16 gap-6 justify-center">
        {/* Phone Number */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start group border-b lg:border-r lg:border-b-0 border-gray-300 pb-8 lg:pb-0 lg:pr-8">
          <FaPhoneAlt
            size={64}
            className="text-blue-950 text-2xl bg-yellow-200 p-4 rounded-xl lg:mr-6 mb-4 lg:mb-0 group-hover:text-yellow-200 group-hover:bg-blue-950 transition-colors duration-500 delay-100"
          />
          <div className="text-center lg:text-left">
            <p className="text-xl font-semibold text-gray-800">Phone Number</p>
            <p className="text-gray-600 text-lg">+91 9876543210</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start group border-b lg:border-r lg:border-b-0 border-gray-300 pb-8 lg:pb-0 lg:pr-8 lg:pl-8">
          <FaEnvelope
            size={64}
            className="text-blue-950 text-2xl bg-yellow-200 p-4 rounded-xl lg:mr-6 mb-4 lg:mb-0 group-hover:text-yellow-200 group-hover:bg-blue-950 transition-colors duration-500 delay-100"
          />
          <div className="text-center lg:text-left">
            <p className="text-xl font-semibold text-gray-800">Email Address</p>
            <p className="text-gray-600 text-lg">contact@example.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start group lg:pl-8">
          <FaMapMarkerAlt
            size={64}
            className="text-blue-950 text-2xl bg-yellow-200 p-4 rounded-xl lg:mr-6 mb-4 lg:mb-0 group-hover:text-yellow-200 group-hover:bg-blue-950 transition-colors duration-500 delay-100"
          />
          <div className="text-center lg:text-left">
            <p className="text-xl font-semibold text-gray-800">Address</p>
            <p className="text-gray-600 text-lg">
              123, Main Street, City Name, State, Country - 123456
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-blue-950 text-white py-16 px-8 lg:px-32">
        <div className="text-center mb-10">
          <h1 className="text-2xl lg:text-5xl font-bold text-yellow-200 mb-6">
            Have Any Questions to discuss? {/* Title */}
          </h1>
          <h1 className="text-xl lg:text-3xl">Get In Touch With Us</h1>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit} // Trigger handleSubmit function when the form is submitted
          className="w-full lg:w-[70%] space-y-8 mx-auto"
        >
          {/* First Name and Last Name Fields */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col w-full">
              <label
                htmlFor="first-name"
                className="text-gray-200 font-semibold mb-2"
              >
                First Name <span className="text-red-500">*</span> {/* Label for the first name input */}
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName" // This will link the input to the form data state
                value={formData.firstName} // Display the current value of the input
                onChange={handleChange} // Update the value of the input when changed
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-200"
                required
              />
              {/* Display error message if the field is not filled */}
              {formErrors.firstName && (
                <p className="text-red-500 text-sm">{formErrors.firstName}</p>
              )}
            </div>
            {/* Last Name Field (similar to first name field) */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="last-name"
                className="text-gray-200 font-semibold mb-2"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-200"
                required
              />
              {formErrors.lastName && (
                <p className="text-red-500 text-sm">{formErrors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email and Phone Fields (similar to above) */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                className="text-gray-200 font-semibold mb-2"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-200"
                required
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm">{formErrors.email}</p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="phone"
                className="text-gray-200 font-semibold mb-2"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-200"
                required
              />
              {formErrors.phone && (
                <p className="text-red-500 text-sm">{formErrors.phone}</p>
              )}
            </div>
          </div>

          {/* Message Box */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="message"
              className="text-gray-200 font-semibold mb-2"
            >
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-200"
              required
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500 text-sm">{formErrors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto bg-yellow-200 hover:bg-yellow-300 text-blue-950 font-semibold text-lg px-6 py-3 rounded-md focus:outline-none focus:ring-4 focus:ring-yellow-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Success or Error Message */}
      {isSubmitted && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-green-400 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-md shadow-md text-center">
            <FaCheckCircle size={50} className="text-green-500 mb-4" />
            <h3 className="text-2xl font-semibold text-green-500">
              Your message has been successfully sent!
            </h3>
          </div>
        </div>
      )}
      {isError && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-red-400 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-md shadow-md text-center">
            <FaExclamationCircle size={50} className="text-red-500 mb-4" />
            <h3 className="text-2xl font-semibold text-red-500">
              There was an error submitting the form. Please try again.
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

