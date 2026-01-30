"use client"

import { Button } from "@/components/ui/button"


export function HeroSection() {
    return (
        <section className="relative flex items-center pt-20 pb-8 overflow-hidden">
            {/* Clean Background - AnimatedBackground provides the subtle texture */}

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto text-center relative z-10 pt-10">

                    {/* Badge - Enterprise Style */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 border border-blue-200 text-blue-800 font-medium text-xs uppercase tracking-wider mb-8 animate-fade-up">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                        AI-Native Workforce Intelligence
                    </div>

                    {/* Main Title - Tight & Heavy */}
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8 animate-fade-up animation-delay-200">
                        Predict. Accelerate. <br />
                        <span className="text-gradient-primary">
                            Scale Your Workforce.
                        </span>
                    </h1>

                    {/* Subtitle - Readable & clean */}
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light mb-10 animate-fade-up animation-delay-200">
                        The only AI platform that unifies people data, predicts retention risks, and automates compliance—empowering you to build world-class teams.
                    </p>

                    {/* CTAs - Enterprise Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16 animate-fade-up animation-delay-200">
                        <Button size="lg" className="h-14 px-10 text-lg btn-primary-gradient shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto">
                            Book a Demo
                        </Button>

                        <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 w-full sm:w-auto bg-white/50 backdrop-blur-sm shadow-sm">
                            Start Free Trial
                        </Button>
                    </div>

                    {/* Trust Signals - Integrated subtly */}
                    <div className="border-t border-slate-200/60 pt-10 max-w-4xl mx-auto animate-fade-up animation-delay-400">
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Trusted by Forward-Thinking Enterprises</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
                            {["MICROSOFT", "IBM", "SIEMENS", "ORACLE", "DELOITTE"].map((name, i) => (
                                <span key={i} className="text-lg md:text-xl font-bold text-slate-400 cursor-default">{name}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
