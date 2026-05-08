"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ShieldCheck, Zap, Activity, Microscope } from 'lucide-react';

const treatments = [
  {
    id: "root-canal",
    title: "Structural Endodontics",
    short: "Advanced Root Canal Therapy",
    icon: <Microscope className="w-6 h-6" />,
    details: "Using high-frequency micro-scanning and ultrasonic instrumentation to preserve the natural structural integrity of the tooth root. Our precision protocols ensure a 98.7% success rate in primary endodontic procedures.",
    stats: [
        { label: "Precision", value: "0.1mm" },
        { label: "Recovery", value: "24hrs" }
    ]
  },
  {
    id: "aligners",
    title: "Force-Field Aligners",
    short: "Clear Orthodontic Solutions",
    icon: <Activity className="w-6 h-6" />,
    details: "Algorithmic tooth movement planning using digital twin technology. Our clear aligners apply constant, low-force pressure to optimize biological response and accelerate bone remodeling cycles.",
    stats: [
        { label: "Duration", value: "-40%" },
        { label: "Comfort", value: "High" }
    ]
  },
  {
    id: "implants",
    title: "Titanium Osseointegration",
    short: "Surgical Dental Implants",
    icon: <ShieldCheck className="w-6 h-6" />,
    details: "Biological structural replacement using medical-grade titanium alloys. We focus on soft tissue harmony and immediate load protocols for results that are indistinguishable from natural dentition.",
    stats: [
        { label: "Durability", value: "Lifetime" },
        { label: "Strength", value: "1200N" }
    ]
  },
  {
    id: "whitening",
    title: "Photon Bio-Whitening",
    short: "Enamel Safe Brightening",
    icon: <Zap className="w-6 h-6" />,
    details: "Light-accelerated oxidation targeting deep structural staining without compromising enamel density. Our pH-balanced system prevents post-procedural sensitivity while achieving 8-12 shade improvements.",
    stats: [
        { label: "Sensitivity", value: "0%" },
        { label: "Duration", value: "45min" }
    ]
  }
];

export default function Treatments() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedTreatment = treatments.find(t => t.id === selectedId);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Clinical Catalog</span>
          <h2 className="font-serif text-5xl md:text-7xl text-primary leading-tight max-w-3xl">
            Precision <span className="italic text-secondary">Protocols</span> for Complex Challenges
          </h2>
        </div>

        {/* Treatment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment) => (
            <motion.div
              layoutId={treatment.id}
              key={treatment.id}
              onClick={() => setSelectedId(treatment.id)}
              className="group cursor-pointer bg-neutral/5 p-8 rounded-sm border border-neutral/10 hover:border-accent transition-colors relative h-[400px] flex flex-col justify-between"
            >
              <div>
                <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-500">
                    {treatment.icon}
                </div>
                <h3 className="font-serif text-2xl text-primary mb-4">{treatment.title}</h3>
                <p className="font-sans text-secondary text-sm leading-relaxed">{treatment.short}</p>
              </div>
              
              <div className="flex items-center gap-2 text-accent font-bold tracking-widest text-[10px] uppercase">
                Initialize <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Modal */}
        <AnimatePresence>
          {selectedId && selectedTreatment && (
            <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-12">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-primary/95 backdrop-blur-xl"
              />

              {/* Expanded Card */}
              <motion.div
                layoutId={selectedId}
                className="relative w-full max-w-5xl bg-white rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl z-10"
              >
                <div className="w-full md:w-1/2 bg-neutral/10 p-12 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -top-20 -left-20 text-[20vw] font-serif font-black text-primary/5 select-none uppercase">
                        {selectedTreatment.id.split('-')[0]}
                    </div>
                    
                    <div className="relative z-10">
                        <div className="text-accent mb-8 scale-[2] origin-left">
                            {selectedTreatment.icon}
                        </div>
                        <h2 className="font-serif text-5xl text-primary leading-tight mb-4">
                            {selectedTreatment.title}
                        </h2>
                        <div className="w-12 h-1 bg-accent mb-8" />
                    </div>

                    <div className="grid grid-cols-2 gap-8 relative z-10">
                        {selectedTreatment.stats.map((stat, i) => (
                            <div key={i}>
                                <div className="text-primary text-4xl font-serif">{stat.value}</div>
                                <div className="text-secondary text-[10px] tracking-widest uppercase font-bold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-12 flex flex-col justify-between items-start">
                    <div className="space-y-8">
                        <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">Technical Overview</span>
                        <p className="font-sans text-xl text-secondary leading-relaxed">
                            {selectedTreatment.details}
                        </p>
                        
                        <div className="space-y-4 pt-8">
                            <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-primary">
                                <div className="w-2 h-2 bg-accent rounded-full" />
                                Computed Tomography Analysis
                            </div>
                            <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-primary">
                                <div className="w-2 h-2 bg-accent rounded-full" />
                                Material Biocompatibility Audit
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full justify-between items-center mt-12">
                        <button
                          onClick={() => setSelectedId(null)}
                          className="text-primary font-bold tracking-widest uppercase text-xs flex items-center gap-2 hover:text-accent transition-colors"
                        >
                            <X className="w-4 h-4" /> Close Protocol
                        </button>
                        
                        <button className="bg-primary text-white px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-xs hover:bg-secondary transition-all">
                            Initialize Program
                        </button>
                    </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
