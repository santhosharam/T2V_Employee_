"use client"

export function LeadershipTeam() {
    return (
        <section className="relative py-32 overflow-hidden rounded-2xl mx-4 my-8">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gray-900/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <span className="text-blue-400 font-bold uppercase tracking-wider text-sm mb-3 block">Our People</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Leadership & Teams
                </h2>
                <div className="flex justify-center gap-2 mb-8">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    <span className="h-2 w-2 rounded-full bg-blue-500/60"></span>
                    <span className="h-2 w-2 rounded-full bg-blue-500/30"></span>
                    <div className="h-0.5 w-24 bg-blue-500 self-center rounded-full ml-2"></div>
                </div>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                    Our team is composed of industry veterans, AI researchers, and enterprise strategists dedicated to redefining workforce intelligence. We are united by a shared mission to empower organizations with actionable insights and ethical AI.
                </p>
            </div>
        </section>
    )
}
