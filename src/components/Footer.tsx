import { profile } from '../data/profile';

const Footer = () => {
  return (
    <footer className="py-12 border-t bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tighter mb-2">{profile.name}</h2>
            <p className="text-muted-foreground text-sm font-medium">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
              Email
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary/5 text-center">
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.5em] font-bold">
            Built by Munu Pangani (fruitjuic33)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
