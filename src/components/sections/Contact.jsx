import React, { useState } from 'react';
import { Button, Card, SectionTitle, Icon } from '../common/index.jsx';
import { portfolioData } from '../../data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-app-surface/50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Get In Touch" subtitle="Contact Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's work together
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Feel free to reach out to me for any opportunities or just a friendly hello. I'm always interested in hearing about new projects and creative ideas.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <Card className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-yellow-400/20 border border-yellow-400/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-white font-semibold hover:text-yellow-400 transition-colors">
                    {contact.email}
                  </a>
                </div>
              </Card>

              {/* Phone */}
              <Card className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-yellow-400/20 border border-yellow-400/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href={`tel:${contact.phone}`} className="text-white font-semibold hover:text-yellow-400 transition-colors">
                    {contact.phone}
                  </a>
                </div>
              </Card>

              {/* Location */}
              <Card className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-yellow-400/20 border border-yellow-400/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-semibold">
                    {contact.location}
                  </p>
                </div>
              </Card>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Follow Me</h4>
              <div className="flex gap-5">
                {contact.social.map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" title={social.name} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                    <Icon name={social.icon} className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/30 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/30 transition-all duration-300"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Let's discuss a project"
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/30 transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/30 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                variant="primary" 
                size="lg"
                className="w-full"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </Button>

              {submitted && (
                <p className="text-green-400 text-sm text-center">
                  Thank you! I'll get back to you soon.
                </p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
