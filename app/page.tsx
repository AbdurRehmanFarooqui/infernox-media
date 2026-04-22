import Header from "@/app/components/Header";
import Image from "next/image";
import CircleGradient from "./components/CircleGradient";
import ArcGradient from "./components/ArcGradient";
import ArcGradient2 from "./components/ArcGradient2";
import ButtonPrimary from "./components/ButtonPrimary";
import ButtonSecondary from "./components/ButtonSecondary";
import Avatar from "./components/Avatar";
import WhoWeHelp from "./components/WhoWeHelp";
import WhoWeHelpDetail from "./components/WhoWeHelpDetail";
import LastSection from "./components/LastSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="relative w-full bg-black min-h-screen max-w-screen overflow-x-hidden overflow-y-hidden">
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
      <CircleGradient className={'top-[40%]'} />
      <CircleGradient className={'top-[5%] left-[100%]'} />
      <CircleGradient className={'top-[90%] left-[100%]'} />
      <Header />
      {/* <div className="h-[100vh]"> */}
      <Image src="/hero-background.png" alt="Description" width={500} height={500} className="-rotate-14 blur-[2px] absolute top-[30%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 scale-450 opacity-60" />
      {/* </div> */}
      <div
        className="absolute inset-0 rounded-full opacity-100 mix-blend-overlay pointer-events-none"
        style={{
          filter: "url(#grainyNoise)"
        }}
      />

      <main className="w-full relative pt-66">
        <div className="w-max flex flex-col items-center justify-center mx-auto">
          <h1 className="text-center font-conthrax text-5xl ">Become a Top YouTuber,<br />Content Creator, or <br />Brand with Infernox</h1>
          <h6 className="text-center pt-6 font- text-base w-half">We help you rise above the noise with strategic edits that engage <br /> audiences, convert attention, and scale your brand’s impact.</h6>
          <div className="flex gap-x-6">
            <ButtonPrimary className="mt-8">Get Started</ButtonPrimary>
            <ButtonSecondary className="mt-8">Learn More</ButtonSecondary>
          </div>
        </div>

        <div className="relative w-full flex flex-col items-center justify-center mx-auto">

          <ArcGradient2 className="-scale-100 top-0" />

          <h1 className="text-center font-conthrax pt-8 text-4xl ">Companies and Creators <br /> we’ve worked with</h1>

          <div className="w-full h-full flex justify-center  p-12">
            <Avatar className="scale-60 left-53"/>
            <Avatar className="scale-70 left-35"/>
            <Avatar className="scale-80 left-20"/>
            <Avatar className="scale-90 left-10"/>
            <Avatar className="scale-100 z-9"/>
            <Avatar className="scale-90 -left-10 z-8"/>
            <Avatar className="scale-80 -left-20 z-7"/>
            <Avatar className="scale-70 -left-35 z-6"/>
            <Avatar className="scale-60 -left-53"/>
          </div>


          <div className="flex flex-col gap-y-2">
            <h6 className="text-center font-conthrax text-xl ">The Jesus Conspiracy</h6>
            <h6 className="text-center font-conthrax-book text-base text-white/50 ">@thejesusconspiracy</h6>
            <h6 className="text-center font-conthrax-book text-base text-white ">820 Subscribers</h6>
          </div>


          <ArcGradient2 className="" />
        </div>

      </main>


        <WhoWeHelp/>
        <WhoWeHelpDetail/>
        <LastSection/>
        <Footer/>
    </div>
  );
}
