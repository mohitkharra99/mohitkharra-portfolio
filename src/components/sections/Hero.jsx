import React from 'react';
import { Button, GradientText, Icon } from '../common/index.jsx';
import { portfolioData } from '../../data/portfolio';

const Hero = () => {
  const stats = portfolioData.hero.stats;

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div>
              <h3 className="text-yellow-400 text-lg font-semibold mb-4 uppercase tracking-widest">
                {portfolioData.hero.subtitle}
              </h3>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                <GradientText>{portfolioData.name}</GradientText>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                {portfolioData.role}
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              {portfolioData.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => scrollToSection('#projects')}
              >
                View My Work →
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => scrollToSection('#contact')}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 pt-6">
              {portfolioData.contact.social.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" title={social.name} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  <Icon name={social.icon} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Profile Image Area */}
          <div className="relative h-96 lg:h-full min-h-96 flex items-center justify-center">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/20 to-transparent blur-3xl animate-pulse" />
            <div className="absolute top-10 right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl animate-bounce" />
            <div className="absolute -bottom-10 left-10 w-64 h-64 bg-slate-600/10 rounded-full blur-3xl" />

            {/* Profile Image Container */}
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] overflow-hidden transition-all duration-300 group">
              <div className="w-full h-full bg-app-bg flex items-center justify-center relative">
                <div className="w-full h-full text-center">
                  <img 
                    src="/Gemini_Generated_Image_5e778z5e778z5e77.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Gradients to merge image seamlessly into the black background */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/0 to-black z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,black_100%)] z-10 pointer-events-none" />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[95%] sm:w-96 grid grid-cols-3 gap-3 sm:gap-4 z-20">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-xl p-3 sm:p-4 text-center hover:border-yellow-400 transition-all duration-500 hover:-translate-y-4 hover:scale-110 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:bg-neutral-800 cursor-default animate-fadeInUp group"
                  style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'both' }}
                >
                  <p className="text-2xl lg:text-3xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-500 inline-block">{stat.number}</p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-2 group-hover:text-gray-200 transition-colors duration-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
