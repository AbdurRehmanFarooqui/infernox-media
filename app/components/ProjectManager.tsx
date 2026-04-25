
export default function ProjectManager(){
    const features = [
    {
      title: "Brand and Quality",
      desc: "We ensure every video follows your brand style and meets high quality standards before delivery.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
          {/* <path d="M12 15l-3 3-3-3v-7a6 6 0 0 1 12 0v7l-3 3-3-3Z" /> */}
          {/* <path d="M12 8v4" /> */}
        </svg>
      ),
    },
    {
      title: "Workflow and Team",
      desc: "We manage the editing process end-to-end, coordinating revisions, assets, and team output smoothly.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
          {/* <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /> */}
          {/* <circle cx="9" cy="7" r="4" /> */}
          {/* <path d="M23 21v-2a4 4 0 0 0-3-3.87" /> */}
          {/* <path d="M16 3.13a4 4 0 0 1 0 7.75" /> */}
        </svg>
      ),
    },
    {
      title: "Schedule and Delivery",
      desc: "We keep your content organized, on track, and delivered on time so you never miss a posting schedule.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
          {/* <rect width="20" height="8" x="2" y="2" rx="2" ry="2" /> */}
          {/* <rect width="20" height="8" x="2" y="14" rx="2" ry="2" /> */}
          {/* <line x1="6" x2="6.01" y1="6" y2="6" /> */}
          {/* <line x1="6" x2="6.01" y1="18" y2="18" /> */}
        </svg>
      ),
    },
  ];
    return(
        <section className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-[34px] font-tech mb-4 tracking-wide">
            Get a Dedicated Project Manager
          </h2>
          <p className="text-[#888888] text-sm max-w-2xl mx-auto mb-20 leading-relaxed">
            Your Project Manager keeps your content on brand, organized, and high-quality. They coordinate the team and deadlines so everything is delivered on time.
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
    )
}