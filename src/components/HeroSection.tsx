"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, ShieldCheck, Globe, Lock } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative flex items-center pt-20 pb-8 overflow-hidden">
            {/* Clean Background - AnimatedBackground provides the subtle texture */}

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center space-y-6">

                    {/* Badge - Softer & Cleaner */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-medium text-sm mb-6" data-aos="fade-down">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                        </span>
                        AI-Native Workforce Intelligence
                    </div>

                    {/* Main Title - Dark Slate Text, Subtle Gradient */}
                    <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]" data-aos="fade-up" data-aos-delay="100">
                        From HR Automation to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
                            Workforce Intelligence
                        </span>
                    </h1>

                    {/* Subtitle - Lighter Slate, Increased Line Height */}
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light" data-aos="fade-up" data-aos-delay="200">
                        Transform people operations into strategic business intelligence using <span className="text-slate-900 font-medium">autonomous AI agents</span>, <span className="text-slate-900 font-medium">knowledge graphs</span>, and <span className="text-slate-900 font-medium">predictive analytics</span>.
                    </p>

                    {/* Supporting Points - Pill Style */}
                    <div className="flex flex-wrap justify-center gap-3 pt-2 pb-8" data-aos="fade-up" data-aos-delay="300">
                        {[
                            "AI Knowledge Acceleration",
                            "Predictive Intelligence",
                            "Recruiment & Compliance",
                            "Enterprise Security"
                        ].map((point, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-600 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                                <ShieldCheck className="w-4 h-4 text-blue-600" />
                                {point}
                            </div>
                        ))}
                    </div>

                    {/* CTAs - Refined Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="400">
                        <Button size="lg" className="h-14 px-8 text-lg bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-200 transition-all w-full sm:w-auto rounded-xl">
                            Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>

                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 w-full sm:w-auto rounded-xl bg-white">
                            <Calculator className="mr-2 h-5 w-5" /> Calculate ROI
                        </Button>
                    </div>

                    {/* Trust Indicators - Minimalist */}
                    <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-slate-500 border-t border-slate-100 mt-10 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="500">
                        <div className="flex items-center justify-center gap-3">
                            <Globe className="w-5 h-5 text-slate-400" />
                            Built for global, regulated enterprises
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <Globe className="w-5 h-5 text-slate-400" />
                            Multi-country, multi-jurisdiction ready
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <Lock className="w-5 h-5 text-slate-400" />
                            SOC2 Type II & GDPR Compliant
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
