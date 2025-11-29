"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="
        fixed bottom-8 right-10 md:right-12 z-50 rounded-full border
        bg-background/80 backdrop-blur px-3 py-3 cursor-pointer
        shadow hover:bg-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30
        dark:border-zinc-800
      "
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        className="text-foreground"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
