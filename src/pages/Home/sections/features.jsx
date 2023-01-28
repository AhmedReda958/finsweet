import React from "react";
import IconCard from "components/iconCard";
import { FaUsers } from "react-icons/fa";

// text for cards
const text =
  "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ";

const Features = () => {
  const data = [
    { icon: "FaUsers", title: "Uses Client First", text: "" },
    { icon: "FaCircleCheck", title: "Two Free Revision Round", text: "" },
    { icon: "FaPenRule", title: "Template Customization", text: "" },
    { icon: "FaUsers", title: "Uses Client First", text: "" },
    { icon: "FaCircleCheck", title: "Two Free Revision Round", text: "" },
    { icon: "FaPenRule", title: "Template Customization", text: "" },
  ];
  return (
    <div className="features">
      <div className="header">
        <span>Features</span>
        <h2>Design that solves problems, one product at a time</h2>
      </div>
      <div className="container">
        {data.map((card) => (
          <IconCard title={card.title} text={text}>
            <FaUsers />
          </IconCard>
        ))}
      </div>
    </div>
  );
};

export default Features;
