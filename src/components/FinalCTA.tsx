
import { Button } from "@/components/ui/button"
import { ArrowRight, Layers, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

export function FinalCTA() {
    return (
        <section className="py-16 relative overflow-hidden bg-primary/5">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/5 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="max-w-4xl mx-auto" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                        Built for the Complexity of <br />
                        <span className="text-primary">Modern Enterprises</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                        T2V-Employee transforms workforce operations, knowledge, compliance, and talent into continuous business intelligence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/request-demo">
                            <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 w-full sm:w-auto">
                                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link to="/platform">
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/20 bg-background hover:bg-secondary w-full sm:w-auto">
                                Explore Platform
                            </Button>
                        </Link>
                        <Link to="/solutions">
                            <Button size="lg" variant="ghost" className="h-14 px-8 text-lg hover:bg-secondary w-full sm:w-auto text-muted-foreground hover:text-foreground">
                                View Solutions
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-8 text-sm font-medium text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Layers className="w-4 h-4 text-primary" /> Enterprise Grade
                        </div>
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-primary" /> AI-Native
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
