import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Puzzle, Users, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeatureProductivity() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-white">
            {/* Hero */}
            <div className="container mx-auto px-4 text-center max-w-4xl mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 font-medium text-sm mb-6">
                    <Zap className="w-4 h-4" /> Predictive Productivity Forecasting
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                    Spot Bottlenecks <br /> <span className="text-yellow-600">Before They Happen</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                    Forecast workforce capacity gaps and productivity dips with AI-driven predictive modeling.
                </p>
                <div className="flex justify-center gap-4">
                    <Link to="/request-demo">
                        <Button size="lg" className="h-12 px-8 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full">
                            Get a Demo
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Visual Section */}
            <div className="container mx-auto px-4 mb-24">
                <div className="bg-slate-100 rounded-3xl aspect-[16/9] max-w-5xl mx-auto flex items-center justify-center border border-slate-200 shadow-2xl">
                    <span className="text-slate-400 font-medium">Productivity Forecast Chart Placeholder</span>
                </div>
            </div>

            {/* Problem / Solution Grid */}
            <div className="bg-slate-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4">
                                <Puzzle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">The Problem</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Projects get delayed due to unforeseen staffing shortages or burnout, killing momentum.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-4">
                                <LineChart className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">The Solution</h3>
                            <p className="text-slate-600 leading-relaxed">
                                T2V analyzes historical trends to predict burnout risk and capacity shortages 3 months in advance.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">The Outcome</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Optimized resource allocation, reduced burnout, and on-time project delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Future-proof your productivity.</h2>
                <Link to="/request-demo">
                    <Button size="lg" className="h-12 px-8 rounded-full">See Predictive AI <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </Link>
            </div>
        </div>
    );
}
