import React, { useState } from 'react';
import { Card, Button, SectionTitle } from '../common/index.jsx';
import { portfolioData } from '../../data/portfolio';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const projects = portfolioData.portfolio;

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => filter === 'featured' ? p.featured : !p.featured);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-app-surface/50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Portfolio" subtitle="Latest Works" />

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'featured', 'other'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${
                filter === f
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg shadow-yellow-500/50'
                  : 'bg-slate-800 text-gray-300 border border-slate-700 hover:border-yellow-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className={`group overflow-hidden flex flex-col h-full ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
              hover={true}
            >
              {/* Project Image */}
              <div className="relative w-full h-64 overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-yellow-400/20 border border-yellow-400/50 rounded-full text-yellow-400 text-xs font-semibold hover:border-yellow-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4 border-t border-slate-700/50">
                <Button variant="secondary" size="sm" className="flex-1" onClick={() => window.open(project.github, '_blank')}>
                  GitHub
                </Button>
                <Button variant="primary" size="sm" className="flex-1" onClick={() => window.open(project.live, '_blank')}>
                  Live Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Button variant="secondary" size="lg">
            View All Projects →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
