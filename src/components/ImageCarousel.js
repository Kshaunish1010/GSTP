import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sewaragePlantImage1 from "../assets/sewarage_plant1.jpg"; // Make sure you have multiple images for the carousel
import sewaragePlantImage2 from "../assets/sewarge_plant2.jpeg"; // Example image 2
import sewaragePlantImage3 from "../assets/sewarge_plant3.jpeg"; // Example image 3

const ImageCarousel = () => {
  const images = [
    {
      src: sewaragePlantImage1,
      alt: "Sewage Treatment Plant 1",
      text: "GSTP - Your Solution for Sewage",
    },
    {
      src: sewaragePlantImage2,
      alt: "Sewage Treatment Plant 2",
      text: "Cutting-edge Technology",
    },
    {
      src: sewaragePlantImage3,
      alt: "Sewage Treatment Plant 3",
      text: "Trusted by Communities",
    },
  ];

  return (
    <div className="w-full">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="h-[36rem] object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-4xl font-bold mb-2">{image.text}</h1>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
