import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of project one.",
      link: "#"
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of project two.",
      link: "#"
    },
    {
      id: 3,
      title: "Project Three",
      description: "A brief description of project three.",
      link: "#"
    },
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