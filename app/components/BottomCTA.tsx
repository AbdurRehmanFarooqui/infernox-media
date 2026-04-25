"use client";

import React, { useState } from "react";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";

export default function BottomCTA() {

  return (
    <div className="text-white overflow-hidden font-sans relative">
        
        <section className="max-w-5xl mx-auto px-6 pt-12 pb-32">
          <div className="bg-[#7B00FF] rounded-[2.5rem] p-6 md:p-16 text-center shadow-[0_0_80px_rgba(123,0,255,0.3)] relative overflow-hidden">
            {/* Inner subtle glow to make center pop */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50" />

            <div className="relative z-10">
              <h2 className="text-xl md:text-5xl font-conthrax-book font-bold mb-2 md:mb-4 md:tracking-wide">
                Start Your Content<br className="hidden md:block" /> Journey With Us
              </h2>
              <p className="text-white/80 text-sm md:mb-10 max-w-lg mx-auto font-montserrat">
                Ready to elevate your brand's presence? Book a free discovery call to
                discuss how we can help you scale.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex gap-x-1 md:gap-x-6">
              <ButtonPrimary className="mt-8 bg-black">Get Started</ButtonPrimary>
              <ButtonSecondary className="mt-8">Learn More</ButtonSecondary>
            </div>
              </div>
            </div>
          </div>
        </section>

    </div>
  );
}