import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Bowen Cheng. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;