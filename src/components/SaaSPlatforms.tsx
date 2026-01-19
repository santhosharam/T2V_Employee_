"use client"

import {
    PenTool,
    FileSearch,
    Award,
    Settings2,
    Timer,
    Handshake
} from "lucide-react"

export function SaaSPlatforms() {
    const platforms = [
        {
            title: "Global Warranty Chain Mgmt. with AI + Blockchain",
            desc: "Unlock New Markets, Drive Grow Your Brand Streamline Supply Chains with Blockchain and AI : NFTs Power Innovation in Warranty Management",
            icon: PenTool,
            color: "text-green-500",
            bg: "bg-green-500/10"
        },
        {
            title: "Global Supply Chain Financing using VAR powered by AI + Blockchain",
            desc: "Revolutionizing Trade Financing with Blockchain, NFTs, Generative AI, and IoT: Experience the Future of Global Commerce.",
            icon: FileSearch,
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            title: "AI Powered Accounting + Auditing Co-Pilot",
            desc: "AI CoPilot for Auditing & Compliance: Steering Finance and Auditing with Gen AI, Empowering Humans for In-depth Analysis, and Unlocking Insights for Strategic Edge.",
            icon: Award,
            color: "text-red-500",
            bg: "bg-red-500/10"
        },
        {
            title: "Talent to Profit Acceleration AI",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise.",
            icon: Settings2,
            color: "text-blue-400",
            bg: "bg-blue-400/10"
        },
        {
            title: "Pixels to Profit using Video AI",
            desc: "Stop Watching, Start Automating: Video-based Workflows Revolutionize Industrial Operations.",
            icon: Timer,
            color: "text-purple-500",
            bg: "bg-purple-500/10"
        },
        {
            title: "Predictive Maintenance with Video AI",
            desc: "Predictive Precision: Video AI Revolutionizes Maintenance Management for Enhanced Asset Performance.",
            icon: Handshake,
            color: "text-green-400",
            bg: "bg-green-400/10"
        },
        {
            title: "Noise Based Failure & Fault Prediction Analytics",
            desc: "Navigating the Future: Transforming Enterprise Knowledge into Value through Knowledge Graphs, Generative AI, and Collective Intelligence.",
            icon: PenTool,
            color: "text-green-500",
            bg: "bg-green-500/10"
        },
        {
            title: "Gen AI Industrial Optimization",
            desc: "Unleashing the Power of Generative AI in Manufacturing: How AI is Automating Design and Optimizing Industrial Processes.",
            icon: FileSearch,
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            title: "Gen AI Based Enterprise Smart Agents",
            desc: "Supercharge Your Enterprise 10X. Unlocking Productivity Unleashed with Gen AI Smart Agents.",
            icon: Award,
            color: "text-red-500",
            bg: "bg-red-500/10"
        }
    ]

    return (
        <section className="py-24 bg-background border-t border-border/40 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center max-w-5xl mx-auto mb-20" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                        Cutting Edge Software Platforms to Put Your Business in <span className="text-gradient-primary">Auto-Acceleration Mode</span>
                    </h2>

                    <a href="#" className="inline-block text-primary hover:text-foreground transition-colors font-medium text-lg mb-12 underline underline-offset-4">
                        Try Generative AI Platforms – No Credit Card Required
                    </a>

                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-foreground mb-6">
                            Disruptive Gen AI-Powered SaaS Platforms: Accelerating Revenue with Minutes-Compound Growth
                        </h3>
                        {/* Decorative Dots */}
                        <div className="flex justify-center gap-2 mb-6" data-aos="fade-up" data-aos-delay="100">
                            <span className="h-2 w-2 rounded-full bg-primary"></span>
                            <span className="h-2 w-2 rounded-full bg-primary/60"></span>
                            <span className="h-2 w-2 rounded-full bg-primary/30"></span>
                            <div className="h-0.5 w-24 bg-primary self-center rounded-full ml-2"></div>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                            Experience the cutting-edge power of next-generation AI-driven Software as a Service (SaaS) platforms designed to swiftly accelerate revenue. Our innovative technology leverages advanced AI capabilities, enabling an unprecedented boost in your revenue growth. With compounding effects in mere minutes, our platform ensures efficient and rapid acceleration, revolutionizing the way you drive profits. Embrace the future of business acceleration and witness unparalleled success with our AI-driven SaaS solutions.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {platforms.map((item, i) => (
                        <div key={i}
                            className="glass-card p-8 rounded-xl shadow-lg hover:shadow-primary/20 transition-all border border-border flex flex-col gap-6 group hover:-translate-y-2 duration-300 bg-card hover:bg-secondary/50"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <div className="flex items-start gap-4">
                                <div className={`p-4 rounded-full ${item.bg} border border-border group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className={`h-8 w-8 ${item.color}`} />
                                </div>
                            </div>

                            <div>
                                <h3 className={`text-xl font-bold mb-3 ${item.color} brightness-100`}>
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
