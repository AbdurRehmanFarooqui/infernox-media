import React from "react";

export default function WhoWeHelp() {
  const targetAudiences = [
    {
      title: "Youtuber",
      description:
        "We edit your YouTube videos to reflect your brand's personality that will help generate views and grow your YouTube channel",
    },
    {
      title: "Content Creators",
      description:
        "We edit your YouTube videos to reflect your brand's personality that will help generate views and grow your YouTube channel",
    },
    {
      title: "Business Owners",
      description:
        "We edit your YouTube videos to reflect your brand's personality that will help generate views and grow your YouTube channel",
    },
    {
      title: "Brands",
      description:
        "We edit your YouTube videos to reflect your brand's personality that will help generate views and grow your YouTube channel",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#030303] overflow-hidden py-32 flex items-center justify-center">
      
      {/* --- Ambient Background Gradients --- */}
      {/* Top Right Purple Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#7B00FF]/20 blur-[130px] pointer-events-none" />
      {/* Bottom Left Darker Purple Glow */}
      <div className="absolute bottom-[-15%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-[#4A00B0]/25 blur-[150px] pointer-events-none" />

      {/* --- Large Background Watermark Text --- */}
      <div className="absolute top-12 right-10 text-[7vw] md:text-[9rem] font-black text-white/[0.04] uppercase tracking-tighter leading-none select-none pointer-events-none font-tech">
        MEDIA
      </div>
      <div className="absolute bottom-[-2%] left-[-2%] text-[10vw] md:text-[12rem] font-black text-white/[0.04] uppercase tracking-tighter leading-none select-none pointer-events-none font-tech">
        INFERNOX
      </div>

      {/* --- Main Content Wrapper --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        
        {/* Header Section */}
        <div className="text-center mb-28">
          <h2 className="text-3xl md:text-[40px] text-white font-bold tracking-wide mb-4 font-tech">
            Who We Help
          </h2>
          <p className="text-[#7A7A7A] text-sm md:text-[15px] font-medium tracking-wide">
            A strong online presence isn't optional anymore
          </p>
        </div>

        {/* 2x2 Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {targetAudiences.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <h3 className="text-xl md:text-[22px] text-white font-semibold tracking-wide mb-5 font-tech">
                {item.title}
              </h3>
              <p className="text-[#6B6B6B] text-xs md:text-[13px] leading-[1.8] max-w-[340px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}