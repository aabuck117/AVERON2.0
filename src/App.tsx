import { motion, useSpring } from "motion/react";
import React, { useRef, useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { AttractConvertScale } from "./components/AttractConvertScale";
import { Process } from "./components/Process";
import { Systems } from "./components/Systems";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-brand-bg text-brand-white bg-noise overflow-hidden">
      {/* Global animated grid background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-scanlines" />
      
      {/* Mouse Follow Glow */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none z-0"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />

      
      {/* Tactical overlay elements (scanning line) */}
      <motion.div
        className="fixed inset-0 z-50 pointer-events-none opacity-10"
        animate={{
          background: [
            "linear-gradient(to bottom, transparent 0%, rgba(255,77,0,0) 40%, rgba(255,77,0,0.5) 50%, rgba(255,77,0,0) 60%, transparent 100%)",
            "linear-gradient(to bottom, transparent 40%, rgba(255,77,0,0) 80%, rgba(255,77,0,0.5) 90%, rgba(255,77,0,0) 100%, transparent 100%)",
            "linear-gradient(to bottom, transparent -10%, rgba(255,77,0,0) 30%, rgba(255,77,0,0.5) 40%, rgba(255,77,0,0) 50%, transparent 100%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.5, 1]
        }}
        style={{
          backgroundSize: "100% 300%",
        }}
      />

      <div className="relative z-10 selection:bg-brand-orange selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <AttractConvertScale />
          <Process />
          <Systems />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
