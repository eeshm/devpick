"use client"
import Link from "next/link"
import OptimizedTechImage from "./OptimizedImages"

interface Categories {
    id?: string
    name: string
    description: string
    slug: string
    logo?: string
    created_at?: string
    index?: number
}

export default function CategoryCard({ name, description, slug, logo, index }: Categories) {
    return (
        <div className="group dp-border-bottom" style={{ padding: '16px 0', transition: 'background 0.1s' }}>
            {/* Row 1: index + logo + name + actions */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>

                {/* Index — hidden on mobile via CSS */}
                <span className="dp-row-index dp-cat-index" style={{ paddingTop: 2, minWidth: 28 }}>{index}</span>

                {/* Logo */}
                <div
                    className="flex-shrink-0"
                    style={{
                        width: 36,
                        height: 36,
                        border: '1px solid var(--mono-800)',
                        background: 'var(--mono-950)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <OptimizedTechImage
                        logoUrl={logo}
                        name={name}
                        size="large"
                        className="w-6 h-6 dp-logo-img"
                    />
                </div>

                {/* Name + description — take all remaining space */}
                <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                        style={{
                            fontFamily: 'var(--font-geist-sans)',
                            fontSize: 14,
                            fontWeight: 600,
                            color: 'var(--mono-white)',
                            letterSpacing: '-0.01em',
                            lineHeight: 1.3,
                        }}
                    >
                        {name}
                    </div>
                    <div
                        style={{
                            fontFamily: 'var(--font-geist-sans)',
                            fontSize: 12,
                            color: 'var(--mono-500)',
                            lineHeight: 1.55,
                            marginTop: 4,
                        }}
                    >
                        {description}
                    </div>
                </div>

                {/* Actions — right side, visible on md+ inline. On mobile they drop below */}
                <div
                    className="dp-cat-actions-inline"
                    style={{ display: 'flex', flexDirection: 'column', gap: 6, flexShrink: 0, paddingTop: 2 }}
                >
                    <Link href={`/category/${slug}`} rel="noopener noreferrer">
                        <span className="dp-action-link primary">Explore</span>
                    </Link>
                    <Link href={`/category/${slug}/compare`} rel="noopener noreferrer">
                        <span className="dp-action-link">Compare</span>
                    </Link>
                </div>
            </div>

            {/* Row 2: mobile-only action row (hidden on md+) */}
            <div
                className="dp-cat-actions-mobile"
                style={{ display: 'none', gap: 8, marginTop: 10, paddingLeft: 48 }}
            >
                <Link href={`/category/${slug}`} rel="noopener noreferrer">
                    <span className="dp-action-link primary" style={{ fontSize: 11, padding: '3px 12px' }}>Explore</span>
                </Link>
                <Link href={`/category/${slug}/compare`} rel="noopener noreferrer">
                    <span className="dp-action-link" style={{ fontSize: 11, padding: '3px 12px' }}>Compare</span>
                </Link>
            </div>
        </div>
    )
}
