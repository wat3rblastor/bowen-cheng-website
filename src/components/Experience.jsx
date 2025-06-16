import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 uppercase tracking-wide">
          Experience
        </h2>
        
        <div className="space-y-8 text-secondary">

          <div>
            <h3 className="text-xl font-semibold">Software Development Intern</h3>
            <p className="text-sm text-secondary/80">
              Medline Industries (Incoming)
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Undergraduate Research Assistant</h3>
            <p className="text-sm text-secondary/80">
              Aqualab @ Northwestern University (March 2025 - Present)
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Architected and deployed <a href="/splash.pdf"><b>Splashv2</b></a>, a fully reproducible, config-driven traceroute ingestion pipeline with Dagster,
                Docker Compose, ClickHouse, and Grafana, reducing researcher setup time from days to under one hour
              </li>
              <li>
                Enabled scalable ingestion, processing, and annotation of 1.6M+ RIPE Atlas traceroutes with IPInfo enrichment
              </li>
              <li>
                Accelerated traceroute geolocation by 86% through multi-core parallelization and optimized data workflows
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Undergraduate Research Assistant</h3>
            <p className="text-sm text-secondary/80">
              Northwestern Institute on Complex Systems (December 2024 - Present)
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Engineered a low-latency LED control system in C to study coupled oscillators in firefly populations, integrating a
              laptop, Raspberry Pi, and addressable LEDs to enable precise, real-time dynamic lighting sequences</li>
              <li>Designed a data pipeline from laptop to Raspberry Pi via UDP over an Ethernet cable, achieving sub-5ms latency</li>
              <li>Developed simulations to replicate firefly flashing patterns, enabling experiments such as mirrored firefly behavior</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
            <p className="text-sm text-secondary/80">
              GHY Impact Capital (July 2024 - September 2024)
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Designed AI-powered chatbot using GPT models and Retrieval-Augmented Generation to answer customer FAQs</li>
              <li>Created an automated, AI-based version control summary system, simplifying workflows for software developers</li>
              <li>Wrote a script to perform hourly checks for AWS RDS backups, utilizing GitHub Actions for automation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Undergraduate Research Assistant</h3>
            <p className="text-sm text-secondary/80">
            Northwestern IMEC Lab (January 2024 - March 2024)
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Engineered a microphone system integrating a camera to filter background noise using lip movement detection</li>
              <li>Preprocessed and cleaned dataset of lip movements to train a machine learning model for speech detection</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;