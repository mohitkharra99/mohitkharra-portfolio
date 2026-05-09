import React, { useState, useEffect, useRef } from 'react';
import { SectionTitle } from '../common/index.jsx';
import { portfolioData } from '../../data/portfolio';

const SkillBar = ({ name, level, inView }) => {
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setDisplayLevel(Math.floor(progress * level));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, level]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-white font-semibold">{name}</span>
        <span className="text-yellow-400 font-bold text-sm">{displayLevel}%</span>
      </div>
      <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-1500 ease-out ${
            inView ? 'w-full' : 'w-0'
          }`}
          style={{ width: inView ? `${displayLevel}%` : '0%' }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const skills = portfolioData.skills;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-app-surface/50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Skills & Expertise" subtitle="Technical Skills" />

        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Progress Bars */}
          <div className="space-y-8">
            {skills.slice(0, 4).map((skill) => (
              <SkillBar 
                key={skill.name} 
                name={skill.name} 
                level={skill.level}
                inView={inView}
              />
            ))}
          </div>

          <div className="space-y-8">
            {skills.slice(4, 8).map((skill) => (
              <SkillBar 
                key={skill.name} 
                name={skill.name} 
                level={skill.level}
                inView={inView}
              />
            ))}
          </div>
        </div>

        {/* Skills Tags */}
        <div className="mt-16 pt-12 border-t border-slate-700/50">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-transparent border border-yellow-400/50 rounded-full text-yellow-400 text-sm font-semibold hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 cursor-pointer"
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
