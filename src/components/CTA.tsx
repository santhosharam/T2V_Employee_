"use client"

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function CTA() {
    return (
        <section className="py-24 bg-background text-center border-t border-border/40 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                        Transform Workforce Operations into <span className="text-primary">Workforce Intelligence</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Join the future of work. Scalable, secure, and AI-native.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <Link to="/request-demo">
                            <Button size="lg" className="h-14 px-8 text-lg btn-primary-gradient border-0 hover:shadow-[0_0_20px_rgba(115,0,209,0.5)] transition-all duration-300 text-white">
                                Request Demo
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-border text-foreground bg-transparent hover:bg-secondary hover:text-foreground">
                            Start Enterprise Trial
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
