"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Phone, Mail, Clock } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      onClose();
      setIsSuccess(false);
      setFormData({ name: '', email: '', phone: '', date: '', time: '' });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-sm shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-8 flex justify-between items-center border-b border-white/10">
              <div>
                <h2 className="text-white font-serif text-3xl">Secure Consultation</h2>
                <p className="text-neutral/60 text-xs tracking-widest uppercase font-bold mt-1">Industrial Precision Scheduling</p>
              </div>
              <button 
                onClick={onClose}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <div className="p-8">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral" />
                        <input 
                          required
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-neutral/5 border border-neutral/20 px-10 py-3 rounded-sm focus:outline-none focus:border-accent transition-colors font-sans"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral" />
                        <input 
                          required
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-neutral/5 border border-neutral/20 px-10 py-3 rounded-sm focus:outline-none focus:border-accent transition-colors font-sans"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral" />
                      <input 
                        required
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-neutral/5 border border-neutral/20 px-10 py-3 rounded-sm focus:outline-none focus:border-accent transition-colors font-sans"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral" />
                        <input 
                          required
                          type="date"
                          className="w-full bg-neutral/5 border border-neutral/20 px-10 py-3 rounded-sm focus:outline-none focus:border-accent transition-colors font-sans"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary">Preferred Time</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral" />
                        <select 
                          required
                          className="w-full bg-neutral/5 border border-neutral/20 px-10 py-3 rounded-sm focus:outline-none focus:border-accent transition-colors font-sans appearance-none"
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                        >
                          <option value="">Select Time</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="16:00">04:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full bg-accent text-white py-5 rounded-sm font-bold tracking-widest uppercase hover:bg-accent/90 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : 'Initialize Consultation'}
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-primary">Consultation Scheduled</h3>
                  <p className="text-secondary max-w-sm mx-auto font-sans">
                    Your request has been logged. A clinical coordinator will contact you shortly to confirm your structural assessment.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;
