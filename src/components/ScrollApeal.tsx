"use client"
import React, { useState, useEffect, useRef } from 'react';
import NavButton from './NavButton';

const ScrollApeal = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const ref = useRef<HTMLHeadingElement | null>(null);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={ref} 
            className={`w-full fixed bottom-8 left-0 flex gap-4 items-end justify-center transform duration-500 ${scrolled ? 'z-20 opacity-100' : 'z-20 opacity-100 md:-z-20 md:opacity-0'}`}
        >
            <NavButton />
        </div>
    );
}

export default ScrollApeal;

