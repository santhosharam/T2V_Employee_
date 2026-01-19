"use client"

import { RefreshCw, Database, BrainCircuit, Users, Target, Rocket } from "lucide-react"

export function IntelligenceFlywheel() {
    const steps = [
        {
            title: "1. Knowledge Capture",
            desc: "KnowledgeAI & Vertical KnowledgeAI",
            icon: Database,
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            title: "2. Knowledge Acceleration",
            desc: "AccelerateAI & TalentAI",
            icon: Rocket,
            color: "text-purple-500",
            bg: "bg-purple-500/10"
        },
        {
            title: "3. Knowledge Application",
            desc: "Daily Workflows & PortalAI",
            icon: Users,
            color: "text-green-500",
            bg: "bg-green-500/10"
        },
        {
            title: "4. Performance Intelligence",
            desc: "AssessAI & PerformAI",
            icon: Target,
            color: "text-amber-500",
            bg: "bg-amber-500/10"
        },
        {
            title: "5. Autonomous Improvement",
            desc: "AI Agents & Analytics",
            icon: BrainCircuit,
            color: "text-red-500",
            bg: "bg-red-500/10"
        }
    ]

    return (
        <section className="py-24 bg-secondary/20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block" data-aos="fade-up">T2V Intelligence Flywheel</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-aos="fade-up" data-aos-delay="100">
                        A Continuous Knowledge <br /><span className="text-primary">→ Performance Intelligence Loop</span>
                    </h2>
                    <p className="text-lg text-muted-foreground" data-aos="fade-up" data-aos-delay="200">
                        T2V-Employee creates a self-reinforcing Kaizen model where knowledge, learning, performance, and compliance continuously improve through AI.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className={`w-20 h-20 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-6 shadow-lg border border-border group-hover:scale-110 transition-transform duration-300 relative bg-card`}>
                                    <step.icon className="w-10 h-10" />
                                    {/* Arrow for mobile/tablet flow */}
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 lg:hidden text-muted-foreground/30">
                                        {i < steps.length - 1 && <RefreshCw className="w-6 h-6 animate-spin-slow" />}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                                <p className="text-sm text-muted-foreground font-medium">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mt-16 text-sm font-medium text-muted-foreground" data-aos="fade-up" data-aos-delay="600">
                    <div className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-primary" /> Continuous Learning vs Episodic Training
                    </div>
                    <div className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-primary" /> Real-time insights vs Annual Reviews
                    </div>
                    <div className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-primary" /> Predictive Optimization vs Reactive HR
                    </div>
                </div>
            </div>
        </section>
    )
}
