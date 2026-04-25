export default function Testimonials(){
    return(
        <section className="py-24 overflow-hidden relative">
          <h2 className="text-center text-3xl font-conthrax-book mb-16 tracking-widest uppercase">
            Testimonial
          </h2>

          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="flex gap-6 items-stretch">

              {/* Active Main Card */}
              <div className="border border-white/10 flex flex-col md:flex-row w-full md:w-[85%] shrink-0 shadow-2xl relative z-10 overflow-hidden">
                <img
                  src="/api/placeholder/350/400"
                  alt="Client"
                  className="w-full md:w-[35%] object-cover object-center grayscale opacity-80"
                />
                <div className="p-8 md:p-12 flex-1 flex flex-col justify-center relative">
                  {/* Slider Arrows */}
                  <div className="absolute top-8 right-8 flex gap-3">
                    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </button>
                    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                  </div>

                  <h3 className="text-xl md:text-[26px] font-conthrax-book font-bold leading-snug mb-6 uppercase max-w-sm mt-8 md:mt-0 ">
                    WHAT CLIENTS SAYS ABOUT <span className="text-[#7B00FF]">INFERNOX</span>
                  </h3>

                  <div className="mb-6">
                    <h4 className="text-lg font-conthrax-book tracking-wide">CURI HAXHA</h4>
                    <p className="text-white text-xs mt-1 font-conthrax-light">Founder @ CH Investments</p>
                  </div>

                  <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6 italic font-montserrat">
                    "Working with Infernox completely transformed our production value and overall workflow."
                  </p>

                  {/* 5 Stars */}
                  <div className="flex gap-1 text-[#FFB800]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
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
    )
}