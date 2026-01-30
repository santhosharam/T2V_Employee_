import { type LucideIcon, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CapabilityCardProps {
    title: string
    desc: string
    icon: LucideIcon
    variant?: "default" | "compact" | "wide" | "stacked"
    className?: string
}

export function CapabilityCard({ title, desc, icon: Icon, variant = "default", className }: CapabilityCardProps) {

    // Variant: Compact (List style with icon)
    if (variant === "compact") {
        return (
            <div className={cn("flex gap-4 items-start group p-4 rounded-xl hover:bg-white/80 transition-colors", className)}>
                <div className="mt-1 p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">{title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
            </div>
        )
    }

    // Variant: Wide (Horizontal Strip)
    if (variant === "wide") {
        return (
            <div className={cn("flex items-center gap-6 p-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all group", className)}>
                <div className="p-3 bg-blue-50/50 rounded-full text-blue-600 border border-blue-100 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1 md:flex md:items-center md:justify-between">
                    <h4 className="text-lg font-bold text-slate-900 mr-4 group-hover:text-blue-700 transition-colors">{title}</h4>
                    <p className="text-sm text-slate-600">{desc}</p>
                </div>
                <div className="hidden md:block">
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </div>
            </div>
        )
    }

    // Variant: Stacked (Compact Grid)
    if (variant === "stacked") {
        return (
            <div className={cn("p-6 rounded-xl glass-card hover:bg-white transition-all group", className)}>
                <Icon className="w-8 h-8 text-slate-600 mb-4 group-hover:text-blue-600 transition-colors" />
                <h4 className="text-base font-bold text-slate-900 mb-2">{title}</h4>
                <p className="text-xs text-slate-500 group-hover:text-slate-700 transition-colors">{desc}</p>
            </div>
        )
    }

    // Default (Standard Card)
    return (
        <div className={cn("p-8 rounded-2xl glass-card hover:-translate-y-1 transition-all duration-300 group", className)}>
            <div className="h-12 w-12 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Icon className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                {title}
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-900">
                {desc}
            </p>
        </div>
    )
}
