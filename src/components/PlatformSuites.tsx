"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@/components/ui/button"
import {
    Database,
    BrainCircuit,
    Building2,
    GraduationCap,
    Rocket,
    MessageSquare,
    ShieldAlert,
    Search,
    Users,
    Briefcase,
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    Layers
} from "lucide-react"

export function PlatformSuites() {
    const suites = [
        {
            name: "T2V CoreAI",
            tagline: "Workforce Master Data Intelligence",
            headline: "The Foundation of Workforce Truth",
            subheadline: "Unify employee data into a single, governed source of truth.",
            valueProp: "Eliminates fragmented HR data by scrubbing, validating, and harmonizing records across all enterprise systems.",
            outcomes: ["Unified workforce record", "Global data governance", "Real-time accuracy"],
            cta: "Explore T2V CoreAI",
            icon: Database
        },
        {
            name: "T2V KnowledgeAI",
            tagline: "Enterprise Knowledge Fabric",
            headline: "Your Organization's Collective Brain",
            subheadline: "Transform documents into an intelligent, queryable knowledge base.",
            valueProp: "Ingests SOPs, policies, and manuals to create a semantic knowledge layer accessible to every employee.",
            outcomes: ["Instant answer retrieval", "Reduced repetition", "24/7 Knowledge availability"],
            cta: "Discover T2V KnowledgeAI",
            icon: BrainCircuit
        },
        {
            name: "T2V Vertical KnowledgeAI",
            tagline: "Industry-Specific Intelligence",
            headline: "Expertise That Understands Your Business",
            subheadline: "Domain-tuned models for regulated industries.",
            valueProp: "Pre-trained on industry regulations and standards to ensure safe, accurate, and compliant AI outputs.",
            outcomes: ["Regulatory precision", "Zero hallucinations", "Industry-grade trust"],
            cta: "See Vertical AI",
            icon: Building2
        },
        {
            name: "T2V AccelerateAI",
            tagline: "Knowledge Acceleration Engine",
            headline: "Speed to Proficiency",
            subheadline: "Onboarding and upskilling at the speed of AI.",
            valueProp: "Delivers personalized, adaptive learning paths that reduce ramp-up time and boost workforce readiness.",
            outcomes: ["Faster time-to-productivity", "Adaptive learning paths", "Continuous reinforcement"],
            cta: "Accelerate Talent",
            icon: Rocket
        },
        {
            name: "T2V TalentAI",
            tagline: "Skills & Capability Intelligence",
            headline: "Future-Proof Your Workforce",
            subheadline: "Dynamic skills mapping and gap analysis.",
            valueProp: "Real-time visibility into organizational capabilities, helping you predict and close skill gaps before they impact business.",
            outcomes: ["Real-time skills inventory", "Predictive gap analysis", "Strategic workforce planning"],
            cta: "Explore T2V TalentAI",
            icon: GraduationCap
        },
        {
            name: "T2V RecruitAI",
            tagline: "AI-Native Recruitment Platform",
            headline: "Intelligent Talent Acquisition",
            subheadline: "Sourcing, screening, and matching on autopilot.",
            valueProp: "Automates the entire hiring funnel—from candidate discovery to ranking—ensuring you find the best talent faster.",
            outcomes: ["50% faster hiring", "Bias-free screening", "Top-tier candidate quality"],
            cta: "Scale Hiring",
            icon: Search
        },
        {
            name: "T2V ComplyAI",
            tagline: "Workforce Compliance & Legal Intelligence",
            headline: "Automated Global Compliance",
            subheadline: "Navigate complex labor laws with confidence.",
            valueProp: "Monitors changes in global labor regulations and proactively alerts you to compliance risks.",
            outcomes: ["Proactive risk alerts", "Global regulatory coverage", "Audit-ready trails"],
            cta: "Secure Compliance",
            icon: ShieldAlert
        },
        {
            name: "T2V DisputeAI",
            tagline: "AI-Driven Labor Dispute Resolution",
            headline: "Conflict Intelligence & Prevention",
            subheadline: "Identify and resolve friction early.",
            valueProp: "Analyzes grievance patterns to predict disputes and suggests fair, compliant resolution pathways.",
            outcomes: ["Early friction detection", "Standardized resolution", "Reduced legal risk"],
            cta: "Resolve Disputes",
            icon: CheckCircle2
        },
        {
            name: "T2V ContractAI",
            tagline: "Contractor & Gig Workforce Management",
            headline: "Flexible Workforce Control",
            subheadline: "Seamless management of external talent.",
            valueProp: "End-to-end lifecycle management for contractors, from procurement and SOWs to payments and compliance.",
            outcomes: ["Total contractor visibility", "Automated SOW management", "Risk-free engagement"],
            cta: "Manage Contracts",
            icon: Users
        },
        {
            name: "T2V PerformAI",
            tagline: "Vendor & Contract Performance Intelligence",
            headline: "Outcome-Driven Performance",
            subheadline: "Track and optimize service delivery.",
            valueProp: "Monitors vendor SLAs and contractor deliverables in real-time to ensure value for money.",
            outcomes: ["SLA adherence tracking", "Vendor scorecards", "Optimized spend"],
            cta: "Optimize Performance",
            icon: Briefcase
        },
        {
            name: "T2V PortalAI",
            tagline: "Conversational Workforce Experience",
            headline: "The AI Front Door for Everything",
            subheadline: "A single copilot for every employee need.",
            valueProp: "One conversational interface for HR, IT, and Ops requests, delivering instant resolution and autonomous workflows.",
            outcomes: ["Self-service resolution", "Seamless employee experience", "Integrated workflows"],
            cta: "Experience T2V PortalAI",
            icon: MessageSquare
        }
    ]

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 6000 })])

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section id="platform" className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4">

                {/* Platform Level Header */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8" data-aos="fade-up">
                    <div className="max-w-4xl">
                        <span className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-3 block">T2V Platform</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            One Platform. Modular Intelligence. <br /><span className="text-slate-500">Exponential Value.</span>
                        </h2>

                        <p className="text-xl text-slate-600 font-medium mb-8 max-w-2xl">
                            Unified intelligence across Employees, Contractors, Knowledge, Compliance, and Performance.
                        </p>

                        {/* Platform Stats/Outcomes - Clean Cards */}
                        <div className="flex flex-wrap gap-6">
                            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                                <div className="text-2xl font-bold text-slate-900 mb-1">40–50%</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wide font-medium">Productivity Gain</div>
                            </div>
                            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                                <div className="text-2xl font-bold text-slate-900 mb-1">30–60%</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wide font-medium">Cost Reduction</div>
                            </div>
                            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                                <div className="text-2xl font-bold text-slate-900 mb-1">3x</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wide font-medium">Faster Scaling</div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons - Simple & Clean */}
                    <div className="flex gap-3 shrink-0 mb-2">
                        <Button variant="outline" size="icon" onClick={scrollPrev} className="h-12 w-12 rounded-full border-slate-200 hover:bg-white hover:border-slate-300 text-slate-600 hover:text-slate-900 bg-white shadow-sm transition-all">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={scrollNext} className="h-12 w-12 rounded-full border-slate-200 hover:bg-white hover:border-slate-300 text-slate-600 hover:text-slate-900 bg-white shadow-sm transition-all">
                            <ArrowRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative overflow-hidden cursor-grab active:cursor-grabbing pb-12" ref={emblaRef}>
                    <div className="flex gap-6">
                        {suites.map((suite, i) => (
                            <div key={i}
                                className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
                                data-aos="fade-up"
                                data-aos-delay={i * 50}
                            >
                                <div className="group h-full bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col hover:shadow-md hover:border-slate-300 transition-all duration-300">
                                    {/* Header Part */}
                                    <div className="flex items-start gap-5 mb-8">
                                        <div className="h-12 w-12 shrink-0 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 border border-blue-100/50">
                                            <suite.icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <div className="text-blue-600 font-bold uppercase tracking-wider text-[10px] mb-2">{suite.name}</div>
                                            <h3 className="text-xl font-bold text-slate-900 leading-tight min-h-[56px] flex items-center">{suite.tagline}</h3>
                                        </div>
                                    </div>

                                    {/* Headline & Value */}
                                    <div className="mb-8 space-y-4 flex-1">
                                        <div>
                                            <h4 className="text-base font-semibold text-slate-800 mb-1">{suite.headline}</h4>
                                            <p className="text-slate-500 italic text-sm">"{suite.subheadline}"</p>
                                        </div>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            {suite.valueProp}
                                        </p>
                                    </div>

                                    {/* Key Outcomes */}
                                    <div className="mt-auto bg-slate-50 rounded-lg p-5 border border-slate-100 mb-6">
                                        <h5 className="font-bold text-slate-900 text-xs uppercase mb-3 flex items-center gap-2">
                                            <Layers className="h-3 w-3 text-blue-500" /> Key Outcomes
                                        </h5>
                                        <ul className="space-y-2">
                                            {suite.outcomes.slice(0, 3).map((outcome, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                                    <span className="line-clamp-1" title={outcome}>{outcome}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA */}
                                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                                        <span className="text-slate-400 text-xs font-medium">Learn more</span>
                                        <button className="text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                            {suite.cta} <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
