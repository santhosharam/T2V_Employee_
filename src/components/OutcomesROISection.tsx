"use client"

import { TrendingUp, ArrowRight, DollarSign, Clock, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function OutcomesROISection() {
    return (
        <section className="py-24 bg-secondary/30 border-t border-border/40">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div data-aos="fade-right">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Enterprise Outcomes</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            Measured Outcomes. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Proven ROI.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            T2V-Employee delivers measurable business value across productivity, cost efficiency, and risk reduction. Move beyond soft HR metrics to hard financial impact.
                        </p>

                        <div className="flex flex-col gap-4">
                            <Link to="/outcomes-roi">
                                <Button className="group h-12 px-6 bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/10 w-fit">
                                    View Detailed Outcomes <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6" data-aos="fade-left">
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                            <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                                <TrendingUp className="h-5 w-5" />
                            </div>
                            <div className="text-3xl font-bold text-foreground mb-1">40–50%</div>
                            <div className="text-sm text-muted-foreground">Productivity Improvement</div>
                        </div>

                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                <Clock className="h-5 w-5" />
                            </div>
                            <div className="text-3xl font-bold text-foreground mb-1">90 Days</div>
                            <div className="text-sm text-muted-foreground">To Value Realization</div>
                        </div>

                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                            <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            <div className="text-3xl font-bold text-foreground mb-1">92%</div>
                            <div className="text-sm text-muted-foreground">Compliance Safety</div>
                        </div>

                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                            <div className="h-10 w-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                                <DollarSign className="h-5 w-5" />
                            </div>
                            <div className="text-3xl font-bold text-foreground mb-1">30–60%</div>
                            <div className="text-sm text-muted-foreground">Ops Cost Reduction</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
