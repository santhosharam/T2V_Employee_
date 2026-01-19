"use client"

import {
    Cpu,
    Database,
    Network,
    Settings,
    FileSearch,
    Link
} from "lucide-react"

export function ConsultingServices() {
    const services = [
        {
            title: "Enterprise GenAI / LLM",
            desc: "Automate, Optimize, Dominate: LLMs Power Your Competitive Edge. Innovation Without Limits: GenAI Reimagines Your Future.",
            icon: Cpu
        },
        {
            title: "Big Data Analytics",
            desc: "From Chaos to Clarity: Transforming Raw Data into Actionable Insights. Gain a Competitive Edge: Data-Driven Decisions for the Modern Enterprise.",
            icon: Database
        },
        {
            title: "AI Integration & Injection",
            desc: "Seamlessly embed AI into your existing workflows. Transform isolated tools into an intelligent, cohesive ecosystem.",
            icon: Network
        },
        {
            title: "Gen AI + AI Ops",
            desc: "From Chaos to Clarity: Transforming operations with predictive intelligence. Self-healing infrastructure for the modern enterprise.",
            icon: Settings
        },
        {
            title: "GenAI + RPA",
            desc: "AI Ops: The Secret Weapon for Enterprise Efficiency. Human Brains + Machine Power: The Ultimate Operations Duo.",
            icon: FileSearch
        },
        {
            title: "GenAI + Blockchain",
            desc: "Secure, immutable, and intelligent. Combine the trust of blockchain with the reasoning power of Generative AI.",
            icon: Link
        }
    ]

    return (
        <section className="py-24 bg-background relative border-t border-border/40">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-aos="fade-up">
                        AI/ML Consulting & Automation Services
                    </h2>
                    {/* Decorative Dots */}
                    <div className="flex justify-center gap-2 mb-6" data-aos="fade-up" data-aos-delay="100">
                        <span className="h-2 w-2 rounded-full bg-primary"></span>
                        <span className="h-2 w-2 rounded-full bg-primary/60"></span>
                        <span className="h-2 w-2 rounded-full bg-primary/30"></span>
                        <div className="h-0.5 w-24 bg-primary self-center rounded-full ml-2"></div>
                    </div>

                    <p className="text-lg text-muted-foreground" data-aos="fade-up" data-aos-delay="200">
                        Empowering Enterprises: Elevate Performance with Cutting-Edge AI/ML Consulting and Automation Services
                    </p>
                </div>

                {/* Grid - Wide Cards Layout */}
                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, i) => (
                        <div key={i}
                            className="glass-card p-6 rounded-xl hover:bg-secondary/50 transition-all border border-border flex items-start gap-6 group hover:-translate-y-1 duration-300 shadow-sm hover:shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <div className="shrink-0 p-4 rounded-full bg-secondary border border-border group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                                <service.icon className="h-6 w-6 transition-colors" />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
