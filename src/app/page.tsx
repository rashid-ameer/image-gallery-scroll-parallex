"use client";
import ScrollParallex from "@/components/parallex";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen">
      <div className="min-h-screen bg-orange-300" />
      <ScrollParallex />
      <div className="min-h-screen bg-orange-300" />
    </main>
  );
}
