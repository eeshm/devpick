'use client'
import { Button } from "./ui/button";
import Link from "next/link";
import { Github } from "lucide-react";

function handleClick(): void {
    window.open("https://github.com/eeshm/devpick");
};

export default function Header() {
    return (
        <header className="border-b border-white/10 bg-black/20 backdrop-blur-md z-30 left-0 top-0 sticky">
            <div className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
                <div>
                    <Link href="/" rel="noopener noreferrer" className="group">
                        <div className="font-semibold text-2xl bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent 
                            tracking-tight hover:to-white transition-colors duration-200">
                            DevPick
                        </div>
                    </Link>
                </div>
                <div>
                    <Button
                        variant="outline"
                        onClick={handleClick}
                        className="flex items-center cursor-pointer gap-2 bg-white/5 border-white/10 hover:bg-white/10 
                            hover:border-white/20 transition-all duration-200 text-white group"
                    >
                        <Github className="group-hover:scale-110 transition-transform duration-200"/>
                        <span className="hidden md:block">Star Project</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}
