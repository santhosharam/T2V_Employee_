"use client"

import { Zap, Brain, TrendingUp, BookOpen, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function KnowledgeAcceleration() {
    return (
        <section id="knowledge-acceleration" className="py-24 bg-white relative overflow-hidden">

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div data-aos="fade-right">
                        <span className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-3 block">Strategic Differentiator</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            AI Knowledge & <br />
                            <span className="text-blue-600">Learning Acceleration</span>
                        </h2>
                        <h3 className="text-xl font-medium text-slate-800 mb-4">
                            Turn enterprise knowledge into real capability — faster.
                        </h3>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                            Enterprises have knowledge, but lack capability. Slow onboarding and reskilling are now strategic risks. Learning speed defines competitive advantage.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                {
                                    title: "50–60% Faster Onboarding",
                                    desc: "Get new hires to full productivity in half the time with AI-guided learning.",
                                    icon: Clock
                                },
                                {
                                    title: "85% Knowledge Retention",
                                    desc: "Compared to 20–30% for traditional LMS methods, thanks to active AI reinforcement.",
                                    icon: Brain
                                },
                                {
                                    title: "Reduced Training Costs",
                                    desc: "Significantly lower training and reskilling costs with automated content generation.",
                                    icon: TrendingUp
                                },
                                {
                                    title: "Faster Change Adoption",
                                    desc: "Accelerate the adoption of new technologies and processes.",
                                    icon: Zap
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-sm hover:border-slate-200 transition-all">
                                    <div className="mt-1 h-10 w-10 shrink-0 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base text-slate-900 mb-1">{item.title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/platform">
                                <Button className="px-8 py-6 text-base rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                                    Explore Platform
                                </Button>
                            </Link>
                            <Link to="/request-demo">
                                <Button variant="outline" className="px-8 py-6 text-base rounded-xl bg-white text-slate-700 font-bold border border-slate-200 hover:bg-slate-50 transition-all">
                                    Request Demo
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative" data-aos="fade-left">
                        <div className="absolute inset-0 bg-blue-100 rounded-[2rem] blur-3xl opacity-30 transform rotate-3 scale-95" />
                        <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-[2rem] relative overflow-hidden shadow-2xl shadow-slate-200/50">

                            <div className="relative z-10 space-y-8">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                                        <BookOpen className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">
                                        Knowledge Velocity Engine
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                                            <span className="font-bold text-sm text-slate-900">AI-Generated Microlearning</span>
                                        </div>
                                        <p className="text-sm text-slate-500">Instantly creates bite-sized learning modules from your existing enterprise docs and policies.</p>
                                    </div>

                                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                                            <span className="font-bold text-sm text-slate-900">Adaptive Journeys</span>
                                        </div>
                                        <p className="text-sm text-slate-500">Role-aware learning paths that adapt to the employee's pace and gaps.</p>
                                    </div>

                                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="font-bold text-sm text-slate-900">Just-in-Time Learning</span>
                                        </div>
                                        <p className="text-sm text-slate-500">Embedded learning suggestions right in the flow of daily work.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                                    <div>
                                        <div className="text-3xl font-bold text-slate-900 mb-1">3x</div>
                                        <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Faster Ramp-up</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-slate-900 mb-1">Real-time</div>
                                        <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Skill Updates</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
