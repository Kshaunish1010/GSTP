import React from "react";
import ImageCarousel from "../components/ImageCarousel";

const Home = () => {
  return (
    <div>
      <ImageCarousel />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Sewage Treatment Plant
        </h2>
        <p className="text-center mb-8">
          Welcome to our sewage treatment plant. We are dedicated to treating
          wastewater and sewage to produce a cleaner and safer environment. Our
          state-of-the-art facility uses advanced technology and processes to
          ensure that the treated water meets all regulatory standards.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-center">
          About Us
        </h2>
        <p className="text-center mb-8">
          We use cutting-edge technology in our operations to achieve optimal
          results. Our team consists of highly trained professionals who are
          committed to maintaining the highest standards in sewage treatment. As
          a trusted company in the industry, we pride ourselves on our
          reliability and the positive impact we have on the environment and the
          communities we serve.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-center">
          Features of Our Plant
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            {/* <img
              src={filtrationSystemImage}
              alt="Advanced filtration systems"
              className="w-full h-48 object-cover mb-4 rounded-md shadow-md"
            /> */}
            <p>Advanced filtration systems</p>
          </div>
          <div className="flex flex-col items-center">
            {/* <img
              src={biologicalTreatmentImage}
              alt="Biological treatment processes"
              className="w-full h-48 object-cover mb-4 rounded-md shadow-md"
            /> */}
            <p>Biological treatment processes</p>
          </div>
          <div className="flex flex-col items-center">
            {/* <img
              src={chemicalTreatmentImage}
              alt="Chemical treatment for harmful substances"
              className="w-full h-48 object-cover mb-4 rounded-md shadow-md"
            /> */}
            <p>Chemical treatment for harmful substances</p>
          </div>
          <div className="flex flex-col items-center">
            {/* <img
              src={sludgeManagementImage}
              alt="Efficient sludge management"
              className="w-full h-48 object-cover mb-4 rounded-md shadow-md"
            /> */}
            <p>Efficient sludge management</p>
          </div>
          <div className="flex flex-col items-center">
            {/* <img
              src={continuousMonitoringImage}
              alt="Continuous monitoring and quality control"
              className="w-full h-48 object-cover mb-4 rounded-md shadow-md"
            /> */}
            <p>Continuous monitoring and quality control</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-center">
          Benefits
        </h2>
        <ul className="list-disc list-inside mx-auto max-w-2xl">
          <li>Reduction of pollutants in water bodies</li>
          <li>Protection of public health</li>
          <li>Recycling of water for industrial use</li>
          <li>Compliance with environmental regulations</li>
          <li>Support for sustainable development</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
