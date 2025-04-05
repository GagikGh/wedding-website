"use client";

import Image from "next/image";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonial = () => {
  const testimonialSlider = [
    {
      title: "Testimonial",
      beforeTitle: "from happy, delighted couples",
      info1:
        "Lorem ipsum sit ac suspendisse adipiscing eget aliquam fermentum rutrum tempus aenean. Suspendisse nascetur vulputate viverra varius eu ullamcorper. Cursus pellentesque erat eget eget ullamcorper id in. Nullam scelerisque varius viverra augue quis. Laoreet eget curabitur vitae sed at facilisis purus convallis imperdiet.",
      info2:
        "Penatibus auctor diam vivamus amet a vehicula ultrices. Volutpat arcu in amet praesent nisl mattis etiam cras orci. Ut urna elementum sapien orci lacus!",
      personImage: "/images/img_placeholder.png",
      personName: "Joy & Jordan",
    },
    {
      title: "Testimonial",
      beforeTitle: "from happy, delighted couples",
      info1:
        "Lorem ipsum sit ac suspendisse adipiscing eget aliquam fermentum rutrum tempus aenean. Suspendisse nascetur vulputate viverra varius eu ullamcorper. Cursus pellentesque erat eget eget ullamcorper id in. Nullam scelerisque varius viverra augue quis. Laoreet eget curabitur vitae sed at facilisis purus convallis imperdiet.",
      info2:
        "Penatibus auctor diam vivamus amet a vehicula ultrices. Volutpat arcu in amet praesent nisl mattis etiam cras orci. Ut urna elementum sapien orci lacus!",
      personImage: "/images/img_placeholder.png",
      personName: "Joy & Jordan",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialSlider.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialSlider.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Custom Left Arrow Component
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 10,
        }}
        className="testimonial-left-arrow"
        onClick={onClick}
      >
        <Image
          src="/images/west.png"
          alt="Left Arrow"
          width={30}
          height={30}
        />
      </div>
    );
  };

  // Custom Right Arrow Component
  const CustomRightArrow = ({ onClick }) => {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "10%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 10,
        }}
        className="testimonial-right-arrow"
        onClick={onClick}
      >
        <Image
          src="/images/east.png"
          alt="Right Arrow"
          width={30}
          height={30}
        />
      </div>
    );
  };

  return (
    <Carousel
      showThumbs={false}
      showIndicators={false}
      infiniteLoop={true}
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && <CustomLeftArrow onClick={onClickHandler} />
      }
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && <CustomRightArrow onClick={onClickHandler} />
      }
      showStatus={false}
      selectedItem={currentIndex}
      onChange={(index) => setCurrentIndex(index)}
    >
      {testimonialSlider.map((item, index) => (
        <div key={index} className="testimonial-container">
          <div className="div-Testimonials">
            <h2>{item.title}</h2>
            <p>{item.beforeTitle}</p>
          </div>
          <div className="testimonial-info">
            <p>{item.info1}</p>
            <p>{item.info2}</p>
          </div>
          <div className="testimonial-person">
            <Image
              src={item.personImage}
              width={88}
              height={88}
              alt="Person Image"
              priority
            />
            <p>{item.personName}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Testimonial;
