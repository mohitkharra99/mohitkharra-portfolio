import React, { useState } from 'react';
import { Card, SectionTitle } from '../common/index.jsx';
import { portfolioData } from '../../data/portfolio';

const ResumeTab = ({ tab, activeTab, setActiveTab, label }) => (
  <button
    onClick={() => setActiveTab(tab)}
    className={`px-6 py-3 font-semibold transition-all duration-300 relative ${
      activeTab === tab
        ? 'text-yellow-400'
        : 'text-gray-400 hover:text-white'
    }`}
  >
    {label}
    {activeTab === tab && (
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-transparent rounded-full" />
    )}
  </button>
);

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const { resume } = portfolioData;

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Resume" subtitle="My Journey" />

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-700/50 mb-12 justify-center">
          <ResumeTab 
            tab="experience" 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            label="Achievements"
          />
          <ResumeTab 
            tab="education" 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            label="Education"
          />
          <ResumeTab 
            tab="internship" 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            label="Internship"
          />
          <ResumeTab 
            tab="certifications" 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            label="Certifications"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          {/* Experience */}
          {activeTab === 'experience' && (
            <div className="space-y-6 animate-fadeIn">
              {resume.experience.map((exp, index) => (
                <Card key={index} className="relative pl-8 border-l-2 border-yellow-400">
                  <div className="absolute -left-3 top-6 w-5 h-5 bg-yellow-400 rounded-full" />
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                      <p className="text-yellow-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-400">{exp.year}</span>
                  </div>
                  <p className="text-gray-400">{exp.description}</p>
                </Card>
              ))}
            </div>
          )}

          {/* Education */}
          {activeTab === 'education' && (
            <div className="space-y-6 animate-fadeIn">
              {resume.education.map((edu, index) => (
                <Card key={index} className="relative pl-8 border-l-2 border-yellow-400">
                  <div className="absolute -left-3 top-6 w-5 h-5 bg-yellow-400 rounded-full" />
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-yellow-400 font-semibold">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-gray-400">{edu.year}</span>
                  </div>
                  <p className="text-gray-400">{edu.description}</p>
                </Card>
              ))}
            </div>
          )}

          {/* Internship */}
          {activeTab === 'internship' && (
            <div className="space-y-6 animate-fadeIn">
              {resume.internship.map((int, index) => (
                <Card key={index} className="relative pl-8 border-l-2 border-yellow-400">
                  <div className="absolute -left-3 top-6 w-5 h-5 bg-yellow-400 rounded-full" />
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{int.position}</h3>
                      <p className="text-yellow-400 font-semibold">{int.company}</p>
                    </div>
                    <span className="text-sm text-gray-400">{int.year}</span>
                  </div>
                  <p className="text-gray-400">{int.description}</p>
                </Card>
              ))}
            </div>
          )}

          {/* Certifications */}
          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
              {resume.certifications.map((cert, index) => (
                <Card key={index} className="relative pl-8 border-l-2 border-yellow-400">
                  <div className="absolute -left-3 top-6 w-5 h-5 bg-yellow-400 rounded-full" />
                  <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                  <p className="text-yellow-400 font-semibold text-sm mt-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mt-1">{cert.year}</p>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
