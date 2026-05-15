import { motion } from "motion/react";
import React from "react";
import { Server, CalendarCheck, Zap } from "lucide-react";

export function Systems() {
  const tiers = [
    {
      name: "The Foundation",
      level: "System_01",
      icon: <Server size={24} />,
      description: "Establish digital authority with a high-converting web presence.",
      features: [
        "Custom High-Performance Website",
        "Automated Lead Ingestion Engine",
        "Market Authority Positioning",
        "Conversion-Optimized Architecture"
      ],
      highlight: false
    },
    {
      name: "The Acquisition",
      level: "System_02",
      icon: <CalendarCheck size={24} />,
      description: "Turn your foundation into an automated booking machine.",
      features: [
        "Everything In Foundation",
        "Automated Appointment Setting",
        "Frictionless Booking Flow",
        "Calendar Integration Protocol"
      ],
      highlight: true
    },
    {
      name: "The Dominance",
      level: "System_03",
      icon: <Zap size={24} />,
      description: "Flood your automated system with high-intent traffic.",
      features: [
        "Everything In Acquisition",
        "Targeted Paid Advertising",
        "High-Velocity Lead Influx",
        "End-to-End Revenue Scaling"
      ],
      highlight: false
    }
  ];

  return (
    <section className="relative py-32 bg-brand-black overflow-hidden border-y border-brand-line/50">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-orange/5 via-brand-bg to-brand-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 bg-brand-orange" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-brand-orange">Architecture</span>
            <div className="h-[1px] w-8 bg-brand-orange" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl uppercase tracking-tight text-brand-white"
          >
            Growth <span className="text-hollow">Systems</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative p-8 md:p-10 border bg-brand-bg/80 backdrop-blur-sm group overflow-hidden ${
                tier.highlight ? 'border-brand-orange shadow-[0_0_30px_rgba(255,77,0,0.15)] transform lg:-translate-y-4' : 'border-brand-line hover:border-brand-orange/50 transition-colors'
              }`}
            >
              {/* Tactical Corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-orange/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-orange/50" />
              
              <div className="flex justify-between items-start mb-8">
                <div className={`p-3 border ${tier.highlight ? 'border-brand-orange/50 bg-brand-orange/10 text-brand-orange' : 'border-brand-line bg-brand-black text-brand-gray group-hover:text-brand-orange transition-colors'}`}>
                  {tier.icon}
                </div>
                <div className="font-mono text-[10px] text-brand-gray tracking-widest uppercase">
                  {tier.level}
                </div>
              </div>
              
              <h3 className="font-display text-3xl uppercase tracking-wide text-brand-white mb-4">
                {tier.name}
              </h3>
              
              <p className="font-body text-sm text-brand-gray/80 leading-relaxed mb-8 h-10">
                {tier.description}
              </p>
              
              <div className="space-y-4 border-t border-brand-line/50 pt-8">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-orange mt-1.5 shrink-0" />
                    <span className="font-mono text-xs uppercase tracking-wider text-brand-gray group-hover:text-brand-white transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-4 font-mono text-xs tracking-widest uppercase font-bold transition-all ${
                    tier.highlight 
                      ? 'bg-brand-orange text-black hover:brightness-110 shadow-[0_0_15px_rgba(255,77,0,0.3)]' 
                      : 'border border-brand-line text-brand-white hover:border-brand-orange hover:bg-brand-orange/5'
                  }`}
                >
                  Deploy System
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
