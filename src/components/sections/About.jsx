import React from 'react';
import { Card, SectionTitle, GradientText } from '../common/index.jsx';
import { portfolioData } from '../../data/portfolio';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-app-surface/50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="About Me" subtitle="Get To Know" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Area */}
          <div className="relative h-[800px] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent z-10 pointer-events-none" />
            
            {/* Gradients to merge image seamlessly into the black background */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none opacity-80" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,black_100%)] z-10 pointer-events-none opacity-80" />
            <img 
              src="/Gemini_Generated_Image_pq8zs3pq8zs3pq8z.png" 
              alt="About" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                I'm <GradientText>creative & results-driven</GradientText>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {about.intro}
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-white font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed">
              {about.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {portfolioData.hero.stats.map((stat, index) => (
                <Card key={index} className="text-center p-3 sm:p-4">
                  <p className="text-2xl sm:text-3xl font-bold text-yellow-400">{stat.number}</p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-2">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
