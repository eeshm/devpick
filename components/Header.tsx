'use client'
import Link from "next/link";
import { Github, LucideGithub} from "lucide-react";
import { IconBrandGithub, IconBrandGithubCopilot, IconBrandGithubFilled } from "@tabler/icons-react";

function handleStar(): void {
    window.open("https://github.com/eeshm/devpick");
}

export default function Header() {
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
                                fontFamily: 'var(--font-doto)',
                                fontSize: '20px',
                                fontWeight: 600,
                                color: 'var(--mono-white)',
                                letterSpacing: '0.04em',
                                textTransform: 'uppercase',
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
                        className="inline-flex items-center justify-center gap-2  rounded-lg text-sm font-medium bg-[#27272a] text-secondary-foreground hover:bg-secondary/80 px-4 py-2 h-7 cursor-pointer"
                        style={{ padding: '5px 12px', fontSize: '12px', borderRadius: '4px' }}
                    >
                        <IconBrandGithub size={13} />
                        <span className="sm:inline" style={{ fontFamily: 'var(--font-geist-sans)' }}>Star Github</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
