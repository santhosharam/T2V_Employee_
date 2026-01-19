"use client"

import {
    Users,
    Rocket,
    Award,
    Zap,
    ShieldCheck,
    DollarSign
} from "lucide-react"

export function ImpactCards() {
    const metrics = [
        {
            value: "40–50%",
            label: "Productivity Gain",
            icon: Zap,
            iconColor: "text-amber-500",
            iconBg: "bg-amber-50"
        },
        {
            value: "30–60%",
            label: "Ops Cost Reduction",
            icon: DollarSign,
            iconColor: "text-emerald-500",
            iconBg: "bg-emerald-50"
        },
        {
            value: "50–65%",
            label: "Faster Time-to-Hire",
            icon: Rocket,
            iconColor: "text-blue-500",
            iconBg: "bg-blue-50"
        },
        {
            value: "85–92%",
            label: "Compliance Safety",
            icon: ShieldCheck,
            iconColor: "text-red-500",
            iconBg: "bg-red-50"
        },
        {
            value: "6–12 Mo",
            label: "ROI Achievement",
            icon: Award,
            iconColor: "text-purple-500",
            iconBg: "bg-purple-50"
        },
        {
            value: "85–90%",
            label: "User Adoption",
            icon: Users,
            iconColor: "text-cyan-500",
            iconBg: "bg-cyan-50"
        }
    ]

    return (
        <div className="w-full bg-white py-16 border-b border-slate-100 relative z-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
                    {metrics.map((metric, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 group"
                            data-aos="zoom-in"
                            data-aos-delay={i * 100}
                        >
                            {/* Icon Area */}
                            <div className={`mb-4 p-3 rounded-full ${metric.iconBg} border border-slate-100 group-hover:scale-110 transition-transform duration-300`}>
                                <metric.icon className={`h-6 w-6 ${metric.iconColor}`} />
                            </div>

                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
                                {metric.value}
                            </h3>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
