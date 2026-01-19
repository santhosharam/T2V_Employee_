"use client"

import { CheckCircle2 } from "lucide-react"

export function CoreCapabilities() {
    const caps = [
        "Domain-tuned LLMs & RAG pipelines",
        "Knowledge Graph–driven intelligence",
        "Predictive workforce & risk analytics",
        "Autonomous agent orchestration",
        "Enterprise-grade security & scalability"
    ]

    return (
        <section className="py-24 bg-background text-foreground border-t border-border/40">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8" data-aos="fade-right">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                            The AI-Native<br />Difference
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            T2V isn't a chatbot on top of a legacy database. It's a fundamental reimagining of how workforce data is structured, understood, and acted upon.
                        </p>

                        <ul className="space-y-6">
                            {caps.map((cap, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg text-foreground/80">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                    <span>{cap}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative h-[500px] w-full bg-[#100628] rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl" data-aos="zoom-in" data-aos-delay="200">
                        {/* Fake Code / Architecture Visualization */}
                        <div className="absolute inset-0 p-8 font-mono text-sm text-slate-300 opacity-60">
                            <div className="mb-4 text-primary">initializing_agent_swarm(v2.4)...</div>
                            <div className="pl-4 border-l border-white/10 mb-2">
                                {`> loading_context(source: "global_policy_v2")`}
                            </div>
                            <div className="pl-4 border-l border-white/10 mb-2">
                                {`> vector_search(query: "compliance_risk_q3", k=50)`}
                            </div>
                            <div className="pl-4 border-l border-white/10 mb-2 text-green-400">
                                {`> OK: 47 risks identified`}
                            </div>
                            <div className="pl-4 border-l border-white/10 mb-4 text-blue-400">
                                {`> initiating_mitigation_workflow(auto=True)`}
                            </div>

                            {/* Abstract nodes */}
                            <div className="mt-12 grid grid-cols-3 gap-8">
                                <div className="h-20 bg-white/5 rounded animate-pulse" />
                                <div className="h-20 bg-white/5 rounded animate-pulse delay-100" />
                                <div className="h-20 bg-white/5 rounded animate-pulse delay-200" />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#100628] to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    )
}
