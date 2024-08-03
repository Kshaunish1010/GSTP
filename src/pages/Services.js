import React from "react";
import consultingImage from "../assets/consulting.png";
import designImage from "../assets/designImage.jpg";
import maintenanceImage from "../assets/maintenance.png";
import analysisImage from "../assets/Analysis.png";
import emergencyImage from "../assets/emergency.jpg";
import requestImage from "../assets/request.jpg";
import ImageCarousel from "../components/ImageCarousel";
const services = [
  {
    title: "Consulting and planning",
    description:
      "Expert consulting and planning services for your sewage treatment needs.",
    image: consultingImage,
  },
  {
    title: "System design and installation",
    description: "Professional system design and installation services.",
    image: designImage,
  },
  {
    title: "Maintenance and repairs",
    description:
      "Comprehensive maintenance and repair services for your systems.",
    image: maintenanceImage,
  },
  {
    title: "Wastewater analysis and testing",
    description: "Accurate wastewater analysis and testing services.",
    image: analysisImage,
  },
  {
    title: "Emergency response services",
    description: "Rapid emergency response services for urgent situations.",
    image: emergencyImage,
  },
];

const Services = () => {
  return (
    <>
      <ImageCarousel />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Our Services</h1>
        <p>
          We offer a range of services to support the effective treatment and
          management of sewage and wastewater. Our experienced team is here to
          help with all your needs.
        </p>
        <h2 className="text-xl font-semibold mt-4 mb-4">Service Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-white shadow-md rounded-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
          <div
            className="flex items-center p-4 bg-white shadow-md rounded-lg cursor-pointer"
            onClick={() =>
              window.open("https://forms.gle/k4VgxFV5gaRr5N4L6", "_blank")
            }
          >
            <img
              src={requestImage}
              alt="Submit a request"
              className="w-24 h-24 object-cover rounded-md mr-4"
            />
            <div>
              <h3 className="text-lg font-bold mb-2">Submit a request</h3>
              <p>
                Need assistance or have a request? Click here to submit and
                we'll respond promptly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
