import Image from "next/image";
import React from "react";

export default function LogoMarquee() {
  const logoGroups = [
    [{ src: "/logo-1.png", alt: "logo-1" }],
    [{ src: "/logo-2.png", alt: "logo-2" }],
    [{ src: "/logo-3.png", alt: "logo-3" }],
    [{ src: "/logo-4.png", alt: "logo-4" }],
    [{ src: "/logo-5.png", alt: "logo-5" }],
  ];

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-center items-center gap-x-4 md:gap-x-6 h-12 z-50 w-full px-8">
      {logoGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="flex gap-x-2">
          {group.map((logo, logoIndex) => (
            <Image
              key={logoIndex}
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={48}
            //   {/* 3. Used backticks (`) for the multiline string */}
            //   {/* 4. Added 'transform' class as a safe-guard for scale */}
              className={`
                h-12 w-auto object-contain transform
                saturate-0 transition-all duration-300 ease-in-out
                hover:saturate-100 hover:scale-110 cursor-pointer
              `}
            />
          ))}
        </div>
      ))}
    </div>
  );
}