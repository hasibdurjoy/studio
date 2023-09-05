import React from "react";
import { FaStar } from "react-icons/fa";

const Star = () => {
  return (
    <div className="d-flex justify-content-center align-items-center gap-4">
      <div className="line "></div>
      <FaStar className="star" />
      <div className="line"></div>
    </div>
  );
};

export default Star;
