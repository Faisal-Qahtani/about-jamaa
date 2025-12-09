import React from 'react';
import { motion } from 'framer-motion';
import { Award, ListTodo, Palette, PenTool, SearchCode } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { TRANSLATIONS } from '../constants';

const Team: React.FC = () => {
  const { language } = useLanguage();
  const t = (TRANSLATIONS[language] as any).team;

  const memberIcons = [
    Award,       // Faisal: Product Owner (Leadership/Recognition)
    ListTodo,    // Turki: Scrum Master (Task Management)
    Palette,     // Haithem: UI/UX (Visual Design)
    PenTool,     // Mohammed: UI/UX (Vector/Detail Design)
    SearchCode   // Khalid: Tester (Code Inspection)
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="team" className="py-24 bg-secondary/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-semibold tracking-wider uppercase text-sm mb-3 block"
            >
              {t.subtitle}
            </motion.span>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold text-primary mb-6"
            >
                {t.title}
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-textSecondary text-lg"
            >
                {t.desc}
            </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-8"
        >
           {t.members.map((member: any, index: number) => {
             // Alternate between primary and accent colors
             const isPrimary = index % 2 === 0;
             const bgClass = isPrimary ? "bg-primary" : "bg-accent";
             const Icon = memberIcons[index % memberIcons.length];
             const hasLink = Boolean(member.linkedin);
             
             return (
              <motion.a 
                key={index}
                variants={itemVariants}
                whileHover={{ y: hasLink ? -8 : 0 }}
                href={member.linkedin || undefined}
                target={hasLink ? "_blank" : undefined}
                rel={hasLink ? "noreferrer" : undefined}
                className={`bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-secondary/10 flex flex-col items-center text-center group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] max-w-sm ${hasLink ? "cursor-pointer" : "cursor-default"}`}
              >
                <div className="relative mb-6">
                  <div className={`absolute inset-0 rounded-full ${bgClass} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg ring-4 ring-primary/10">
                    {member.photo && (
                      <img
                        src={member.photo}
                        alt={`${member.name} photo`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full ${bgClass} flex items-center justify-center text-white shadow-lg`}>
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </h3>
                
                <div className="h-1 w-12 bg-secondary/20 rounded-full mb-4 group-hover:w-20 group-hover:bg-accent/30 transition-[width,background-color] duration-300"></div>
                
                <p className="text-textSecondary font-medium">
                  {member.role}
                </p>
              </motion.a>
             );
           })}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
