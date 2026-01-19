"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import {
    TrendingUp,
    Server,
    Building2,
    Factory,
    Headphones,
    BrainCircuit,
    ArrowLeft,
    ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function AIOpsSolutions() {
    // 3 slides per view on desktop, 1 on mobile
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 5000 })])

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const solutions = [
        {
            title: "Gen AI + AI Ops Lean Sigma",
            desc: "Revolutionizing Operations: Gen AI Meets Lean Sigma for Intelligent Efficiency and Continuous Improvement.",
            icon: TrendingUp
        },
        {
            title: "Gen AI + AI Ops for NOC",
            desc: "Revolutionizing NOC with the Synergy of Gen AI and AI Ops. Empower Your Network Ops with Autonomous Capabilities.",
            icon: Server
        },
        {
            title: "Gen AI + AI Ops for Building",
            desc: "Architecting the Future: Transforming Building Operations with Gen AI + AI Ops Synergy.",
            icon: Building2
        },
        {
            title: "Gen AI + AI Ops for Mfg",
            desc: "Manufacturing Reinvented: Unleashing the Power of Gen AI + AI Ops Synergy.",
            icon: Factory
        },
        {
            title: "Gen AI + AI Ops for CX",
            desc: "\"Elevating Customer Experience: Harnessing the Synergy of Gen AI + AI Ops.\"",
            icon: Headphones
        },
        {
            title: "Gen AI + AI Ops for KPO",
            desc: "Knowledge Process Optimization: Revolutionizing KPO with Gen AI + AI Ops Synergy.",
            icon: BrainCircuit
        }
    ]

    return (
        <section className="py-24 bg-background border-t border-border/40 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Header with Navigation */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6" data-aos="fade-up">
                    <div className="max-w-3xl">
                        <span className="text-secondary-foreground font-bold uppercase tracking-wider text-sm mb-2 block">Portfolio</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            Gen AI Powered Next Gen <br /><span className="text-primary">AI Ops Services</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Beyond Automation, Self-Awareness: Unleash the potential of Gen AI and AI Ops for an infrastructure that learns, adapts, and thrives
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <Button variant="outline" size="icon" onClick={scrollPrev} className="rounded-full border-border hover:bg-secondary hover:text-foreground bg-transparent text-foreground">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={scrollNext} className="rounded-full border-border hover:bg-secondary hover:text-foreground bg-transparent text-foreground">
                            <ArrowRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative cursor-grab active:cursor-grabbing" ref={emblaRef}>
                    <div className="flex gap-6">
                        {solutions.map((sol, i) => (
                            <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="h-full glass-card p-1 pb-6 rounded-2xl group hover:-translate-y-2 transition-all duration-300 border border-border shadow-sm">
                                    <div className="p-8 h-full flex flex-col">
                                        <div className="h-16 w-16 mb-8 rounded-2xl bg-secondary flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform border border-border">
                                            <sol.icon className="h-8 w-8" />
                                        </div>

                                        <h3 className="text-xl font-bold text-foreground mb-4 leading-snug">
                                            {sol.title}
                                        </h3>

                                        <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                                            {sol.desc}
                                        </p>

                                        <div className="mt-8 pt-6 border-t border-border flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:opacity-100 opacity-60 transition-opacity">
                                            Explore Solution
                                        </div>
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
