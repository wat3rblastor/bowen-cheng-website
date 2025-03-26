import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 uppercase tracking-wide">
          Experience
        </h2>
        
        <div className="space-y-8 text-secondary">
          {/* First Role */}
          <div>
            <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
            <p className="text-sm text-secondary/80">
              Company A (2024 - 2025)
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Built and optimized new features using React and Node.js</li>
              <li>Improved database queries with PostgreSQL for faster performance</li>
              <li>Collaborated with cross-functional teams to design scalable solutions</li>
            </ul>
          </div>

          {/* Second Role */}
          <div>
            <h3 className="text-xl font-semibold">Freelance Developer</h3>
            <p className="text-sm text-secondary/80">
              Various Clients (2023 - Present)
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Designed and developed custom websites for small businesses</li>
              <li>Focused on clean, minimalistic UI and optimized performance</li>
              <li>Integrated SEO best practices to improve site visibility</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;