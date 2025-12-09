import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { TRANSLATIONS } from '../constants';

const teamPhoto = new URL('../assets/team.JPG', import.meta.url).href;

const ProjectNote: React.FC = () => {
  const { language } = useLanguage();
  const t = (TRANSLATIONS[language] as any).projectNote;
  const paragraphs = (t.desc as string).split(/\n\s*\n/);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 grid gap-12 items-center md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wide uppercase">
            {t.badge}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
            {t.title}
          </h3>
          <div className="space-y-4">
            {paragraphs.map((para, idx) => (
              <p key={idx} className="text-lg text-textSecondary leading-relaxed">
                {para.trim()}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-accent/20 via-primary/10 to-transparent blur-2xl" />
            <img
              src={teamPhoto}
              alt={t.imageAlt}
              className="relative rounded-[2rem] shadow-xl border border-secondary/20 object-cover w-full max-h-[480px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectNote;
