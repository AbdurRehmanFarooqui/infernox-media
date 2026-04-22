"use client";

import React, { useState } from "react";

export default function LastSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stats = [
    { number: "200+", label: "Active Clients\nWorldwide" },
    { number: "999+", label: "Videos Edited\nSuccessfully" },
    { number: "300+", label: "Satisfied Clients\nWorldwide" },
  ];

  const features = [
    {
      title: "Premium Quality",
      desc: "All content produced passes a rigorous quality check to ensure highest quality representations of your brand.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
          <path d="M12 15l-3 3-3-3v-7a6 6 0 0 1 12 0v7l-3 3-3-3Z" />
          <path d="M12 8v4" />
        </svg>
      ),
    },
    {
      title: "Worldclass Team",
      desc: "We hire the top 1% of creative talent in the industry, taking extreme care on who we assign to your brand.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Schedule and Delivery",
      desc: "We run a strict schedule around your content output, and never miss your planned posting schedule.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
          <line x1="6" x2="6.01" y1="6" y2="6" />
          <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      q: "Are there onboarding processes?",
      a: "Yes, once you sign up, we guide you through a comprehensive onboarding process. We will assign you a dedicated project manager who will be your main point of contact.",
    },
    {
      q: "How do I communicate with the team?",
      a: "You will have a dedicated Slack channel with your project manager and the creative team assigned to your account for fast, direct communication.",
    },
    {
      q: "Do you offer refunds?",
      a: "We offer a satisfaction guarantee. If you are not happy with the first draft, we will revise it until it meets your expectations.",
    },
    {
      q: "What is your video editing turnaround?",
      a: "Standard turnaround time is 48-72 hours depending on the complexity of the video and current queue.",
    },
  ];

  return (
    <div className="bg-[#030303] text-white min-h-screen overflow-hidden font-sans relative">
      
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-[#7B00FF] opacity-[0.15] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[60%] right-[-10%] w-[40vw] h-[40vw] bg-[#7B00FF] opacity-[0.12] blur-[150px] rounded-full pointer-events-none" />

      <main className="relative z-10">
        
        {/* --- 1. Stats Section --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <h2 className="text-xl md:text-2xl font-tech max-w-xs leading-snug">
            A strong online presence isn't optional anymore
          </h2>
          <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-20">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-tech font-bold mb-2">{stat.number}</span>
                <span className="text-[#888888] text-xs md:text-sm whitespace-pre-line leading-relaxed">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* --- 2. Dedicated Project Manager Section --- */}
        <section className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-[34px] font-tech mb-4 tracking-wide">
            Get a Dedicated Project Manager
          </h2>
          <p className="text-[#888888] text-sm max-w-2xl mx-auto mb-20 leading-relaxed">
            Your Project Manager handles your projects, keeps everything organized, and helps align the
            creative team with your brand's specific tone, style, and strategy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Glowing Icon Wrapper */}
                <div className="relative w-20 h-20 flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-[#7B00FF] blur-xl opacity-60 rounded-full" />
                  <div className="relative z-10 w-16 h-16 border border-[#7B00FF]/50 rounded-xl flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-tech mb-3">{feature.title}</h3>
                <p className="text-[#6B6B6B] text-[13px] leading-relaxed max-w-[280px]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 3. About Section --- */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Graphic Placeholder */}
            <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#7B00FF] opacity-30 blur-[100px] rounded-full" />
               <img 
                 src="/api/placeholder/600/500" 
                 alt="Camera and Film Graphic" 
                 className="relative z-10 w-full object-contain drop-shadow-2xl grayscale"
               />
            </div>
            
            {/* Right Content */}
            <div>
              <h2 className="text-3xl md:text-[40px] font-tech mb-8 tracking-wide">
                About Infernox Media
              </h2>
              <p className="text-[#888888] text-[15px] leading-[1.8] mb-6">
                Infernox Media is a performance-driven, full-service digital agency focused on business growth and scaling through strategic content creation, paid advertising, and conversion rate optimization. 
                We are fueled by the belief that true empowerment fuels brands and brand presence.
              </p>
              <p className="text-[#888888] text-[15px] leading-[1.8] mb-10">
                With over 4 years of experience crafting top-tier media productions, social media strategies, and content campaigns, we successfully bridge the gap between creative execution and ROI.
                <br /><br />
                At Infernox Media, we don't just edit videos. We build strong digital identities.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#7B00FF] hover:bg-[#6000c2] text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                  Contact Us
                </button>
                <button className="border border-white/20 hover:bg-white/5 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. Testimonial Section --- */}
        <section className="py-24 overflow-hidden relative">
          <h2 className="text-center text-3xl font-tech mb-16 tracking-widest uppercase">
            Testimonial
          </h2>
          
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="flex gap-6 items-stretch">
              
              {/* Active Main Card */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl flex flex-col md:flex-row w-full md:w-[85%] shrink-0 shadow-2xl relative z-10 overflow-hidden">
                <img 
                  src="/api/placeholder/350/400" 
                  alt="Client" 
                  className="w-full md:w-[35%] object-cover object-center grayscale opacity-80"
                />
                <div className="p-8 md:p-12 flex-1 flex flex-col justify-center relative">
                  {/* Slider Arrows */}
                  <div className="absolute top-8 right-8 flex gap-3">
                    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                  </div>

                  <h3 className="text-xl md:text-[26px] font-tech font-bold leading-snug mb-6 uppercase max-w-sm mt-8 md:mt-0">
                    WHAT CLIENTS SAYS ABOUT <span className="text-[#7B00FF]">INFERNOX</span>
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-tech tracking-wide">CURI HAXHA</h4>
                    <p className="text-[#6B6B6B] text-xs mt-1">Founder @ CH Investments</p>
                  </div>
                  
                  <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6 italic">
                    "Working with Infernox completely transformed our production value and overall workflow."
                  </p>
                  
                  {/* 5 Stars */}
                  <div className="flex gap-1 text-[#FFB800]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Next Card Preview (Faded) */}
              <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl flex flex-col md:flex-row w-[85%] shrink-0 opacity-40 scale-95 origin-left relative -z-10 pointer-events-none hidden md:flex">
                <img 
                  src="/api/placeholder/350/400" 
                  alt="Client" 
                  className="w-[35%] object-cover grayscale"
                />
                <div className="p-12 flex-1 flex flex-col justify-center">
                   <h3 className="text-[26px] font-tech font-bold leading-snug mb-6 uppercase max-w-sm">
                    WHAT CLIENTS SAYS ABOUT <span className="text-[#7B00FF]">INFERNOX</span>
                  </h3>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- 5. FAQs Section (Clean, without arcs) --- */}
        <section className="max-w-3xl mx-auto px-6 py-24 relative z-10">
          <h2 className="text-center text-3xl md:text-[34px] font-tech mb-12 tracking-wide">
            FAQs
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div 
                  key={i} 
                  className={`border transition-colors duration-300 rounded-xl overflow-hidden cursor-pointer ${
                    isOpen ? "bg-white/5 border-white/10" : "bg-transparent border-white/5 hover:border-white/10"
                  }`}
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                >
                  <div className="flex items-center justify-between p-5 md:px-6 md:py-5">
                    <span className={`text-[13px] md:text-sm font-medium ${isOpen ? "text-white" : "text-[#A0A0A0]"}`}>
                      {faq.q}
                    </span>
                    <svg 
                      className={`w-4 h-4 text-[#A0A0A0] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
                    >
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                  {/* Expanded Content */}
                  <div 
                    className={`px-5 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[#888888] text-xs leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- 6. Bottom CTA Section --- */}
        <section className="max-w-5xl mx-auto px-6 pt-12 pb-32">
          <div className="bg-[#7B00FF] rounded-[2.5rem] p-12 md:p-16 text-center shadow-[0_0_80px_rgba(123,0,255,0.3)] relative overflow-hidden">
            {/* Inner subtle glow to make center pop */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-tech font-bold mb-4 tracking-wide">
                Start Your Content<br className="hidden md:block"/> Journey With Us
              </h2>
              <p className="text-white/80 text-sm mb-10 max-w-lg mx-auto">
                Ready to elevate your brand's presence? Book a free discovery call to 
                discuss how we can help you scale.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium transition-transform hover:scale-105">
                  Contact Us
                </button>
                <button className="w-full sm:w-auto border border-white text-white px-8 py-3.5 rounded-full text-sm font-medium transition-colors hover:bg-white/10">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}