'use client'
import Link from "next/link";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";

function handleStar(): void {
    window.open("https://github.com/eeshm/devpick");
}

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header
            className="sticky top-0 z-30 border-bottom-[var(--mono-800)]"
            style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
        >
            {/* Main bar */}
            <div className="flex h-12 items-center justify-between px-4  mx-auto">

                {/* Left: logo + desktop nav */}
                <div className="flex items-center gap-6">
                    <Link href="/" rel="noopener noreferrer" className="flex items-center gap-2 group">
                        {/* <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: 'var(--mono-white)' }}>
                            <polygon points="7,1 50,50 1,50" fill="currentColor" />
                        </svg> */}
                        <span
                            style={{
                                fontFamily: 'var(--font-geist-sans)',
                                fontSize: '18px',
                                fontWeight: 600,
                                color: 'var(--mono-white)',
                                letterSpacing: '-0.01em',
                            }}
                        >
                            DevPick
                        </span>
                    </Link>
                </div>

                {/* Right */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleStar}
                        className=" flex items-center gap-2 cursor-pointer rounded-md"
                        style={{ padding: '5px 12px', fontSize: '12px' }}
                    >
                        <Github size={13} />
                        <span className="hidden sm:inline" style={{ fontFamily: 'var(--font-geist-sans)' }}>Star</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
