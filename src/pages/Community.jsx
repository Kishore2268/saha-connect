import React, { useState } from "react";
import Slider from "../components/Slider";
import { useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate();
  const [selectedCommunity, setSelectedCommunity] = useState(null);

  const handleCommunitySelect = (community) => {
    setSelectedCommunity(community);
    navigate(`/communities/${community.id}`);
  };

  return (
    <div>
      <Slider onCommunitySelect={handleCommunitySelect} />
    </div>
  );
};

export default Community;
