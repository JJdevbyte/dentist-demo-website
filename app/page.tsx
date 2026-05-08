"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ZoomTransition from "@/components/ZoomTransition";
import AppointmentModal from "@/components/AppointmentModal";
import Treatments from "@/components/Treatments";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Hero onBookClick={() => setIsModalOpen(true)} />
      <ZoomTransition />
      
      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      {/* Revealed Section: Specialties */}
      <section className="min-h-screen flex items-center justify-center bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
            <div className="max-w-4xl">
              <span className="text-accent font-black tracking-[0.3em] uppercase text-sm mb-6 block">Our Expertise</span>
              <h2 className="font-serif text-5xl md:text-7xl text-primary leading-[1.1] font-bold max-w-2xl">
                Architecting the <span className="italic text-secondary font-black">Perfect Smile</span>
              </h2>
            </div>
            <p className="font-sans text-secondary text-xl max-w-sm mb-4 leading-relaxed font-medium">
              Combining mechanical precision with biological harmony to deliver results that are as durable as they are beautiful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Diagnostic Imaging", 
                desc: "High-frequency 3D scanning for absolute structural clarity.",
                tag: "Digital",
                img: "/diagnostic_imaging.png"
              },
              { 
                title: "Restorative Art", 
                desc: "Hand-finished porcelain work that mimics natural light diffusion.",
                tag: "Aesthetic",
                img: "/restorative_art.png"
              },
              { 
                title: "Neural Comfort", 
                desc: "Proprioceptive-aware techniques for pain-free surgical precision.",
                tag: "Surgical",
                img: "/neural_comfort.png"
              }
            ].map((item, i) => (
              <div key={i} className="group flex flex-col items-start bg-neutral/5 rounded-sm overflow-hidden hover:bg-white transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-transparent hover:border-neutral/20">
                <div className="relative w-full h-80 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute top-0 right-0 p-8">
                    <span className="text-9xl font-serif font-black text-white/20 group-hover:text-primary/10 transition-colors">0{i+1}</span>
                  </div>
                </div>
                <div className="p-10 relative z-10 w-full">
                  <span className="text-[12px] font-black tracking-[0.3em] uppercase text-accent mb-6 block">{item.tag}</span>
                  <h3 className="font-serif text-3xl font-bold mb-6 text-primary">{item.title}</h3>
                  <p className="font-sans text-secondary text-lg leading-relaxed font-medium">
                    {item.desc}
                  </p>
                  <div className="mt-10 w-12 h-1 bg-accent group-hover:w-full transition-all duration-1000" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Treatments />

      {/* Testimonials Section: The Industrial Voice */}
      <section className="bg-primary py-24 border-y border-white/5 relative overflow-hidden">
        {/* Background Accent Lines */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-px h-full bg-white" />
          <div className="absolute top-0 right-2/3 w-px h-full bg-white" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Proven Outcomes</span>
            <h2 className="font-serif text-5xl md:text-6xl text-white">Clinical Testimonials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                quote: "The precision and attention to structural detail is unlike any clinical experience I've had. Truly world-class.",
                author: "James Sterling",
                role: "Director, Sterling Arch"
              },
              {
                quote: "A perfect balance of industrial efficiency and high-end comfort. My treatment was painless and perfectly executed.",
                author: "Elena Rossi",
                role: "Lead Designer, Vora"
              }
            ].map((t, i) => (
              <div key={i} className="flex flex-col items-start gap-8 bg-white/5 p-12 border border-white/10 rounded-sm">
                <div className="w-12 h-[2px] bg-accent" />
                <p className="font-sans text-xl md:text-2xl text-neutral italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div>
                  <div className="text-white font-serif text-lg">{t.author}</div>
                  <div className="text-accent text-xs tracking-widest uppercase font-bold mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-primary pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2">
            <h3 className="font-serif text-3xl text-white mb-6">Advanced Dental</h3>
            <p className="font-sans text-neutral/60 max-w-sm leading-relaxed">
              Redefining oral healthcare through industrial precision and luxury aesthetic standards.
            </p>
          </div>
          <div>
            <h4 className="text-accent font-bold tracking-[0.2em] uppercase text-[10px] mb-6">Contact</h4>
            <div className="space-y-4 font-sans text-neutral/80">
              <p>+1 (555) 000-8888</p>
              <p>care@advanceddental.com</p>
              <p>102nd Floor, Grand Central <br /> New York, NY</p>
            </div>
          </div>
          <div>
            <h4 className="text-accent font-bold tracking-[0.2em] uppercase text-[10px] mb-6">Hours</h4>
            <div className="space-y-4 font-sans text-neutral/80">
              <p>Mon - Fri: 08:00 - 20:00</p>
              <p>Sat: 10:00 - 16:00</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral/40 text-[10px] tracking-[0.2em] uppercase font-bold">
            © 2024 Advanced Dental Clinic. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-neutral/40 text-[10px] tracking-[0.2em] uppercase font-bold">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
