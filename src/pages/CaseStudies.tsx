import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
    {
        title: "Global Tech Corp Reduces Attrition by 45%",
        category: "Technology",
        summary: "How a 5,000+ employee SaaS company used T2V Predictive Intelligence to identify retention risks and save $12M in turnover costs.",
        metrics: [
            { label: "Retention Improvement", value: "45%", icon: TrendingUp },
            { label: "Savings", value: "$12M", icon: DollarSign },
        ],
        image: "/images/case-study-tech.jpg" // Placeholder path
    },
    {
        title: "Healthcare Giant Automates Compliance for 20k Staff",
        category: "Healthcare",
        summary: "Navigating complex multi-state regulations with T2V ComplyAI to achieve 100% audit readiness.",
        metrics: [
            { label: "Audit Prep Time", value: "-90%", icon: Clock },
            { label: "Compliance Rate", value: "100%", icon: TrendingUp },
        ],
        image: "/images/case-study-health.jpg"
    },
    {
        title: "Retail Chain Standardizes Training Across 500 Locations",
        category: "Retail",
        summary: "Using T2V KnowledgeAI to deliver consistent, bite-sized training to frontline workers, boosting CSAT scores.",
        metrics: [
            { label: "Onboarding Speed", value: "2x", icon: Clock },
            { label: "CSAT Improvement", value: "+30%", icon: TrendingUp },
        ],
        image: "/images/case-study-retail.jpg"
    }
];

export default function CaseStudies() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Customer Success Stories</h1>
                    <p className="text-xl text-slate-600">See how leading enterprises transform their workforce with T2V Employee.</p>
                </div>

                <div className="grid gap-12 max-w-6xl mx-auto">
                    {caseStudies.map((study, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-8 items-center bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">

                            {/* Image Placeholder */}
                            <div className="w-full md:w-1/3 aspect-video bg-slate-200 rounded-xl flex items-center justify-center text-slate-400 font-medium">
                                {study.category} Image
                            </div>

                            <div className="w-full md:w-2/3 space-y-6">
                                <div className="text-sm font-bold text-blue-600 uppercase tracking-wide">{study.category}</div>
                                <h2 className="text-2xl font-bold text-slate-900">{study.title}</h2>
                                <p className="text-slate-600 leading-relaxed">{study.summary}</p>

                                <div className="flex gap-8 py-4 border-t border-b border-slate-200">
                                    {study.metrics.map((metric, m) => (
                                        <div key={m} className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                                <metric.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-lg font-bold text-slate-900">{metric.value}</div>
                                                <div className="text-xs text-slate-500 uppercase font-medium">{metric.label}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Link to="/request-demo">
                                    <Button variant="outline" className="gap-2">Read Full Story <ArrowRight className="w-4 h-4" /></Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-900 rounded-3xl p-12 text-center text-white mt-20 max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Ready to write your success story?</h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">Join hundreds of forward-thinking companies building the future of work.</p>
                    <Link to="/request-demo">
                        <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">Get Started Now</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
