import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by <span className="text-accent">Thinkers</span></h2>
                <p className="text-secondary opacity-80 max-w-2xl mx-auto">
                    Join thousands of designers, developers, and creators who have found their flow.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="bg-white/10 backdrop-blur-sm p-8 rounded-app border border-white/10 relative hover:bg-white/15 transition-colors"
                    >
                        <Quote className="absolute top-6 right-6 text-accent opacity-30" size={40} />
                        <p className="text-secondary mb-6 leading-relaxed italic">"{t.content}"</p>
                        
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent">
                                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">{t.name}</h4>
                                <p className="text-xs text-secondary opacity-70 uppercase tracking-wide">{t.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Testimonials;