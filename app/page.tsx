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
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <>
      <Container className="flex flex-col min-h-screen ">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="items-center mt-5 flex flex-col gap-y-4 pt-10 px-2"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl tracking-tight font-medium text-center w-full"
          >
            The Smart Way to Explore Tech
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-center max-w-md md:max-w-2xl leading-6  font-grostek px-4 md:px-0"
          >
            Explore tools across frontend, backend, databases, DevOps, AI, styling, and more — browse categories, weigh pros and cons, and compare stacks to find what fits your next build.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-5">
            <Link href="/category" rel="noopener noreferrer">
              <Button
                size="lg"
                className="font-grostek bg-white text-black rounded-lg
             shadow-lg hover:shadow-xl hover:bg-zinc-100
             hover:-translate-y-1 active:scale-95
             transition-all duration-300 ease-in-out"
              >
                Compare Stacks
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Continuous motion element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <MarqueeDemo />
        </motion.div>

        <FeaturesSectionDemo />

        <LazyLoadOnView>
          <Categories />
        </LazyLoadOnView>
      </Container>
    </>
  );
}
