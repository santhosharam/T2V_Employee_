import { Database, BrainCircuit, BarChart3 } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Connect Your Data",
        desc: "Seamlessly integrate with your existing HRIS, ATS, ERP, and communication tools. We connect to 50+ enterprise platforms.",
        icon: Database
    },
    {
        id: 2,
        title: "AI Analyzes & Learns",
        desc: "Our AI agents structure unstructured data, identify patterns, and build a unified knowledge graph of your workforce.",
        icon: BrainCircuit
    },
    {
        id: 3,
        title: "Unlock Intelligence",
        desc: "Get real-time insights, predictive forecasts, and autonomous actions to optimize talent, cost, and compliance.",
        icon: BarChart3
    }
];

export function HowItWorks() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How T2V Employee Works</h2>
                    <p className="text-xl text-slate-600">Turn your fragmented workforce data into a strategic asset in three simple steps.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 z-0 opacity-50" />

                    {steps.map((step, index) => (
                        <div key={step.id} className="relative z-10 flex flex-col items-center text-center group animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                            <div className="w-24 h-24 rounded-2xl glass-card flex items-center justify-center mb-6 relative transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:border-blue-200 bg-white">
                                <step.icon className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm border-2 border-white shadow-lg">
                                    {step.id}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed max-w-xs">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
