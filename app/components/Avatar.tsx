import Image from "next/image";

export default function Avatar({ className }: { className: string }) {
    return (
        <div className={`relative ${className}`}>
            <Image src="/hero-background.png" alt="Avatar" width={200} height={200} className="bg-[#000000] rounded-[100%] h-40 w-40 border-4 border-white" />
        </div>
    );
}