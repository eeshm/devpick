import Link from "next/link";
import OptimizedTechImage from "./OptimizedImages";
import { ExternalLink, ArrowRight } from "lucide-react";

interface TechStack {
  id: string
  name: string
  slug: string
  category_slug?: string
  logo?: string
  logo_url?: string
  short_description: string
  official_docs: string
  popularity?: string
  major_use_cases: string[]
}

export function TechStackCard({ name, short_description, slug, logo_url, major_use_cases, official_docs, category_slug }: TechStack) {
  return (
    <div
      className="group dp-border-bottom"
      style={{ padding: '18px 0', transition: 'background 0.1s' }}
    >
      {/* Header row: logo + name + actions */}
      <div className="flex items-start gap-3 sm:gap-4">

        {/* Logo */}
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border flex-shrink-0"
          style={{ borderColor: 'var(--mono-800)', background: 'var(--mono-950)', marginTop: 2 }}
        >
          <OptimizedTechImage
            logoUrl={logo_url}
            name={name}
            size="large"
            className="w-5 h-5 sm:w-6 sm:h-6 dp-logo-img"
          />
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Name + action row */}
          <div className="flex items-start justify-between gap-3">
            <h3
              style={{
                fontFamily: 'var(--font-geist-sans)',
                fontSize: 15,
                fontWeight: 600,
                color: 'var(--mono-white)',
                letterSpacing: '-0.01em',
                lineHeight: 1.3,
              }}
            >
              {name}
            </h3>

            {/* Actions — always visible, inline */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Link
                href={`/category/${category_slug}/${slug}`}
                rel="noopener noreferrer"
                className="dp-action-link primary flex items-center gap-1"
                style={{ fontSize: 11, padding: '3px 10px' }}
              >
                Explore
                <ArrowRight size={10} />
              </Link>
              {official_docs && (
                <Link
                  href={official_docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dp-action-link hidden sm:inline-flex items-center gap-1"
                  style={{ fontSize: 11, padding: '3px 10px' }}
                >
                  <ExternalLink size={10} />
                  Docs
                </Link>
              )}
            </div>
          </div>

          {/* Description */}
          {short_description && (
            <p
              style={{
                fontFamily: 'var(--font-geist-sans)',
                fontSize: 13,
                color: 'var(--mono-500)',
                lineHeight: 1.6,
                marginTop: 6,
              }}
            >
              {short_description}
            </p>
          )}

          {/* Use case tags */}
          {major_use_cases && major_use_cases.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {major_use_cases.slice(0, 4).map((uc, i) => (
                <span key={i} className="dp-tag" style={{ fontSize: 11 }}>
                  {uc}
                </span>
              ))}
              {major_use_cases.length > 4 && (
                <span
                  style={{
                    fontFamily: 'var(--font-geist-mono)',
                    fontSize: 11,
                    color: 'var(--mono-600)',
                    alignSelf: 'center',
                  }}
                >
                  +{major_use_cases.length - 4}
                </span>
              )}
            </div>
          )}

          {/* Docs link on mobile (hidden on sm+) */}
          {official_docs && (
            <Link
              href={official_docs}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden dp-breadcrumb-link flex items-center gap-1 mt-3"
              style={{ fontSize: 11 }}
            >
              <ExternalLink size={10} />
              Official Docs
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}