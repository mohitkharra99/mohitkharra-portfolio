import React, { useState, useEffect } from 'react';
import { Card, SectionTitle } from '../common/index.jsx';
import { portfolioData } from '../../data/portfolio';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = portfolioData.testimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Testimonials" subtitle="What Clients Say" />

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`flex flex-col transition-all duration-300 ${
                  index === currentSlide 
                    ? 'md:col-span-3 md:scale-105 ring-2 ring-yellow-400' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Message */}
                <p className="text-gray-300 mb-6 flex-grow italic">
                  "{testimonial.message}"
                </p>

                {/* Author */}
                <div className="border-t border-slate-700/50 pt-4">
                  <h4 className="text-white font-bold">
                    {testimonial.name}
                  </h4>
                  <p className="text-yellow-400 text-sm font-semibold">
                    {testimonial.role}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Main Testimonial Carousel */}
          <Card className="mb-8">
            <div className="flex items-start gap-6">
              {/* Quote Icon */}
              <div className="text-6xl text-yellow-400/20 font-bold leading-none mt-2">
                "
              </div>

              {/* Content */}
              <div className="flex-grow">
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  {testimonials[currentSlide].message}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Author */}
                <div>
                  <h4 className="text-white font-bold text-lg">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-yellow-400 font-semibold">
                    {testimonials[currentSlide].role}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 hover:border-yellow-400 hover:bg-yellow-400/10 flex items-center justify-center text-white hover:text-yellow-400 transition-all duration-300"
            >
              ←
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-yellow-400 w-8'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 hover:border-yellow-400 hover:bg-yellow-400/10 flex items-center justify-center text-white hover:text-yellow-400 transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
