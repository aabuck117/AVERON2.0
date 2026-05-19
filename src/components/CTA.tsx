import { motion } from "motion/react";
import React, { useState } from "react";
import { Mail, Crosshair, ArrowRight } from "lucide-react";

export function CTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(e.currentTarget);

  await fetch("https://tally.so/r/VLbl6M", {
    method: "POST",
    body: formData,
    mode: "no-cors",
  });

  setIsSubmitting(false);
  setIsSuccess(true);

  setTimeout(() => {
    setIsSuccess(false);
  }, 5000);
};

  return (
    <section id="contact" className="relative py-32 overflow-hidden flex items-center justify-center">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Typography & Info */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-brand-orange" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-brand-orange">Initiate Sequence</span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl leading-[0.9] tracking-tight text-brand-white uppercase mb-6">
            Ready To Stop Guessing<br/>
            And Start <span className="text-hollow">Growing?</span>
          </h2>
          
          <p className="font-body text-xl text-brand-gray font-light max-w-md mb-12">
            Let's turn your business into a system that works 24/7. Request a strategy analysis below.
          </p>

          <div className="space-y-6 font-mono text-sm tracking-widest text-brand-gray uppercase">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-brand-line flex items-center justify-center text-brand-orange">
                <Mail size={16} />
              </div>
              <div>
                <div className="text-[10px] text-brand-gray/50 mb-1">Direct Comms</div>
                <a href="mailto:averon.scaling@gmail.com" className="text-brand-white hover:text-brand-orange transition-colors">
                  averon.scaling@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-brand-line flex items-center justify-center text-brand-orange">
                <Crosshair size={16} />
              </div>
              <div>
                <div className="text-[10px] text-brand-gray/50 mb-1">Status</div>
                <span className="text-brand-white">Accepting New Partners</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Lead Form */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative"
        >
          {/* Form Container */}
          <div className="border border-brand-line/50 p-8 pt-10 sm:p-12 relative bg-brand-bg/80 backdrop-blur-md">
            {/* Tactical Corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-orange" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-orange" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-orange" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-orange" />

            <div className="absolute -top-3 left-8 bg-brand-bg px-2 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-orange">
              Data Entry System // 01
            </div>

            {isSuccess ? (
              <div className="min-h-[300px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full border border-brand-orange flex items-center justify-center text-brand-orange mb-6">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-display text-2xl uppercase mb-2">Transmission Received</h3>
                <p className="font-mono text-xs text-brand-gray tracking-widest uppercase">We will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-brand-gray/80">Full Name</label>
                   <input 
  required 
  name="Full Name"
  type="text" 
                      className="w-full bg-transparent border-b border-brand-line px-0 py-3 text-brand-white focus:outline-none focus:border-brand-orange transition-colors font-body text-sm"
                      placeholder="JOHN DOE"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-brand-gray/80">Company</label>
                    <input 
  required 
  name="Company"
  type="text" 
                      className="w-full bg-transparent border-b border-brand-line px-0 py-3 text-brand-white focus:outline-none focus:border-brand-orange transition-colors font-body text-sm"
                      placeholder="ACME CORP"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-brand-gray/80">Business Email</label>
                <input 
  required 
  name="Business Email"
  type="email" 
                    className="w-full bg-transparent border-b border-brand-line px-0 py-3 text-brand-white focus:outline-none focus:border-brand-orange transition-colors font-body text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-brand-gray/80">Current Objective</label>
                  <select required className="w-full bg-transparent border-b border-brand-line px-0 py-3 text-brand-white focus:outline-none focus:border-brand-orange transition-colors font-body text-sm appearance-none">
                    <option value="" className="bg-brand-black text-brand-gray">Select Objective</option>
                    <option value="website" className="bg-brand-black">Website Overhaul</option>
                    <option value="leads" className="bg-brand-black">Scale Lead Generation</option>
                    <option value="brand" className="bg-brand-black">Dominant Branding</option>
                    <option value="other" className="bg-brand-black">Other</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button 
                    disabled={isSubmitting}
                    className="btn-primary w-full py-5 flex items-center justify-center gap-4 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Processing..."
                    ) : (
                      <>
                        Request Strategy Call
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
