
export default function ButtonSecondary({
    children,
    className = '',
    ...props
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <button
            className={`px-6 py-3 rounded-2xl border-2 border-white text-white font-red-hat font-bold text-sm hover:bg-white
            cursor-pointer hover:text-black transition-colors duration-300 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}