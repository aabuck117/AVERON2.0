import { motion } from "motion/react";
import React from "react";
import { AveronLogo } from "./AveronLogo";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 border-b border-brand-line/50 bg-brand-bg/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <AveronLogo className="h-10" />
        
        <div className="hidden md:flex items-center gap-8 text-sm font-mono tracking-widest uppercase text-brand-gray">
          <span className="flex items-center gap-2">
            <span className="text-brand-orange">+</span> Status: Online
          </span>
          <span className="flex items-center gap-2">
            <span className="text-brand-orange">+</span> System: Active
          </span>
        </div>

        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary px-6 py-3 cursor-pointer rounded-sm">
          Get Started
        </button>
      </div>
    </motion.header>
  );
}
