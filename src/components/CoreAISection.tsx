import { Database, ShieldCheck, Lock, RefreshCw, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import VerticalModuleTabs from "@/components/ui/verticaltab"
import { platformModulesConfig } from "@/lib/platform-modules-config"

export function CoreAISection() {
    const coreAIData = platformModulesConfig["core-ai"]

    // Panel 2: Statistics
    const stats = [
        {
            value: "99.9%",
            label: "Data Accuracy",
            explanation: "Automated validation and deduplication ensure decision-ready workforce data across all systems."
        },
        {
            value: "40%",
            label: "Operational Cost Reduction",
            explanation: "Eliminate manual reconciliation, reduce IT overhead, and free HR teams for strategic work."
        },
        {
            value: "10x",
            label: "Faster Reporting",
            explanation: "Real-time dashboards and pre-built analytics replace weeks of manual data gathering."
        }
    ]

    // Panel 3: Portfolio/Capability Cards
    const capabilities = [
        {
            title: "Unified Data Integration",
            desc: "Connects HRIS, ATS, payroll, ERP, and vendor platforms into one centralized workforce repository.",
            icon: Database
        },
        {
            title: "Intelligent Data Quality",
            desc: "Automatically detects, flags, and resolves duplicates, inconsistencies, and missing records.",
            icon: ShieldCheck
        },
        {
            title: "Governance & Compliance",
            desc: "Enforces role-based access, PII masking, audit trails, and regulatory compliance at the data layer.",
            icon: Lock
        },
        {
            title: "Real-Time Synchronization",
            desc: "Bi-directional sync ensures all systems reflect the same accurate, up-to-date employee information.",
            icon: RefreshCw
        }
    ]

    return (
        <section id="core-ai" className="py-20 px-4 bg-background">
            <div className="container mx-auto max-w-7xl">

                {/* Card Container wrapping all panels */}
                <div className="bg-card border border-border rounded-3xl shadow-lg p-8 md:p-12 lg:p-16">

                    {/* Panel 1: Section Title (Brief) */}
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
                            <Database className="w-4 h-4" />
                            <span>Foundation Layer</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            T2V CoreAI
                        </h2>
                        <p className="text-xl font-medium text-primary mb-4">
                            The intelligent data foundation that unifies, governs, and activates your workforce information.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            T2V CoreAI eliminates data silos and creates a single, trusted source of truth across all HR, payroll, talent, and enterprise systems—enabling faster decisions, stronger compliance, and measurable operational efficiency.
                        </p>
                    </div>

                    {/* Panel 2: Section Level Statistics Cards */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/10 border border-border shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="text-5xl font-bold text-primary mb-3">
                                    {stat.value}
                                </div>
                                <div className="text-lg font-semibold text-foreground mb-3">
                                    {stat.label}
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {stat.explanation}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Panel 3: Portfolio Cards */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-foreground text-center mb-10">
                            Core Capabilities
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {capabilities.map((capability, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl bg-background border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all group"
                                >
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                                        <capability.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-lg font-bold text-foreground mb-3">
                                        {capability.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {capability.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Panel 4: Vertical Tabs */}
                    <div className="mb-16">
                        <VerticalModuleTabs data={coreAIData} />
                    </div>

                    {/* Panel 5: CTA */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-12 text-center">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Build your workforce strategy on a foundation of trusted data
                            </h3>
                            <p className="text-lg text-white/90 mb-8 leading-relaxed">
                                T2V CoreAI eliminates data chaos and gives your organization the clarity, compliance, and confidence to execute on strategic HR initiatives.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact">
                                    <Button size="lg" variant="secondary" className="font-semibold text-lg h-14 px-8 w-full sm:w-auto">
                                        Request a Demo
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="bg-transparent border-white/30 text-white hover:bg-white/10 font-semibold text-lg h-14 px-8 w-full sm:w-auto"
                                    >
                                        Download Data Sheet
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                {/* End of Card Container */}

            </div>
        </section>
    )
}
