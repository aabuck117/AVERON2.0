import { motion } from "motion/react";
import React from "react";
import { Activity, Target, Zap } from "lucide-react";

export function AttractConvertScale() {
  const cards = [
    { icon: <Eye size={24} />, title: "Premium Design", desc: "Command authority instantly. Make competitors look obsolete before the first click." },
    { icon: <Target size={24} />, title: "Conversion Funnels", desc: "Engineered user journeys that turn casual traffic into booked sales calls on autonomy." },
    { icon: <Activity size={24} />, title: "Revenue Scaling", desc: "Continuous optimization protocols that amplify your close rate and customer LTV." }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-24">
          {/* Typography */}
          <div className="flex flex-col gap-0 pb-12">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
               viewport={{ once: true, margin: "-100px" }}
               className="font-display text-[12vw] lg:text-[8rem] leading-[1] tracking-tight uppercase text-brand-white/30 hover:text-brand-white transition-colors duration-500 cursor-default"
            >
              Attract.
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
               viewport={{ once: true, margin: "-100px" }}
               className="font-display text-[12vw] lg:text-[8rem] leading-[1] tracking-tight uppercase text-brand-orange drop-shadow-[0_0_15px_rgba(255,77,0,0.4)] cursor-default"
            >
              Convert.
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
               viewport={{ once: true, margin: "-100px" }}
               className="font-display text-[12vw] lg:text-[8rem] leading-[1] tracking-tight uppercase text-brand-white/30 hover:text-brand-white transition-colors duration-500 cursor-default"
            >
              Scale.
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="h-[1px] w-12 bg-brand-orange" />
              <p className="font-mono text-sm tracking-[0.2em] uppercase text-brand-white">Growth isn't luck. It's a system.</p>
            </motion.div>
          </div>

          {/* Right side graph graphic */}
          <div className="relative h-[300px] border-l border-b border-brand-line/50 p-6 hidden md:block">
            <svg viewBox="0 0 500 250" className="w-full h-full overflow-visible">
               <defs>
                <linearGradient id="glowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255, 77, 0, 0.4)" />
                  <stop offset="100%" stopColor="rgba(255, 77, 0, 0)" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 0 250 L 0 200 L 100 180 L 150 210 L 250 140 L 300 160 L 400 80 L 450 100 L 500 0 L 500 250 Z"
                fill="url(#glowGrad)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.path 
                d="M 0 200 L 100 180 L 150 210 L 250 140 L 300 160 L 400 80 L 450 100 L 500 0"
                fill="none"
                stroke="#FF4D00"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{ filter: "drop-shadow(0 0 10px rgba(255,77,0,0.8))" }}
              />
            </svg>
            <div className="absolute top-0 right-0 w-2 h-2 bg-brand-orange animate-pulse" />
          </div>
        </div>

        {/* 3 Premium Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-[#080808] border border-brand-line p-8 hover:border-brand-orange/50 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Tactical Corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-orange/0 group-hover:border-brand-orange/100 transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-orange/0 group-hover:border-brand-orange/100 transition-colors" />
              
              <div className="text-brand-gray group-hover:text-brand-orange transition-colors duration-300 mb-6">
                {card.icon}
              </div>
              <h3 className="font-display text-2xl tracking-wide uppercase text-brand-white mb-3">
                {card.title}
              </h3>
              <p className="font-body text-sm text-brand-gray leading-relaxed">
                {card.desc}
              </p>
              
              {/* Animated bottom line */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-brand-orange w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Temporary internal Eye icon to avoid import issues if I missed it
function Eye({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
