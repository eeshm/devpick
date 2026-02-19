"use client";

import Container from "../components/Container";
import Categories from "@/components/Categories";
import MarqueeDemo from "@/components/Marquee";
import { FeaturesSectionDemo } from "@/components/ui/Features";
import LazyLoadOnView from "@/components/LazyLoadOnView";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Container className="flex flex-col min-h-screen">
        {/* ── Hero ──────────────────────────────────────── */}
        {/*
          overflow-x:hidden on the section clips the marquee at the
          max-w-5xl right edge — no scrollbar, no bleed past the app width.
        */}
        <section
          className="px-4 sm:px-6 pt-10 sm:pt-16 pb-8 sm:pb-10 max-w-5xl mx-auto w-full overflow-hidden"
        >
          {/* Title + description */}
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
            {/* Left — big title */}
            <BlurFade delay={0.05}>
              <div>
                <h1 className="dp-hero-pixel" style={{ letterSpacing: '-0.045em' }}>
                  DEV<br className="hidden lg:inline" />
                  PICK
                </h1>
                <p
                  className="dp-label mt-4"
                  style={{ color: 'var(--mono-500)' }}
                >
                  THE OPEN TECH STACK EXPLORER
                  <span style={{ color: 'var(--mono-white)', marginLeft: 2 }}>■</span>
                </p>
              </div>
            </BlurFade>

            {/* Right — description + CTAs */}
            <BlurFade delay={0.12}>
              <div className="flex flex-col gap-5 md:pt-3 md:max-w-lg">
                <p className="dp-subtitle">
                  Explore tools across frontend, backend, databases, DevOps, AI, and more. Browse categories, weigh pros and cons, and compare stacks to find what fits your next build.
                </p>

                {/* CTAs */}
                <div className="flex items-center gap-3 flex-wrap">
                  <Link href="/category" rel="noopener noreferrer">
                    <button
                      id="hero-cta-compare"
                      className="dp-btn dp-btn-solid flex items-center gap-2"
                    >
                      Compare Stacks
                      <ArrowRight size={13} />
                    </button>
                  </Link>
                  <Link href="/category" rel="noopener noreferrer">
                    <button
                      id="hero-cta-browse"
                      className="dp-btn"
                    >
                      Browse Categories
                    </button>
                  </Link>
                </div>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.2}>
            <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 flex items-center gap-8 sm:gap-12">

              {/* Stats */}
              <div
                className="grid grid-cols-3 gap-4 sm:gap-6 flex-shrink-0"
                style={{ minWidth: 220 }}
              >
                {[
                  { value: '50+', label: 'Tech Stacks' },
                  { value: '10+', label: 'Categories' },
                  { value: '∞', label: 'Comparisons' },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{ fontFamily: 'var(--font-geist-sans)', fontSize: 26, fontWeight: 700, color: 'var(--mono-white)', letterSpacing: '-0.03em' }}>
                      {s.value}
                    </div>
                    <div className="dp-label mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Marquee — fills remaining width inside max-w-5xl, hidden on mobile */}
              <div
                className="hidden sm:block flex-1 min-w-0 overflow-hidden"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 72px)',
                  maskImage: 'linear-gradient(to right, transparent 0%, black 72px)',
                }}
              >
                <MarqueeDemo />
              </div>
            </div>
          </BlurFade>
        </section>

        {/* ── Features ───────────────────────────────── */}
        <FeaturesSectionDemo />

        {/* ── Categories ─────────────────────────────── */}
        <LazyLoadOnView>
          <Categories />
        </LazyLoadOnView>
      </Container>
    </>
  );
}
