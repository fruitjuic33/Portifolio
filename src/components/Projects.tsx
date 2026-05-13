import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';
import { GithubIcon } from './Icons';

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 tracking-tight">Featured Projects</h2>
        <p className="text-base md:text-xl text-muted-foreground text-center mb-20 max-w-2xl mx-auto leading-relaxed">
          A selection of projects I've worked on, ranging from web applications to system tools.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {profile.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-muted/40 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-transparent hover:border-primary/5 hover:bg-muted/60 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-primary transition-colors duration-300 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-10 min-h-[80px] leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2.5 mb-12">
                  {project.tech.map((t) => (
                    <span key={t} className="px-4 py-1.5 bg-background text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-xl border border-primary/5">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-xs md:text-sm font-bold text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    <GithubIcon className="w-5 h-5 mr-3" /> Code
                  </a>
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs md:text-sm font-bold text-muted-foreground hover:text-primary transition-colors py-2"
                    >
                      <ExternalLink className="w-5 h-5 mr-3" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
