
const ArcGradient = ({ className = '', }: Readonly<{
  className?: string;
}>) => {
  return (
    <div className={` w-full  overflow-hidden ${className}`}>

      <div className="relative w-full h-50 mx-auto">

        {/* 1. The Base Gradient (The Color) */}
        <div
          className="absolute top-[40%] left-[50%] w-[160vw] h-[120vw] inset-0 rounded-[100%] blur-[8px] opacity-100 mx-auto bg-[#7B00FF] -translate-x-1/2 "
        />

        {/* 2. The Overlay Gradient */}
        <div
          className="absolute top-[50%] left-[50%] w-[190vw] h-[120vw] inset-0 rounded-[100%] blur-[8px] opacity-100 mx-auto bg-black -translate-x-1/2"
          // className="absolute top-[50%] left-[50%] w-[160vw] h-[120vw] rounded-[100%] blur-[8px] bg-[#0b9a31] -translate-x-1/2"
          // style={{
            // This radial gradient acts as an eraser. 
            // It creates an invisible ellipse at the bottom center, punching a hole in the purple div.
          //   maskImage: "radial-gradient(ellipse 120vw 60vw at 50% 60%, transparent 99%, black 100%)",
          //   WebkitMaskImage: "radial-gradient(ellipse 120vw 60vw at 50% 60%, transparent 99%, black 100%)"
          // }}
        />
      </div>

    </div>
  );
};
export default ArcGradient;