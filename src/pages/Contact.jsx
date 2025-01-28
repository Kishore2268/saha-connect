import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa"; // Importing icons for contact details
import { motion } from "framer-motion"; // Importing motion for animations

const Contact = () => {
  // State to store the form data (user inputs)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // State to store form validation errors
  const [formErrors, setFormErrors] = useState({});

  // State to track if the form is successfully submitted or not
  const [isSubmitted, setIsSubmitted] = useState(false);

  // State to track if there were any errors in form submission
  const [isError, setIsError] = useState(false);

  // Function to handle form input changes and update formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to validate the form and handle submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission
    const errors = validateForm(formData); // Call validation function
    if (Object.keys(errors).length === 0) {
      // No errors found
      setIsSubmitted(true); // Set submission status to true
      setIsError(false); // No errors
      console.log("Form submitted successfully:", formData); // Log form data to console (you can send it to a server here)
    } else {
      setFormErrors(errors); // Set form errors to state
      setIsError(true); // Indicate that there are errors
    }
  };

  // Form validation function
  const validateForm = (data) => {
    const errors = {}; // Object to store error messages
    if (!data.firstName) errors.firstName = "First Name is required"; // Check if first name is empty
    if (!data.lastName) errors.lastName = "Last Name is required"; // Check if last name is empty
    if (!data.email) errors.email = "Email Address is required"; // Check if email is empty
    if (!data.phone) errors.phone = "Phone Number is required"; // Check if phone is empty
    if (!data.message) errors.message = "Message is required"; // Check if message is empty
    return errors; // Return the error messages
  };

  return (
    <div className="w-full mt-16">
      {/* Contact Section Title */}
      <div className="bg-blue-950 text-white py-12 lg:py-32 text-center mb-10 lg:mb-16">
        <h1 className="text-3xl lg:text-6xl font-bold text-yellow-200 flex justify-center items-center gap-3">
          <FaEnvelope className="text-3xl lg:text-6xl" /> Contact Us
        </h1>
      </div>

      {/* Contact Details Section */}
      <motion.div
        className="bg-white py-20 px-8 lg:px-32 flex flex-col lg:flex-row mb-10 lg:mb-16 gap-6 justify-center"
        initial={{ opacity: 0, y: 50 }} // Initial animation position
        animate={{ opacity: 1, y: 0 }} // Animation on visibility
        transition={{ duration: 1 }} // Duration of animation
      >
        {/* Phone Number Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center lg:items-start group border-b lg:border-r lg:border-b-0 border-gray-300 pb-8 lg:pb-0 lg:pr-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <FaPhoneAlt
            size={64}
            className="text-blue-950 text-2xl bg-yellow-200 p-4 rounded-xl lg:mr-6 mb-4 lg:mb-0"
          />
          <div className="text-center lg:text-left">
            <p className="text-xl font-semibold text-gray-800">Phone Number</p>
            <p className="text-gray-600 text-lg">+91 8955578234</p>
          </div>
        </motion.div>

        {/* Email Address Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center lg:items-start group border-b lg:border-r lg:border-b-0 border-gray-300 pb-8 lg:pb-0 lg:pr-8 lg:pl-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <FaEnvelope
            size={64}
            className="text-blue-950 text-2xl bg-yellow-200 p-4 rounded-xl lg:mr-6 mb-4 lg:mb-0"
          />
          <div className="text-center lg:text-left">
            <p className="text-xl font-semibold text-gray-800">Email Address</p>
            <p className="text-gray-600 text-lg">connect@sahaconnect.in</p>
          </div>
        </motion.div>

        {/* Address Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center lg:items-start group lg:pl-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          <FaMapMarkerAlt
            size={64}
            className="text-blue-950 text-2xl bg-yellow-200 p-4 rounded-xl lg:mr-6 mb-4 lg:mb-0"
          />
          <div className="text-center lg:text-left">
            <p className="text-xl font-semibold text-gray-800">Address</p>
            <p className="text-gray-600 text-lg">
              123, Main Street, City Name, State, Country - 123456
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        className="bg-blue-950 text-white py-16 px-8 lg:px-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="text-center mb-10">
          <h1 className="text-2xl lg:text-5xl font-bold text-yellow-200 mb-6">
            Have Any Questions to discuss?
          </h1>
          <h1 className="text-xl lg:text-3xl">Get In Touch With Us</h1>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit} // Submit handler
          className="w-full lg:w-[70%] space-y-8 mx-auto"
        >
          {/* First Name and Last Name Fields */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* First Name Input Field */}
            <motion.div
              className="flex flex-col w-full"
              whileInView={{ opacity: 1, y: 0 }} // when in view, the opacity is set to 100%
              viewport={{ once: true, amount: 0.2 }} // the animation to animate only once when the viewport comes into view
              initial={{ opacity: 0, y: 50 }} // default opacity and position
              transition={{ delay: 0.3, duration: 0.9 }} //animation delay and duration
            >
              <label
                htmlFor="first-name"
                className="text-gray-200 font-semibold mb-2"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange} // Update state on input change
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-200"
                required
              />
              {formErrors.firstName && (
                <p className="text-red-500 text-sm">{formErrors.firstName}</p> // Show error message if validation fails
              )}
            </motion.div>

            {/* Last Name Input Field */}
            <motion.div
              className="flex flex-col w-full"
              whileInView={{ opacity: 1, y: 0 }} // when in view, the opacity is set to 100%
              viewport={{ once: true, amount: 0.2 }} // the animation to animate only once when the viewport comes into view
              initial={{ opacity: 0, y: 50 }} // default opacity and position
              transition={{ delay: 0.3, duration: 0.9 }} //animation delay and duration
            >
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
                onChange={handleChange} // Update state on input change
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-200"
                required
              />
              {formErrors.lastName && (
                <p className="text-red-500 text-sm">{formErrors.lastName}</p> // Show error message if validation fails
              )}
            </motion.div>
          </div>

          {/* Email Field */}
          <motion.div
            className="flex flex-col w-full"
            whileInView={{ opacity: 1, y: 0 }} // when in view, the opacity is set to 100%
            viewport={{ once: true, amount: 0.2 }} // the animation to animate only once when the viewport comes into view
            initial={{ opacity: 0, y: 50 }} // default opacity and position
            transition={{ delay: 0.3, duration: 0.9 }} //animation delay and duration
          >
            <label htmlFor="email" className="text-gray-200 font-semibold mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange} // Update state on input change
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-200"
              required
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm">{formErrors.email}</p> // Show error message if validation fails
            )}
          </motion.div>

          {/* Phone Field */}
          <motion.div
            className="flex flex-col w-full"
            whileInView={{ opacity: 1, y: 0 }} // when in view, the opacity is set to 100%
            viewport={{ once: true, amount: 0.2 }} // the animation to animate only once when the viewport comes into view
            initial={{ opacity: 0, y: 50 }} // default opacity and position
            transition={{ delay: 0.3, duration: 0.9 }} //animation delay and duration
          >
            <label htmlFor="phone" className="text-gray-200 font-semibold mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange} // Update state on input change
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-200"
              required
            />
            {formErrors.phone && (
              <p className="text-red-500 text-sm">{formErrors.phone}</p> // Show error message if validation fails
            )}
          </motion.div>

          {/* Message Field */}
          <motion.div
            className="flex flex-col w-full"
            whileInView={{ opacity: 1, y: 0 }} // when in view, the opacity is set to 100%
            viewport={{ once: true, amount: 0.2 }} // the animation to animate only once when the viewport comes into view
            initial={{ opacity: 0, y: 50 }} // default opacity and position
            transition={{ delay: 0.3, duration: 0.9 }} //animation delay and duration
          >
            <label
              htmlFor="message"
              className="text-gray-200 font-semibold mb-2"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange} // Update state on input change
              placeholder="Type your message here"
              rows="6"
              className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-200"
              required
            />
            {formErrors.message && (
              <p className="text-red-500 text-sm">{formErrors.message}</p> // Show error message if validation fails
            )}
          </motion.div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-yellow-200 text-black font-semibold rounded-md shadow-md hover:bg-yellow-300 focus:outline-none"
            >
              {isSubmitted ? (
                <span className="flex items-center justify-center">
                  <FaCheckCircle className="mr-2" /> Message Sent!
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
