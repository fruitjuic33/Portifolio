import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './Icons';

const Hero = () => {
  return (
    <section className="relative h-svh flex items-center justify-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700"
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[10px] md:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Welcome to my world</h2>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-[1.05]">
            Hi, I'm <span className="text-primary block sm:inline">{profile.name}</span>
          </h1>
          <p className="text-base md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 px-4 leading-relaxed">
            {profile.title}
          </p>
          <div className="flex justify-center space-x-6 md:space-x-8 mb-12">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-2" aria-label="GitHub">
              <GithubIcon className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-2" aria-label="LinkedIn">
              <LinkedinIcon className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors p-2" aria-label="Email">
              <Mail className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors p-2" aria-label="Scroll down">
              <ArrowDown className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
