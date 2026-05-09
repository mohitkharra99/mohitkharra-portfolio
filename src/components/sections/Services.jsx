import React from 'react';
import { Card, SectionTitle } from '../common/index.jsx';
import { portfolioData } from '../../data/portfolio';

const Services = () => {
  const services = portfolioData.services;

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Services" subtitle="What I Offer" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className="group flex flex-col h-full"
              hover={true}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 flex-grow">
                {service.description}
              </p>
              <div className="mt-6 pt-4 border-t border-slate-700/50">
                <span className="text-yellow-400 text-sm font-semibold hover:text-yellow-300 transition-colors cursor-pointer">
                  Learn More →
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
