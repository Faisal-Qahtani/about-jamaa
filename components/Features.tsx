
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { getFeatures, TRANSLATIONS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Features: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].features;
  const features = getFeatures(language);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="features" className="py-24 bg-background relative">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-primary mb-4"
                >
                    {t.title} <br/><span className="text-accent">{(t as any).titleHighlight}</span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-textSecondary"
                >
                    {t.desc}
                </motion.p>
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {features.map((feature, index) => (
                    <motion.div 
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                        className="bg-white p-8 rounded-app border border-secondary/20 hover:border-accent/50 transition-colors shadow-sm hover:shadow-xl group"
                    >
                        <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-md">
                            <feature.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                        <p className="text-textSecondary text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  );
};

export default Features;
