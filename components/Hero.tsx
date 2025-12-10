import React from 'react';
import { motion, Variants } from 'framer-motion';
import Button from './ui/Button';
import PhoneMockup from './ui/PhoneMockup';
import { ArrowRight, ArrowLeft, Star, MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { TRANSLATIONS, APK_URL } from '../constants';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;
  
  const sentence = t.sentence;
  const openApk = () => window.open(APK_URL, "_blank", "noopener");

  // Split by word for both languages to avoid breaking individual letters across lines.
  const isArabic = language === 'ar';
  const splitContent = sentence.split(" ");

  const sentenceVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
  };

  const fadeInUpVariants: Variants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 end-0 -z-10 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-x-1/3 ltr:translate-x-1/3 rtl:-translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 start-0 -z-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl ltr:-translate-x-1/3 rtl:translate-x-1/3 translate-y-1/4"></div>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-xl">
                {/* Badge Removed */}
                
                {/* Staggered Heading */}
                <motion.h1 
                    className="text-4xl md:text-6xl font-extrabold text-primary leading-tight mb-6"
                    variants={sentenceVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {splitContent.map((word, index) => (
                      <motion.span key={index} variants={letterVariants} className="inline-block">
                        {word}
                        {index !== splitContent.length - 1 ? "\u00A0" : ""}
                      </motion.span>
                    ))}
                </motion.h1>
                
                {/* Description */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-lg text-textSecondary mb-8 leading-relaxed"
                >
                    {t.desc}
                </motion.p>
                
                {/* Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button variant="accent" className="group rounded-full" onClick={openApk}>
                        {t.download}
                        <ArrowIcon size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </div>

            {/* Visual */}
            <div className="relative flex justify-center lg:justify-end">
                <PhoneMockup variant="home" />
                
                {/* Floating Elements around phone */}
                <motion.div 
                    initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute top-1/4 -start-8 lg:-start-12 bg-white p-4 rounded-xl shadow-lg flex gap-3 items-center max-w-[240px] z-10"
                >
                    <div className="bg-accent/10 p-2 rounded-full text-accent">
                        <MapPin size={20} fill="currentColor" />
                    </div>
                    <div>
                        <div className="text-xs text-textSecondary">{t.location}</div>
                        <div className="text-sm font-bold text-primary">{t.locationName}</div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
