import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-start">
        <h2 className="text-2xl mb-4">Contact Us</h2>
        <p>
          If you have any questions or need further information, please feel
          free to contact us.
        </p>
        <p>
          Email:{" "}
          <a href="mailto:info@goasewageplant.com" className="text-blue-400">
            info@goasewageplant.com
          </a>
        </p>
        <p>Phone: +91-123-456-7890</p>
        <p>Address: 123 Green Street, Panaji, Goa, India</p>
      </div>
    </footer>
  );
};

export default Footer;
