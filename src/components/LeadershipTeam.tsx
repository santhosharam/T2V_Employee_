"use client"

import { Linkedin, Twitter, Mail } from "lucide-react"

export function LeadershipTeam() {
    const team = [
        {
            name: "Santhosh Kumar",
            role: "Founder & CEO",
            desc: "Visionary leader with 15+ years in AI & Enterprise Automation.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
        },
        {
            name: "Vignesh KS",
            role: "Product Lead",
            desc: "Expert in Product Strategy & scaling SaaS platforms.",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop"
        },
        {
            name: "Swathi Iyer",
            role: "IIT Madras - BTech",
            desc: "Leading AI Engineering & Research initiatives.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
        },
        {
            name: "Arjun Reddy",
            role: "Product Lead - Escrow Chain",
            desc: "Specialist in Blockchain & Secure GenAI architectures.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop"
        },
        // Row 2
        {
            name: "Priya Sharma",
            role: "Head of Marketing",
            desc: "Driving global brand strategy and growth.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop"
        },
        {
            name: "David Chen",
            role: "Lead Data Scientist",
            desc: "Architecting predictive models and LLM fine-tuning.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
        },
        {
            name: "Sarah Johnson",
            role: "Operations Director",
            desc: "Streamlining delivery and operational excellence.",
            image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?q=80&w=2574&auto=format&fit=crop"
        },
        {
            name: "Michael Ross",
            role: "Senior Blockchain Dev",
            desc: "Building secure decentralized infrastructure.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop"
        },
        // Row 3
        {
            name: "Emily Zhang",
            role: "UX/UI Lead",
            desc: "Crafting intuitive and accessible user experiences.",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop"
        },
        {
            name: "Rahul Mehta",
            role: "Cloud Architect",
            desc: "Ensuring scalable and resilient cloud infrastructure.",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop"
        },
        {
            name: "Anita Desai",
            role: "HR Manager",
            desc: "Fostering a culture of innovation and inclusivity.",
            image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2574&auto=format&fit=crop"
        },
        {
            name: "James Wilson",
            role: "Full Stack Lead",
            desc: "Overseeing end-to-end application development.",
            image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=2574&auto=format&fit=crop"
        }
    ]

    return (
        <section className="py-24 bg-background border-t border-border/40 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                    <span className="text-secondary-foreground font-bold uppercase tracking-wider text-sm mb-2 block">Our People</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Leadership & Teams
                    </h2>
                    {/* Decorative Dots */}
                    <div className="flex justify-center gap-2 mb-6">
                        <span className="h-2 w-2 rounded-full bg-primary"></span>
                        <span className="h-2 w-2 rounded-full bg-primary/60"></span>
                        <span className="h-2 w-2 rounded-full bg-primary/30"></span>
                        <div className="h-0.5 w-24 bg-primary self-center rounded-full ml-2"></div>
                    </div>
                </div>

                {/* Grid - 4 Columns */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, i) => (
                        <div key={i}
                            className="glass-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-border shadow-md"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            {/* Image Container */}
                            <div className="aspect-[4/5] relative overflow-hidden bg-muted">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-95 group-hover:opacity-100"
                                />
                                {/* Overlay Socials */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-primary-foreground/90 font-medium text-sm mb-4">{member.role}</p>

                                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors cursor-pointer backdrop-blur-sm">
                                            <Linkedin className="h-4 w-4" />
                                        </div>
                                        <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors cursor-pointer backdrop-blur-sm">
                                            <Twitter className="h-4 w-4" />
                                        </div>
                                        <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors cursor-pointer backdrop-blur-sm">
                                            <Mail className="h-4 w-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
