
const ArcGradient2 = ({ className = '', }: Readonly<{
  className?: string;
}>) => {
  return (
    <div className={` w-full  overflow-hidden ${className}  relative h-50`}>
      {/* 1. PARENT: Handles the positioning, sizing, and the heavy blur */}
      <div className="absolute top-[10%] left-[50%] w-[200vw] h-[100vw] -translate-x-1/2 blur-[2px] md:blur-[12px]">
        {/* 2. CHILD: Handles the purple color and the cutout mask */}
        <div
          className="w-full h-full rounded-[100%] bg-[#7B00FF]"
          style={{
            maskImage: "radial-gradient(ellipse 110vw 50vw at 50% 50.5%, transparent 98%, black 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 90vw 60vw at 50% 50.5%, transparent 98%, black 100%)"
          }}
        />
      </div>
      <div className="absolute top-[10%] left-[50%] w-[200vw] h-[100vw] -translate-x-1/2 blur-[2px] opacity-30">
        {/* 2. CHILD: Handles the purple color and the cutout mask */}
        <div
          className="w-full h-full rounded-[100%] bg-[#ab5efe]"
          style={{
            maskImage: "radial-gradient(ellipse 110vw 50vw at 50% 50.5%, transparent 99%, black 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 90vw 60vw at 50% 50.5%, transparent 99%, black 100%)"
          }}
        />
      </div>
    </div >
  );
};
export default ArcGradient2;



// const ArcGradient = ({ className = '', }: Readonly<{
//   className?: string;
// }>) => {
//   return (
//     <div className={` w-full  overflow-hidden ${className}  relative h-50`}>
//       {/* 1. PARENT: Handles the positioning, sizing, and the heavy blur */}
//       <div className="absolute top-[10%] left-[50%] w-[160vw] h-[120vw] -translate-x-1/2 blur-[12px]">
//         {/* 2. CHILD: Handles the purple color and the cutout mask */}
//         <div
//           className="w-full h-full rounded-[100%] bg-[#7B00FF]"
//           style={{
//             maskImage: "radial-gradient(ellipse 90vw 60vw at 50% 50.5%, transparent 98%, black 100%)",
//             WebkitMaskImage: "radial-gradient(ellipse 90vw 60vw at 50% 50.5%, transparent 98%, black 100%)"
//           }}
//         />
//       </div>
//       <div className="absolute top-[10%] left-[50%] w-[160vw] h-[120vw] -translate-x-1/2 blur-[2px] opacity-30">
//         {/* 2. CHILD: Handles the purple color and the cutout mask */}
//         <div
//           className="w-full h-full rounded-[100%] bg-[#ab5efe]"
//           style={{
//             maskImage: "radial-gradient(ellipse 90vw 60vw at 50% 50.5%, transparent 99%, black 100%)",
//             WebkitMaskImage: "radial-gradient(ellipse 90vw 60vw at 50% 50.5%, transparent 99%, black 100%)"
//           }}
//         />
//       </div>
//     </div >
//   );
// };
// export default ArcGradient;
