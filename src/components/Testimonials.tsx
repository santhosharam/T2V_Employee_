"use client"

import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 5000 })])

    const testimonials = [
        {
            quote: "T2V has completely transformed how we view workforce data. It's no longer just records; it's predictive intelligence that drives our hiring and retention strategies.",
            author: "Sarah Jenkins",
            role: "CHRO, Global Tech Solutions",
            rating: 5
        },
        {
            quote: "The ability to have autonomous agents handle routine compliance checks has saved us thousands of man-hours. The ROI was evident within the first quarter.",
            author: "Michael Chang",
            role: "VP of Operations, FinSecure Bank",
            rating: 5
        },
        {
            quote: "Finally, a platform that understands the complexity of managing a hybrid, global workforce. The vertical-specific knowledge graph is a game changer for our industry.",
            author: "Elena Rossi",
            role: "Director of People, PharmaCare Inc.",
            rating: 5
        },
        {
            quote: "We replaced three legacy systems with T2V. The unified view of our contractors and full-time employees has eliminated 90% of our data silos.",
            author: "David Okonjo",
            role: "CTO, LogisticsPro",
            rating: 5
        },
        {
            quote: "The predictive analytics for talent acquisition are scary accurate. We know exactly when to hire and for what skills before the need becomes a crisis.",
            author: "Amanda Lee",
            role: "Head of Talent, RetailGiant",
            rating: 5
        }
    ]

    return (
        <section className="py-24 bg-background border-t border-border/40 relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm" data-aos="fade-up">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground" data-aos="fade-up" data-aos-delay="100">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        See how global enterprises are using T2V to drive growth and efficiency.
                    </p>
                </div>

                <div className="relative overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-6">
                        {testimonials.map((t, i) => (
                            <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                                <div className="h-full p-8 rounded-2xl glass-card border border-border bg-card hover:border-primary/50 transition-colors flex flex-col relative group shadow-sm hover:shadow-lg" data-aos="zoom-in" data-aos-delay={i * 100}>
                                    <div className="absolute top-6 right-8 text-primary/20 group-hover:text-primary transition-colors">
                                        <Quote className="h-12 w-12 fill-current" />
                                    </div>

                                    <div className="flex gap-1 mb-6 text-yellow-500">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-current" />
                                        ))}
                                    </div>

                                    <blockquote className="text-lg text-foreground/80 leading-relaxed flex-1 mb-8 italic">
                                        "{t.quote}"
                                    </blockquote>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className="h-12 w-12 rounded-full gradient-border bg-secondary flex items-center justify-center text-primary font-bold text-lg border border-primary/20">
                                            {t.author.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-foreground">{t.author}</div>
                                            <div className="text-sm text-muted-foreground font-medium">{t.role}</div>
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
