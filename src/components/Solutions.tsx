"use client"

export function Solutions() {
    const solutions = [
        "Workforce Intelligence",
        "Knowledge & Learning Acceleration",
        "AI-Native Talent Acquisition",
        "Compliance & Legal Intelligence",
        "Labor Dispute Prevention & Resolution",
        "Hybrid & Contract Workforce Enablement"
    ]

    const industries = [
        "Technology & Software",
        "Healthcare & Life Sciences",
        "Banking & Financial Services",
        "Manufacturing & Supply Chain",
        "Retail & Consumer Goods",
        "Professional Services"
    ]

    return (
        <section id="solutions" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <div>
                            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-3 block" data-aos="fade-up">Solutions</span>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8" data-aos="fade-up" data-aos-delay="100">
                                Solutions Built for <br />Real Enterprise Challenges
                            </h2>
                            <div className="space-y-3">
                                {solutions.map((sol, i) => (
                                    <div key={i}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all cursor-default"
                                        data-aos="fade-up"
                                        data-aos-delay={i * 50}
                                    >
                                        <div className="h-2 w-2 rounded-full bg-blue-600 shadow-sm" />
                                        <span className="text-lg font-medium text-slate-700">{sol}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12" id="industries">
                        <div>
                            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-3 block" data-aos="fade-up">Industries</span>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8" data-aos="fade-up" data-aos-delay="100">
                                Industry-Specific, <br />Regulation-Aware Intelligence
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {industries.map((ind, i) => (
                                    <div key={i}
                                        className="p-5 rounded-xl bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:shadow-md hover:text-blue-700 transition-all group cursor-default"
                                        data-aos="zoom-in"
                                        data-aos-delay={i * 50}
                                    >
                                        <span className="text-base font-semibold">{ind}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
