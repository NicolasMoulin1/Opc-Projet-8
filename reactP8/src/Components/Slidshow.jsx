import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = React.Children.count(children);

  const goToNext = () => {
    if (totalSlides > 1) {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const goToPrev = () => {
    if (totalSlides > 1) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
      );
    }
  };
  return (
    <div className="slideShow">
      <div className="carousel">
        {React.Children.map(children, (child, index) => (
          <div
            style={{
              display: index === currentIndex ? "block" : "none",
              width: "100%",
            }}
          >
            {React.cloneElement(child)}
          </div>
        ))}
        {totalSlides > 1 && (
          <button className="buttonNext" onClick={goToNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
        {totalSlides > 1 && (
          <button className="buttonPrev" onClick={goToPrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
        {totalSlides > 1 && (
          <div className="carousel-info">
            {currentIndex + 1}/{totalSlides}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
