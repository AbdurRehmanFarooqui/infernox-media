import React from "react";
import Avatar from "./Avatar";
// import { Avatar } from "@/components/ui/avatar"; // Adjust to your actual import

export default function ProfileShowcase() {
    // We converted your exact left/scale values to hardware-accelerated translates.
    // Mobile gets a tighter grouping, md (desktop) matches your original wide spread.
    const profiles = [
        {
            id: 1, src: '/profile-1.png',
            pos: '-translate-x-[120px] md:-translate-x-[236px]',
            scale: 'scale-[0.35] md:scale-[0.50]', z: 'z-[10]',
            shadow: 'shadow-[-6px_0_12px_-1px_rgba(0,0,0,0.5)]'
        },

        {
            id: 2, src: '/profile-2.png',
            pos: '-translate-x-[100px] md:-translate-x-[196px]',
            scale: 'scale-[0.42] md:scale-[0.60]', z: 'z-[20]',
            shadow: 'shadow-[-6px_0_12px_-1px_rgba(0,0,0,0.5)]'
        },

        {
            id: 3, src: '/profile-3.png',
            pos: '-translate-x-[76px] md:-translate-x-[150px]',
            scale: 'scale-[0.5] md:scale-[0.70]', z: 'z-[30]',
            shadow: 'shadow-[-6px_0_12px_-1px_rgba(0,0,0,0.5)]'
        },

        {
            id: 4, src: '/profile-4.png',
            pos: '-translate-x-[48px] md:-translate-x-[98px]',
            scale: 'scale-[0.6] md:scale-[0.80]', z: 'z-[40]',
            shadow: 'shadow-[-6px_0_12px_-1px_rgba(0,0,0,0.5)]'
        },

        {
            id: 5, src: '/profile-5.png',
            pos: 'translate-x-0',
            scale: 'scale-[0.9] md:scale-140', z: 'z-[50]',
            shadow: 'shadow-[0_0_12px_8px_rgba(0,0,0,0.6)]'
        },

        {
            id: 6, src: '/profile-6.png',
            pos: 'translate-x-[48px] md:translate-x-[98px]',
            scale: 'scale-[0.6] md:scale-[0.8]', z: 'z-[40]',
            shadow: 'shadow-[6px_0_12px_-1px_rgba(0,0,0,0.5)]'
        },

        {
            id: 7, src: '/profile-7.png',
            pos: 'translate-x-[78px] md:translate-x-[150px]',
            scale: 'scale-[0.5] md:scale-[0.7]', z: 'z-[30]',
            shadow: 'shadow-[6px_0_12px_-1px_rgba(0,0,0,0.5)]'
        },

        {
            id: 8, src: '/profile-8.png',
            pos: 'translate-x-[100px] md:translate-x-[196px]',
            scale: 'scale-[0.42] md:scale-[0.6]', z: 'z-[20]',
            shadow: 'shadow-[6px_0_12px_-1px_rgba(0,0,0,0.5)]'
        },

        {
            id: 9, src: '/profile-9.png',
            pos: 'translate-x-[120px] md:translate-x-[236px]',
            scale: 'scale-[0.35] md:scale-[0.5]', z: 'z-[10]',
            shadow: 'shadow-[6px_0_12px_-1px_rgba(0,0,0,0.5)]'
        },
    ];

    return (
        // The relative container provides a safe bounding box for the absolute children
        <div className="relative w-full h-[180px] md:h-[350px] flex justify-center items-center overflow-hidden px-4">
            {profiles.map((profile) => (
                <div
                    key={profile.id}
                    className={`
            absolute flex justify-center items-center
            transition-all duration-500 ease-out cursor-pointer
            hover:-translate-y-4 hover:brightness-110
            ${profile.pos} ${profile.scale} ${profile.z}
          `}
                >
                    {/* I isolated your shadow class directly onto the Avatar to ensure smooth scaling */}
                    <Avatar
                        src={profile.src}
                        className={`w-20 h-20 md:w-28 md:h-28 rounded-full ${profile.shadow}`}
                    />
                </div>
            ))}
        </div>
    );
}