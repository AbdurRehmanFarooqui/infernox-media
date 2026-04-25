"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger safely for Next.js SSR
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhoWeHelp() {
  // --- Refs for GSAP Targeting ---
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const infernoxRef = useRef<HTMLDivElement>(null);

  const targetAudiences = [
    {
      title: "Youtuber",
      description: "We edit your YouTube videos to reflect your brand's personality that will help generate views and grow your YouTube channel",
    },
    {
      title: "Content Creators",
      description: "We edit your YouTube videos to reflect your brand's personality that will help generate views and grow your YouTube channel",
    },
    {
      title: "Business Owners",
      description: "We edit your YouTube videos to reflect your brand's personality that will help generate views and grow your YouTube channel",
    },
    {
      title: "Brands",
      description: "We edit your YouTube videos to reflect your brand's personality that will help generate views and grow your YouTube channel",
    },
  ];

  useGSAP(() => {
    // 1. SCRUBBED ENTRANCE ANIMATION
    const entranceTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%", 
        end: "top 10%", // Ends just before the pin to prevent ScrollTrigger conflicts
        scrub: 1,         
      }
    });

    // FIX: Use fromTo instead of from to explicitly declare start and end states. 
    // This prevents the 'immediateRender' glitch when handing off to the next timeline.
    entranceTl.fromTo(headingRef.current, 
      { y: 0, scale: 5, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 1 }, 
      0
    )
    .fromTo(contentRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }, 
      0
    );

    // 2. SCROLL / PIN ANIMATION
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", 
        end: "+=4000", 
        scrub: 1, 
        pin: true, 
      }
    });

    // Step A: Fade out content
    scrollTl.to([contentRef.current, headingRef.current], {
      opacity: 0,
      scale: 0.85,
      duration: 4,
      ease: "power2.inOut"
    }, "start")

      // Step B: Pull "MEDIA" and "INFERNOX" into the EXACT center
      .to(mediaRef.current, {
        top: "50%",
        right: "25%",  // FIX: 50% forces absolute horizontal center
        xPercent: 50,  // Offsets it by half its width
        yPercent: -50, // Offsets it by half its height
        opacity: 0.50, // Brighten slightly
        duration: 4,
        ease: "power2.inOut"
      }, "center")
      .to(infernoxRef.current, {
        bottom: "50%",
        left: "33%",   // FIX: 50% forces absolute horizontal center
        xPercent: -50,
        yPercent: 50,
        opacity: 0.50,
        duration: 4,
        ease: "power2.inOut"
      }, "center")

      // Step C: Send INFERNOX to the left, and MEDIA to the right, fading out
      .to(infernoxRef.current, {
        left: "0%", 
        xPercent: -100, // Slide completely off-screen left
        opacity: 0,     // Fade out cleanly at the end
        duration: 3,
        ease: "power2.inOut"
      }, "split")
      .to(mediaRef.current, {
        right: "0%", 
        xPercent: 100,  // Slide completely off-screen right
        opacity: 0,
        duration: 3,
        ease: "power2.inOut"
      }, "split");

  }, { scope: containerRef }); 

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#030303] flex items-center justify-center overflow-hidden">

      {/* --- Ambient Background Gradients --- */}
      {/* FIX: Added ref={glowsRef} right here! */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#7B00FF]/20 blur-[130px]" />
        <div className="absolute bottom-[-15%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-[#4A00B0]/25 blur-[150px]" />
      </div>

      {/* --- Large Background Watermark Text --- */}
      <div
        ref={mediaRef}
        className="absolute top-12 right-10 text-[7vw] md:text-[8rem] font-black text-white/20 uppercase tracking-tighter leading-none select-none pointer-events-none font-conthrax-book"
      >
        MEDIA
      </div>
      
      <div
        ref={infernoxRef}
        className="absolute bottom-0 left-0 text-[7vw] md:text-[8rem] font-black text-white/20 uppercase tracking-tighter leading-none select-none pointer-events-none font-conthrax-book"
      >
        INFERNOX
      </div>

      {/* --- Main Content Wrapper --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full mt-10">
        <div className="text-center mb-20 md:mb-28 flex flex-col items-center">
          
          <h2 ref={headingRef} className="text-3xl md:text-[40px] text-white font-bold tracking-wide mb-4 font-conthrax inline-block origin-bottom">
            Who We Help
          </h2>
          
          <div ref={contentRef} className="w-full flex flex-col items-center">
            <p className="text-[#7A7A7A] text-sm md:text-[15px] font-medium tracking-wide font-montserrat mb-16 md:mb-24">
              A strong online presence isn't optional anymore
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24 w-full">
              {targetAudiences.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <h3 className="text-xl md:text-[22px] text-white font-semibold tracking-wide mb-4 md:mb-5 font-conthrax">
                    {item.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-xs md:text-[13px] leading-[1.8] max-w-[340px] font-montserrat">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}