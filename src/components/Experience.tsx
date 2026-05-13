import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { profile } from '../data/profile';

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 tracking-tight">Experience & Volunteering</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {profile.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row gap-6 md:gap-12 group"
            >
              <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
                <div className="p-4 bg-primary rounded-[1.25rem] text-primary-foreground shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="hidden md:block w-px h-full bg-primary/10 mx-auto mt-4" />
                <div className="md:hidden flex-1 h-px bg-primary/10" />
              </div>
              <div className="flex-1 p-8 md:p-12 bg-background border rounded-[2rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border-transparent hover:border-primary/5">
                <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.3em] bg-primary/5 px-4 py-1.5 rounded-full inline-block mb-6">
                  {exp.period}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                  {exp.role}
                </h3>
                <p className="text-lg md:text-xl font-bold text-muted-foreground mb-6">
                  {exp.organization}
                </p>
                {exp.description && (
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary/10 pl-6 py-1">
                    {exp.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
