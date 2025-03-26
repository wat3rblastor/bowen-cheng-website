import React from 'react';

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-primary font-bold text-xl">
          <a href="#" className="text-primary hover:text-primary/70 transition">
            Bowen Cheng
          </a>
        </div>
        <div className="space-x-4">
          <a href="#about" className="text-primary hover:text-primary/70 transition">
            About
          </a>
          <a href="#experience" className="text-primary hover:text-primary/70 transition">
            Experience
          </a>
          <a href="#portfolio" className="text-primary hover:text-primary/70 transition">
            Portfolio
          </a>
          <a href="#contact" className="text-primary hover:text-primary/70 transition">
            Contact
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/70 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;