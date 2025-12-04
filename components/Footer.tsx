import React from 'react';
import { APP_NAME, TRANSLATIONS } from '../constants';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const LogoSVG = () => (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10H22C26.4183 10 30 13.5817 30 18V30H18C13.5817 30 10 26.4183 10 22V10Z" fill="#1E1E2F"/>
        <path d="M22 18C22 15.7909 23.7909 14 26 14C28.2091 14 30 15.7909 30 18H22Z" fill="#3B82F6"/>
        <circle cx="20" cy="20" r="4" fill="white"/>
    </svg>
);

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].footer;

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-secondary/50">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                         <LogoSVG />
                        {APP_NAME}
                    </h3>
                    <p className="text-textSecondary max-w-sm mb-6">
                        {t.tagline}
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-textPrimary hover:text-accent transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-textPrimary hover:text-accent transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-textPrimary hover:text-accent transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="text-textPrimary hover:text-accent transition-colors"><Github size={20} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-primary mb-4">{t.product}</h4>
                    <ul className="space-y-2 text-textSecondary text-sm">
                        <li><a href="#" className="hover:text-primary transition-colors">{t.links.features}</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">{t.links.pricing}</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">{t.links.download}</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-primary mb-4">{t.legal}</h4>
                    <ul className="space-y-2 text-textSecondary text-sm">
                        <li><a href="#" className="hover:text-primary transition-colors">{t.links.privacy}</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">{t.links.terms}</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">{t.links.cookies}</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-secondary/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-textSecondary">
                <p>&copy; {new Date().getFullYear()} {APP_NAME} Inc. {t.rights}</p>
                <p className="mt-2 md:mt-0">{t.designed}</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;