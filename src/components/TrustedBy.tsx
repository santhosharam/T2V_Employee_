"use client"

export function TrustedBy() {
    const clients = [
        "Global Tech", "PharmaCare", "FinBank", "LogisticsPro", "RetailGiant", "ConsultCorp"
    ]

    return (
        <section className="py-12 border-b border-border bg-background relative z-10">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-8">Trusted by Global Enterprises</p>
                <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-70 hover:opacity-100 transition-all duration-500">
                    {clients.map((client) => (
                        <div key={client} className="text-2xl font-bold text-muted-foreground/60 hover:text-foreground flex items-center gap-2 transition-colors cursor-default">
                            <div className="h-8 w-8 bg-secondary rounded-md" />
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
