import React from 'react';

const Hero = () => {
  return (
    <header className="py-20 bg-gradient-to-b from-primary to-blue-900">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          Bowen Cheng
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Aspiring Software Engineer
        </p>
        <a
          href="#about"
          className="mt-8 inline-block border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-primary transition"
        >
          Learn More
        </a>
      </div>
    </header>
  );
};

export default Hero;