import Logo from '@/app/components/Logo'
export default function Header() {
    return (
        <div className="fixed top-0 pt-8 md:pt-12 w-full z-100 px-8">
            <header className="max-w-7xl mx-auto flex items-center justify-between py-3 md:py-5  px-8 md:px-15 bg-white/1 text-white backdrop-blur-sm rounded-3xl shadow-lg w-full inset-shadow-md inset-shadow-white/10 ">

                {/* ============================================================== */}
                {/* GLASS ARCHITECTURE (Z-0) */}
                {/* ============================================================== */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden z-0">
                    {/* Base Structure */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-white/[0.02] to-black/20 backdrop-blur-2xl border-[1.5px] border-t-white/10 border-l-white/70 border-r-white/10 border-b-white/30 rounded-2xl md:rounded-3xl shadow-[inset_0_0_30px_rgba(255,255,255,0.05)]"></div>
                    {/* Noise Texture */}
                    <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />
                </div>

                {/* Navigation */}
                <nav className="flex items-center justify-between w-full">
                    <div className='h-15 w-32 sm:gap-x-4 md:w-38 lg:w-48'>
                        <Logo />
                    </div>

                    <ul className="hidden md:flex sm:gap-x-4 md:gap-x-8 lg:space-x-16 font-red-hat text-lg z-20">

                        <li><a href="/" className="hover:text-white/80">Home</a></li>

                        <li><a href="/about" className="hover:text-white/80">About</a></li>

                        <li><a href="/contact" className="hover:text-white/80">Services</a></li>

                        <li><a href="/portfolio" className="hover:text-white/80">Portfolio</a></li>

                        <li><a href="/faqs" className="hover:text-white/80">Faqs</a></li>

                    </ul>

                </nav>
                <div className='md:hidden w-4 h-4'>
                    {/* Mobile menu icon (hamburger) */}
                    <div className="space-y-1">
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                    </div>
                </div>
            </header>
        </div>
    );
}