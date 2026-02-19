import React, { ReactNode } from "react"
import Link from "next/link"
import { Clock, ExternalLink, Star } from "lucide-react"
import OptimizedTechImage from "./OptimizedImages"

interface TechStack {
    id?: string
    name: string
    slug?: string
    category_slug?: string
    logo?: string | ReactNode
    logo_url?: string
    short_description?: string
    detailed_description?: string
    official_docs?: string
    learning_curve?: string
    popularity?: string
    pros?: string[]
    cons?: string[]
    major_use_cases?: string[]
    basic_prerequisites?: string[]
}

const getDifficultyColor = (level?: string) => {
    if (!level) return 'var(--mono-500)'
    if (level === 'Intermediate') return '#d4a843'
    if (level === 'Hard' || level === 'Advanced') return '#c0392b'
    return '#27ae60'
}

export function TechStackDetailCard(props: TechStack) {
    return (
        <div className="max-w-5xl mx-auto">
            {/* ── Hero header ─────────────────────── */}
            <div
                className="flex items-start justify-between gap-4 pb-8 dp-border-bottom mb-8"
            >
                <div style={{ flex: 1, minWidth: 0 }}>
                    <p className="dp-label mb-3">{props.category_slug?.replace(/-/g, ' ')}</p>
                    <h1
                        style={{
                            fontFamily: 'var(--font-geist-sans)',
                            fontSize: 'clamp(32px, 5vw, 52px)',
                            fontWeight: 800,
                            letterSpacing: '-0.04em',
                            lineHeight: 1,
                            color: 'var(--mono-white)',
                            marginBottom: 12,
                        }}
                    >
                        {props.name}
                    </h1>
                    {props.short_description && (
                        <p style={{
                            fontFamily: 'var(--font-geist-sans)',
                            fontSize: 15,
                            color: 'var(--mono-400)',
                            lineHeight: 1.6,
                            maxWidth: 560,
                        }}>
                            {props.short_description}
                        </p>
                    )}

                    {/* Meta pills */}
                    <div className="flex flex-wrap gap-3 mt-5">
                        {props.popularity && (
                            <div className="dp-meta-pill">
                                <Star size={11} />
                                <span>{props.popularity} popularity</span>
                            </div>
                        )}
                        {props.learning_curve && (
                            <div
                                className="dp-meta-pill"
                                style={{ color: getDifficultyColor(props.learning_curve) }}
                            >
                                <Clock size={11} />
                                <span>{props.learning_curve}</span>
                            </div>
                        )}
                        {props.official_docs && (
                            <Link
                                href={props.official_docs}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dp-meta-pill"
                                style={{ textDecoration: 'none' }}
                            >
                                <ExternalLink size={11} />
                                <span>Docs</span>
                            </Link>
                        )}
                    </div>
                </div>

                {/* Logo */}
                <div
                    className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border flex-shrink-0"
                    style={{ borderColor: 'var(--mono-800)', background: 'var(--mono-950)' }}
                >
                    <OptimizedTechImage
                        logoUrl={props.logo_url}
                        name={props.name}
                        size="large"
                        className="w-10 h-10 sm:w-12 sm:h-12 dp-logo-img"
                        style={{ filter: 'none', opacity: 1 }}
                    />
                </div>
            </div>

            {/* ── Body grid ───────────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Main content — spans 2 cols on md */}
                <div className="md:col-span-2 flex flex-col gap-8">

                    {/* Overview */}
                    {props.detailed_description && (
                        <section>
                            <p className="dp-label mb-4">Overview</p>
                            <p style={{
                                fontFamily: 'var(--font-geist-sans)',
                                fontSize: 14,
                                color: 'var(--mono-400)',
                                lineHeight: 1.75,
                            }}>
                                {props.detailed_description}
                            </p>
                        </section>
                    )}

                    {/* Pros & Cons */}
                    {(props.pros?.length || props.cons?.length) ? (
                        <section>
                            <p className="dp-label mb-4">Pros &amp; Cons</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Pros */}
                                <div>
                                    <p style={{
                                        fontFamily: 'var(--font-geist-mono)',
                                        fontSize: 11,
                                        color: '#27ae60',
                                        letterSpacing: '0.1em',
                                        marginBottom: 12,
                                    }}>PROS</p>
                                    <ul className="flex flex-col gap-2">
                                        {props.pros?.map((pro, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 dp-border-bottom pb-2"
                                            >
                                                <span style={{ color: '#27ae60', flexShrink: 0, marginTop: 2, fontSize: 12 }}>+</span>
                                                <span style={{ fontFamily: 'var(--font-geist-sans)', fontSize: 13, color: 'var(--mono-300)', lineHeight: 1.5 }}>{pro}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Cons */}
                                <div>
                                    <p style={{
                                        fontFamily: 'var(--font-geist-mono)',
                                        fontSize: 11,
                                        color: '#c0392b',
                                        letterSpacing: '0.1em',
                                        marginBottom: 12,
                                    }}>CONS</p>
                                    <ul className="flex flex-col gap-2">
                                        {props.cons?.map((con, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 dp-border-bottom pb-2"
                                            >
                                                <span style={{ color: '#c0392b', flexShrink: 0, marginTop: 2, fontSize: 12 }}>−</span>
                                                <span style={{ fontFamily: 'var(--font-geist-sans)', fontSize: 13, color: 'var(--mono-300)', lineHeight: 1.5 }}>{con}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    ) : null}

                    {/* Use Cases */}
                    {props.major_use_cases?.length ? (
                        <section>
                            <p className="dp-label mb-4">Major Use Cases</p>
                            <ul className="flex flex-col gap-0">
                                {props.major_use_cases.map((uc, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3 py-3 dp-border-bottom"
                                    >
                                        <span style={{
                                            fontFamily: 'var(--font-geist-mono)',
                                            fontSize: 11,
                                            color: 'var(--mono-600)',
                                            minWidth: 24,
                                        }}>
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span style={{ fontFamily: 'var(--font-geist-sans)', fontSize: 14, color: 'var(--mono-300)' }}>
                                            {uc}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ) : null}
                </div>

                {/* Sidebar */}
                <div className="flex flex-col gap-6">

                    {/* Prerequisites */}
                    {props.basic_prerequisites?.length ? (
                        <section>
                            <p className="dp-label mb-4">Prerequisites</p>
                            <div className="flex flex-wrap gap-2">
                                {props.basic_prerequisites.map((p, i) => (
                                    <span key={i} className="dp-tag">{p}</span>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {/* Quick Links */}
                    <section>
                        <p className="dp-label mb-4">Quick Links</p>
                        <div className="flex flex-col gap-0">
                            {props.official_docs && (
                                <Link
                                    href={props.official_docs}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="dp-quick-link"
                                >
                                    <ExternalLink size={13} />
                                    Official Docs
                                </Link>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}