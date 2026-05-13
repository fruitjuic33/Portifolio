import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight">About Me</h2>
            <p className="text-base md:text-xl text-muted-foreground mb-12 leading-relaxed">
              {profile.summary}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-background border rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2">Location</h4>
                <p className="text-muted-foreground font-semibold text-sm md:text-base">{profile.location}</p>
              </div>
              <div className="p-6 bg-background border rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2">Hometown</h4>
                <p className="text-muted-foreground font-semibold text-sm md:text-base">{profile.hometown}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <h3 className="text-2xl md:text-4xl font-bold mb-10 tracking-tight">Education</h3>
            <div className="space-y-10">
              {profile.education.map((edu, index) => (
                <div key={index} className="relative pl-10 border-l-2 border-primary/10">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-2 ring-8 ring-background" />
                  <h4 className="text-lg md:text-2xl font-bold tracking-tight">{edu.degree}</h4>
                  <p className="text-primary font-bold text-sm md:text-lg mt-1">{edu.institution}</p>
                  <p className="text-xs md:text-sm font-bold text-muted-foreground mt-2 uppercase tracking-widest">{edu.period}</p>
                  {edu.details && <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">{edu.details}</p>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
