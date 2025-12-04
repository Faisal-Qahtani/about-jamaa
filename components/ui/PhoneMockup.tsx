
import React from 'react';
import { motion } from 'framer-motion';
import { Check, User, Mail, Calendar, Settings, Send, MapPin, ThumbsUp, DollarSign, Camera } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';
import { TRANSLATIONS } from '../../constants';

interface PhoneMockupProps {
    variant?: 'home' | 'plan' | 'chat' | 'places';
    className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ variant = 'home', className = '' }) => {
  const { language } = useLanguage();
  
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative mx-auto border-primary dark:border-primary bg-primary border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden ${className}`}
    >
      {/* Hardware Buttons - Physical buttons don't move with language */}
      <div className="h-[32px] w-[3px] bg-primary absolute -start-[17px] left-[-17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-primary absolute -start-[17px] left-[-17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-primary absolute -start-[17px] left-[-17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-primary absolute -end-[17px] right-[-17px] top-[142px] rounded-e-lg"></div>
      
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-background relative flex flex-col" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        
        {/* Status Bar */}
        <div className="w-full h-8 bg-white flex items-center justify-between px-6 pt-2 z-20">
            <div className="text-[10px] font-bold text-primary">9:41</div>
            <div className="flex gap-1">
                <div className="w-3 h-3 bg-primary rounded-full opacity-20"></div>
                <div className="w-3 h-3 bg-primary rounded-full opacity-20"></div>
            </div>
        </div>

        {/* Dynamic Content Based on Variant */}
        <div className="flex-1 flex flex-col relative overflow-hidden bg-[#F5F6FA]">
            {variant === 'home' && <HomeVariant />}
            {variant === 'plan' && <PlanVariant />}
            {variant === 'chat' && <ChatVariant />}
            {variant === 'places' && <PlacesVariant />}
        </div>

        {/* Bottom Indicator */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-300 rounded-full z-20"></div>
      </div>
    </motion.div>
  );
};

// --- Variant Components ---

const HomeVariant = () => {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language].mockup.home;

    return (
    <div className="p-6 flex flex-col gap-6 h-full">
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-between items-center"
        >
            <div>
                <h3 className="text-xl font-bold text-primary">{t.welcome}</h3>
                <p className="text-xs text-textSecondary">{t.subtitle}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-secondary overflow-hidden border-2 border-white shadow-sm flex items-center justify-center text-primary/50">
                {/* Generic Profile Photo */}
                <User size={24} />
            </div>
        </motion.div>

        {/* Upcoming Card */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-primary p-5 rounded-2xl text-white shadow-xl relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-20 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <div className="relative z-10">
                <div className="inline-block px-2 py-1 bg-white/20 rounded-md text-[10px] font-bold mb-3">{t.tonight}</div>
                <h4 className="text-lg font-bold mb-1">{t.padel}</h4>
                <div className="flex items-center gap-2 text-white/80 text-xs mb-4">
                    <Calendar size={12} />
                    <span>{t.date}</span>
                </div>
                <div className="flex -space-x-2 rtl:space-x-reverse">
                     {[1,2,3].map(i => (
                         <div key={i} className="w-6 h-6 rounded-full border border-primary bg-gray-200 overflow-hidden flex items-center justify-center">
                            {/* Generic Participant Photos */}
                            <User size={14} className="text-gray-500" />
                         </div>
                     ))}
                     <div className="w-6 h-6 rounded-full border border-primary bg-accent flex items-center justify-center text-[8px] font-bold text-white">+1</div>
                </div>
            </div>
        </motion.div>

        {/* Recent Groups */}
        <div>
            <div className="text-xs font-bold text-textSecondary uppercase tracking-wider mb-3">{t.gatherings}</div>
            <div className="space-y-3">
                {[
                    { name: t.kashta, msg: t.locDropped, time: "2m" },
                    { name: t.esteraha, msg: t.qattaMsg, time: "1h" },
                    { name: t.family, msg: t.lunchMsg, time: "3h" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + (i * 0.1) }}
                        className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center text-lg">
                            {item.name.includes("Kashta") || item.name.includes("كشتة") ? "🔥" : item.name.includes("Esteraha") || item.name.includes("استراحة") ? "☕️" : "🏠"}
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <div className="flex justify-between">
                                <h5 className="text-sm font-bold text-primary truncate">{item.name}</h5>
                                <span className="text-[10px] text-textSecondary shrink-0 mx-1">{item.time}</span>
                            </div>
                            <p className="text-xs text-textSecondary truncate">{item.msg}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
        
        {/* Floating Action Button */}
        <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute bottom-6 end-6 w-12 h-12 bg-accent rounded-full shadow-lg flex items-center justify-center text-white"
        >
            <span className="text-2xl leading-none mb-1">+</span>
        </motion.div>
    </div>
    );
};

const PlanVariant = () => {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language].mockup.plan;
    return (
    <div className="p-6 flex flex-col gap-5 h-full bg-white">
         <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center pb-4 border-b border-gray-100"
         >
            <h3 className="text-lg font-bold text-primary">{t.title}</h3>
         </motion.div>

         <div className="space-y-4">
            <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                <label className="text-xs font-bold text-textSecondary uppercase block mb-1">{t.name}</label>
                <div className="h-10 bg-background rounded-lg border border-secondary/30 w-full flex items-center px-3 text-sm text-primary font-medium">
                    {t.nameVal} 
                </div>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
            >
                <label className="text-xs font-bold text-textSecondary uppercase block mb-1">{t.time}</label>
                <div className="flex gap-2">
                    <div className="h-10 bg-background rounded-lg border border-secondary/30 flex-1 flex items-center px-3 text-sm text-primary">
                        {t.timeVal}
                    </div>
                    <div className="h-10 bg-background rounded-lg border border-secondary/30 w-24 flex items-center px-3 text-sm text-primary">
                        {t.timeLabel}
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
            >
                <label className="text-xs font-bold text-textSecondary uppercase block mb-1">{t.repeat}</label>
                <div className="flex gap-2">
                    <div className="h-8 flex-1 bg-background rounded-lg border border-secondary/30 flex items-center justify-center text-[10px] font-bold text-textSecondary cursor-pointer hover:bg-gray-200">
                        {t.daily}
                    </div>
                    <div className="h-8 flex-1 bg-accent/10 rounded-lg border border-accent/30 flex items-center justify-center text-[10px] font-bold text-accent cursor-pointer">
                        {t.weekly}
                    </div>
                    <div className="h-8 flex-1 bg-background rounded-lg border border-secondary/30 flex items-center justify-center text-[10px] font-bold text-textSecondary cursor-pointer hover:bg-gray-200">
                        {t.monthly}
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
            >
                <label className="text-xs font-bold text-textSecondary uppercase block mb-1">{t.invite}</label>
                <div className="flex gap-2 overflow-x-auto pb-2">
                     {[1,2,3,4].map(i => (
                         <div key={i} className="flex flex-col items-center gap-1 min-w-[50px]">
                             <div className={`w-10 h-10 rounded-full flex items-center justify-center overflow-hidden ${i === 1 ? 'bg-accent text-white border-2 border-accent' : 'bg-background border border-secondary/30'}`}>
                                 {i === 1 ? <Check size={16} /> : <User size={20} className="text-gray-400" />}
                             </div>
                             <div className="h-2 w-8 bg-gray-200 rounded-full"></div>
                         </div>
                     ))}
                </div>
            </motion.div>
         </div>

         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-auto"
         >
             <div className="w-full h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                 {t.btn}
             </div>
         </motion.div>
    </div>
    );
};

const ChatVariant = () => {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language].mockup.chat;
    return (
    <div className="flex flex-col h-full bg-[#F5F6FA]">
        <div className="p-4 bg-white shadow-sm flex items-center gap-3 z-10">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">SK</div>
            <div>
                <h4 className="text-sm font-bold text-primary">{t.groupName}</h4>
                <p className="text-[10px] text-textSecondary">{t.members}</p>
            </div>
        </div>

        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-2"
            >
                <div className="w-6 h-6 rounded-full bg-gray-300 shrink-0 overflow-hidden flex items-center justify-center">
                    <User size={14} className="text-gray-500" />
                </div>
                <div className="bg-white p-2.5 rounded-2xl rounded-tl-none rtl:rounded-tl-2xl rtl:rounded-tr-none shadow-sm text-xs text-primary max-w-[80%]">
                    {t.msg1}
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-2 flex-row-reverse"
            >
                <div className="bg-primary text-white p-2.5 rounded-tr-none rtl:rounded-tr-2xl rtl:rounded-tl-none rounded-2xl shadow-sm text-xs max-w-[80%]">
                    {t.msg2}
                </div>
            </motion.div>

             <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white p-3 rounded-xl shadow-sm border border-secondary/20 mx-4"
            >
                <div className="text-[10px] font-bold text-textSecondary uppercase mb-2 text-center">{t.poll}</div>
                <div className="text-sm font-bold text-primary mb-3 text-center">{t.pollQ}</div>
                <div className="space-y-2">
                    <div className="h-8 bg-accent/10 rounded-lg flex items-center px-3 justify-between border border-accent/30">
                        <span className="text-xs font-medium">{t.pollOpt1}</span>
                        <span className="text-xs font-bold text-accent">5</span>
                    </div>
                    <div className="h-8 bg-background rounded-lg flex items-center px-3 justify-between">
                        <span className="text-xs font-medium text-textSecondary">{t.pollOpt2}</span>
                        <span className="text-xs font-bold text-textSecondary">2</span>
                    </div>
                </div>
            </motion.div>
        </div>

        <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-textSecondary"><Camera size={16} /></div>
            <div className="flex-1 h-8 bg-background rounded-full px-3 text-xs flex items-center text-textSecondary">{t.type}</div>
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white"><Send size={14} className="rtl:rotate-180" /></div>
        </div>
    </div>
    );
};

const PlacesVariant = () => {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language].mockup.places;
    return (
    <div className="flex flex-col h-full bg-[#F5F6FA]">
        <div className="p-4 bg-white shadow-sm z-10">
             <div className="h-8 bg-background rounded-lg flex items-center px-3 text-xs text-textSecondary gap-2">
                 <MapPin size={14} />
                 {t.search}
             </div>
        </div>

        <div className="flex-1 p-4 space-y-4">
            <div className="text-xs font-bold text-textSecondary uppercase">{t.popular}</div>
            
            {[
                { name: t.place1, rating: "4.9", type: t.place1Type, img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60" }, // Traditional seating/restaurant
                { name: t.place2, rating: "4.8", type: t.place2Type, img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&auto=format&fit=crop&q=60" }, // Coffee art
            ].map((place, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (i * 0.2) }}
                    className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                    <div className="h-24 bg-gray-200 relative">
                        <img src={place.img} alt={place.name} className="w-full h-full object-cover" />
                        <div className="absolute top-2 end-2 bg-white px-1.5 py-0.5 rounded text-[10px] font-bold shadow-sm">
                            ⭐ {place.rating}
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="flex justify-between items-start mb-1">
                            <div>
                                <h4 className="text-sm font-bold text-primary">{place.name}</h4>
                                <p className="text-[10px] text-textSecondary">{place.type}</p>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-3">
                            <button className="flex-1 bg-background text-primary text-[10px] font-bold py-1.5 rounded flex items-center justify-center gap-1">
                                {t.menu}
                            </button>
                            <button className="flex-1 bg-primary text-white text-[10px] font-bold py-1.5 rounded flex items-center justify-center gap-1">
                                <ThumbsUp size={10} /> {t.vote}
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
    );
};

export default PhoneMockup;
