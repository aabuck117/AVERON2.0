import { motion } from "motion/react";
import React from "react";
import { Users, CalendarCheck, TrendingUp, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Lighting & Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-[150px] opacity-50" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Typography */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col space-y-2 mb-8"
          >
            <h1 className="font-display text-[15vw] sm:text-[11vw] lg:text-[8rem] xl:text-[9.5rem] leading-[0.85] tracking-tight uppercase text-textured text-left">
              Websites
              <br />
              That Make
              <br />
              <span className="text-hollow -ml-1">
                You Money.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pl-4 border-l-2 border-brand-orange/50 py-2 mb-12"
          >
            <p className="font-mono text-sm sm:text-base tracking-widest text-brand-gray uppercase max-w-sm leading-relaxed">
              Stop losing clients to average design. We build high-performing digital systems <span className="text-brand-white font-bold">engineered to dominate your market and scale your revenue.</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary px-8 py-4 cursor-pointer">
              Book A Strategy Call
            </button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary px-8 py-4 cursor-pointer">
              View Our Work
            </button>
          </motion.div>
        </div>

        {/* Right Column: Clear Visual Funnel */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative h-[600px] hidden lg:flex flex-col items-center justify-center w-full"
        >
          <div className="w-full max-w-lg relative z-10 flex flex-col gap-6">
            
            {/* Connecting Line Behind */}
            <div className="absolute left-[51px] top-10 bottom-10 w-[2px] bg-brand-line/50 -z-10">
               {/* Animated glowing progress dot */}
               <motion.div 
                 className="absolute -left-[2px] w-[6px] h-[6px] rounded-full bg-brand-orange shadow-[0_0_10px_#FF4D00]"
                 animate={{ top: ["0%", "100%", "0%"] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               />
            </div>

            {/* Step 1: Attract */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, ease: "easeOut" }}
              className="bg-brand-bg/90 backdrop-blur-md border border-brand-line p-6 flex gap-6 items-center group hover:border-brand-orange/50 transition-all rounded-sm shadow-xl"
            >
              <div className="w-14 h-14 shrink-0 bg-brand-black border border-brand-line flex items-center justify-center rounded-sm group-hover:border-brand-orange group-hover:text-brand-orange text-brand-gray transition-colors">
                <Users size={24} />
              </div>
              <div className="flex-1">
                <div className="font-mono text-[10px] text-brand-orange tracking-widest uppercase mb-1">Phase 1: Attract</div>
                <h3 className="font-display text-2xl text-brand-white uppercase tracking-tight">Drive Traffic</h3>
                <p className="font-sans text-sm text-brand-gray mt-1">Capture high-intent visitors.</p>
              </div>
            </motion.div>

            {/* Step 2: Convert */}
            <motion.div 
               initial={{ x: 50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 1.0, ease: "easeOut" }}
               className="bg-brand-bg/90 backdrop-blur-md border border-brand-line p-6 flex gap-6 items-center group hover:border-brand-orange/50 transition-all rounded-sm shadow-xl"
            >
              <div className="w-14 h-14 shrink-0 bg-brand-black border border-brand-line flex items-center justify-center rounded-sm group-hover:border-brand-orange group-hover:text-brand-orange text-brand-gray transition-colors">
                <CalendarCheck size={24} />
              </div>
              <div className="flex-1">
                <div className="font-mono text-[10px] text-brand-orange tracking-widest uppercase mb-1">Phase 2: Convert</div>
                <h3 className="font-display text-2xl text-brand-white uppercase tracking-tight">Book Appointments</h3>
                <p className="font-sans text-sm text-brand-gray mt-1">Turn clicks into conversations.</p>
              </div>
            </motion.div>

            {/* Step 3: Scale */}
            <motion.div 
               initial={{ x: 50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 1.2, ease: "easeOut" }}
               className="bg-[#0B0B0B] border border-brand-orange/50 p-6 flex gap-6 items-center shadow-[0_0_30px_rgba(255,77,0,0.1)] rounded-sm"
            >
              <div className="w-14 h-14 shrink-0 bg-brand-orange flex items-center justify-center rounded-sm text-brand-black shadow-[0_0_15px_rgba(255,77,0,0.4)]">
                <TrendingUp size={24} />
              </div>
              <div className="flex-1">
                <div className="font-mono text-[10px] text-brand-orange tracking-widest uppercase mb-1">Phase 3: Scale</div>
                <h3 className="font-display text-3xl text-brand-white uppercase tracking-tight shadow-black drop-shadow-md pb-1">Scale Revenue</h3>
                <p className="font-sans text-sm text-brand-gray/80">Predictable, automated growth.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
