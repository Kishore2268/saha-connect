import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Slider = ({ onCommunitySelect }) => {
  // Array of slide objects with id, title, image, and details
  const slides = [
    {
      id: 1,
      title: "Community 1",
      image: "images/communityimg1.jpg",
      details: "Details about Community 1",
    },
    {
      id: 2,
      title: "Community 2",
      image: "images/communityimg2.jpg",
      details: "Details about Community 2",
    },
    {
      id: 3,
      title: "Community 3",
      image: "images/communityimg3.jpg",
      details: "Details about Community 3",
    },
    {
      id: 4,
      title: "Community 4",
      image: "images/communityimg4.jpg",
      details: "Details about Community 4",
    },
    {
      id: 5,
      title: "Community 5",
      image: "images/communityimg5.jpg",
      details: "Details about Community 5",
    },
    {
      id: 6,
      title: "Community 6",
      image: "images/communityimg6.jpg",
      details: "Details about Community 6",
    },
    {
      id: 7,
      title: "Community 7",
      image: "images/communityimg7.jpg",
      details: "Details about Community 7",
    },
  ];

  // State to keep track of the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Ref to store the interval ID for auto-sliding
  const intervalRef = useRef(null);

  // Function to start the auto-slide mechanism
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000); // Slide changes every 7 seconds
  };

  // Function to reset the auto-slide when manually navigating
  const resetAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear any existing interval
    }
    startAutoSlide(); // Restart the auto-slide with a fresh interval
  };

  // useEffect hook to start auto-slide when the component is mounted
  useEffect(() => {
    startAutoSlide(); // Start auto-sliding
    return () => clearInterval(intervalRef.current); // Cleanup interval when component unmounts
  }, []);

  // Function to navigate to the next slide manually
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    resetAutoSlide(); // Reset interval when navigating manually
  };

  // Function to navigate to the previous slide manually
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    resetAutoSlide(); // Reset interval when navigating manually
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gray-100 shadow-lg">
      {/* Wrapper for slides with transition on transform to create sliding effect */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Adjusts to the current index
      >
        {/* Render each slide */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center relative"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay for dimming effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        
            {/* Slide title with animation using framer-motion */}
            <motion.h1
              key={currentIndex}
              className="text-5xl md:text-6xl lg:text-8xl text-white font-bold mb-10 drop-shadow-lg z-20"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1.2,
                duration: 0.8,
                type: "spring",
              }}
            >
              {slide.title}
            </motion.h1>
        
            {/* Button to select community, with animation */}
            <motion.button
              key={`button-${currentIndex}`}
              onClick={() => onCommunitySelect(slide)} // Passes the selected slide as parameter
              className="bg-yellow-200 text-gray-800 py-3 text-xl px-6 rounded-lg shadow-md hover:scale-105 hover:bg-blue-950 hover:text-yellow-200 z-20"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.8,
                type: "spring",
              }}
            >
              Click to Know More
            </motion.button>
          </div>
        ))}
      </div>

      {/* Navigation buttons for manual slide change */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 shadow-lg hover:bg-yellow-200 hover:text-blue-950 transition"
        onClick={goToPrevSlide}
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 shadow-lg hover:bg-yellow-200 hover:text-blue-950 transition"
        onClick={goToNextSlide}
      >
        <FaArrowRight size={20} />
      </button>

      {/* Dots to indicate the current slide */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-4 w-4 rounded-full transition-transform duration-300 ${
              currentIndex === index ? "bg-blue-950 scale-150" : "bg-gray-400"
            }`}
            onClick={() => {
              setCurrentIndex(index);
              resetAutoSlide(); // Reset the interval when manually selecting a slide
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
