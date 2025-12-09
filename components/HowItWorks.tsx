import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Zap, Calendar, CheckCircle } from 'lucide-react';

const steps = [
    { 
        title: "Connect", 
        desc: "Sync your calendars and email seamlessly to see your whole day.", 
        icon: Zap 
    },
    { 
        title: "Prioritize", 
        desc: "Drag and drop tasks into time blocks. Visual planning made simple.", 
        icon: Calendar 
    },
    { 
        title: "Focus", 
        desc: "Enter deep work mode with one tap. Silence the noise.", 
        icon: CheckCircle 
    }
];

const HowItWorks: React.FC = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { x: -30, opacity: 0, scale: 0.95 },
        visible: { 
            x: 0, 
            opacity: 1, 
            scale: 1,
            transition: { 
                type: "spring",
                damping: 25,
                stiffness: 120
            }
        }
    };

    const lineVariants: Variants = {
        hidden: { height: 0 },
        visible: { 
            height: "100%", 
            transition: { duration: 1.5, ease: "easeInOut" } 
        }
    };

    return (
        <section id="how-it-works" className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Interactive Visual (Desktop) */}
                    <div className="relative h-[500px] hidden lg:block px-4">
                        {/* Vertical Line */}
                        <motion.div 
                            className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary/30"
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        />
                        
                        {/* Cards Container */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative h-full"
                        >
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    className="absolute left-0 w-80 p-6 bg-white rounded-app shadow-xl border border-secondary/20 flex items-start gap-4 z-10"
                                    style={{ 
                                        top: `${index * 150}px`, 
                                        marginLeft: `${index * 24}px` 
                                    }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-accent shrink-0 mt-1">
                                        <step.icon size={20} />
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-secondary/20 absolute right-4 top-2 select-none">0{index + 1}</div>
                                        <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                                        <p className="text-sm text-textSecondary leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:pl-10"
                    >
                         <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Simplifying complexity into <br/>
                            <span className="text-accent underline decoration-4 underline-offset-4">Pure Focus</span>.
                        </h2>
                        <p className="text-textSecondary mb-12 text-lg leading-relaxed">
                            Most planners add to your workload. Lumina subtracts. By using smart defaults and intuitive gestures, we reduce the friction between thinking and doing.
                        </p>
                        
                        {/* Mobile List View (Cards) */}
                        <div className="grid gap-6 lg:hidden mt-8">
                            {steps.map((step, idx) => (
                                <motion.div 
                                    key={idx} 
                                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: idx * 0.1, type: "spring", stiffness: 60, damping: 20 }}
                                    className="bg-white p-6 rounded-[20px] shadow-lg border border-secondary/20 relative overflow-hidden group"
                                >
                                     {/* Background Decor */}
                                     <div className="absolute -right-6 -top-6 w-24 h-24 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-500"></div>
                                     
                                     <div className="relative z-10 flex gap-5 items-start">
                                        <div className="shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-md mt-1">
                                            <span className="font-bold text-lg">{idx + 1}</span>
                                        </div>
                                        
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <step.icon size={20} className="text-accent" />
                                                <h4 className="text-xl font-bold text-primary">
                                                    {step.title}
                                                </h4>
                                            </div>
                                            <p className="text-textSecondary leading-relaxed opacity-90">
                                                {step.desc}
                                            </p>
                                        </div>
                                     </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;