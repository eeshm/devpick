"use client";

import Hero from "../components/Hero";
import Container from "../components/Container";
import Categories from "@/components/Categories";
import MarqueeDemo from "@/components/Marquee";
import { FeaturesSectionDemo } from "@/components/ui/Features";
import LazyLoadOnView from "@/components/LazyLoadOnView";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Scale } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";


export default function Home() {
  return (
    <>
      <Container className="flex flex-col min-h-screen">
        <div
          className="items-center mt-5 md:mt-5 flex flex-col gap-y-4 pt-5 px-2 relative z-10"
        >
          <div
            className="relative"
          >
            <BlurFade delay={0.10}>
            <h1 className="text-4xl md:text-xl lg:text-5xl tracking-tight font-semibold text-center w-full bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent pb-2">
              The Smart Way to Explore Tech
            </h1>
            </BlurFade>
          </div>

            <BlurFade delay={0.10*2}>
          <p
            className="text-center max-w-md md:max-w-2xl text-base leading-relaxed font-grostek px-4 md:px-0 text-neutral-300/90"
          >
            Explore tools across frontend, backend, databases, DevOps, AI, styling, and more — browse categories, weigh pros and cons, and compare stacks to find what fits your next build.
          </p>
          </BlurFade>

          <div className="mt-8">
            <BlurFade delay={0.10*3}>
            <Link href="/category" rel="noopener noreferrer">
              <Button
                variant="default"
                size="lg"
                className="font-grostek h-12 rounded-lg
                text-gray-800 bg-white hover:bg-white/90 font-seminold text-sm relative
                shadow-lg hover:shadow-xl cursor-pointer group
                transition-all duration-300 ease-in-out hover:-translate-y-0.5"
              >
                Compare Stacks
                  <ArrowRightIcon className="transition-transform stroke-[1.5px] duration-300 group-hover:translate-x-1 relative top-[1px]" />
              </Button>
            </Link>
            </BlurFade>
          </div>
        </div>
        <div>
        <BlurFade delay={0.10*5}>
          <MarqueeDemo />
        </BlurFade>
        </div>

        <FeaturesSectionDemo />
        <LazyLoadOnView>
          <Categories />
        </LazyLoadOnView>
      </Container>
    </>
  );
}
