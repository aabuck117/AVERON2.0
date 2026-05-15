import React from "react";
import { AveronLogo } from "./AveronLogo";

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-brand-line bg-[#020202] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <AveronLogo className="h-8" />
          <p className="font-mono text-[10px] text-brand-gray tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Averon Systems. All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <h4 className="font-display text-4xl text-brand-white uppercase tracking-wider">Built For Growth.</h4>
          <a href="mailto:averon.scaling@gmail.com" className="font-mono text-xs text-brand-orange hover:text-brand-white transition-colors tracking-widest uppercase mb-1">
            averon.scaling@gmail.com
          </a>
          <a href="#" className="font-mono text-[10px] text-brand-gray hover:text-brand-white transition-colors tracking-widest uppercase">
            AveronSystems.Agency
          </a>
        </div>

      </div>

      {/* Decorative corners */}
      <div className="absolute bottom-0 left-0 w-8 h-8 border-t border-r border-brand-line/50" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-t border-l border-brand-line/50" />
    </footer>
  );
}
