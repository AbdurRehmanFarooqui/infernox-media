
export default function CircleGradient({ className }: { className: string }) {
    return (
        <div className={`absolute ${className}`}>
            <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B00FF] rounded-full blur-[250px] opacity-70" />
        </div>
    );
}