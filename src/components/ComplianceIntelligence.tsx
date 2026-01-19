"use client"

import { ShieldAlert, FileText, CheckCircle2, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function ComplianceIntelligence() {
    return (
        <section id="compliance" className="py-24 bg-white relative overflow-hidden">

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Content Side (Left) */}
                    <div data-aos="fade-right">
                        <span className="text-rose-600 font-bold uppercase tracking-wider text-xs mb-3 block">Risk & Compliance</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            AI-Powered Compliance & <br />
                            <span className="text-rose-600">Legal Intelligence</span>
                        </h2>
                        <h3 className="text-xl font-medium text-slate-800 mb-4">
                            Predict risk. Prevent violations. Stay audit-ready.
                        </h3>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
                            Workforce compliance is global, complex, and constantly changing. Reactive audits are no longer enough. T2V-Employee gives legal and compliance leaders predictive intelligence to stop risks before they become violations.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                {
                                    title: "Predictive Risk Scoring",
                                    desc: "Identify potential compliance breaches in real-time across your global workforce.",
                                    stat: "92% Reduction in Violations"
                                },
                                {
                                    title: "Continuous Audit Readiness",
                                    desc: "Always-on monitoring ensures you are ready for an audit at any moment.",
                                    stat: "Faster Audits, Fewer Findings"
                                },
                                {
                                    title: "Automated Policy Updates",
                                    desc: "Instantly update policies and training based on new regulations.",
                                    stat: "Zero Lag Time"
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-xl border border-rose-100 bg-rose-50/50 hover:bg-rose-50 hover:border-rose-200 transition-colors">
                                    <div className="mt-1 h-10 w-10 shrink-0 rounded-lg bg-white border border-rose-100 flex items-center justify-center text-rose-600 shadow-sm">
                                        <ShieldAlert className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base text-slate-900 mb-1">{item.title}</h3>
                                        <p className="text-sm text-slate-600 mb-3 leading-relaxed">{item.desc}</p>
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-rose-100 text-rose-700 text-[10px] font-bold shadow-sm uppercase tracking-wide">
                                            <CheckCircle2 className="w-3 h-3" /> {item.stat}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/solutions">
                                <Button className="h-12 px-8 text-base bg-rose-600 hover:bg-rose-700 text-white rounded-xl shadow-lg shadow-rose-100 transition-all">
                                    Explore Compliance Solutions
                                </Button>
                            </Link>
                            <Link to="/request-demo">
                                <Button variant="outline" className="h-12 px-8 text-base border-slate-200 text-slate-700 hover:bg-white rounded-xl bg-white shadow-sm hover:text-slate-900 transition-all">
                                    Talk to an Expert
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Visual Side (Right) */}
                    <div className="relative" data-aos="fade-left">
                        <div className="absolute inset-0 bg-rose-100 rounded-[2.5rem] blur-3xl opacity-40 transform rotate-3 scale-95" />
                        <div className="bg-white border border-slate-200 p-8 rounded-[2rem] relative overflow-hidden shadow-xl shadow-slate-200/50">

                            <div className="relative z-10 space-y-8">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                        <span className="font-bold text-sm text-slate-900">Compliance Status: Healthy</span>
                                    </div>
                                    <ShieldAlert className="text-rose-600 h-6 w-6" />
                                </div>

                                {/* Risk Map Visualization */}
                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-6">
                                    <div className="flex justify-between items-center text-sm font-medium text-slate-700">
                                        <span>Global Risk Index</span>
                                        <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Low (12/100)</span>
                                    </div>
                                    <div className="w-full bg-slate-200 rounded-full h-2">
                                        <div className="bg-gradient-to-r from-emerald-500 via-amber-400 to-rose-600 h-2 rounded-full shadow-sm" style={{ width: '12%' }}></div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-rose-50 rounded-xl border border-rose-100 text-center">
                                            <div className="text-[10px] text-rose-600 font-bold uppercase tracking-wide mb-1">Labor Disputes</div>
                                            <div className="text-2xl font-bold text-slate-900">0</div>
                                        </div>
                                        <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
                                            <div className="text-[10px] text-blue-600 font-bold uppercase tracking-wide mb-1">Policy Sign-offs</div>
                                            <div className="text-2xl font-bold text-slate-900">99.8%</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <Lock className="w-4 h-4 text-slate-400" />
                                        <span>GDPR & CCPA Compliant Data Handling</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <FileText className="w-4 h-4 text-slate-400" />
                                        <span>Audit Trails Immutable & Exportable</span>
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
