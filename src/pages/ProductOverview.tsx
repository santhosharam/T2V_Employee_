import { Button } from "@/components/ui/button";
import { Zap, BrainCircuit, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductOverview() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-white">
            {/* Hero */}
            <div className="container mx-auto px-4 text-center max-w-4xl mb-24">
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
                    The Operating System for <br /> <span className="text-blue-600">People Intelligence</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                    T2V Employee unifies your fragmented workforce data into a single, intelligent layer. No more spreadsheets. No more guesswork.
                </p>
                <Link to="/request-demo">
                    <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-xl shadow-blue-200/50 bg-blue-600 hover:bg-blue-700">
                        See the Platform
                    </Button>
                </Link>
            </div>

            {/* Visual Walkthrough - Tabs/Scroll Section */}
            <div className="container mx-auto px-4 mb-32">
                <div className="bg-slate-900 rounded-3xl p-1 md:p-4 shadow-2xl overflow-hidden border border-slate-800">
                    <div className="bg-slate-800/50 rounded-2xl aspect-[16/9] flex items-center justify-center text-slate-500 relative overflow-hidden">
                        {/* Abstract UI representation */}
                        <div className="absolute inset-x-20 top-20 bottom-0 bg-slate-900 rounded-t-xl border border-slate-700 shadow-2xl opacity-50"></div>
                        <div className="absolute inset-x-10 top-10 bottom-0 bg-slate-800 rounded-t-xl border border-slate-600 shadow-2xl"></div>
                        <span className="relative z-10 text-xl font-medium text-slate-400">Interactive Platform Walkthrough</span>
                    </div>
                </div>
            </div>

            {/* Core Pillars */}
            <div className="bg-slate-50 py-24 border-y border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why T2V stands apart</h2>
                        <p className="text-slate-600 text-lg">Built from the ground up on modern AI architecture, not legacy HR tech.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                                <BrainCircuit className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Native Core</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Unlike wrappers on old DBs, our knowledge graph understands relationships between skills, roles, and business outcomes.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <LayoutDashboard className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Unified Visibility</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Connects to HRIS, ATS, Payroll, and Performance tools to give you one single source of truth.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Value</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Deploys in weeks, not months. Pre-built connectors and models mean faster time to ROI.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Integration List */}
            <div className="py-24 container mx-auto px-4 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">Works with your ecosystem</p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-60">
                    {["Workday", "Salesforce", "Jira", "Slack", "ADP", "Greenhouse", "BambooHR"].map((tool, i) => (
                        <div key={i} className="px-6 py-3 rounded-full bg-slate-100 font-semibold text-slate-500 border border-slate-200">
                            {tool}
                        </div>
                    ))}
                    <div className="px-6 py-3 rounded-full bg-slate-50 font-semibold text-slate-400 border border-slate-100">
                        +50 more
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-20">
                <div className="bg-blue-600 rounded-3xl p-12 text-center text-white max-w-5xl mx-auto shadow-2xl shadow-blue-200">
                    <h2 className="text-3xl font-bold mb-6">Experience the future of workforce intelligence</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/request-demo">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 h-14 px-8 rounded-full text-lg">Schedule Product Tour</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
