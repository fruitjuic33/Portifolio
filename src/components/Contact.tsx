import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { profile } from '../data/profile';
import { LinkedinIcon } from './Icons';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Get In Touch</h2>
        <p className="text-base md:text-xl text-muted-foreground mb-20 max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 md:space-y-14 text-left"
          >
            <div className="flex items-start space-x-6">
              <div className="p-5 bg-primary/5 rounded-2xl text-primary ring-1 ring-primary/10 group hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2">Email</h4>
                <a href={`mailto:${profile.email}`} className="text-lg md:text-xl font-bold hover:text-primary transition-colors tracking-tight">
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="p-5 bg-primary/5 rounded-2xl text-primary ring-1 ring-primary/10 group hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2">Phone</h4>
                <p className="text-lg md:text-xl font-bold tracking-tight">{profile.phone}</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="p-5 bg-primary/5 rounded-2xl text-primary ring-1 ring-primary/10 group hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2">LinkedIn</h4>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-bold hover:text-primary transition-colors tracking-tight">
                  {profile.name}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-background p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border shadow-2xl shadow-primary/5 min-h-[500px] flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3 text-left">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-2">Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-6 py-4 bg-muted/30 border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-base md:text-lg"
                      />
                    </div>
                    <div className="space-y-3 text-left">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-2">Email</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 bg-muted/30 border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-base md:text-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-3 text-left">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-2">Subject</label>
                    <input
                      required
                      type="text"
                      placeholder="Project Inquiry"
                      className="w-full px-6 py-4 bg-muted/30 border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-base md:text-lg"
                    />
                  </div>
                  <div className="space-y-3 text-left">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-2">Message</label>
                    <textarea
                      required
                      placeholder="How can I help you?"
                      rows={4}
                      className="w-full px-6 py-4 bg-muted/30 border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-base md:text-lg resize-none"
                    ></textarea>
                  </div>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-5 bg-primary text-primary-foreground font-bold rounded-2xl hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center space-x-4 shadow-xl shadow-primary/20 disabled:opacity-70 group"
                  >
                    <span className="text-sm md:text-base uppercase tracking-widest font-black">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                    {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center p-6 bg-primary/10 text-primary rounded-full mb-8">
                    <CheckCircle2 className="w-16 h-16" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Message Sent!</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
