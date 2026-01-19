"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"

export function HeroSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000 })])

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const slides = [
        {
            title: "T2V CoreAI",
            subtitle: "The Single Source of Truth for Your Entire Workforce",
            desc: "CoreAI eliminates fragmented HR data by intelligently ingesting, enriching, and governing workforce records across systems, geographies, and engagement models.",
            bullets: ["Near-zero data inconsistency", "Always audit-ready records", "Real-time organizational visibility"],
            primaryCta: "Explore CoreAI",
            secondaryCta: null,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "T2V KnowledgeAI",
            subtitle: "Turn Organizational Knowledge into a Living Asset",
            desc: "Capture, govern, and accelerate access to enterprise knowledge—automatically. Transforms policies, SOPs, and best practices into searchable intelligence.",
            bullets: ["60% faster access to info", "Reduced expert dependency", "Faster onboarding"],
            primaryCta: "Discover KnowledgeAI",
            secondaryCta: null,
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "T2V Vertical KnowledgeAI",
            subtitle: "Industry-Specific Knowledge. Zero Hallucinations.",
            desc: "Delivers role-aware, regulation-aligned answers grounded in verified content using domain-tuned LLMs and RAG pipelines.",
            bullets: ["70% faster access to answers", "Fewer compliance errors", "Faster time-to-productivity"],
            primaryCta: "See Vertical KnowledgeAI",
            secondaryCta: null,
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "T2V TalentAI",
            subtitle: "Know Your Skills. Predict Your Gaps. Build the Future.",
            desc: "Continuously map and develop workforce capabilities aligned with business goals. Infers skills from real work and predicts future gaps.",
            bullets: ["Continuous upskilling", "Higher knowledge retention", "Reduced external hiring"],
            primaryCta: "Explore TalentAI",
            secondaryCta: null,
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "T2V AccelerateAI",
            subtitle: "Cut Time-to-Proficiency in Half",
            desc: "Accelerate onboarding and upskilling with adaptive AI-driven learning. Compresses learning curves using simulations, microlearning, and real-time learning adaptation.",
            bullets: ["Up to 50% faster onboarding", "Faster workforce readiness", "Higher agility"],
            primaryCta: "Accelerate Learning",
            secondaryCta: null,
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "T2V PortalAI",
            subtitle: "One Conversational Interface for Every Worker",
            desc: "Employees, contractors, and vendors—served instantly, in any language. A conversational, role-aware self-service experience.",
            bullets: ["70% reduction in HR workload", "24/7 multilingual support", "Higher engagement"],
            primaryCta: "Experience PortalAI",
            secondaryCta: null,
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "T2V AssessAI",
            subtitle: "Performance Intelligence Without Bias",
            desc: "Fair, continuous, and insight-driven assessments for all workforce types. Combines sentiment analysis, predictive insights, and knowledge application metrics.",
            bullets: ["50% faster review cycles", "More transparent evaluations", "Clear linkage to rewards"],
            primaryCta: "View AssessAI",
            secondaryCta: null,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "T2V ComplyAI",
            subtitle: "Stay Compliant—Before Risk Becomes Reality",
            desc: "Predict, prevent, and remediate workforce compliance risks globally. Monitor regulations and automate audits using AI.",
            bullets: ["Reduced regulatory exposure", "Continuous audit readiness", "Lower compliance costs"],
            primaryCta: "Secure Compliance",
            secondaryCta: null,
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "T2V RecruitAI",
            subtitle: "Hire Faster. Hire Smarter. Hire Fairer.",
            desc: "Recruitment delivered as an intelligent, managed service. Automates sourcing, screening, and hiring with bias-aware AI and predictive hiring pipelines.",
            bullets: ["50% faster time-to-hire", "Higher quality talent pools", "Reduced recruitment burden"],
            primaryCta: "Scale Hiring with RecruitAI",
            secondaryCta: null,
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "T2V ContractAI",
            subtitle: "Master Your Contingent Workforce",
            desc: "Manage contractors, freelancers, and gig workers with intelligence and control. Automates contracts, utilization, and payments.",
            bullets: ["Optimized contractor utilization", "30% reduction in overhead", "Compliance-assured operations"],
            primaryCta: "Manage Contracts Smarter",
            secondaryCta: null,
            image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "T2V PerformAI",
            subtitle: "Make Every Contract Deliver Results",
            desc: "Track SLAs, predict risk, and optimize vendor performance. Provides real-time performance visibility and predictive insights.",
            bullets: ["Higher SLA adherence", "Reduced vendor risk", "Data-driven renewal decisions"],
            primaryCta: "Optimize Performance",
            secondaryCta: null,
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "T2V Platform",
            subtitle: "The AI-Native Platform for the Future of Work",
            desc: "Employees. Contractors. Knowledge. Compliance. Performance—Unified. From workforce data to workforce intelligence.",
            bullets: ["40–50% productivity improvement", "30–60% reduction in ops cost", "Faster scaling"],
            primaryCta: "Request Platform Demo",
            secondaryCta: null,
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
        }
    ]

    return (
        <section className="relative bg-background min-h-[600px] flex items-center overflow-hidden border-b border-border/40 group/slider">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 animate-pulse-glow" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

            <div className="container mx-auto px-4 relative z-10" ref={emblaRef}>
                <div className="flex">
                    {slides.map((slide, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 py-8 md:py-16">
                            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                                <div className="space-y-8 text-center lg:text-left">
                                    {/* Brand/Subtitle Tag */}
                                    {(slide.title === "T2V" || index === 0) && (
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-secondary border border-border text-foreground font-medium text-sm mb-4" data-aos="fade-up">
                                            AI-Native Workforce Intelligence
                                        </div>
                                    )}

                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight" data-aos="fade-up" data-aos-delay="100">
                                        {slide.title}
                                        <span className="text-foreground/80 font-medium block text-2xl md:text-3xl mt-4 leading-normal">{slide.subtitle}</span>
                                    </h1>

                                    {slide.desc && <p className="text-lg text-muted-foreground leading-relaxed" data-aos="fade-up" data-aos-delay="200">{slide.desc}</p>}

                                    {slide.bullets && (
                                        <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                                            {slide.bullets.map((b, i) => (
                                                <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-muted/50 backdrop-blur rounded-lg border border-border shadow-sm text-sm">
                                                    <CheckCircle2 className="h-4 w-4 text-primary" />
                                                    <span className="font-medium text-foreground/80">{b}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4" data-aos="fade-up" data-aos-delay="300">
                                        <Button size="lg" className="h-12 px-8 text-lg btn-primary-gradient border-0 hover:shadow-[0_0_20px_rgba(115,0,209,0.5)] transition-all duration-300 shadow-lg shadow-purple-900/20 text-white">
                                            {slide.primaryCta} <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                        {slide.secondaryCta && (
                                            <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-border text-foreground bg-transparent hover:bg-secondary hover:text-foreground">
                                                {slide.secondaryCta}
                                            </Button>
                                        )}
                                    </div>
                                </div>

                                {/* Banner / Visual Section */}
                                <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden glass-card shadow-xl hidden md:block group" data-aos="fade-left" data-aos-delay="400">
                                    {/* Image with overlay */}
                                    <div className="absolute inset-0 bg-transparent z-0">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                                    </div>

                                    {/* Floating Tag */}
                                    <div className="absolute bottom-8 right-8 glass-card border border-border text-foreground px-4 py-2 rounded-lg shadow-lg font-bold text-sm backdrop-blur-md z-10 animate-float">
                                        T2V Intelligence Engine
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full border-border bg-background/50 hover:bg-background shadow-lg backdrop-blur opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300"
            >
                <ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
            <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full border-border bg-background/50 hover:bg-background shadow-lg backdrop-blur opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300"
            >
                <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
        </section>
    )
}
