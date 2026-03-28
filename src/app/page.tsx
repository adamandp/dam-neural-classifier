"use client";

import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ScientificSection from "@/components/scientific-section";
import { useRef } from "react";

export default function Home() {
  const analyzeSectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="max-w-7xl px-6 xl:px-12 mx-auto">
        <HeroSection ref={analyzeSectionRef} />
        <ScientificSection />
      </div>
    </main>
  );
}
