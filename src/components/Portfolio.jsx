import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Pokefantasia",
      description: "Built a serverless web app that classifies and transforms Pokémon images using a custom Vision Transformer model, deployed with AWS services including Lambda, S3, and RDS.",
      link: "#"
    },
    {
      id: 2,
      title: "Network Security Audit Tool",
      description: "Developed a Python tool to automate network security assessments, analyzing protocols, TLS, RTT, and generating structured reports for easy interpretation.",
      link: "#"
    },
    {
      id: 3,
      title: "RustyDB",
      description: "Created a lightweight database engine in Rust, implementing core SQL functionality and optimizing memory access using an LRU-K buffer pool strategy.",
      link: "#"
    },
    {
        id: 4,
        title: "SmartBrain",
        description: "Built a full-stack facial recognition web app using React, Node.js, and PostgreSQL, with secure user authentication and real-time image analysis.",
        link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center uppercase tracking-wide">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded p-4 shadow hover:shadow-md transition border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-secondary mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;