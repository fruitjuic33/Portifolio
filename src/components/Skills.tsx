import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const Skills = () => {
  const skillCategories = [
    { name: 'Languages', items: profile.skills.languages },
    { name: 'Web Development', items: profile.skills.web },
    { name: 'Tools & Platforms', items: profile.skills.tools },
    { name: 'Design', items: profile.skills.design },
    { name: 'Competitive Programming', items: profile.competitiveProgramming },
    { name: 'Spoken Languages', items: profile.skills.spokenLanguages },
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 tracking-tight">Skills & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-10 bg-muted/40 rounded-[2.5rem] border border-transparent hover:border-primary/10 hover:bg-muted/60 transition-all duration-500 group shadow-sm hover:shadow-xl hover:shadow-primary/5"
            >
              <h3 className="text-sm font-bold mb-8 text-primary uppercase tracking-[0.2em]">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2 bg-background border rounded-2xl text-xs md:text-sm font-bold shadow-sm group-hover:border-primary/30 transition-all cursor-default hover:scale-110 active:scale-95"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
