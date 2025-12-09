import React from 'react';
import { motion } from 'framer-motion';
import PhoneMockup from './ui/PhoneMockup';
import { Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { TRANSLATIONS } from '../constants';

const FeatureSection = ({ 
    id,
    title, 
    description, 
    bullets, 
    variant, 
    reversed = false,
    className = ""
}: { 
    id: string;
    title: string; 
    description: string; 
    bullets: string[]; 
    variant: 'plan' | 'chat' | 'places'; 
    reversed?: boolean;
    className?: string;
}) => {
    return (
        <section id={id} className={`py-24 overflow-hidden ${className}`}>
            <div className="container mx-auto px-6">
                <div className={`flex flex-col lg:flex-row items-center gap-16 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: reversed ? 50 : -50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-textSecondary mb-8 leading-relaxed">
                            {description}
                        </p>
                        <ul className="space-y-4 mb-8">
                            {bullets.map((bullet, i) => (
                                <motion.li 
                                    key={i} 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                                    className="flex items-center gap-3 text-textPrimary font-medium"
                                >
                                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    {bullet}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Mockup */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex-1 w-full flex justify-center"
                    >
                        {/* Wrapper for rotation/tilt that doesn't interfere with PhoneMockup's entrance animation */}
                        <div className={`transition-transform duration-700 ${reversed ? 'lg:rotate-2 hover:lg:rotate-0' : 'lg:-rotate-2 hover:lg:rotate-0'}`}>
                            <PhoneMockup variant={variant} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const DetailedFeatures: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].detailed;

  return (
    <>
        <FeatureSection 
            id="plan"
            title={t.plan.title}
            description={t.plan.desc}
            bullets={t.plan.bullets}
            variant="plan"
            reversed={true}
            className="bg-white"
        />
        
        <FeatureSection 
            id="chat"
            title={t.chat.title}
            description={t.chat.desc}
            bullets={t.chat.bullets}
            variant="chat"
            reversed={false}
            className="bg-background"
        />

        <FeatureSection 
            id="places"
            title={t.places.title}
            description={t.places.desc}
            bullets={t.places.bullets}
            variant="places"
            reversed={true}
            className="bg-white"
        />
    </>
  );
};

export default DetailedFeatures;