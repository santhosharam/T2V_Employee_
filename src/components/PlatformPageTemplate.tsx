import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { CTA } from "@/components/CTA"

interface PlatformPageProps {
    title: string;
    subtitle: string;
    description: string;
    coreCapabilities: string[];
    outcomes: string[];
}

export function PlatformPageTemplate({ title, subtitle, description, coreCapabilities, outcomes }: PlatformPageProps) {
    return (
        <div className="flex flex-col min-h-screen pt-24">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-primary text-sm mb-6 animate-fade-in">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    AI-Native Platform Suite
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
                    {title}
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium text-primary mb-6 max-w-3xl mx-auto">
                    {subtitle}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                    {description}
                </p>
                <div className="flex justify-center gap-4">
                    <Link to="/request-demo">
                        <Button size="lg" className="btn-primary-gradient text-white">
                            Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="container mx-auto px-4 py-16 relative">
                <div className="absolute inset-0 bg-primary/5 blur-[100px] -z-10 rounded-full pointer-events-none" />
                <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Core Capabilities</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {coreCapabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card shadow-sm hover:border-primary/50 transition-colors">
                            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                            </div>
                            <p className="text-foreground/90 font-medium pt-1">{cap}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Outcomes */}
            <section className="container mx-auto px-4 py-16 bg-muted/30 border-y border-border/40">
                <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Measurable Outcomes</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {outcomes.map((outcome, i) => (
                        <div key={i} className="text-center p-8 rounded-2xl bg-background border border-border shadow-sm">
                            <div className="text-4xl font-bold text-primary mb-4">{i + 1}</div>
                            <p className="text-foreground/80 font-medium">{outcome}</p>
                        </div>
                    ))}
                </div>
            </section>

            <CTA />
        </div>
    )
}
