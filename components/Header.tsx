'use client'
import { Button } from "./ui/button";
import Link from "next/link";
import { Github } from "lucide-react";

function handleClick(): void {
    window.open("https://github.com/eeshm/devpick", "_blank");
};

export default function Header() {
    return (
        <header className="border-b bg-background z-30 sticky top-0">
            <div className="flex h-16 items-center justify-between px-4 container">
                <Link href="/" rel="noopener noreferrer">
                <div className="font-bold text-2xl">DevPicks</div>
                </Link>
                <Button
                    variant="outline"
                    onClick={handleClick}
                    className="flex items-center cursor-pointer md:space-x-2"
                >
                    <Github/>
                    <span className="hidden md:block">Star Project</span>
                </Button>
            </div>
        </header>
    );
}
