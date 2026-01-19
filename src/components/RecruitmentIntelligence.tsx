"use client"

import { Search, ShieldCheck, TrendingUp, UserCheck, Timer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function RecruitmentIntelligence() {
    return (
        <section id="recruitment" className="py-24 bg-slate-50 relative overflow-hidden text-slate-900">

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Visual Side (Left) */}
                    <div className="relative order-2 lg:order-1" data-aos="fade-right">
                        <div className="absolute inset-0 bg-blue-100/50 rounded-[2.5rem] blur-3xl opacity-50 transform -rotate-3 scale-95" />
                        <div className="bg-white border border-slate-200 p-8 rounded-[2rem] relative overflow-hidden shadow-xl shadow-slate-200/50">

                            {/* Abstract UI Representation */}
                            <div className="space-y-6 relative z-10">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                                            <Search className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Talent Discovery</h4>
                                            <p className="text-xs text-slate-500 font-medium">AI Sourcing Active</p>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">98% Match Score</span>
                                </div>

                                {/* Candidate Cards Stack */}
                                <div className="space-y-3">
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between shadow-sm hover:border-slate-200 transition-all">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-full bg-slate-200" />
                                                <div className="space-y-1.5">
                                                    <div className="h-2 w-24 bg-slate-200 rounded-full" />
                                                    <div className="h-2 w-16 bg-slate-100 rounded-full" />
                                                </div>
                                            </div>
                                            <div className="text-xs font-bold text-blue-600">Top 5%</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-slate-900">3 Days</div>
                                        <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Avg. Time to Shortlist</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-slate-900">Zero</div>
                                        <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Bias Detected</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side (Right) */}
                    <div className="order-1 lg:order-2" data-aos="fade-left">
                        <span className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-3 block">AI-Native Recruitment</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Hire faster. Hire better. <br />
                            <span className="text-blue-600">Hire fairly at scale.</span>
                        </h2>
                        <h3 className="text-xl font-medium text-slate-800 mb-4">
                            Talent acquisition reimagined for the intelligence era.
                        </h3>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
                            Startups and Enterprises face the same problem: talent shortages hurt growth. Traditional ATS tools manage workflow, not intelligence. T2V-Employee brings predictive, bias-aware intelligence to every hire.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8 mb-10">
                            {[
                                {
                                    title: "50–65% Faster Time-to-Hire",
                                    desc: "Automated sourcing and screening accelerates your pipeline.",
                                    icon: Timer
                                },
                                {
                                    title: "Bias-Aware Screening",
                                    desc: "Skill-based evaluation ensures fair capabilities-first hiring.",
                                    icon: ShieldCheck
                                },
                                {
                                    title: "Improved Quality of Hire",
                                    desc: "Predictive performance insights before you make an offer.",
                                    icon: UserCheck
                                },
                                {
                                    title: "Lower Cost Per Hire",
                                    desc: "Reduce agency dependency with powerful direct sourcing AI.",
                                    icon: TrendingUp
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="mt-1 shrink-0 p-2 rounded-lg bg-blue-50 text-blue-600">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/solutions">
                                <Button className="h-12 px-8 text-base bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-100 transition-all">
                                    View Solutions
                                </Button>
                            </Link>
                            <Link to="/request-demo">
                                <Button variant="outline" className="h-12 px-8 text-base border-slate-200 text-slate-700 hover:bg-white rounded-xl bg-white shadow-sm hover:text-slate-900 transition-all">
                                    Request Demo
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
