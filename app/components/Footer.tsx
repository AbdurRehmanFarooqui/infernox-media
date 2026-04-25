"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            alert(`Subscribed with: ${email}`);
            setEmail("");
        }
    };

    return (
        <footer className="w-full bg-[#030303] text-white pt-16 pb-8 px-16 font-sans  ">
            <div className="max-w-7xl mx-auto pt-32 border-t border-white/10">

                {/* --- Top Row: Logo, Mission, Newsletter --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-14 ">

                    {/* Logo Column */}
                    <div className="lg:col-span-3 flex items-start h-15">
                        <div className="h-full w-56">
                        <Logo/>
                        </div>
                    </div>

                    {/* Mission Text Column */}
                    <div className="lg:col-span-5">
                        <p className="text-white text-[15px] leading-relaxed max-w-md lg:mx-auto font-regular font-montserrat">
                            We help you rise above the noise with strategic edits that engage audiences, convert attention, and scale your brand's impact.
                        </p>
                    </div>

                    {/* Newsletter Column */}
                    <div className="lg:col-span-4 w-full max-w-md lg:ml-auto">
                        <h3 className="font-conthrax-book text-lg mb-4 tracking-wide">
                            Subscribe to Our Newsletter
                        </h3>
                        <form
                            onSubmit={handleSubscribe}
                            className="relative flex items-center border border-white/40 rounded-full p-1 focus-within:border-[#7B00FF] focus-within:shadow-[0_0_15px_rgba(123,0,255,0.3)] transition-all duration-300"
                        >
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent px-5 py-2 text-sm text-white outline-none placeholder:text-white/50"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-[#7B00FF] hover:bg-[#6000c2] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors duration-300 whitespace-nowrap"
                            >
                                Get Started
                            </button>
                        </form>
                    </div>

                </div>

                {/* --- Middle Divider --- */}
                <hr className="border-white/90 w-full mb-10" />

                {/* --- Navigation & Socials Row --- */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">

                    {/* Nav Links */}
                    <nav className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-12">
                        {["Home", "About Us", "Services", "Portfolio", "Pricing", "Faqs"].map((link) => (
                            <Link
                                key={link}
                                href={`/${link.toLowerCase().replace(" ", "-")}`}
                                className="text-[15px] font-medium hover:text-[#7B00FF] transition-colors duration-300 font-montserrat"
                            >
                                {link}
                            </Link>
                        ))}
                    </nav>

                    {/* Social Icons */}
                    <div className="flex items-center gap-5">
                        {/* Facebook */}
                        <a href="#" className="text-white hover:text-[#7B00FF] hover:-translate-y-1 transition-all duration-300">
                            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" className="text-white hover:text-[#7B00FF] hover:-translate-y-1 transition-all duration-300">
                            <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                        </a>
                        {/* X (Twitter) */}
                        <a href="#" className="text-white hover:text-[#7B00FF] hover:-translate-y-1 transition-all duration-300">
                            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" className="text-white hover:text-[#7B00FF] hover:-translate-y-1 transition-all duration-300">
                            <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                        </a>
                    </div>

                </div>

                {/* --- Bottom Row: Copyright & Policies --- */}
                <div className="flex flex-col md:flex-row items-center w-full mt-4 font-montserrat">
                    <p className="text-[13px] text-[#A0A0A0] whitespace-nowrap mb-4 md:mb-0">
                        Copyright 2025 All Rights Reserved.
                    </p>

                    {/* Expanding Line exactly like the design */}
                    <div className="flex-1 h-[1px] bg-white/90 mx-8 hidden md:block "></div>

                    <div className="flex gap-6 text-[13px] text-[#A0A0A0]">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors duration-300">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}