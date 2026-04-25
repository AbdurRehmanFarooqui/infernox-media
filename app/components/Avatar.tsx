import Image from "next/image";

interface AvatarProps {
  src: string;
  className?: string; // Made optional so it won't crash if you forget to pass it
}

export default function Avatar({ className = "", src }: AvatarProps) {
  return (
    <Image 
      src={src} 
      alt="Profile Avatar" 
      width={200} 
      height={200} 
      // object-cover ensures the face doesn't get squished if the box isn't a perfect square
      className={`bg-black rounded-full object-cover ${className}`} 
    />
  );
}