import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { APP_NAME, getNavItems, TRANSLATIONS } from '../constants';
import Button from './ui/Button';
import { useLanguage } from '../LanguageContext';

const LogoSVG = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10H22C26.4183 10 30 13.5817 30 18V30H18C13.5817 30 10 26.4183 10 22V10Z" fill="#1E1E2F"/>
        <path d="M22 18C22 15.7909 23.7909 14 26 14C28.2091 14 30 15.7909 30 18H22Z" fill="#3B82F6"/>
        <circle cx="20" cy="20" r="4" fill="white"/>
    </svg>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const { language, setLanguage } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const t = TRANSLATIONS[language];
  const navItems = getNavItems(language);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <motion.nav
      className={`fixed top-0 start-0 end-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-primary flex items-center gap-3">
            <LogoSVG />
            <span className="tracking-tight">{APP_NAME}</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-medium text-textSecondary hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 start-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="text-textSecondary hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium"
          >
            <Globe size={16} />
            {language === 'en' ? 'العربية' : 'English'}
          </button>

          <Button variant="primary" className="px-6 py-2 text-sm h-10 rounded-full">
            {t.nav.getApp}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <button 
            onClick={toggleLanguage}
            className="text-textSecondary hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium"
          >
            {language === 'en' ? 'عربي' : 'Eng'}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t border-secondary"
        >
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-textPrimary py-2 border-b border-gray-100"
              >
                {item.label}
              </a>
            ))}
            <Button variant="accent" className="w-full mt-4">{t.nav.download}</Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;