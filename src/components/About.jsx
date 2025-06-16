import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
         <div className="flex justify-center">
            <img
              src="/profile.jpeg" 
              alt="Profile Picture"
              className="w-64 h-auto rounded-lg shadow-lg"
            />
         </div>

         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wide">
               About Me
            </h2>
            <p className="mb-4 leading-relaxed text-secondary">
               Hi, I am Bowen. I am a computer science student at Northwestern University, graduating with both a bachelors and a masters in 4 years. I am interested in distributed systems and machine learning.
            </p>
            <a
               href="/resume.pdf"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block border border-primary text-secondary py-2 px-4 rounded hover:bg-primary hover:text-white transition"
            >
               View Resume
            </a>
         </div>
      </div>
    </section>
  );
};

export default About;