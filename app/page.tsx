import Header from "@/app/components/Header";
import Image from "next/image";
import CircleGradient from "./components/CircleGradient";
import ArcGradient from "./components/ArcGradient";
// import ArcGradient2 from "./components/ArcGradient2";
import ButtonPrimary from "./components/ButtonPrimary";
import ButtonSecondary from "./components/ButtonSecondary";
import Avatar from "./components/Avatar";
import WhoWeHelp from "./components/WhoWeHelp";
import WhoWeHelpDetail from "./components/WhoWeHelpDetail";
import BottomCTA from "./components/BottomCTA";
import Footer from "./components/Footer";
import FAQs from "./components/FAQs";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import ProjectManager from "./components/ProjectManager";
import About from "./components/About";
import LogoMarquee from "./components/LogoMarque";
import ProfileShowcase from "./components/ProfileShowcase";


export default function Home() {
  return (
    <div className="relative w-full bg-black min-h-screen max-w-screen overflow-x-hidden overflow-y-hidden">
      <div className="relative">
        <Image src="/hero-background.png" alt="Description" width={500} height={500} className="-rotate-14 blur-[2px] absolute top-[25%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 scale-450 opacity-60" />
        <svg className="absolute w-0 h-0 invisible">
          <filter id="grainyNoise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.30"
              numOctaves="4"
              stitchTiles="stitch"
            />
            {/* Contrast adjustment for the grain */}
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>
        <CircleGradient className={'w-[800px] h-[500px] top-[30%] left-[50%] opacity-100 blur-[100px] bg-black'} />
        <CircleGradient className={'w-[850px] h-[500px] top-[27%] left-[50%] opacity-20 blur-[100px]'} />


        <CircleGradient className={'w-[200px] md:w-[500px] h-[200px] md:h-[500px] top-[40%] left-[0%] opacity-80 blur-[100px] md:blur-[200px]'} />
        <CircleGradient className={'w-[200px] md:w-[600px] h-[200px] md:h-[500px] top-[0%] left-[100%] opacity-80 blur-[100px] md:blur-[220px]'} />
        <CircleGradient className={'w-[200px] md:w-[600px] h-[200px] md:h-[500px] top-[71%] left-[100%] opacity-80 blur-[100px] md:blur-[200px]'} />

        {/* <CircleGradient className={'top-[25%] left-[50%] opacity-10'} blur-[250px] /> */}
        <Header />

        <div
          className="absolute inset-0 rounded-full opacity-100 mix-blend-overlay pointer-events-none"
          style={{
            filter: "url(#grainyNoise)"
          }}
        />

        <main className="w-full relative">
          <section className="relative w-full md:w-max flex flex-col items-center justify-center mx-auto h-[76vh] pt-40 px-6">
            <Image src='/objects.png' alt="object" width={400} height={300} className="absolute left-[35%] md:left-[49%] top-[50%] md:top-[50%] w-[250px] md:w-[400px] h-auto object-contain" />

            <h1 className="text-center font-conthrax-book text-xl md:text-5xl md:leading-14 z-1 md:tracking-wide">Become a Top YouTuber,<br />Content Creator, or <br />Brand with <b>Infernox</b></h1>
            <h6 className="text-center pt-4 md:pt-6 text-sm md:text-base w-full md:w-half font-montserrat z-1">We help you rise above the noise with strategic edits that engage <br className="hidden md:block" /> audiences, convert attention, and scale your brand’s impact.</h6>
            <div className="flex gap-x-6">
              <ButtonPrimary className="mt-8">Get Started</ButtonPrimary>
              <ButtonSecondary className="mt-8">Learn More</ButtonSecondary>
            </div>
          </section>

          <section className="relative w-full flex flex-col items-center justify-center mx-auto">
            <LogoMarquee />

            <ArcGradient className="-scale-100 top-0" />

            <h1 className="text-center font-conthrax-book pt-8 text-2xl md:text-4xl ">Companies and Creators <br /> we’ve worked with</h1>

            <ProfileShowcase />


            <div className="flex flex-col gap-y-2">
              <h6 className="text-center font-conthrax text-lg md:text-xl ">The Jesus Conspiracy</h6>
              <h6 className="text-center font-montserrat text-sm md:text-base text-white/50 ">@thejesusconspiracy</h6>
              <h6 className="text-center font-montserrat text-sm md:text-base text-white flex items-center justify-center gap-x-2"><span>                  <div className=" flex items-center justify-center">
                <div className="w-9 h-6 bg-[#FF0000] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              </span>820 Subscribers</h6>
            </div>


            <ArcGradient className="" />
          </section>

        </main>
      </div>


      <WhoWeHelp />
      <WhoWeHelpDetail />
      <Stats />
      <ProjectManager />
      <About />
      <Testimonials />
      <FAQs />
      <BottomCTA />
      <Footer />
    </div>
  );
}
