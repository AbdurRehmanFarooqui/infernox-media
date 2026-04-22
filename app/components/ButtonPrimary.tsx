
export default function ButtonPrimary({
    children,
    className = '',
    ...props
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <button
            className={`px-6 py-3 rounded-2xl bg-[#7B00FF] text-white font-red-hat font-bold text-sm cursor-pointer hover:bg-white hover:text-black transition-colors duration-300 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}