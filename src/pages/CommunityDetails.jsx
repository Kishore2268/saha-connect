import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const CommunityDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const communities = [
    { id: 1, title: "Community 1", details: "Details about Community 1" },
    { id: 2, title: "Community 2", details: "Details about Community 2" },
    { id: 3, title: "Community 3", details: "Details about Community 3" },
    { id: 4, title: "Community 4", details: "Details about Community 4" },
    { id: 5, title: "Community 5", details: "Details about Community 5" },
    { id: 6, title: "Community 6", details: "Details about Community 6" },
    { id: 7, title: "Community 7", details: "Details about Community 7" },
  ];

  const community = communities.find((c) => c.id === Number(id));

  if (!community) {
    return <div>Community not found</div>;
  }

  const handleApplyClick = () => {
    navigate(`/apply/${community.id}`, { state: { communityName: community.title } }); // Passing community name
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-6 w-full max-w-md bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4">{community.title}</h1>
        <p className="mt-4 text-center">{community.details}</p>
        <div className="flex justify-center">
          <button
            onClick={handleApplyClick}
            className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-700"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetails;

