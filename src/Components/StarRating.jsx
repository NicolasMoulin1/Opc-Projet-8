import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ totalStars = 5, selectedStars = 0 }) => {
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <Star key={index} selected={index < selectedStars} />
      ))}
    </div>
  );
};

const Star = ({ selected = false }) => (
  <span>
    <FontAwesomeIcon
      icon={selected ? solidStar : regularStar}
      color={selected ? "#ff6060" : "#E3E3E3"}
    />
  </span>
);

export default StarRating;
