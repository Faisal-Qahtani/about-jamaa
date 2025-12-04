import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { useLanguage } from '../LanguageContext';
import { TRANSLATIONS } from '../constants';

const CallToAction: React.FC = () => {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language].cta;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
                >
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 start-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 end-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            {t.title}
                        </h2>
                        <p className="text-secondary text-lg mb-8 opacity-90">
                            {t.desc}
                        </p>
                        <div className="flex justify-center">
                            <Button variant="accent" className="w-full sm:w-auto text-lg py-4 px-8 rounded-full">
                                {t.download}
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;