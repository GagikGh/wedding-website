"use client"

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react"; // Import useState to manage the index

export default function SliderVenues() {
  const sliderImages = [
    {
      img: "/images/Slider.PNG",
      title: "Villa Balbianello",
      info:
        "The whole complex consists of two residential buildings, a church, and a portico (known as Loggia Durini) that can host weddings and events in a truly unique setting.",
    },
    {
      img: "/images/Slider.PNG",
      title: "Villa Balbianello",
      info:
        "The whole complex consists of two residential buildings, a church, and a portico (known as Loggia Durini) that can host weddings and events in a truly unique setting.",
    },
  ];

  // State to keep track of the selected slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1));
  };

  // Handle the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1));
  };

  // Custom left arrow
  const CustomLeftArrow = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 10,
        }}
        onClick={handlePrev} // Call the handlePrev function when clicked
      >
        <img
          src="/images/west.png"
          alt="Left Arrow"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
    );
  };

  // Custom right arrow
  const CustomRightArrow = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 10,
        }}
        onClick={handleNext} // Call the handleNext function when clicked
      >
        <img
          src="/images/east.png"
          alt="Right Arrow"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
    );
  };

  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      renderArrowPrev={CustomLeftArrow}
      renderArrowNext={CustomRightArrow}
      selectedItem={currentIndex} // Pass the current index to the Carousel
      onChange={(index) => setCurrentIndex(index)} // Update the index when carousel changes
    >
      {sliderImages.map((item, index) => {
        return (
          <div key={index} style={{ display: "flex", position: "relative" }}>
            <img
              style={{
                width: "361px",
                height: "467px",
                borderRadius: "8px 0px 0px 8px",
              }}
              alt=""
              src={item.img}
            />
            <div
              className="slider-context"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "20px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
                borderRadius: "8px",
                marginLeft: "20px",
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.info}</p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
