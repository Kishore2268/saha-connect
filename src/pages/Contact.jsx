import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      setIsError(false);
      console.log("Form submitted successfully:", formData);
    } else {
      setFormErrors(errors);
      setIsError(true);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.firstName) errors.firstName = "First Name is required";
    if (!data.lastName) errors.lastName = "Last Name is required";
    if (!data.email) errors.email = "Email Address is required";
    if (!data.phone) errors.phone = "Phone Number is required";
    if (!data.message) errors.message = "Message is required";
    return errors;
  };

  return (
    <div className="w-full mt-16">
      <div className="bg-blue-950 text-white py-32 text-center mb-10 lg:mb-16">
        <h1 className="text-3xl lg:text-6xl font-bold text-yellow-200 flex justify-center items-center gap-3">
          <FaEnvelope className="text-3xl lg:text-6xl" /> Contact Us
        </h1>
      </div>

      {/* Contact Details Section */}
      <motion.div
        className="bg-white py-20 px-8 lg:px-32 flex flex-col lg:flex-row mb-10 lg:mb-16 gap-6 justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-col lg:flex-row items-center lg:items-start group border-b lg:border-r lg:border-b-0 border-gray-300 pb-8 lg:pb-0 lg:pr-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <FaPhoneAlt size={64} className="text-blue-950 text-2xl bg-yellow-200 p-4 rounded-xl lg:mr-6 mb-4 lg:mb-0" />
          <div className="text-center lg:text-left">
            <p className="text-xl font-semibold text-gray-800">Phone Number</p>
            <p className="text-gray-600 text-lg">+91 9876543210</p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row items-center lg:items-start group border-b lg:border-r lg:border-b-0 border-gray-300 pb-8 lg:pb-0 lg:pr-8 lg:pl-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <FaEnvelope size={64} className="text-blue-950 text-2xl bg-yellow-200 p-4 rounded-xl lg:mr-6 mb-4 lg:mb-0" />
          <div className="text-center lg:text-left">
            <p className="text-xl font-semibold text-gray-800">Email Address</p>
            <p className="text-gray-600 text-lg">contact@example.com</p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row items-center lg:items-start group lg:pl-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          <FaMapMarkerAlt size={64} className="text-blue-950 text-2xl bg-yellow-200 p-4 rounded-xl lg:mr-6 mb-4 lg:mb-0" />
          <div className="text-center lg:text-left">
            <p className="text-xl font-semibold text-gray-800">Address</p>
            <p className="text-gray-600 text-lg">123, Main Street, City Name, State, Country - 123456</p>
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
          <h1 className="text-2xl lg:text-5xl font-bold text-yellow-200 mb-6">Have Any Questions to discuss?</h1>
          <h1 className="text-xl lg:text-3xl">Get In Touch With Us</h1>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-[70%] space-y-8 mx-auto"
        >
          {/* First Name and Last Name Fields */}
          <div className="flex flex-col lg:flex-row gap-6">
            <motion.div
                className="flex flex-col w-full"
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: false, amount: 0.2 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
              <label htmlFor="first-name" className="text-gray-200 font-semibold mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-200"
                required
              />
              {formErrors.firstName && (
                <p className="text-red-500 text-sm">{formErrors.firstName}</p>
              )}
            </motion.div>
            <motion.div
              className="flex flex-col w-full"
              whileInView={{ opacity: 1, y:0 }}
              viewport={{ once: false, amount: 0.2 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <label htmlFor="last-name" className="text-gray-200 font-semibold mb-2">
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
            </motion.div>
          </div>

          {/* Email and Phone Fields */}
          <div className="flex flex-col lg:flex-row gap-6">
            <motion.div
             className="flex flex-col w-full"
             whileInView={{ opacity: 1, y:0 }}
             viewport={{ once: false, amount: 0.2 }}
             initial={{ opacity: 0, y: 50 }}
             transition={{ delay: 0.3, duration: 0.6 }}
     
            >
              <label htmlFor="email" className="text-gray-200 font-semibold mb-2">
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
            </motion.div>

            <motion.div
              className="flex flex-col w-full"
              whileInView={{ opacity: 1, y:0 }}
              viewport={{ once: false, amount: 0.2 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ delay: 0.3, duration: 0.6 }}
      
            >
              <label htmlFor="phone" className="text-gray-200 font-semibold mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
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
            </motion.div>
          </div>

          {/* Message Field */}
          <motion.div
           className="flex flex-col w-full"
           whileInView={{ opacity: 1, y:0 }}
           viewport={{ once: false, amount: 0.2 }}
           initial={{ opacity: 0, y: 50 }}
           transition={{ delay: 0.3, duration: 0.6 }}
    
          >
            <label htmlFor="message" className="text-gray-200 font-semibold mb-2">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-200"
              rows="4"
              required
            />
            {formErrors.message && (
              <p className="text-red-500 text-sm">{formErrors.message}</p>
            )}
          </motion.div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 text-lg font-semibold bg-yellow-500 text-gray-800 rounded-md focus:outline-none focus:ring-4 focus:ring-yellow-200"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Success/Error Message */}
        {isSubmitted && !isError && (
          <div className="mt-8 text-center text-green-600">
            <FaCheckCircle className="inline mr-2" />
            <p>Thank you! Your message has been sent.</p>
          </div>
        )}
        {isError && (
          <div className="mt-8 text-center text-red-600">
            <FaExclamationCircle className="inline mr-2" />
            <p>There were errors in your submission. Please check and try again.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
