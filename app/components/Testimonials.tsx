"use client";

import React, { useState } from "react";

export default function Testimonials() {
  // 1. State to track which testimonial is currently active
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "CURI HAXHA",
      title: "Founder @ CH Investments",
      quote: "Working with Infernox completely transformed our production value and overall workflow.",
      rating: 5,
      image: "/testimonial-1.png",
    },
    {
      name: "JANE DOE",
      title: "CEO @ Tech Solutions",
      quote: "Infernox's expertise in 3D animation elevated our brand presence and captivated our audience.",
      rating: 5,
      image: "/testimonial-2.png",
    },
    {
      name: "JOHN DOE",
      title: "CEO @ Tech Solutions",
      quote: "Infernox's expertise in 3D animation elevated our brand presence and captivated our audience.",
      rating: 5,
      image: "/testimonial-1.png",
    },
  ];

  // 2. Navigation Handlers
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 overflow-hidden relative">
      <h2 className="text-center text-3xl font-conthrax mb-16 uppercase">
        Testimonial
      </h2>
      
      {/* Attached onClick handlers to your buttons */}
      <div className="z-50 absolute top-60 right-50 flex gap-3">
        <button onClick={handlePrev} className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 hover:border-[#7B00FF] transition-colors cursor-pointer group">
          <svg width="20" height="20" className="group-hover:-translate-x-2 duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button onClick={handleNext} className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 hover:border-[#7B00FF] transition-colors cursor-pointer group">
          <svg width="20" height="20" className="group-hover:translate-x-2 duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">

        <h3 className="absolute text-xl md:text-3xl font-conthrax-book font-bold leading-snug mb-6 uppercase max-w-100 mt-8 md:mt-8 left-1/2 -translate-x-1/2">
          WHAT CLIENTS SAYS ABOUT <span className="text-[#7B00FF]">INFERNOX</span>
        </h3>

        <div className="flex gap-6 items-stretch">
          {
            testimonials.map((testimonial, index) => {
              // Check if the current card is the active one
              const isActive = index === activeIndex;

              return (
                <div 
                  key={index}
                  // Added dynamic classes: darkens, lowers opacity, and disables pointer events if inactive
                  className={`flex flex-col md:flex-row w-full md:w-[85%] shrink-0 shadow-2xl relative z-10 overflow-hidden group transition-all duration-500 ease-in-out ${
                    isActive 
                      ? "opacity-100 brightness-100" 
                      : "opacity-40 brightness-50 saturate-50 pointer-events-none"
                  }`}
                  // This inline style dynamically slides the cards left and right based on the active index and the 1.5rem (gap-6) spacing
                  style={{
                    transform: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 1.5}rem))`
                  }}
                >
                  {/* --- Your inner card design remains exactly untouched below --- */}
                  <div className="absolute bg-zinc-600 h-100 w-[33%] top-[40%] group-hover:w-full duration-400" />
                  <div className="w-full md:w-[30%] overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt="Client"
                      className="w-full object-cover object-center saturate-100 opacity-100 group-hover:scale-110 duration-400"
                    />
                  </div>
                  <div className="absolute h-100 w-[30%] top-[100%] bg-linear-to-t from-[#7B00FF] to-transparent group-hover:top-[40%] duration-400 opacity-60" />
                  <div className="p-8 md:p-12 flex-1 flex flex-col justify-end relative">
                    <div className="mb-6 group-hover:pl-6 duration-400">
                      <h4 className="text-lg font-conthrax-book tracking-wide">{testimonial.name}</h4>
                      <p className="text-white text-xs mt-1 font-conthrax-light">{testimonial.title}</p>
                    </div>

                    <p className="text-white text-sm leading-relaxed mb-6 italic font-montserrat">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex gap-1 group-hover:gap-2 group-hover:pl-2 duration-400 text-[#FFB800]">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current group-hover:scale-120 duration-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}