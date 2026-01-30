import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Clock, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeatureReports() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-white">
            {/* Hero */}
            <div className="container mx-auto px-4 text-center max-w-4xl mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm mb-6">
                    <FileText className="w-4 h-4" /> Automated Reports & KPIs
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                    Board-Ready Reports <br /> <span className="text-indigo-600">In Seconds</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                    Stop spending weeks on manual slide decks. Generate comprehensive workforce reports instantly.
                </p>
                <div className="flex justify-center gap-4">
                    <Link to="/request-demo">
                        <Button size="lg" className="h-12 px-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full">
                            Get a Demo
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Visual Section */}
            <div className="container mx-auto px-4 mb-24">
                <div className="bg-slate-100 rounded-3xl aspect-[16/9] max-w-5xl mx-auto flex items-center justify-center border border-slate-200 shadow-2xl">
                    <span className="text-slate-400 font-medium">Report Generator Interface Placeholder</span>
                </div>
            </div>

            {/* Problem / Solution Grid */}
            <div className="bg-slate-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">The Problem</h3>
                            <p className="text-slate-600 leading-relaxed">
                                HR and Ops teams spend hundreds of hours manually compiling QBRs and monthly reports.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">The Solution</h3>
                            <p className="text-slate-600 leading-relaxed">
                                T2V automates the entire reporting pipeline, from data collection to visualization and narrative generation.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                                <FileCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">The Outcome</h3>
                            <p className="text-slate-600 leading-relaxed">
                                90% reduction in reporting time. Leadership gets timely insights, not stale data.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Automate your reporting.</h2>
                <Link to="/request-demo">
                    <Button size="lg" className="h-12 px-8 rounded-full">See Automated Reports <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </Link>
            </div>
        </div>
    );
}
