import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { Icon } from '../common/index.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-app-surface border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                {portfolioData.name.split(' ')[0]}
              </span>
            </h2>
            <p className="text-gray-400 text-sm">{portfolioData.role}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleScroll(link.href)}
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="text-gray-400 hover:text-yellow-400 transition-colors text-sm block"
              >
                {portfolioData.contact.email}
              </a>
              <a
                href={`tel:${portfolioData.contact.phone}`}
                className="text-gray-400 hover:text-yellow-400 transition-colors text-sm block"
              >
                {portfolioData.contact.phone}
              </a>
              <p className="text-gray-400 text-sm">
                {portfolioData.contact.location}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} {portfolioData.name}. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-5">
              {portfolioData.contact.social.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" title={social.name} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  <Icon name={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center pt-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-semibold"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
