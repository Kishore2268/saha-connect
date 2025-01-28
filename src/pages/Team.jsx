import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
    {
        name: "John Doe",
        role: "Frontend Developer",
        bio: "Passionate about creating beautiful web experiences.",
        image: "images/profile1.webp",
        socials: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
      {
        name: "Jane Smith",
        role: "Backend Developer",
        bio: "Expert in building robust and scalable server-side applications.",
        image: "images/profile2.webp",
        socials: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
      {
        name: "Michael Brown",
        role: "UI/UX Designer",
        bio: "Designing intuitive interfaces that enhance user experience.",
        image: "images/profile4.webp",
        socials: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
      {
        name: "Jos Buttler",
        role: "Frontend Developer",
        bio: "Passionate about creating beautiful web experiences.",
        image: "images/profile1.webp",
        socials: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
      {
        name: "Steve Smith",
        role: "Backend Developer",
        bio: "Expert in building robust and scalable server-side applications.",
        image: "images/profile2.webp",
        socials: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
      {
        name: "Keiron Pollard",
        role: "UI/UX Designer",
        bio: "Designing intuitive interfaces that enhance user experience.",
        image: "images/profile4.webp",
        socials: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
      {
        name: "Steve Smith",
        role: "Backend Developer",
        bio: "Expert in building robust and scalable server-side applications.",
        image: "images/profile2.webp",
        socials: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
      {
        name: "Keiron Pollard",
        role: "UI/UX Designer",
        bio: "Designing intuitive interfaces that enhance user experience.",
        image: "images/profile4.webp",
        socials: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Team = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mt-20 mb-8">Our Dedicated Team</h1>
      <div className="w-full lg:w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            variants={cardVariants}
          >
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="w-full h-64 mx-auto object-cover rounded-xl mb-4"
            />
            <h2 className="text-yellow-200 text-xl font-bold">{member.name}</h2>
            <p className="text-gray-700 text-md">{member.role}</p>
            <p className="text-gray-500 text-md mt-2">{member.bio}</p>
            <div className="flex justify-start gap-6 mt-4">
              <a
                href={member.socials.facebook}
                className="text-yellow-200 text-2xl hover:text-gray-600"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href={member.socials.linkedin}
                className="text-yellow-200 text-2xl hover:text-gray-600"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={member.socials.twitter}
                className="text-yellow-200 text-2xl hover:text-gray-600"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href={member.socials.instagram}
                className="text-yellow-200 text-2xl hover:text-gray-600"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;

