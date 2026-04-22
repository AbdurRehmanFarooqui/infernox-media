"use client";

import React, { useState } from "react";

export default function WhoWeHelpDetail() {
  const [activeTab, setActiveTab] = useState(0);

  // Data structure to easily manage the interactive tabs
  const tabs = [
    { num: "01", name: "YouTubers" },
    { num: "02", name: "Business Owners" },
    { num: "03", name: "Content Creators" },
    { num: "04", name: "Brands" },
  ];

  const videos = [
    {
      img: "/thumbnail1.jpg", // Replace with your actual paths
      title: '“I Converted To Islam In Hollywood” - Prophet (pbuh) Told Me to Remove Black Donkey in Dream',
      author: "Eternal Passenger",
      avatar: "/avatar1.jpg"
    },
    {
      img: "/thumbnail2.jpg",
      title: '“I Converted To Islam In Hollywood” - Prophet (pbuh) Told Me to Remove Black Donkey in Dream',
      author: "Austin Coldiron",
      avatar: "/avatar2.jpg"
    },
    {
      img: "/thumbnail3.jpg",
      title: '“I Converted To Islam In Hollywood” - Prophet (pbuh) Told Me to Remove Black Donkey in Dream',
      author: "Angelo Castillo",
      avatar: "/avatar3.jpg"
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#030303] text-white py-24 overflow-hidden">
      
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#7B00FF]/20 blur-[150px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-[#4A00B0]/20 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-[40px] font-bold tracking-wide mb-3 font-tech">
            Who We Help
          </h2>
          <p className="text-[#888888] text-sm md:text-base font-medium tracking-wide">
            A strong online presence isn't optional anymore
          </p>
        </div>

        {/* --- Main Two-Column Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Interactive Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <div 
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-6 py-6 border-b border-[#2A2A2A] cursor-pointer transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  {/* Number */}
                  <span className={`text-4xl md:text-[50px] font-tech transition-colors duration-300 ${
                    isActive 
                      ? "text-white" 
                      : "text-transparent [-webkit-text-stroke:1px_#555555]"
                  }`}>
                    {tab.num}
                  </span>
                  
                  {/* Name */}
                  <span className={`text-4xl md:text-[50px] font-tech transition-colors duration-300 ${
                    isActive 
                      ? "text-white" 
                      : "text-transparent [-webkit-text-stroke:1px_#555555]"
                  }`}>
                    {tab.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Content */}
          <div className="lg:col-span-7 flex flex-col justify-start pt-6">
            <p className="text-[#A0A0A0] text-sm leading-[1.8] mb-10 max-w-2xl">
              We edit your YouTube videos to reflect your brand's personality that will help
              generate views and grow your YouTube channel
            </p>

            <h3 className="text-xl text-white font-tech tracking-wider mb-4">
              Your Complete YouTube Content System
            </h3>
            
            <p className="text-[#888888] text-[13px] leading-[1.8] mb-10 max-w-3xl">
              Grow your channel with strategic, retention-focused editing that keeps viewers watching from the first second to the last. We don't just edit, we engineer your videos for performance. From pacing and storytelling to hooks, viewer psychology, and thumbnail optimization, every detail is crafted to increase watch time, boost engagement, and help you scale consistently.
            </p>

            <h3 className="text-xl text-white font-tech tracking-wider mb-5">
              What You Get
            </h3>

            <ul className="space-y-2 text-[#888888] text-[13px]">
              <li className="flex items-start gap-2">
                <span className="mt-[6px] w-1 h-1 bg-[#888888] rounded-full shrink-0" />
                Content ideas and strategic guidance tailored to your niche
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[6px] w-1 h-1 bg-[#888888] rounded-full shrink-0" />
                Scripting support to help you structure clear, high-retention videos
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[6px] w-1 h-1 bg-[#888888] rounded-full shrink-0" />
                Retention-driven editing that keeps viewers engaged
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[6px] w-1 h-1 bg-[#888888] rounded-full shrink-0" />
                Motion graphics, text animations, and seamless transitions
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[6px] w-1 h-1 bg-[#888888] rounded-full shrink-0" />
                A-roll and B-roll enhancement for stronger storytelling
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[6px] w-1 h-1 bg-[#888888] rounded-full shrink-0" />
                Professional sound design and color grading
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[6px] w-1 h-1 bg-[#888888] rounded-full shrink-0" />
                Thumbnail design + full YouTube SEO optimization
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[6px] w-1 h-1 bg-[#888888] rounded-full shrink-0" />
                Consistent weekly delivery based on your upload schedule
              </li>
            </ul>
          </div>

        </div>

        {/* --- Video Thumbnails Section --- */}
        <div className="mt-32 relative">
          
          {/* Massive background glow specifically for the videos */}
          <div className="absolute inset-0 bg-[#7B00FF] blur-[120px] opacity-20 pointer-events-none rounded-full transform scale-y-50 scale-x-90" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {videos.map((video, index) => (
              <div key={index} className="flex flex-col gap-4 cursor-pointer group">
                
                {/* Video Card */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-[#111] border border-white/5 group-hover:border-[#7B00FF]/50 transition-colors duration-300">
                  {/* Replace with next/image in production */}
                  <img 
                    src={video.img} 
                    alt="Video Thumbnail" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  
                  {/* YouTube Play Button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-8 bg-[#FF0000] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Video Details */}
                <div>
                  <h4 className="text-[13px] font-medium text-white leading-snug mb-3">
                    {video.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full overflow-hidden bg-[#333]">
                       <img src={video.avatar} alt={video.author} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs text-[#888888]">{video.author}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}