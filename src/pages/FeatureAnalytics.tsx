import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeatureAnalytics() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-white">
            {/* Hero */}
            <div className="container mx-auto px-4 text-center max-w-4xl mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-6">
                    <BarChart3 className="w-4 h-4" /> AI Workforce Analytics
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                    Turn Workforce Data into <br /> <span className="text-blue-600">Strategic Advantage</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                    Unified analytics that give you total visibility into headcount, costs, and trends across your entire organization.
                </p>
                <div className="flex justify-center gap-4">
                    <Link to="/request-demo">
                        <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                            Get a Demo
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Visual Section */}
            <div className="container mx-auto px-4 mb-24">
                <div className="bg-slate-100 rounded-3xl aspect-[16/9] max-w-5xl mx-auto flex items-center justify-center border border-slate-200 shadow-2xl">
                    <span className="text-slate-400 font-medium">Dashboard Screenshot Placeholder</span>
                </div>
            </div>

            {/* Problem / Solution Grid */}
            <div className="bg-slate-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">The Problem</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Data is siloed in HRIS, ATS, and spreadsheets. Leaders lack a single source of truth for making decisions.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">The Solution</h3>
                            <p className="text-slate-600 leading-relaxed">
                                T2V connects to all your systems to create a unified data layer, cleaning and standardizing metrics automatically.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                                <TrendingUpIcon />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">The Outcome</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Instant access to trusted headcount, attrition, and cost data. 100% executive confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Stop guessing. Start knowing.</h2>
                <Link to="/request-demo">
                    <Button size="lg" className="h-12 px-8 rounded-full">See Analytics in Action <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </Link>
            </div>
        </div>
    );
}

function TrendingUpIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-6 h-6"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
    )
}
