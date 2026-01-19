"use client"

import { ShieldCheck, Zap, Layers, Globe, Cpu, TrendingUp } from "lucide-react"

export function WhyChoose() {
    const reasons = [
        {
            title: "AI-Native Architecture",
            desc: "Built from the ground up for AI, not legacy HR tech with a chatbot bolted on.",
            icon: Cpu
        },
        {
            title: "Grounded Intelligence",
            desc: "RAG-powered responses ensuring verifiable, hallucination-free answers.",
            icon: ShieldCheck
        },
        {
            title: "Vertical & Regulation-Aware",
            desc: "Pre-trained on industry-specific regulations for safe, compliant automation.",
            icon: Layers
        },
        {
            title: "Autonomous Agents",
            desc: "Self-improving agents that handle complex workflows autonomously.",
            icon: Zap
        },
        {
            title: "Compounding Value",
            desc: "Modular platform where each added capability amplifies the value of the others.",
            icon: TrendingUp
        },
        {
            title: "Global Scale & Security",
            desc: "Enterprise-grade governance, data residency, and security built-in.",
            icon: Globe
        }
    ]

    return (
        <section className="py-24 bg-white relative border-t border-slate-200">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-3 block" data-aos="fade-up">Why T2V-Employee?</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6" data-aos="fade-up" data-aos-delay="100">
                        Why Enterprises Choose <span className="text-blue-600">T2V-Employee</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, i) => (
                        <div key={i}
                            className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all group"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}>
                            <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform border border-blue-100">
                                <reason.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-light">
                                {reason.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

