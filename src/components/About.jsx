import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
         <div className="flex justify-center">
            <img
              src="/panda.jpg" 
              alt="Panda"
              className="w-64 h-auto rounded-lg shadow-lg"
            />
         </div>

         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wide">
               About Me
            </h2>
            <p className="mb-4 leading-relaxed text-secondary">
              Hi, I’m Bowen. I’m a computer science and mathematics student at Northwestern University, originally from Chicago. I’m especially interested in systems, infrastructure, and how software works under the hood.
            </p>
            <p className="mb-8 leading-relaxed text-secondary">
            I enjoy thinking through the details, writing clean code, and understanding the bigger picture behind technical decisions. Outside of school, I’ve studied violin for many years, which has taught me discipline and precision that I carry into my work.
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