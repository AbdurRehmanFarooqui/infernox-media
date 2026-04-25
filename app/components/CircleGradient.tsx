
export default function CircleGradient({ className }: { className: string }) {
    return (
        // <div className={`absolute ${className}`}>
            <div className={`${className} absolute -top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#7B00FF] rounded-full`} />
        // </div>
    );
}