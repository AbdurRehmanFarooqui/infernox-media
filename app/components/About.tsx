import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
export default function About() {
    return (
        <section className="w-full mx-auto px-0 py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Graphic Placeholder */}
                <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#7B00FF] opacity-30 blur-[100px] rounded-full" />
                    <img
                        src="/camera.png"
                        alt="Camera and Film Graphic"
                        className="absolute left-0 z-10 w-full object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Right Content */}
                <div className="px-8 md:pr-18 md:px-0">
                    <h2 className="text-3xl md:text-[40px] font-conthrax-book mb-8 tracking-wide">
                        About Infernox Media
                    </h2>
                    <p className="text-[#888888] text-[15px] leading-[1.8] mb-6 font-montserrat">
                        Infernox Media is a performance-driven, full-service digital agency focused on business growth and scaling through strategic content creation, paid advertising, and conversion rate optimization.
                        We are fueled by the belief that true empowerment fuels brands and brand presence.
                    </p>
                    <p className="text-[#888888] text-[15px] leading-[1.8] mb-10">
                        With over 4 years of experience crafting top-tier media productions, social media strategies, and content campaigns, we successfully bridge the gap between creative execution and ROI.
                        <br /><br />
                        At Infernox Media, we don't just edit videos. We build strong digital identities.
                    </p>
                    <div className="flex gap-x-6">
                        <ButtonPrimary className="mt-8">Get Started</ButtonPrimary>
                        <ButtonSecondary className="mt-8">Learn More</ButtonSecondary>
                    </div>
                </div>
            </div>
        </section>
    )
}