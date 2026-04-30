
const ArcGradient = ({ className = '', }: Readonly<{
  className?: string;
}>) => {
  return (
    <div className={` w-full  overflow-hidden ${className}  relative h-50 `}>
      <div className="absolute top-[10%] left-[50%] w-[200vw] h-[150vw] -translate-x-1/2 blur-[1px] md:blur-[4px] opacity-30">
        {/* 3. Bright Glow in center */}
        <div
          className="w-full h-full rounded-[100%] bg-[#ab5efe]"
          style={{
            maskImage: "radial-gradient(ellipse 112vw 75vw at 50% 50.5%, transparent 99%, black 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 112vw 75vw at 50% 50.5%, transparent 99%, black 100%)"
          }}
        />
      </div>
      {/* 1. PARENT: Handles the positioning, sizing, and the heavy blur */}
      <div className="absolute top-[10%] left-[50%] w-[200vw] h-[150vw] -translate-x-1/2 blur-[2px] md:blur-[10px] ">
        {/* 2. CHILD: Handles the purple color and the cutout mask */}
        <div
          className="w-full h-full rounded-[100%] bg-[#7B00FF] "
          style={{
            maskImage: "radial-gradient(ellipse 112vw 75vw at 50% 50.5%, transparent 98%, black 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 112vw 75vw at 50% 50.5%, transparent 98.5%, black 100%)"
          }}
        />
      </div>
      <div className="absolute top-[10%] left-[50%] w-[200vw] h-[150vw] -translate-x-1/2 blur-[2px] md:blur-[12px] opacity-30">
        {/* 3. Bright Glow in center */}
        <div
          className="w-full h-full rounded-[100%] bg-[#ab5efe]"
          style={{
            maskImage: "radial-gradient(ellipse 112vw 75vw at 50% 50.5%, transparent 99%, black 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 112vw 75vw at 50% 50.5%, transparent 99%, black 100%)"
          }}
        />
      </div>
    </div >
  );
};
export default ArcGradient;
