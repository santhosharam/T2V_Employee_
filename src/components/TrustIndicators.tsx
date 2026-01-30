
const stats = [
    { value: "500+", label: "Enterprise Customers" },
    { value: "2M+", label: "Employees Managed" },
    { value: "99.9%", label: "Uptime SLA" },
];

export function TrustIndicators() {
    return (
        <section className="py-12 relative z-20 -mt-8">
            <div className="container mx-auto px-4">
                {/* Stats Bar - Floating Card Effect */}
                <div className="max-w-5xl mx-auto rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-10 animate-fade-up">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100 items-center">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center px-4 pt-4 md:pt-0 group cursor-default">
                                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2 group-hover:scale-110 transition-transform duration-300 origin-bottom">{stat.value}</div>
                                <div className="text-sm md:text-base text-slate-500 font-medium uppercase tracking-wide group-hover:text-blue-600 transition-colors">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
