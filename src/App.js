import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Community from "./pages/Community";
import CommunityDetails from "./pages/CommunityDetails";
import ApplyForm from "./pages/ApplyForm";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Team from "./pages/Team";

// Dummy components for demo purposes
const About = () => <div className="h-full bg-gray-100">About Page</div>;
const Home = () => <div className="h-full bg-gray-100">Home Page</div>;

const App = () => {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/community" element={<Community />} />
            <Route path="/communities/:id" element={<CommunityDetails />} />
            <Route path="/apply/:id" element={<ApplyForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
;

