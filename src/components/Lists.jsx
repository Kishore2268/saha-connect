import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import anime from "animejs/lib/anime.es.js";

const Lists = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  // Ref for the title element
  const titleRef = useRef();

  useEffect(() => {
    const titleElement = titleRef.current;
    const letters = titleElement.textContent.split("");

    // Clear the text in the title element to split into individual spans
    titleElement.innerHTML = "";

    // Creating a span for each letter and append it to the title element
    letters.forEach((letter, index) => {
      const span = document.createElement("span");
      span.innerHTML = letter;
      titleElement.appendChild(span);
    });

    // Animate each letter with a bouncing effect
    anime({
      targets: titleElement.querySelectorAll("span"),
      translateY: ["-30px", "0px"],
      opacity: [0, 1],
      easing: "easeOutElastic(1, 0.8)",
      duration: 100,
      delay: anime.stagger(100),
    });
  }, []);

  const handleNavigate = (partnerId) => {
    navigate(`/partners/${partnerId}`); // navigate to the specific partner
  };

  const handleCardInteraction = (index) => {
    // For mobile devices, treat it as a click/tap event
    if (window.innerWidth <= 768) {
      setHoveredCard(index); // Toggle the card on click for mobile
    }
  };

  // partners array to store partner data
  const partners = [        
    {
      id: 1,
      name: "Partner A",
      benefits: [
        "Exclusive discounts",
        "Priority support",
        "Access to premium tools",
      ],
      image: "images/partners.jpg",
    },
    {
      id: 2,
      name: "Partner B",
      benefits: [
        "Extended free trials",
        "Customized solutions",
        "Training sessions",
      ],
      image: "images/partners1.jpg",
    },
    {
      id: 3,
      name: "Partner C",
      benefits: [
        "Global Networking",
        "Dedicated manager",
        "Analytics dashboards",
      ],
      image: "images/partners2.jpg",
    },
    {
      id: 4,
      name: "Partner D",
      benefits: [
        "Discounted upgrades",
        "Free consultations",
        "Priority onboarding",
      ],
      image: "images/partners.jpg",
    },
    {
      id: 5,
      name: "Partner E",
      benefits: [
        "24/7 support",
        "Custom API integration",
        "User analytics tools",
      ],
      image: "images/partners1.jpg",
    },
    {
      id: 6,
      name: "Partner F",
      benefits: ["Flexible pricing", "Account manager", "Event invites"],
      image: "images/partners2.jpg",
    },
    {
      id: 7,
      name: "Partner G",
      benefits: ["Early feature access", "Dedicated channel", "Global tools"],
      image: "images/partners.jpg",
    },
    {
      id: 8,
      name: "Partner H",
      benefits: [
        "Cross-platform tools",
        "Enterprise features",
        "Advanced insights",
      ],
      image: "images/partners1.jpg",
    },
    {
      id: 9,
      name: "Partner I",
      benefits: [
        "Seamless integrations",
        "Exclusive webinars",
        "Priority tech support",
      ],
      image: "images/partners2.jpg",
    },
  ];

  // Animation variant for the whole component fade-in from left
  const containerVariants = {
    hidden: { opacity: 0, x: -100 }, // Start off from the left side of the screen
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } }, // Fade in and move to original position with a duration
  };

  return (
    <div className="min-h-screen bg-white py-12 mt-12 ">
      <div className="max-w-8xl mx-auto px-4">
        <h1
          ref={titleRef}
          className="text-3xl lg:text-4xl font-extrabold text-gray-800 text-center mb-12"
        >
          Our Trusted Partners
        </h1>

        <motion.div
          className="flex flex-col items-center md:grid md:grid-cols-2 md:gap-x-0 md:gap-y-16 md:justify-items-center lg:grid lg:grid-cols-3 gap-8 lg:gap-x-0 lg:gap-y-16 lg:justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {partners.map((partner, index) => (
            <div
              key={partner.id} // mapped the partner details with the unique key - id of the partner
              className={`
                relative group bg-white border border-gray-300 p-6 rounded-2xl shadow-2xl transform transition-all hover:border-blue-950 hover:border-2 hover:bg-yellow-200 flex h-72 lg:h-80 2xl:h-88 3xl:h-96 items-center
                ${hoveredCard === index
                  ? "w-88 md:w-112 lg:w-112 2xl:w-128 3xl:w-160"
                  : "w-72 md:w-96 lg:w-104 2xl:w-120 3xl:w-144"}
                transition-all duration-500
                ${hoveredCard === null || hoveredCard === index
                  ? "lg:opacity-100"
                  : "lg:opacity-50"}
                sm:opacity-100 md:opacity-100
              `}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardInteraction(index)} // onClick for mobile
            >
              {/* Main Card Content */}
              <div className="flex flex-col justify-between w-2/3">
                <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold text-gray-800 mb-2 lg:mb-4 hover:text-blue-950 transition-colors">
                  {partner.name}
                </h2>
                <ul className="space-y-4 lg:space-y-6 2xl:space-y-7 mb-6 md:mb-6 3xl:mb-7">
                  {partner.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="w-48 2xl:w-80 3xl:w-88 flex items-center text-gray-700 text-md lg:text-lg 2xl:text-2xl 3xl:text-3xl"
                    >
                      <FaCheckCircle className="text-green-500 mr-3 text-xl" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-48 lg:56 2xl:w-72 py-3 px-6 border-2 border-gray-400 bg-blue-950 text-yellow-200 font-semibold rounded-lg hover:bg-blue-950 hover:text-yellow-200 transition duration-500 transform hover:scale-105 mb-2 lg:mb-0"
                  onClick={() => handleNavigate(partner.id)}
                >
                  Avail Now
                </button>
              </div>

              {/* Image Section */}
              <div
                className={`flex items-center justify-center w-64 h-64 transition-all duration-500 ${
                  hoveredCard === index ? "opacity-100" : "opacity-0 w-0 h-0"
                }`}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  loading="lazy"
                  className="w-40 h-40 md:w-48 md:h-48 lg:w-full lg:h-full object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Lists;
