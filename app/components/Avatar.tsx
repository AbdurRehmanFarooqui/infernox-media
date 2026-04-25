import Image from "next/image";

export default function Avatar({ className, src }: { className: string, src: string }) {
    return (
        <div className={`relative rounded-full ${className}`}>
            <Image src={src} alt="Avatar" width={200} height={200} className="bg-[#000000] rounded-[100%] h-40 w-40" />
        </div>
    );
}