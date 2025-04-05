"use client"

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react"; // Import useState to manage the index

export default function SliderVenues() {

  const sliderImages = [
    {
      img: "/images/Slider.PNG",
      title: "Villa Balbianello",
      place: "Lake Como",
      info:
        `The whole complex consists of two residential buildings, a church, and a portico (known as Loggia Durini) that can host weddings and events in a truly unique setting. But the special feature of Villa Balbianello is above all the vast garden that surrounds the dwellings, with magnificent holm oaks pruned into an umbrella shape so as to offer a splendid view of Lake Como from inside the... View more`,
    },
    {
      img: "/images/Slider.PNG",
      title: "Villa Balbianello",
      place: "Lake Como",
      info:
"The whole complex consists of two residential buildings, a church, and a portico (known as Loggia Durini) that can host weddings and events in a truly unique setting. But the special feature of Villa Balbianello is above all the vast garden that surrounds the dwellings, with magnificent holm oaks pruned into an umbrella shape so as to offer a splendid view of Lake Como from inside the... View more"    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1));
  };

  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1));
  };

  
  const CustomLeftArrow = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "415px",
          left: "411px",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 10,
          
        }}
        className="slider-left-arrow"
        onClick={handlePrev} 
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
          top: "415px",
          right: "38px",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 10,
        }}
        className="slider-right-arrow"
        onClick={handleNext} 
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
      showIndicators={false}
      infiniteLoop={true}
      renderArrowPrev={CustomLeftArrow}
      renderArrowNext={CustomRightArrow}
      showStatus={false}
      responsive={true}
      selectedItem={currentIndex} 
      onChange={(index) => setCurrentIndex(index)} 
    >
      {sliderImages.map((item, index) => {
        return (
          <div key={index}  className="slide-wrapper">
            <img
              className="slide-image"
              alt=""
              src={item.img}
            />
            <div className="slide-context" >
            
                <p className="slide-status"><span>{currentIndex + 1}</span> / {sliderImages.length}</p>
              <div>
                <h3 className="slide-title">{item.title}</h3>
                <p className="slide-place">{item.place}</p>
                <p className="slide-info">{item.info}</p> 
              </div>
              
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
