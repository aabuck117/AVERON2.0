import { motion } from "motion/react";
import React from "react";
import { Crosshair, AlertTriangle, MonitorX, TrendingDown, EyeOff } from "lucide-react";

export function Problem() {
  const problems = [
    { icon: <MonitorX size={20} />, text: "Outdated Design" },
    { icon: <Crosshair size={20} />, text: "No Strategy" },
    { icon: <TrendingDown size={20} />, text: "No Conversion" },
    { icon: <EyeOff size={20} />, text: "No Identity" }
  ];

  return (
    <section id="problem" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
        
        {/* Left: Typography */}
        <div className="relative">
          {/* Tactical Background Element */}
          <div className="absolute -left-10 -top-10 text-[20rem] font-display text-brand-white/5 select-none pointer-events-none leading-none">
            03
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-brand-orange" size={24} />
              <span className="font-mono tracking-[0.2em] uppercase text-xs text-brand-orange">System Warning</span>
            </div>
            
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.85] uppercase tracking-tight text-brand-white mb-8">
              Your Website
              <br />
              Is Bleeding<br />
              <span className="text-brand-orange">Revenue.</span>
            </h2>

            <p className="font-body text-xl text-brand-gray font-light max-w-md">
              Every second your site looks average, you're handing clients to your competitors. <strong className="text-brand-white font-medium">Design is trust. Trust is money.</strong>
            </p>
          </motion.div>
        </div>

        {/* Right: Tactical List */}
        <div>
          <div className="space-y-0 border-t border-brand-line">
            {problems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex items-center gap-8 py-8 border-b border-brand-line hover:bg-brand-orange/5 transition-colors duration-300 px-4 -mx-4 cursor-crosshair"
              >
                {/* Number */}
                <div className="font-mono text-xs text-brand-gray/50 tracking-widest">
                  0{i + 1}
                </div>
                
                {/* Icon */}
                <div className="text-brand-orange opacity-50 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300">
                  {item.icon}
                </div>

                {/* Text */}
                <div className="font-display text-3xl sm:text-4xl tracking-wide uppercase text-brand-gray group-hover:text-brand-white transition-colors duration-300">
                  {item.text}
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-[1px] bg-brand-orange w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
