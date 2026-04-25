'use client'
import { useState } from "react";
import ArcGradient from "./ArcGradient";
import CircleGradient from "./CircleGradient";
// import ArcGradient2 from "./ArcGradient2";

export default function FAQs() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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
    <section className=" mx-auto px-6 py-24 relative z-10 bg-black overflow-hidden">
      <CircleGradient className="absolute top-[54%] md:top-[50%] left-[99%] w-20 h-60 md:w-100 md:h-100 blur-[60px] md:blur-[200px] rounded-full" />
      <CircleGradient className="absolute top-[54%] md:top-[50%] left-[0%] w-20 h-60 md:w-100 md:h-100 blur-[60px] md:blur-[200px] rounded-full" />
              <div
          className="absolute inset-0 rounded-full opacity-100 mix-blend-overlay pointer-events-none"
          style={{
            filter: "url(#grainyNoise)"
          }}
          />
          <ArcGradient className="-scale-100" />
      <div className="max-w-3xl mx-auto my-20">
        <h2 className="text-center text-3xl md:text-[34px] font-conthrax-book mb-12 tracking-wide">
          FAQs
        </h2>
        <div className="space-y-3 font-montserrat">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className={`border transition-colors duration-300 rounded-xl overflow-hidden cursor-pointer bg-white/1 text-white backdrop-blur-sm shadow-lg w-full inset-shadow-sm inset-shadow-white/10 ${isOpen ? "bg-white/1 border-white/10" : "bg-transparent border-white/5 hover:border-white/10"
                  }`}
                onClick={() => setOpenFaq(isOpen ? null : i)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.001] via-white/[0.0001] to-black/20 backdrop-blur-2xl border-[1.5px] border-t-white/10 border-l-white/70 border-r-white/10 border-b-white/30 rounded-xl md:rounded-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.05)]"></div>
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />

                <div className="flex items-center justify-between p-5 md:px-6 md:py-5">
                  <span className={`text-[13px] md:text-sm font-medium ${isOpen ? "text-white" : "text-[#A0A0A0]"}`}>
                    {faq.q}
                  </span>
                  <svg
                    className={`w-4 h-4 text-[#A0A0A0] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                {/* Expanded Content */}
                <div
                  className={`px-5 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
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
      </div>
      <ArcGradient className={''} />
    </section>
  )
}