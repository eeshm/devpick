import Link from "next/link"
import { Github, X } from "lucide-react"
import TwitterIcon from "./icons/Twitter"
import { IconBrandGithub, IconBrandGithubFilled, IconBrandTwitter, IconBrandTwitterFilled, IconBrandX } from "@tabler/icons-react"

export default function Footer() {
    return (
        <footer className="" style={{ background: '#000' }}>
            <div
                className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between gap-4"
            >
                {/* Left */}
                <div className="flex items-center gap-4">
                    {/* Triangle logo */}
                    {/* <svg width="12" height="12" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.3 }}>
                        <polygon points="7,1 13,13 1,13" fill="var(--mono-white)" /> */}
                    {/* </svg> */}
                    <span
                        style={{
                            fontFamily: 'var(--font-geist-mono)',
                            fontSize: 11,
                            color: 'var(--mono-500)',
                            letterSpacing: '0.04em',
                        }}
                    >
                        DEVPICK · MADE BY EESH
                    </span>
                </div>

                {/* Right — social links */}
                <div className="flex items-center gap-4">
                    <Link
                        href="https://x.com/eeshmidha1"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--mono-600)', display: 'flex', transition: 'color 0.15s' }}
                        className="hover:text-[var(--mono-500)]"
                    >
                        <IconBrandX size={16} />
                    </Link>
                    <Link
                        href="https://github.com/eeshm"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--mono-600)', display: 'flex', transition: 'color 0.15s' }}
                        className="hover:text-[var(--mono-500)]"
                    >
                        <IconBrandGithub size={16} />
                    </Link>
                </div>
            </div>
        </footer>
    )
}