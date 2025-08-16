'use client'
import React, { useState, useEffect, useRef } from "react";

interface LazyLogoProps {
    Logo: React.ReactNode;
    index: number;
    threshold?: number; // Optionally pass a custom threshold
    className?: string; // Optionally pass a custom className for styling
}

const LazyLogo = ({ Logo, index, threshold = 0.1, className = '' }: LazyLogoProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after the logo is visible
                }
            },
            {
                rootMargin: "0px",
                threshold,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    return (
        <div ref={ref}>
            {isVisible && (
                <div className={`flex flex-row items-center w-32 ${className}`}>{Logo}</div>
            )}
        </div>
    );
};

export default LazyLogo;
