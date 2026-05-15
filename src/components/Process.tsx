import { motion } from "motion/react";
import React from "react";

export function Process() {
  const steps = [
    { num: "01", title: "Audit", label: "Identify Leaks & Gaps" },
    { num: "02", title: "Architect", label: "Design The Funnel" },
    { num: "03", title: "Deploy", label: "Launch System" },
    { num: "04", title: "Dominate", label: "Scale The Revenue" }
  ];

  return (
    <section className="relative py-32 border-t border-brand-line/50 overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="mb-24 text-center sm:text-left"
        >
          <h2 className="font-display text-5xl sm:text-7xl uppercase tracking-tight text-brand-white">
            Stop Guessing.
            <br />
            <span className="text-hollow">Start Growing.</span>
          </h2>
        </motion.div>

        {/* Horizontal Timeline Layout */}
        <div className="relative">
          {/* Main Track Line */}
          <div className="hidden md:block absolute top-[40px] left-0 right-0 h-[1px] bg-brand-line z-0" />
          
          <div className="grid md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative group"
              >
                {/* Visual Node */}
                <div className="h-[80px] w-[80px] rounded-full border border-brand-line bg-brand-bg flex items-center justify-center mx-auto md:mx-0 mb-6 group-hover:border-brand-orange group-hover:box-glow transition-all duration-500 relative">
                  {/* Inner animated dot */}
                  <div className="w-2 h-2 rounded-full bg-brand-gray group-hover:bg-brand-orange transition-colors duration-300" />
                  
                  {/* Rotating orbital ring on hover */}
                  <div className="absolute inset-[-10px] rounded-full border border-dashed border-brand-orange/0 group-hover:border-brand-orange/50 animate-[spin_10s_linear_infinite]" />
                </div>

                <div className="text-center md:text-left">
                  <div className="font-mono text-xl text-brand-gray/50 mb-2">{step.num}</div>
                  <h3 className="font-display text-3xl uppercase tracking-wide text-brand-white mb-2 group-hover:text-brand-orange transition-colors duration-300">
                    {step.title}
                  </h3>
                  <div className="font-mono text-xs text-brand-gray uppercase tracking-widest">
                    {step.label}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
